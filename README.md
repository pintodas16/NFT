# eNFT - NFT Marketplace Template

> A modern, responsive, and production-ready HTML template for building NFT marketplaces.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue?style=for-the-badge)](https://nft-template-client.netlify.app/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-Responsive-orange?style=for-the-badge)](https://html.spec.whatwg.org/)

---

## 🌐 Live Demo

Experience the template in action: **[https://nft-template-client.netlify.app/](https://nft-template-client.netlify.app/)**

---

## 📋 Project Overview

eNFT is a comprehensive HTML template designed for building feature-rich NFT marketplaces. It provides multiple responsive home page variations, complete UI components, and a professional design system perfect for launching your NFT platform. The template is fully customizable and ready for production deployment.

---

## ✨ Features

- **Multiple Home Page Variations** - Four distinct homepage designs to choose from
- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI Components** - Pre-built components for common NFT marketplace features
- **Interactive Elements** - Smooth animations and hover effects
- **Range Slider Integration** - For price filtering and bidding ranges
- **Image Gallery** - Professional carousel and lightbox galleries with Magnific Popup
- **Countdown Timers** - Built-in countdown functionality for auctions
- **Mobile-Optimized Menu** - Responsive navigation with mobile menu support
- **Pre-styled Forms** - Sign up, login, and registration pages included
- **Clean, Semantic HTML** - Well-structured and easy to customize
- **Cross-browser Compatible** - Works across all modern browsers

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling and responsive design |
| **Bootstrap 4** | Responsive grid and components |
| **jQuery** | DOM manipulation and interactions |
| **JavaScript (ES5)** | Interactive functionality |
| **Owl Carousel** | Image carousel functionality |
| **Swiper** | Touch-friendly sliders |
| **Magnific Popup** | Image lightbox and galleries |
| **Nice Select** | Custom dropdown styling |
| **Ion Range Slider** | Range input filtering |
| **Remix Icon** | Icon library |

---

## 📁 Project Structure

```
nft/
├── index.html                 # Home Page - Variation 1
├── index-2.html              # Home Page - Variation 2
├── index-3.html              # Home Page - Variation 3
├── index-4.html              # Home Page - Variation 4
├── README.md                 # This file
└── assets/
    ├── css/                  # Stylesheets
    │   ├── bootstrap.min.css
    │   ├── style.css
    │   ├── responsive.css
    │   ├── owl.carousel.min.css
    │   ├── swiper-bundle.min.css
    │   ├── magnific-popup.css
    │   ├── ion.rangeSlider.min.css
    │   ├── nice-select.css
    │   ├── meanmenu.css
    │   ├── remixicon.css
    │   └── jqueyui.css
    ├── js/                   # JavaScript files
    │   ├── bootstrap.min.js
    │   ├── jquery-3.5.0.min.js
    │   ├── owl.carousel.min.js
    │   ├── swiper-bundle.min.js
    │   ├── magnific-popup.min.js
    │   ├── jquery.nice-select.js
    │   ├── jquery.meanmenu.js
    │   ├── jquery.countdown.min.js
    │   ├── ion.rangeSlider.min.js
    │   ├── jquery.magnific-popup.min.js
    │   ├── main.js           # Custom scripts
    │   └── ... (other dependencies)
    ├── images/               # Image assets
    │   ├── logo.png
    │   ├── favicon.png
    │   ├── banner/           # Banner images
    │   ├── author/           # Author/creator images
    │   ├── bidding/          # Auction/bidding images
    │   ├── cat/              # Category images
    │   ├── collection/       # NFT collection images
    │   └── shape/            # Decorative shapes
    └── fonts/                # Custom fonts
        └── remixicon.*       # Icon font files
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd nft
   ```

2. **No build process required** - This is a static template
   - Simply open any `.html` file in your browser
   - Or use a local server for better results

3. **Using a local server (recommended)**
   
   **With Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **With Node.js (using http-server):**
   ```bash
   npm install -g http-server
   http-server
   ```
   
   **With Live Server (VS Code Extension):**
   - Install the "Live Server" extension
   - Right-click any HTML file and select "Open with Live Server"

4. **Access the application**
   - Navigate to `http://localhost:8000` (or your configured port)
   - Explore the different homepage variations: `index.html`, `index-2.html`, `index-3.html`, `index-4.html`

---

## 💡 Usage

### Homepage Variations

The template includes four distinct homepage designs:

- **index.html** - Modern design with feature highlights
- **index-2.html** - Alternative layout with different color scheme
- **index-3.html** - Minimalist approach to NFT showcase
- **index-4.html** - Professional marketplace layout

### Customization

#### Modify the Logo
```html
<img src="assets/images/logo.png" alt="logo" />
```
Replace the `logo.png` with your own logo file.

#### Update Navigation Menu
Edit the navigation sections in the HTML file:
```html
<ul class="navbar-nav m-auto">
  <li class="nav-item">
    <a href="#" class="nav-link">Your Link</a>
  </li>
</ul>
```

#### Change Colors and Styling
Edit `assets/css/style.css` and `assets/css/responsive.css` for custom styling.

#### Add Custom JavaScript
Place your custom code in `assets/js/main.js` or create a new file and link it in the HTML `<head>`.

#### Update Images
Replace images in the `assets/images/` directory while maintaining the same filename structure.

---

## 📦 Dependencies

All dependencies are included in the project:

- **Bootstrap 4.5.2** - CSS framework
- **jQuery 3.5.0** - JavaScript library
- **Owl Carousel 2** - Image carousel plugin
- **Swiper Bundle** - Touch slider plugin
- **Magnific Popup** - Lightbox plugin
- **Nice Select** - Custom select dropdown
- **Ion Range Slider** - Range input slider
- **Countdown Timer** - Auction countdown functionality
- **Remix Icon** - Icon library

No npm or package manager installation required.

---

## 🎨 Features Breakdown

### 1. **Responsive Navigation**
- Mobile-optimized menu with hamburger icon
- Desktop and tablet views with dropdown menus
- Sticky navigation support

### 2. **Hero Section**
- Eye-catching banner with call-to-action buttons
- Background image support
- Mobile-responsive text sizing

### 3. **NFT Showcase**
- Grid layout for displaying NFTs
- Image galleries with Magnific Popup
- Author/Creator information cards

### 4. **Auction/Bidding Section**
- Countdown timers for active auctions
- Current bid display
- User avatars and bids history

### 5. **Category Filtering**
- Nice Select dropdown for category selection
- Range slider for price filtering

### 6. **Collections**
- Featured collections showcase
- Carousel display with Owl Carousel
- Collection metadata display

### 7. **User Authentication Pages**
- Sign-up page layout
- Login page layout
- Register page layout

### 8. **Footer**
- Multi-column footer layout
- Links and contact information
- Social media integration

---

## 🔧 Deployment

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: (Leave empty for static site)
3. Set publish directory: `/` (root)
4. Deploy!

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Choose the repository and branch
3. Click Deploy

### Deploy to GitHub Pages

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://username.github.io/repository-name`

---

## 🌟 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Internet Explorer | 11 | ⚠️ Limited Support |

---

## 📝 Customization Guide

### Adding New Pages

1. Create a new HTML file (e.g., `marketplace.html`)
2. Copy the navbar and footer from an existing page
3. Add your custom content in the middle
4. Link the new page in the navigation menu

### Modifying Colors

The main color scheme can be modified in:
- `assets/css/style.css` - Look for CSS variables or color definitions
- `assets/css/responsive.scss` - SCSS source file for compilation

### Adding Fonts

Add custom fonts in the `<head>` section of your HTML:
```html
<link href="https://fonts.googleapis.com/css?family=YourFont" rel="stylesheet">
```

Then use in CSS:
```css
body {
  font-family: 'YourFont', sans-serif;
}
```

---

## 📱 Performance Tips

- Optimize images using tools like TinyPNG or ImageOptim
- Minify CSS and JavaScript for production
- Use a CDN for faster asset delivery
- Enable gzip compression on your server
- Lazy load images for better performance
- Consider caching strategies for improved load times

---

## 📄 File Naming Convention

- HTML files: `lowercase-with-hyphens.html`
- CSS files: `lowercase-with-hyphens.css`
- JavaScript files: `lowercase-with-hyphens.js`
- Image files: Use descriptive lowercase names

---

## 🤝 Contributing

To contribute improvements to this template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your work (`git commit -am 'Add improvement'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

---

## 📞 Support

For issues, questions, or suggestions:
- Check the project documentation
- Review the code comments
- Consult the browser console for errors
- Test in different browsers for compatibility issues

---



## 🙏 Acknowledgments

- Bootstrap for the responsive grid framework
- jQuery for DOM manipulation utilities
- All third-party library developers whose tools power this template
- The open-source community for inspiration



## 📊 Statistics

- **Total Pages:** 4+ variations
- **Fully Responsive:** ✅ Yes
- **Component Count:** 20+
- **Lines of Code:** 10,000+
- **CSS Classes:** 500+

---

## 🔗 Quick Links

- [Live Demo](https://nft-template-client.netlify.app/)
- [Report Bug](#support)
- [Request Feature](#contributing)
- [View Documentation](README.md)

---


