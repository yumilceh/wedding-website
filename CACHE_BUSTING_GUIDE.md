# Cache & Caching Fix Guide

## Changes Made to Fix Slow Deployment Updates

### 1. **Updated `.htaccess` File**
   - **HTML files**: Cache for 1 hour (`max-age=3600`) - short cache ensures users see updates quickly
   - **Static assets** (CSS, JS, images, fonts): Cache for 30 days (`max-age=2592000`) - long cache reduces server load
   - **Added Gzip compression**: Reduces file sizes by 60-70% for faster downloads
   - **Added `must-revalidate` header**: Validates cached content with server before serving stale versions

### 2. **Implemented Cache Busting**
   - Updated build script to automatically add version hashes to all asset URLs
   - Example: `styles.css?v=a1b2c3d4` instead of just `styles.css`
   - When you deploy changes, the hash changes, forcing browsers to download the new version
   - Works with: `.css`, `.js`, `.jpg`, `.png`, `.webp`, `.woff2`, `.svg`, and more

### 3. **Build Pipeline Changes**
   - Modified `package.json` build script to run cache-bust.js after copying files
   - Created `scripts/cache-bust.js` that:
     - Calculates MD5 hash for each asset file
     - Injects version hash into all HTML file URLs
     - Runs automatically during `npm run build`

## How It Works

### Before (Old Behavior)
```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```
- User's device caches `styles.css` indefinitely
- Even after deployment with new styles, browser uses cached old version
- User sees outdated page until cache expires (could be days/weeks)

### After (New Behavior)
```html
<link rel="stylesheet" href="styles.css?v=3f8a2b1d">
<script src="script.js?v=7c9e4f2a"></script>
```
- Hash changes when file content changes
- Browser treats versioned URL as new resource
- User immediately gets latest version after deployment
- Old versions still cached separately, no waste

## Testing the Changes

### Test 1: Verify Cache Headers
```bash
# Check HTML cache headers
curl -I https://your-wedding-site.com/index.html

# Look for: Cache-Control: max-age=3600, must-revalidate

# Check CSS/JS cache headers
curl -I https://your-wedding-site.com/styles.css

# Look for: Cache-Control: max-age=2592000, public, immutable
```

### Test 2: Verify Cache Busting
```bash
# Build the site
cd wedding-website
npm run build

# Check if dist/index.html has versioned URLs
grep -o 'src="[^"]*"' dist/index.html | head -5
# Should see: src="script.js?v=abc123de"
```

### Test 3: Real-World Test
1. Deploy your site
2. Make a small CSS change (e.g., change a color)
3. Rebuild and deploy
4. Visit site in browser and hard-refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. Verify new style appears immediately (not after minutes/hours)

## Configuration Needed on Hosting Platform

### If Using AWS (CodeBuild/CloudFront)
Add to `buildspec.yaml` to set CloudFront cache headers:
```yaml
# After build phase, invalidate CloudFront cache
post_build:
  commands:
    - echo "Invalidating CloudFront cache..."
    - aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*" --region us-east-1
```

### If Using Apache/Shared Hosting
- `.htaccess` file is already configured ✅
- Ensure `mod_expires` and `mod_deflate` are enabled
- Ask hosting provider if needed

### If Using Netlify
- Caching rules automatically applied ✅
- Just push to main branch, no extra config needed

### If Using Vercel
- Caching rules automatically applied ✅
- CDN invalidation happens automatically on deploy

### If Using GitHub Pages
- May need to add headers in a `_headers` file or use Netlify/Vercel instead
- Alternative: Use GitHub Pages with Cloudflare for better caching control

## Verification Checklist

- [ ] Updated `.htaccess` file deployed
- [ ] `scripts/cache-bust.js` exists in your repo
- [ ] `package.json` build script includes cache busting
- [ ] Built site in `dist/` has versioned URLs (`file.css?v=hash`)
- [ ] HTML files have short cache headers (1 hour)
- [ ] CSS/JS files have long cache headers (30 days)
- [ ] Tested with browser dev tools Network tab
- [ ] Hard-refreshed page shows updated content immediately
- [ ] Gzip compression enabled on server

## Additional Performance Tips

1. **Enable BROTLI compression** on your hosting (better than Gzip):
   ```apache
   # Add to .htaccess if supported
   <IfModule mod_brotli.c>
     AddOutputFilterByType BROTLI text/html text/plain text/xml text/css text/javascript
   </IfModule>
   ```

2. **Use a CDN** if not already (Cloudflare Free Tier is great):
   - Serves content from servers near users
   - Automatically handles cache invalidation
   - Provides DDoS protection

3. **Monitor with PageSpeed Insights**:
   - https://pagespeed.web.dev/
   - Run after deploy to verify improvements

## Troubleshooting

### Changes still not appearing after deploy
- [ ] Hard refresh browser (Ctrl+Shift+R)
- [ ] Clear browser cache (Dev Tools > Application > Clear Storage)
- [ ] Check if build script ran (look for cache busting in build output)
- [ ] Verify `.htaccess` was deployed correctly

### Service worker causing cached pages
- [ ] Search for `service.worker` references in code
- [ ] If found, clear service worker in browser (Dev Tools > Application > Clear Storage)
- [ ] Future deploys will use cache busting to avoid this issue

### CSS/JS files not loading after deploy
- [ ] Check browser console for 404 errors
- [ ] Verify file paths in versioned URLs are correct
- [ ] Ensure all files were copied to dist/ directory
