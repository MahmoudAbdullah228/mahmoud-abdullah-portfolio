# Mahmoud Abdullah — Frontend Developer Portfolio

A personal portfolio website showcasing my skills, projects, learning journey, and community involvement as a Frontend Developer and CS student based in Egypt.

## Live Preview

[mahmoud-abdullah-portfolio.netlify.app](https://mahmoud-abdullah-portfolio.netlify.app/)

Or open `index.html` in any modern browser.

## Features

- **Custom cursor** with ring follower effect
- **Animated hero section** with fade-up entrance animations
- **Skills terminal UI** displaying tech stack in a styled terminal window
- **Projects gallery** with 4 real-world project showcases, each with a live demo link and GitHub link
- **Learning journey timeline** tracing the path from fundamentals to production-grade development
- **Community & mentorship section** highlighting GDG Obour involvement
- **Contact section** with direct email links and social links
- **Smooth scroll navigation** with anchor-linked nav bar
- **Fully responsive** layout with mobile-optimised buttons and touch targets (WCAG AA)

## Tech Stack

| Technology           | Usage                                       |
| -------------------- | ------------------------------------------- |
| HTML5                | Semantic structure, `<picture>` elements    |
| CSS3                 | Layout, animations, custom properties       |
| JavaScript (Vanilla) | Cursor effects, scroll-based fade-in        |
| Google Fonts         | Bebas Neue, Syne, DM Mono, Instrument Serif |
| WebP                 | Optimized image format with PNG/JPG fallback|
| Netlify              | Hosting, caching headers, deployment        |

## Project Structure

```
Portfolio/
├── index.html       # Main HTML file
├── style.css        # Source stylesheet (unminified, for editing)
├── style.min.css    # Minified CSS (loaded by index.html)
├── script.js        # Cursor tracking, mobile menu, scroll animations
├── sitemap.xml      # XML sitemap for SEO indexing
├── netlify.toml     # Netlify deploy & cache configuration
├── _headers         # Custom HTTP cache headers
└── images/          # Optimized WebP + original fallbacks
    ├── logo.webp / Logo.png
    ├── favicon.png
    ├── me.webp / ME.jpg
    ├── stack-overlord.webp / stack-overlord.png
    ├── fior.webp / Fior.png
    ├── leon.webp / Leon.png
    └── atmos-lens.webp / atmos-lens.png
```

## Sections

1. **Hero** — Introduction, CTA buttons, and profile photo
2. **Skills** — 6 skill cards in a terminal-themed window with stats row
3. **Projects** — 4 featured projects with descriptions, tags, live demo, and GitHub links
4. **Learning Journey** — 5-step timeline from CS foundations to current studies
5. **Community & Mentorship** — GDG Obour role and bio panel
6. **Contact** — Email CTA, social links, and footer

## Featured Projects

| Project          | Tech                        | Demo                                                      | GitHub                                                                    |
| ---------------- | --------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------- |
| Stack Overlord   | React, TypeScript, Tailwind | [Live Demo](https://stack-overlord-store.netlify.app/)    | [GitHub](https://github.com/MahmoudAbdullah228/StackOverLord_Store)       |
| Fior Flower Shop | HTML5, CSS3, Bootstrap      | [Live Demo](https://fior-flower.netlify.app/)             | [GitHub](https://github.com/MahmoudAbdullah228/Fior-Flower-Shop)          |
| Leon Agency      | HTML5, CSS3                 | [Live Demo](https://leon-agency-project.netlify.app/)     | [GitHub](https://github.com/MahmoudAbdullah228/HTML_And_CSS_Template_One) |
| Atmos Lens       | HTML, CSS, JS, REST API     | [Live Demo](https://atmos-lens.netlify.app/)              | [GitHub](https://github.com/MahmoudAbdullah228/Weather-App)               |

## Accessibility & Performance

**Accessibility (Lighthouse 100):**
- All interactive elements have descriptive `aria-label` attributes
- `aria-hidden="true"` on decorative SVGs and elements
- `:focus-visible` outlines on all buttons and links (keyboard navigation)
- Minimum 44×44px touch targets on mobile (WCAG 2.1 AA)
- `rel="noopener noreferrer"` on all external links (security)
- `<main>` landmark wrapping page content
- Mobile menu links use `tabindex="-1"` when hidden (no focus trap)
- WCAG AA color contrast on all text elements

**Performance optimizations:**
- All images served as WebP via `<picture>` with PNG/JPG fallback
- Images resized to 1× display dimensions (total ~67 KB WebP)
- CSS minified: `style.min.css` (27 KB → 20 KB)
- External fonts & devicon CSS deferred with `media="print"` + `onload`
- `font-display: swap` on all fonts
- Hero image preloaded with `fetchpriority="high"`
- Lazy loading (`loading="lazy"`) on all below-the-fold images
- Long-term cache headers via `netlify.toml` and `_headers`
- Preconnect hints for Google Fonts & jsDelivr CDN

## Contact

- **Email:** mahmoudabdullah2284@gmail.com
- **GitHub:** [MahmoudAbdullah228](https://github.com/MahmoudAbdullah228)
- **LinkedIn:** [eng-mahmoud-m-abdullah](https://www.linkedin.com/in/eng-mahmoud-m-abdullah-a04792295/)
- **CV:** [View on Google Drive](https://drive.google.com/file/d/1Ho0cOQmf6Cuup9glvS4qgHsjOV-n68qN/view?usp=sharing)

---

© 2026 Mahmoud Abdullah — All Rights Reserved
