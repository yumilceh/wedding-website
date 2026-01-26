# Alejandra & Juan's Wedding Website

A beautiful, responsive wedding website built with HTML, CSS, and JavaScript.

## Features

✨ **Comprehensive Information**
- Home page with countdown timer
- Couple's story section
- Event details (ceremony, reception, welcome dinner, etc.)
- Timeline of the wedding day
- Travel and accommodation information
- FAQ section
- Guest contact information

👥 **Guest Features**
- RSVP form with dietary restrictions and song requests
- Mobile-responsive design
- Social media links
- Email contact

🎨 **Design**
- Elegant color scheme (gold, brown, cream)
- Professional typography
- Smooth animations and transitions
- Fully responsive for all devices
- Modern UI/UX

💾 **Functionality**
- Working countdown timer to wedding day
- Form submission with local storage
- Smooth navigation
- Scroll animations
- Mobile menu hamburger

## File Structure

```
wedding-website/
├── index.html          # Main website file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in a web browser
2. **Customize content**: Edit the placeholders in `index.html` with your actual information:
   - Couple names
   - Wedding date and locations
   - Event details and times
   - Accommodation information
   - Contact information
   - Personal stories and photos

3. **Add photos**: Replace placeholder image sections with actual photos by:
   - Updating the `.placeholder-img` divs with actual `<img>` tags
   - Example:
     ```html
     <div class="photo-frame">
         <img src="path/to/your/photo.jpg" alt="Photo description">
     </div>
     ```

4. **Customize styling**: Modify colors in `styles.css`:
   - Update the `:root` CSS variables for colors
   - Adjust spacing, fonts, and layouts as needed

5. **Setup RSVP**: Currently, RSVP data is stored in browser's localStorage. To receive actual emails:
   - Consider using a backend service (Firebase, Netlify Forms, etc.)
   - Or integrate with email service (Formspree, EmailJS, etc.)

## Customization Guide

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B4513;      /* Main brown */
    --secondary-color: #D4AF37;    /* Gold accents */
    --accent-color: #F4E4C1;       /* Cream */
    --dark-color: #3D2817;         /* Dark brown */
    --light-color: #F9F7F4;        /* Light cream */
}
```

### Content Sections to Update
1. **Hero Section** - Wedding date and main title
2. **About Us** - Your love story
3. **Events** - All ceremony and reception details
4. **Timeline** - Day-of schedule
5. **Accommodations** - Hotel and travel information
6. **RSVP** - Deadline and contact info
7. **FAQ** - Common guest questions
8. **Footer** - Contact information and social media links

### Adding Photos
Replace all `.placeholder-img` divs with actual images:
```html
<!-- Before -->
<div class="photo-frame">
    <div class="placeholder-img">Photo</div>
</div>

<!-- After -->
<div class="photo-frame">
    <img src="image.jpg" alt="Description">
</div>
```

## Features Breakdown

### Countdown Timer
Automatically counts down to June 15, 2026. Edit the date in `script.js`:
```javascript
const weddingDate = new Date('June 15, 2026').getTime();
```

### RSVP Form
- Stores responses in browser localStorage
- For email functionality, integrate with a backend service
- Validates email format
- Collects dietary restrictions and song requests

### Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Adjusts layouts for tablets and phones
- All elements properly scale

### Navigation
- Sticky header
- Smooth scrolling
- Active section highlighting
- Mobile hamburger menu

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment Options

1. **GitHub Pages** - Free hosting
2. **Netlify** - Drag and drop deployment
3. **Vercel** - Easy deployment
4. **Traditional Web Hosting** - Upload files via FTP

## Tips

- Keep the website updated with final details
- Test on mobile devices before sharing
- Share the link with guests via email or social media
- Consider adding a photo gallery after the wedding
- Create a gift registry with links to your store accounts

## Contact Information to Add

Make sure to update these sections with your actual information:
- Email address
- Phone number
- Wedding location and venue addresses
- Hotel recommendations and addresses
- Social media handles
- Wedding registry links

## Need Help?

To customize your wedding website:
1. Open `index.html` in a text editor
2. Find the section you want to edit
3. Replace placeholder text with your information
4. Save the file
5. Refresh your browser to see changes

Enjoy your wedding website! 💕
