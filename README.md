# Gabriel Rojas – The AI Executive

A premium personal brand website showcasing AI product strategy expertise, built with Next.js 16, React 19, and the Geist design system.

## Overview

This is a comprehensive portfolio and thought leadership platform designed to establish Gabriel Rojas as a leading voice in AI product strategy and execution. The site combines striking visual design with substantive content, featuring a portfolio of work, technical expertise, writing, and speaking engagements.

## Features

- **Modern Tech Stack**: Next.js 16 with Turbopack, React 19, TypeScript, and Tailwind CSS v4
- **Geist Design System**: Professional typography system with Geist Sans, Mono, and Pixel Square fonts
- **Rose Accent Color**: Cohesive visual identity with rose (#c94154) as the primary accent
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Optimized Performance**: Zero Layout Shift, CSS animations, minimal client-side JavaScript
- **SEO Ready**: Structured metadata, semantic HTML, proper heading hierarchy

## Tech Stack

### Core
- **Framework**: Next.js 16.0.10
- **Runtime**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1 + PostCSS

### UI Components
- **Radix UI**: Headless component primitives (20+ components)
- **Lucide React**: Consistent icon system
- **Recharts**: Data visualization library
- **Sonner**: Toast notifications

### Forms & Data
- **React Hook Form**: Efficient form state management
- **Zod**: TypeScript-first schema validation
- **CVA**: Class Variance Authority for component variants

### Analytics
- **Vercel Analytics**: Production insights

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page composition
│   ├── globals.css         # Global styles and design tokens
│   ├── error.tsx           # Error boundary
│   └── global-error.tsx    # Global error fallback
│
├── components/
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── career-timeline.tsx
│   ├── expertise-section.tsx
│   ├── featured-writing.tsx
│   ├── newsletter-section.tsx
│   ├── portfolio-section.tsx
│   ├── github-projects-section.tsx
│   ├── speaking-media.tsx
│   ├── footer.tsx
│   ├── site-header.tsx
│   └── ui/
│       └── [50+ shadcn UI components]
│
├── public/
│   ├── gabriel-rojas.jpg
│   ├── hero-neural-symphony.jpg
│   ├── portfolio-*.jpg
│   └── newsletter-signal-noise.jpg
│
└── package.json
```

## Design System

### Typography
- **Heading Font**: Geist Sans Bold (600-700 weight)
- **Body Font**: Geist Sans Regular (400-500 weight)
- **Mono Font**: Geist Mono for code and labels
- **Pixel Font**: Geist Pixel Square for decorative markers

### Perfect Fourth Scale (1.333 ratio)
- `text-pixel`: 10px (markers, slide numbers)
- `text-xs`: 11px (fine print)
- `text-sm`: 12px (code, labels)
- `text-base`: 14px (body text)
- `text-lg`: 15px (subheads)
- `text-xl`: 20px (article titles)
- `text-2xl`: 24px (section titles)
- `text-3xl`: 38px (display headlines)

### Color Palette
- **Primary Accent**: Rose (#c94154)
- **Background**: Black (#0a0a0a)
- **Foreground**: Light gray (#ededed)
- **Surfaces**: Dark gray (#171717, #262626)
- **Muted**: Tertiary gray (#515151)

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/gabrielrojasnyc/gabe-website.git
cd gabe-website

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Deployment

Deployed on Vercel with automatic deployments from the `main` branch. Preview deployments from feature branches via `v0/gaberojas-*` branches.

```bash
# Deploy to Vercel
vercel deploy
```

## File Structure Conventions

- **Components**: Each section is a standalone component in `/components`
- **UI Components**: shadcn/ui primitives in `/components/ui`
- **Styles**: Global styles and design tokens in `/app/globals.css`
- **Assets**: Images in `/public` with descriptive names

## Performance Optimizations

- CSS-first animations (no JavaScript animation libraries)
- Static site generation where possible
- Image optimization with Next.js Image component
- Minimal JavaScript bundle with tree-shaking
- Vercel Analytics integration for monitoring

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal portfolio site. Contributions welcome for bug fixes and improvements via pull requests.

## License

© 2024 Gabriel Rojas. All rights reserved.

## Contact

- Email: gabriel@gabrielrojasai.com
- Twitter: [@gabrielrojasai](https://twitter.com/gabrielrojasai)
- LinkedIn: [gabrielrojasnyc](https://linkedin.com/in/gabrielrojasnyc)
- Newsletter: [gabrielrojasai.substack.com](https://gabrielrojasai.substack.com)
- GitHub: [gabrielrojasnyc](https://github.com/gabrielrojasnyc)
