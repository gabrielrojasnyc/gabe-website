# Changelog

All notable changes to the Gabriel Rojas portfolio website are documented in this file.

## [0.1.0] – 2025-03-08

### Initial Release

#### Added
- **Core Infrastructure**
  - Next.js 16 with Turbopack bundler
  - React 19 with Server Components
  - TypeScript configuration with strict type checking
  - Tailwind CSS v4 with PostCSS
  - Vercel Analytics integration

- **Design System**
  - Geist typography system implementation (Sans, Mono, Pixel Square)
  - Perfect Fourth scale (1.333 ratio) for typographic hierarchy
  - Rose accent color (#c94154) as primary brand color
  - CSS custom properties for design tokens
  - Dark theme optimized for tech/AI aesthetic

- **Layout & Navigation**
  - Sticky navigation header with mobile hamburger menu
  - Smooth scroll anchors to all sections
  - Responsive design with mobile-first approach
  - `scroll-mt-20` offsets for proper header overlap handling

- **Hero Section**
  - Large-scale display typography (up to 9xl on desktop)
  - Animated entrance effects with staggered delays
  - Dual CTA pattern (primary rose button + secondary text link)
  - Pixel marker (01 / Home) per typography system
  - Neural network abstract background

- **About Section**
  - Professional headshot with grayscale hover effect
  - Responsive quote card (relative on mobile, absolute on desktop)
  - Accent color bar and micro-label pattern
  - Character-driven copy with strategic emphasis

- **Career Timeline**
  - Gradient timeline line with rose accent
  - 3-item career progression with dates and descriptions
  - Static icon badges (no dynamic Tailwind classes)
  - Hover effects on timeline cards

- **Expertise Section**
  - 2-column bento layout with numbered badges (01-06)
  - Icon containers with rose accent backgrounds
  - Large faded background numbers for visual interest
  - Stat callouts with rose accent color

- **Featured Writing**
  - Lead article with 3-column span on desktop
  - Compact article grid with date, read time, and excerpt
  - "Latest" badge on featured piece
  - Link to Substack newsletter

- **Newsletter Section**
  - Visual image representation of signal/noise concept
  - 4-column topic grid with Lucide icons (rose accents)
  - Clear CTA to subscribe
  - Underlined link with rose decoration

- **Portfolio Section**
  - 3-column project grid with category tags
  - Project descriptions, tech stacks, and case study links
  - Rose accent on category tags
  - Images for Two-Tower ML, Digital Retail, ML Core projects

- **GitHub Projects Section**
  - Repository showcase with top-level accent line animation
  - Tech stack tags with monospace font
  - Feature description bullets with rose dot indicators
  - External link to full GitHub profile

- **Speaking & Media Section**
  - Speaking engagement cards with date and event type
  - "Upcoming" state for future events (no dead links)
  - Rose icon backgrounds and type badges
  - Speaking inquiry CTA box

- **Footer**
  - Left-aligned content with max-width container
  - Brand statement in large bold type
  - Vertical divider for visual hierarchy
  - Quick navigation grid (About, Work, Writing, Open Source, Speaking)
  - Social links with hover effects
  - Bottom copyright and tagline

- **UI Components**
  - 50+ shadcn/ui components (Button, Card, Dialog, etc.)
  - Full Radix UI integration for accessible primitives
  - Custom component styling with rose accent system
  - Rounded-lg border radius throughout

- **Animations & Effects**
  - CSS keyframe animations (fade-in-up, float-slow)
  - Staggered animation delays for sequential entrance
  - Hover state transitions on all interactive elements
  - Smooth color transitions on links and buttons

- **Images**
  - Professional portrait headshot (gabriel-rojas.jpg)
  - Hero neural network background
  - Newsletter signal/noise visualization
  - 3 portfolio project images (Two-Tower ML, Digital Retail, ML Ops)

- **Error Handling**
  - Custom error boundary component (error.tsx)
  - Global error fallback (global-error.tsx)
  - Error recovery with retry button (rose accent)

### Fixed
- Resolved Turbopack HMR module stale cache errors by:
  - Removing conflicting `bun.lock` in favor of `pnpm-lock.yaml`
  - Eliminating duplicate `styles/globals.css` file
  - Fixing font import circular references
  - Adding proper error boundaries

- Fixed typography issues:
  - Replaced conflicting `Space_Grotesk` + `Inter` with unified `Geist` system
  - Fixed font variable circular references in CSS
  - Standardized all font-heading references to font-sans

- Fixed color palette consistency:
  - Removed purple/teal accents (purple-500, teal-500)
  - Replaced all blue references with rose (#c94154)
  - Fixed dynamic Tailwind classes in Career Timeline (bg-${color} pattern)
  - Standardized border-radius to rounded-lg throughout

- Fixed responsive design issues:
  - Made About quote card responsive (relative on mobile, absolute on desktop)
  - Added `scroll-mt-20` to all anchored sections for header overlap
  - Added `max-w-7xl mx-auto` centering to all sections
  - Fixed mobile overflow and clipping issues

- Fixed component consistency:
  - Replaced emoji icons with Lucide React components
  - Removed all "Coming Soon" dead links in Speaking section
  - Unified section heading pattern across all sections
  - Standardized card styling and hover effects

### Technical Improvements
- Removed `framer-motion` dependency in favor of pure CSS animations
- Removed unnecessary dependencies: `@emotion/is-prop-valid`, `autoprefixer`, `tailwindcss-animate`
- Pinned dependency versions to avoid lockfile instability
- Added Geist Pixel Square font via CDN `@font-face` rule
- Implemented micro-label utility class pattern

### Design Enhancements
- Added sticky navigation with smooth scroll behavior
- Implemented section rhythm with consistent micro-labels
- Strengthened footer into a closing brand statement
- Enhanced visual variety in middle sections (Expertise, Featured Writing)
- Refined CTA hierarchy (primary rose fill + secondary text-only)

## Known Issues
- None at this time

## Future Enhancements
- Blog/article system with markdown support
- Dark/light theme toggle (currently dark-only)
- Analytics dashboard for newsletter subscribers
- Speaking engagements RSVP system
- Portfolio case study deep-dives
- Search functionality across content

## Migration Notes

### From Previous Design
- Transitioned from blue (#3b82f6) accent to rose (#c94154)
- Consolidated typography from 3 font families (Space Grotesk, Inter, Geist Mono) to unified Geist system
- Moved from `font-heading` utility to `font-sans` with weight-based hierarchy
- Replaced pill badge patterns with consistent micro-label system

### Dependencies
- Next.js: 16.0.10 (from previous version)
- React: 19.2.0 (latest stable)
- Tailwind CSS: 4.1.9 (major version update with new PostCSS)
- TypeScript: 5+ (latest)

---

**Deployment**: Vercel  
**Repository**: https://github.com/gabrielrojasnyc/gabe-website  
**Main Branch**: main  
**Preview Branch Pattern**: v0/gaberojas-*
