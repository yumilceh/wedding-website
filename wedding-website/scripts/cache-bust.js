const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DIST_DIR = path.join(__dirname, '../dist');

/**
 * Generate a hash for a file to use as a cache buster
 */
function getFileHash(filePath) {
  try {
    const content = fs.readFileSync(filePath);
    return crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
  } catch (err) {
    console.warn(`Could not hash file ${filePath}, using timestamp`);
    return Date.now().toString();
  }
}

/**
 * Add version query parameter to asset URLs in HTML files
 */
function bustCacheInHtmlFile(htmlFilePath) {
  let content = fs.readFileSync(htmlFilePath, 'utf8');
  const dir = path.dirname(htmlFilePath);
  
  // Pattern to match src, href, and srcset attributes
  // Matches: href="file.css", src="file.js", srcset="image.jpg", etc.
  const patterns = [
    { regex: /(href|src)=["']([^"']+\.(?:css|js|jpg|jpeg|png|gif|webp|woff|woff2|ttf|eot|svg|ico))["']/g, type: 'single' },
    { regex: /srcset=["']([^"']+)["']/g, type: 'srcset' }
  ];
  
  patterns.forEach(({ regex, type }) => {
    content = content.replace(regex, (match, ...args) => {
      if (type === 'srcset') {
        // Handle srcset (comma-separated URLs)
        const srcset = args[0];
        return `srcset="${srcset.split(',').map(src => {
          const trimmed = src.trim();
          const urlMatch = trimmed.match(/^([^\s]+)/);
          if (!urlMatch) return src;
          
          const url = urlMatch[1];
          // Skip external URLs
          if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
            return src;
          }
          
          const filePath = path.resolve(dir, url);
          if (fs.existsSync(filePath)) {
            const hash = getFileHash(filePath);
            const versionedUrl = url.includes('?') ? 
              `${url}&v=${hash}` : 
              `${url}?v=${hash}`;
            return src.replace(url, versionedUrl);
          }
          return src;
        }).join(', ')}"`;
      } else {
        // Handle single attribute (href/src)
        const attrName = args[0];
        const url = args[1];
        
        // Skip external URLs (CDN, external fonts, etc.)
        if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
          return match;
        }
        
        const filePath = path.resolve(dir, url);
        if (fs.existsSync(filePath)) {
          const hash = getFileHash(filePath);
          const versionedUrl = url.includes('?') ? 
            `${url}&v=${hash}` : 
            `${url}?v=${hash}`;
          return `${attrName}="${versionedUrl}"`;
        }
        return match;
      }
    });
  });
  
  fs.writeFileSync(htmlFilePath, content, 'utf8');
}

/**
 * Recursively find and process all HTML files
 */
function processDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  files.forEach(file => {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.name.endsWith('.html')) {
      console.log(`Busting cache in ${fullPath.replace(DIST_DIR, '')}`);
      bustCacheInHtmlFile(fullPath);
    }
  });
}

// Main execution
try {
  if (fs.existsSync(DIST_DIR)) {
    console.log('🔄 Adding cache-busting version hashes to assets...');
    processDirectory(DIST_DIR);
    console.log('✅ Cache busting complete!');
  } else {
    console.warn('⚠️  dist directory not found, skipping cache busting');
  }
} catch (err) {
  console.error('❌ Cache busting failed:', err.message);
  process.exit(1);
}
