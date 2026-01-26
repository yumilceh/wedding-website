# Wedding Website Performance Optimization Guide

## Current Status
Your wedding website is built with pure HTML, CSS, and JavaScript - this is excellent for performance!

## Optimization Strategies for Mobile

### 1. **Image Optimization (Highest Impact)**
Since you have placeholder images for the "Why Tepoztlan" gallery:
- Replace placeholders with actual photos
- Use WebP format with JPEG fallback (40-50% smaller files)
- Serve responsive images using `<picture>` tag or srcset
- Implement lazy loading for gallery images

Example structure:
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Tepozteco Pyramid" loading="lazy">
</picture>
```

### 2. **Server/Hosting Recommendations**
- **Use a CDN** (Content Delivery Network) for global distribution
- **Enable Gzip compression** - reduces CSS/JS by 60-70%
- **Set up browser caching** - cache static assets for 1 month
- **Enable HTTPS** - required for better mobile performance
- **Recommended hosts**: Netlify, Vercel, GitHub Pages (all free!)

Example `.htaccess` for Apache servers:
```apache
# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Set cache headers
<FilesMatch "\.(jpg|jpeg|png|gif|css|js|ico)$">
  Header set Cache-Control "max-age=2592000, public"
</FilesMatch>
```

### 3. **Current CSS Optimization**
Your stylesheet is already efficient:
- Minimal CSS (no frameworks like Bootstrap)
- No unnecessary animations
- Good use of CSS variables
- Responsive design without bloat

To further optimize:
```bash
# Minify CSS (remove whitespace/comments)
# Reduces file from ~50KB to ~30KB
```

### 4. **JavaScript Optimization**
Your script.js is minimal - good!
Optimization options:
- Minify JavaScript (10-15% reduction)
- Defer non-critical scripts
- Remove unused Font Awesome icons

### 5. **Font Optimization**
You use Google Fonts (Playfair Display, Montserrat, Lora, etc.)
Recommendations:
- Use `font-display: swap` for faster text rendering
- Load only needed font weights (not all variants)
- Consider system fonts for body text as fallback

### 6. **Mobile-Specific Optimizations**
Already implemented:
✅ Responsive design with media queries
✅ Mobile hamburger menu
✅ Touch-friendly button sizes
✅ Full-width content on mobile

### 7. **Performance Metrics to Monitor**
When deployed, check these using:
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
- **GTmetrix**: https://gtmetrix.com/

Target metrics for mobile:
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

### 8. **Deployment Recommendations**

**Option 1: Netlify (Recommended)**
```bash
# Free tier with:
# - Automatic minification
# - Global CDN
# - Gzip compression
# - HTTP/2
# Just drag & drop your folder
```

**Option 2: Vercel**
```bash
# Similar to Netlify
# Excellent mobile performance
# Zero configuration needed
```

**Option 3: GitHub Pages**
```bash
# Free hosting with custom domain
# Good for static sites
# Enable HTTPS automatically
```

### 9. **Quick Wins for Immediate Impact**

1. **Replace placeholder images** with real photos
2. **Optimize image sizes**:
   - Gallery images: 800x600px max
   - Use 2x resolution for retina displays (1600x1200)
3. **Add this to your HTML head**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
<link rel="preload" href="styles.css" as="style">
```

4. **Consider removing Font Awesome** if not using many icons:
   - Replace with inline SVGs (smaller)
   - Current 50KB library, only using a few icons

### 10. **Current Performance Baseline**
Your site loads very fast locally because:
- Minimal CSS (~40KB)
- Minimal JavaScript (~10KB)
- No heavy frameworks
- Simple HTML structure
- Pure responsive design

## Expected Mobile Load Times

**Without optimization**: 2-3 seconds (good)
**With all optimizations**: < 1 second (excellent)

## Action Plan

1. **Phase 1 (Immediate)**
   - Replace placeholder images with real photos
   - Deploy to Netlify or Vercel
   
2. **Phase 2 (Enhancement)**
   - Optimize images (WebP format)
   - Add performance monitoring
   
3. **Phase 3 (Advanced)**
   - Implement lazy loading
   - Set up CDN caching
   - Monitor with Google Analytics

## Recommended Deployment Step-by-Step

1. Create account at https://netlify.com or https://vercel.com
2. Connect your GitHub repository (or drag & drop folder)
3. Deploy - done! Automatic HTTPS, CDN, and minification
4. Custom domain setup (optional, ~$15/year)

Your site will immediately get:
- 99.99% uptime
- Global CDN (fast worldwide)
- Automatic backups
- Free SSL certificate
- Professional hosting

## Questions?
For any optimization questions, check your browser's DevTools (F12):
- Network tab: see file sizes and load times
- Performance tab: see rendering metrics
- Lighthouse: built-in audit tool (Google recommendation)
