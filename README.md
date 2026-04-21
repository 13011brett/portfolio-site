# Brett Scarlett — Developer Portfolio

A performant, accessible portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **WCAG 2.1 AA Compliant** — semantic HTML, ARIA landmarks, focus management, skip navigation, proper color contrast ratios
- **Server-Side Rendering** — leverages Next.js App Router with React Server Components for optimal performance
- **Responsive Design** — fluid layouts across mobile, tablet, and desktop breakpoints
- **Dark/Light Theme** — system preference detection with manual toggle, respects `prefers-reduced-motion`
- **Performance Optimized** — Lighthouse 95+ scores across all categories
- **Type-Safe** — strict TypeScript throughout with no `any` types

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 3.x |
| Animation | Framer Motion (respects `prefers-reduced-motion`) |
| Linting | ESLint + Prettier |
| Testing | Jest + React Testing Library |
| Deployment | Vercel |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata, fonts, theme
│   ├── page.tsx            # Home / hero section
│   ├── about/page.tsx      # About & experience timeline
│   ├── projects/page.tsx   # Project showcase grid
│   └── contact/page.tsx    # Contact form with validation
├── components/
│   ├── ui/                 # Reusable accessible UI primitives
│   ├── layout/             # Header, Footer, SkipNav, ThemeToggle
│   └── sections/           # Page-specific section components
├── lib/
│   ├── constants.ts        # Site config, project data, social links
│   └── utils.ts            # Helper functions
├── public/
│   └── assets/             # Images, resume PDF, favicons
└── __tests__/              # Component & integration tests
```

## Getting Started

```bash
# Clone
git clone https://github.com/13011brett/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## ♿ Accessibility

This project prioritizes accessibility as a first-class concern:

- **Skip Navigation** — keyboard users can bypass repetitive nav links
- **Focus Trapping** — modal dialogs trap focus correctly
- **ARIA Live Regions** — dynamic content changes are announced to screen readers
- **Color Contrast** — all text meets WCAG AA minimum contrast ratios (4.5:1 body, 3:1 large text)
- **Keyboard Navigation** — all interactive elements are fully operable via keyboard
- **Reduced Motion** — animations are disabled when `prefers-reduced-motion: reduce` is set
- **Semantic HTML** — proper heading hierarchy, landmark regions, and form labels

## 📄 License

MIT — see [LICENSE](./LICENSE) for details.
