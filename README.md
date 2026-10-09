# Charnyl Adaro — Portfolio

Personal portfolio of **Charnyl Adaro**, Digital Security Lead and Computer Engineer.

**Live site:** https://charnyladaro.github.io/portfolio/

## About

Digital Security Lead with 4+ years of experience in web application, API, and server security assessments. I lead a team of security engineers delivering vulnerability assessments for Japanese clients, verifying automated findings (VEX) with manual testing in Burp Suite. Bilingual in English and Japanese (JLPT N3).

| | |
| --- | --- |
| **Focus** | Penetration testing, vulnerability assessment, security review |
| **Tools** | Burp Suite, VEX, OWASP ZAP, Nmap, Metasploit, Kali Linux |
| **Languages** | Python, JavaScript, PHP, SQL |
| **Certifications** | Cisco Ethical Hacker, ISC2 Candidate, Web Development Fundamentals, TestDome |
| **Education** | B.Sc. Computer Engineering |

## What's on the site

- **Experience** — career progression from Technical Support to Digital Security Lead
- **Skills** — security tools, programming languages, and operating systems
- **Certificates** — each badge links to its verifiable Credly or TestDome record
- **Projects** — selected work with links to source code
- **Contact** — email and LinkedIn, plus a downloadable CV

## Built with

- HTML5, CSS3, and vanilla JavaScript — no frameworks or build step
- [Font Awesome 6](https://fontawesome.com/) icons and the [Poppins](https://fonts.google.com/specimen/Poppins) font
- Responsive layout with breakpoints at 1024px, 768px, 480px, and 375px
- Accessibility: semantic markup, keyboard-operable mobile menu, labelled icon links
- Performance: WebP images, lazy loading, and animations driven by `IntersectionObserver`
- Deployed to GitHub Pages by a GitHub Actions workflow on every push to `main`

## Running locally

```bash
git clone https://github.com/charnyladaro/portfolio.git
cd portfolio
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Project structure

```
portfolio/
├── index.html                  # Main page
├── style.css                   # Styles, including responsive breakpoints
├── script.js                   # Navigation, scroll state, reveal animations
├── tutorials.html / .js        # Tutorials page (in progress, not linked yet)
├── .github/workflows/static.yml  # GitHub Pages deployment
└── assets/
    ├── Charnyl Adaro.pdf       # CV
    ├── profile-pic.webp        # Hero photo
    ├── profile-pic.png         # Social preview image (og:image)
    ├── cha-logo.png            # Logo and favicon
    ├── certificates/           # Certificate badges
    └── projects/               # Project screenshots
```

## Contact

- **Email:** charnyladaro@gmail.com
- **LinkedIn:** [linkedin.com/in/charnyladaro](https://linkedin.com/in/charnyladaro)
- **GitHub:** [github.com/charnyladaro](https://github.com/charnyladaro)
- **Location:** Calamba, Laguna, Philippines

## License

© 2026 Charnyl Adaro. All rights reserved. You're welcome to use this site as inspiration for your own portfolio, but please don't copy its content or design directly.
