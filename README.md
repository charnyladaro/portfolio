# Charnyl Adaro - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience as a Digital Security Lead and Computer Engineer, featuring an integrated tutorials platform.

## 🌟 Features

- **Modern, Attractive Design** - Gradient effects, smooth animations, and contemporary UI
- **Responsive Design** - Fully responsive across all devices (desktop, tablet, mobile)
- **Smooth Animations** - Fade-in effects, hover animations, and smooth scrolling
- **Interactive Navigation** - Sticky navigation with active state indicators
- **Tutorial Platform** - Dedicated page for educational content with filtering
- **Professional Sections**:
  - Hero section with animated profile
  - About Me with statistics
  - Professional Experience Timeline
  - Technical Skills showcase
  - Certificates & Badges gallery
  - Recent Projects portfolio
  - Tutorials Platform (NEW!)
  - Contact Information
  - Newsletter subscription

## 🎓 Tutorials Platform Features

- **Video Tutorial Gallery** - Organized collection of security tutorials
- **Category Filtering** - Filter by Penetration Testing, Web Security, Tools, Programming
- **Tutorial Upload System** - Admin panel for uploading new tutorials (Ctrl+Shift+A to access)
- **Responsive Grid Layout** - Beautiful card-based design
- **Video Duration Display** - Shows length of each tutorial
- **View Count Tracking** - Displays popularity of tutorials
- **Newsletter Integration** - Subscribe for new tutorial notifications

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main portfolio page
├── tutorials.html          # Tutorials platform page (NEW!)
├── style.css              # Main stylesheet with modern design
├── mediaqueries.css       # Responsive design styles
├── script.js              # Main JavaScript functionality
├── tutorials.js           # Tutorials page functionality (NEW!)
├── README.md              # Project documentation
├── DEPLOYMENT.md          # Deployment guide
├── .gitignore            # Git ignore file
│
└── assets/                # Images and resources
    ├── cha-logo.png
    ├── profile-pic.png
    ├── experience.png
    ├── education.png
    ├── email.png
    ├── linkedin.png
    ├── github.png
    ├── Charnyl Adaro.pdf  # CV file
    │
    ├── certificates/      # Certificate images
    │   ├── web-development-fundamentals.png
    │   ├── ethical-hacker.png
    │   ├── isc2-candidate.png
    │   └── Testdome.png
    │
    └── tutorials/         # Tutorial assets (NEW!)
        ├── videos/        # Tutorial video files
        └── thumbnails/    # Video thumbnail images
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.) for modifications
- (Optional) A local server for testing

### Installation

1. **Clone or download** this repository to your local machine

2. **Ensure folder structure** matches the structure above

3. **Add your assets**:

   - Place all images in the `assets/` folder
   - Place certificate images in `assets/certificates/`
   - Place tutorial videos in `assets/tutorials/videos/`
   - Place tutorial thumbnails in `assets/tutorials/thumbnails/`
   - Place your CV PDF in the `assets/` folder

4. **Open the website**:
   - Simply open `index.html` in your web browser
   - Navigate to tutorials page via the navigation menu

### Using a Local Server (Recommended)

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

**Using VS Code:**

- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

## 🎨 Customization

### Updating Content

**Personal Information:**

- Edit text in `index.html` and `tutorials.html` sections
- Update links in the navigation and contact sections

**Colors:**

- Primary color: `#6366f1` (indigo)
- Secondary color: `#8b5cf6` (purple)
- Accent color: `#ec4899` (pink)
- Change in `style.css` `:root` variables to customize theme

**Adding New Tutorials:**

- Press `Ctrl+Shift+A` on tutorials page to access upload form
- Fill in tutorial details, upload video and thumbnail
- Or manually add tutorial cards in `tutorials.html`

### Design Elements

**Gradients:**

```css
--gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

**Shadows:**

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
```

## 📱 Responsive Breakpoints

- **Large Desktop**: 1400px and above
- **Desktop**: 1200px - 1399px
- **Small Laptop/Tablet**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile Landscape**: 576px - 767px
- **Mobile Portrait**: up to 575px
- **Extra Small**: up to 400px

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Modern styling with gradients, animations, and transitions
- **Vanilla JavaScript** - Interactivity and functionality
- **Font Awesome 6** - Icons library
- **Google Fonts** - Poppins font family

## ✨ Modern Design Features

### Visual Effects

- Animated background with floating cubes
- Gradient text effects
- Smooth hover animations
- Card elevation on hover
- Rotating profile rings
- Scroll indicators

### Interactive Elements

- Sticky navigation with blur effect
- Category filtering with smooth transitions
- File upload with drag-and-drop
- Newsletter subscription form
- Video play overlay on hover
- Animated view counters

### Performance

- Optimized animations using transform and opacity
- Intersection Observer for lazy animations
- CSS transitions for smooth interactions
- Minimal JavaScript for better performance

## 🎥 Tutorial Platform Guide

### For Visitors

1. Navigate to "Tutorials" in the main menu
2. Browse tutorials by category or view all
3. Click on any tutorial card to watch (opens video player)
4. Subscribe to newsletter for updates

### For Admins (Tutorial Upload)

1. Press `Ctrl+Shift+A` on tutorials page
2. Fill in the upload form:
   - Title and description
   - Select category
   - Upload video file
   - Upload thumbnail image
   - Set duration
   - Add tags
3. Click "Upload Tutorial"
4. Tutorial will appear in the grid

### Integrating Video Hosting

The current setup uses placeholder functionality. To integrate real video hosting:

**YouTube Integration:**

```javascript
// Use YouTube iframe API
<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
```

**Vimeo Integration:**

```javascript
// Use Vimeo player API
<iframe src="https://player.vimeo.com/video/VIDEO_ID"></iframe>
```

**Self-Hosted Videos:**

```html
<video controls>
  <source src="./assets/tutorials/videos/tutorial.mp4" type="video/mp4" />
</video>
```

## 📧 Contact Information

- **Email**: charnyladaro@gmail.com
- **Phone**: +63 905 566 7864
- **LinkedIn**: [linkedin.com/in/charnyladaro](https://linkedin.com/in/charnyladaro)
- **GitHub**: [github.com/charnyladaro](https://github.com/charnyladaro)
- **Location**: Calamba Park Place, Calamba Laguna, Philippines

## 📝 License

Copyright © 2024 Charnyl Adaro. All Rights Reserved.

This portfolio is for personal use. Feel free to use it as inspiration for your own portfolio, but please don't copy it directly.

## 🐛 Known Issues

None currently. Please report any issues you find.

## 📈 Future Enhancements

- [x] Modern attractive design with gradients
- [x] Tutorials platform with video upload
- [ ] Dark mode toggle
- [ ] Video player modal integration
- [ ] Backend for tutorial management
- [ ] User comments on tutorials
- [ ] Tutorial playlists/series
- [ ] Progress tracking for users
- [ ] Quiz/assessment feature
- [ ] Certificate generation for completed tutorials
- [ ] Multi-language support (English/Japanese)

## 💡 Tips for Deployment

### Deploying with Tutorials

When deploying, ensure:

1. Video files are optimized (compressed)
2. Use CDN for large video files
3. Consider using YouTube or Vimeo for hosting
4. Upload thumbnails are compressed
5. Test upload form in production environment

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## 🙏 Acknowledgments

- Modern design inspired by contemporary portfolio trends
- Icons from Font Awesome
- Fonts from Google Fonts
- Gradient inspiration from UI Gradients
- Certificates from Cisco, ISC2, TestDome, and Credly

---

**Built with 💙 by Charnyl Adaro**

Last Updated: December 2024
