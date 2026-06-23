<div align="center">

# ⚓ YORCH — Private Yacht Club

**A luxury-first, cinematic single-page website for an exclusive private yacht membership club.**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Motion-12.38-FF0055?logo=framer&logoColor=white)](https://motion.dev)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?logo=greensock&logoColor=white)](https://gsap.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[🌐 Live Demo](https://yatch-f8l3.vercel.app) · [📧 Contact](mailto:mahakudtusar@gmail.com)

</div>

---

## 🎬 Overview

**YORCH** (Yacht +Orch) is a premium, visually immersive website built for a fictional private yacht club. The site is designed to evoke the feeling of luxury maritime living through cinematic full-screen video backgrounds, glassmorphism UI, staggered animations, and a carefully curated design system — all rendered as a performant single-page application.

> *"A private world on open water. Curated voyages, three extraordinary vessels, and a circle of members who understand that true luxury has no horizon."*

---

## ✨ Key Features

### 🎥 Cinematic Video Experience
- **9 full-screen video backgrounds** across Hero, Manifesto, Experiences, Fleet, Academy, and more
- Smooth parallax-style fixed backgrounds with gradient overlays
- Optimized autoplay with muted inline playback for all devices

### 🚢 Interactive Fleet Showcase
- **3 luxury yachts** — *Ocean Eclipse (28M)*, *Black Sovereign (32M)*, *Azure Horizon (25M)*
- Full-screen fleet overlay with video backgrounds per vessel
- Slide-out **Spec Drawer** with detailed specs: dimensions, performance, construction, onboard comfort, and navigation

### 🎨 Premium Design System
- **Instrument Serif** typography for an editorial luxury feel
- **Glassmorphism** UI components with multi-level blur/saturation variants (`glass`, `glass-mid`, `glass-strong`, `glass-card`)
- Custom CSS variables for colors, easing curves, and consistent spacing
- Light/cream palette (`#f8f6f2`) for content sections with dark overlays for video sections

### 🎭 Rich Animations
- **Framer Motion (Motion)** — scroll-triggered reveal animations, staggered text, viewport-aware transitions
- **GSAP** — high-performance timeline animations and cursor effects
- **Custom Ripple Trail** — interactive cursor-following ripple effect
- Custom easing curves: `--ease-luxury`, `--ease-text`, `--ease-menu`

### 📱 Full-Page Overlay Navigation
- **Staggered slide-in menu** with dual prelayer animation (navy → blue → content)
- Overlay pages for *Blog*, *Journeys*, *Membership Details*, and *About*
- Smooth open/close transitions with body scroll locking

### 💎 Membership Tiers
| Tier | Price | Highlights |
|------|-------|------------|
| **Signature** | $24,000/yr | Fleet access, concierge, 2 guest passes |
| **Commodore** | $58,000/yr | Priority booking, racing calendar, exclusive events |
| **Founders' Circle** | By Invitation | Unlimited access, private captain, annual global voyage |

### 📋 Additional Sections
- **Brand Manifesto** — philosophy statement with glass card overlay
- **Yacht Specs** — interactive cards with hover zoom and spec drawer
- **Experiences** — private charters, racing programs, 24/7 concierge
- **Academy** — sailing education with hull-cutting process video
- **Testimonials** — horizontal scroll rail with member quotes
- **Concierge Form** — styled contact form with floating labels
- **FAQ** — expandable accordion with smooth height transitions
- **Press Strip** — partner/press logo ticker
- **Cookie Consent** — GDPR-style bottom banner
- **Footer** — multi-column layout with social links

---

## 🏗️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React 18.3 | Component-based UI |
| **Language** | TypeScript 5.8 | Type safety |
| **Build Tool** | Vite 6.3 | Fast dev server & optimized builds |
| **Styling** | Tailwind CSS 4.2 + Vanilla CSS | Utility classes + custom design tokens |
| **Animation** | Motion 12.38 (Framer Motion) | Declarative scroll & layout animations |
| **Animation** | GSAP 3.14 | High-performance timeline animations |
| **Font** | Instrument Serif (Google Fonts) | Premium editorial typography |

---

## 📁 Project Structure

```
yatch/
├── public/
│   └── videos/              # 9 MP4 video backgrounds
│       ├── hero-bg.mp4
│       ├── manifesto-bg.mp4
│       ├── experiences-bg.mp4
│       ├── academy-bg.mp4
│       ├── hull-cutting.mp4
│       ├── interior-tour.mp4
│       ├── fleet-ocean-eclipse.mp4
│       ├── fleet-black-sovereign.mp4
│       └── fleet-azure-horizon.mp4
├── src/
│   ├── components/          # 19 React components
│   │   ├── Header.tsx           # Floating pill navbar
│   │   ├── Hero.tsx             # Full-screen video hero
│   │   ├── RippleTrail.tsx      # Cursor ripple effect
│   │   ├── StaggeredMenu.tsx    # Animated slide-in menu
│   │   ├── FleetOverlay.tsx     # Fleet showcase overlay
│   │   ├── FleetVideo.tsx       # Per-yacht video card
│   │   ├── SpecDrawer.tsx       # Yacht spec side panel
│   │   ├── BrandManifesto.tsx   # Philosophy section
│   │   ├── Experiences.tsx      # Services grid
│   │   ├── YachtSpecs.tsx       # Interactive yacht cards
│   │   ├── Testimonials.tsx     # Horizontal scroll testimonials
│   │   ├── Membership.tsx       # Tiered pricing cards
│   │   ├── Academy.tsx          # Sailing education
│   │   ├── ConciergeForm.tsx    # Contact form
│   │   ├── Faq.tsx              # Accordion FAQ
│   │   ├── PressStrip.tsx       # Press/partner logos
│   │   ├── Footer.tsx           # Multi-column footer
│   │   ├── CookieConsent.tsx    # GDPR cookie banner
│   │   └── PageOverlayShell.tsx # Reusable overlay wrapper
│   ├── pages/               # 4 overlay pages
│   │   ├── AboutPage.tsx
│   │   ├── Blog.tsx
│   │   ├── JourneysPage.tsx
│   │   └── MembershipPage.tsx
│   ├── data/                # Static data
│   │   ├── yachts.ts            # Fleet specifications
│   │   └── testimonials.ts      # Member testimonials
│   ├── App.tsx              # Root component & state
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & design system
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/TUSAR-SUDO/yatch.git
cd yatch

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory, ready for static hosting.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. Any push to `main` triggers an automatic deployment.

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

---

## 🎨 Design Philosophy

YORCH follows a **"luxury editorial"** design language:

- **Typography-driven** — Instrument Serif creates an upscale magazine feel
- **Video-first** — every major section uses cinematic video backgrounds
- **Restraint over excess** — muted color palette, generous whitespace, subtle animations
- **Glassmorphism** — frosted glass cards on dark video backgrounds create depth
- **Micro-interactions** — every hover, scroll, and click feels intentional and premium

---

## 👨‍💻 Author

**Tusar Kumar Mahakud**

- GitHub: [@TUSAR-SUDO](https://github.com/TUSAR-SUDO)
- Email: mahakudtusar@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ and a love for the open sea.**

*YORCH — The Ocean Is Yours. Claim It Now.*

</div>
