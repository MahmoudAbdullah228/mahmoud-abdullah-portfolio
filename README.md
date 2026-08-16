# Mahmoud Abdullah — Frontend Developer Portfolio

A personal portfolio website showcasing my skills, projects, learning journey, tech content creation (Cod3.dev), and community involvement as a Frontend Developer and CS student based in Egypt.

## Live Preview

[mahmoud-abdullah-portfolio.vercel.app](https://mahmoud-abdullah-portfolio.vercel.app/)

Or open `index.html` in any modern browser.

## Features

- **Custom cursor** with GPU-accelerated ring follower (transform3d, zero layout reflow)
- **Animated hero section** with fade-up entrance animations using CSS `.reveal` classes
- **Skills terminal UI** displaying tech stack in a styled terminal window
- **Projects gallery** featuring 4 real-world project showcases (Stack Overlord, Fior Flower Shop, CP Roadmap, Nova Catalog), each with a live demo link and GitHub link
- **Learning journey timeline** tracing the path from CS fundamentals, frontend & backend mastery, content creation (Cod3.dev), to ongoing university studies
- **Community & mentorship section** highlighting GDG Obour involvement and teaching frontend development
- **Contact section** with direct email links and social links (GitHub, LinkedIn, Instagram Cod3.dev, CV)
- **Smooth scroll navigation** with anchor-linked nav bar
- **Fully responsive** layout with mobile-optimised buttons and touch targets (WCAG AA)

## Tech Stack

| Technology           | Usage                                               |
| -------------------- | --------------------------------------------------- |
| HTML5                | Semantic structure, `<picture>` elements            |
| CSS3                 | Layout, animations, custom properties, CSS variables|
| JavaScript (Vanilla) | Cursor effects, IntersectionObserver reveal          |
| Inline SVGs          | Tech stack icons (no external icon font)             |
| Google Fonts         | Bebas Neue, Syne, DM Mono, Instrument Serif          |
| WebP                 | Optimized image format with PNG fallback            |
| Vercel               | Deployment, clean URLs, HTTP cache-control headers   |

## Project Structure

```
Portfolio/
├── index.html       # Main HTML file
├── style.css        # Source stylesheet (unminified, for editing)
├── style.min.css    # Minified CSS (loaded by index.html)
├── script.js        # GPU cursor, mobile menu, IntersectionObserver reveal
├── sitemap.xml      # XML sitemap for SEO indexing
├── vercel.json      # Vercel deployment & cache header configuration
└── images/          # Optimized WebP + PNG fallbacks
    ├── logo.webp / logo.png
    ├── favicon.png
    ├── me.webp / me.jpg
    ├── stack-overlord.webp / stack-overlord.png
    ├── fior.webp / fior.png
    ├── cp-roadmap.webp / cp-roadmap.png
    └── nova-catalog.webp / nova-catalog.png
```

## Sections

1. **Hero** — Introduction, CTA buttons, and profile photo
2. **Skills** — 6 skill cards in a terminal-themed window with stats row
3. **Projects** — 4 featured projects with descriptions, tags, live demo, and GitHub links
4. **Learning Journey** — 6-step timeline from CS foundations to content creation and degree
5. **Community & Mentorship** — GDG Obour role and bio panel
6. **Contact** — Email CTA, social links (including Cod3.dev), and footer

## Featured Projects

| Project          | Tech                               | Demo                                                     | GitHub                                                                    |
| ---------------- | ---------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------- |
| Stack Overlord   | React, TypeScript, Tailwind, CRUD  | [Live Demo](https://stack-overlord-store.vercel.app/)   | [GitHub](https://github.com/MahmoudAbdullah228/StackOverLord_Store)       |
| Fior Flower Shop | HTML5, CSS3, Bootstrap, CSS Grid   | [Live Demo](https://fior-flower-shop.vercel.app/)        | [GitHub](https://github.com/MahmoudAbdullah228/Fior-Flower-Shop)          |
| CP Roadmap       | HTML5, CSS3, JavaScript, Python    | [Live Demo](https://cp-ms-roadmap.vercel.app/)           | [GitHub](https://github.com/MahmoudAbdullah228/Dr-Mostafa-Saad-CP-Roadmap) |
| Nova Catalog     | React.js, Tailwind, REST API, SPA  | [Live Demo](https://novacatalog.vercel.app/)             | [GitHub](https://github.com/MahmoudAbdullah228/novacatalog-spa)           |

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
- All images served as WebP via `<picture>` with PNG fallback
- Images resized to crisp display dimensions
- CSS minified: `style.min.css` (29 KB → 21 KB)
- Devicon font replaced with inline SVGs
- External fonts deferred with `media="print"` + `onload`
- `font-display: swap` on all fonts
- Hero image preloaded with `fetchpriority="high"`
- Lazy loading (`loading="lazy"`) on all below-the-fold images
- Cursor & ring use `transform: translate3d()` + `will-change: transform`
- IntersectionObserver uses CSS classes (`.reveal` / `.is-visible`) instead of inline styles
- `content-visibility: auto` on off-screen sections
- Long-term HTTP cache headers configured in `vercel.json`
- Preconnect hints for Google Fonts

## Contact

- **Email:** mahmoudabdullah2284@gmail.com
- **GitHub:** [MahmoudAbdullah228](https://github.com/MahmoudAbdullah228)
- **LinkedIn:** [eng-mahmoud-m-abdullah](https://www.linkedin.com/in/eng-mahmoud-m-abdullah-a04792295/)
- **Instagram (Cod3.dev):** [Cod3.dev](https://www.instagram.com/cod3.dev)
- **CV:** [View on Google Drive](https://drive.google.com/file/d/1k2gOQdnNLqYW3UxKIvGTwToIYgfe4vYp/view?usp=sharing)

---

© 2026 Mahmoud Abdullah — All Rights Reserved
