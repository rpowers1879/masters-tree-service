# The Master's Tree Service LLC - Website

A professional, mobile-first website for The Master's Tree Service LLC. Built with vanilla HTML, CSS, and JavaScript for optimal performance.

## Quick Start

1. Open `index.html` in a browser to preview
2. Update placeholder content (see sections below)
3. Set up Formspree for the contact form
4. Deploy to Vercel

---

## Updating Content

### Business Information

Update the following placeholders throughout `index.html`:

| Placeholder | Location | What to Change |
|-------------|----------|----------------|
| `(555) 123-4567` | Multiple locations | Your actual phone number |
| `+15551234567` | `tel:` links | Your phone in E.164 format |
| `info@masterstreeservice.com` | Contact section, footer | Your email address |
| `masterstreeservice.com` | Meta tags, schema | Your actual domain |

**Search and replace these globally:**
- Phone: `(555) 123-4567` → Your number
- Tel link: `+15551234567` → Your number (no spaces/dashes)
- Email: `info@masterstreeservice.com` → Your email

### Hero Section (Lines ~95-130)

Update the headline, description, and taglines:

```html
<h1 class="hero-title">Georgia's Trusted<br>Tree Care Experts</h1>
<p class="hero-description">From routine trimming to emergency storm cleanup...</p>
```

### Services Section (Lines ~140-220)

Each service card follows this structure:

```html
<article class="service-card animate-fade-up">
    <div class="service-icon"><!-- SVG icon --></div>
    <h3 class="service-title">Service Name</h3>
    <p class="service-description">Description of the service...</p>
</article>
```

To add/remove services, copy or delete entire `<article class="service-card">` blocks.

### About Section (Lines ~225-280)

Update:
- Company story text
- Years of experience (`15+`)
- Number of trees serviced (`5,000+`)
- Any other stats

### Service Area (Lines ~380-440)

Update the cities and counties list:

```html
<div class="area-column">
    <h4>Metro Atlanta</h4>
    <ul>
        <li>Atlanta</li>
        <li>Marietta</li>
        <!-- Add your cities -->
    </ul>
</div>
```

### Testimonials (Lines ~450-530)

Each testimonial follows this structure:

```html
<article class="testimonial-card animate-fade-up">
    <div class="testimonial-stars"><!-- 5 star SVGs --></div>
    <blockquote class="testimonial-quote">
        "Customer review text here..."
    </blockquote>
    <div class="testimonial-author">
        <span class="author-name">— Name</span>
        <span class="author-location">City, GA</span>
    </div>
</article>
```

### Schema.org / SEO (Lines ~30-75)

Update the JSON-LD structured data with your actual business info:

```json
{
    "name": "The Master's Tree Service LLC",
    "telephone": "(555) 123-4567",
    "address": {
        "addressLocality": "Your City",
        "addressRegion": "GA"
    }
}
```

---

## Replacing Images

### Image Placeholders

The site uses placeholder `<div>` elements that should be replaced with actual images:

1. **Hero Background** - Add a background image to the hero section:

   In `css/styles.css`, update the `.hero-bg` rule:
   ```css
   .hero-bg {
       background: url('../images/hero-bg.jpg') center/cover no-repeat;
   }
   ```

2. **About Section Photo** - Replace the placeholder in `index.html`:
   ```html
   <!-- Replace this -->
   <div class="image-placeholder" data-placeholder="Team or equipment photo">
       <span>Team Photo</span>
   </div>

   <!-- With this -->
   <img src="images/team-photo.jpg" alt="The Master's Tree Service team" loading="lazy">
   ```

3. **Gallery Before/After Photos** - Replace each placeholder pair:
   ```html
   <!-- Replace placeholders with actual images -->
   <img src="images/gallery/job1-before.jpg" alt="Before tree removal" class="before-image">
   <img src="images/gallery/job1-after.jpg" alt="After tree removal" class="after-image">
   ```

### Image Optimization Tips

- Use WebP format for best compression (with JPG fallback)
- Resize images to max 1920px width
- Compress with tools like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- Keep hero image under 200KB, gallery images under 100KB each

### Recommended Image Sizes

| Image | Dimensions | Max File Size |
|-------|------------|---------------|
| Hero background | 1920x1080px | 200KB |
| About photo | 800x600px | 100KB |
| Gallery images | 800x600px | 80KB each |
| OG image | 1200x630px | 100KB |

---

## Setting Up Formspree

The contact form uses [Formspree](https://formspree.io/) for email submissions.

### Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form

### Step 2: Get Your Form Endpoint

After creating a form, you'll get an endpoint like:
```
https://formspree.io/f/xyzabcde
```

### Step 3: Update the Form Action

In `index.html`, find the contact form (around line 545):

```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### Step 4: Configure Formspree Settings

In your Formspree dashboard:
- Set the email address to receive submissions
- Enable reCAPTCHA if desired
- Set up a custom "thank you" redirect page (optional)

---

## Deploying to Vercel

### Option 1: Deploy via Git (Recommended)

1. **Initialize Git repository:**
   ```bash
   cd masters-tree-service
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push existing code

3. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd masters-tree-service
   vercel
   ```

3. Follow the prompts to complete deployment.

### Option 3: Drag & Drop

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the entire project folder onto the page
3. Vercel will automatically deploy

### Custom Domain

After deployment:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed

---

## File Structure

```
masters-tree-service/
├── index.html          # Main HTML file (all sections)
├── css/
│   └── styles.css      # All styles (mobile-first)
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Your images go here
│   ├── hero-bg.jpg
│   ├── team-photo.jpg
│   ├── og-image.jpg
│   └── gallery/
│       ├── job1-before.jpg
│       ├── job1-after.jpg
│       └── ...
└── README.md           # This file
```

---

## Features Included

- **Mobile-first responsive design** - Looks great on all devices
- **Click-to-call buttons** - Easy phone access on mobile
- **Smooth scroll navigation** - Professional user experience
- **Scroll animations** - Elements fade in as you scroll
- **Before/after image sliders** - Interactive gallery
- **SEO optimized** - Meta tags, Open Graph, Schema.org markup
- **Fast loading** - Minimal dependencies, optimized CSS
- **Accessible** - Proper ARIA labels, keyboard navigation

---

## Customization

### Colors

Edit CSS variables in `css/styles.css` (lines 10-20):

```css
:root {
    --color-primary: #1a4d2e;        /* Deep forest green */
    --color-accent: #d4a853;          /* Gold/amber CTA color */
    --color-text: #2c3e2d;            /* Dark charcoal text */
    --color-cream: #f9f7f3;           /* Background cream */
}
```

### Fonts

The site uses Google Fonts (Montserrat + Inter). To change fonts:

1. Update the Google Fonts link in `index.html` (around line 38)
2. Update the font variables in `css/styles.css` (lines 22-23)

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome for Android)

---

## Performance Tips

To achieve 90+ PageSpeed score:

1. **Optimize images** - Compress all images before uploading
2. **Use WebP** - Convert images to WebP format
3. **Enable caching** - Vercel handles this automatically
4. **Minimize changes** - Avoid adding heavy libraries

---

## Support

For website updates or questions, refer to this README or contact your web developer.

---

*Built with vanilla HTML, CSS, and JavaScript for maximum performance and simplicity.*
