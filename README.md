# CIRCA &bull; Gatherings, Salons & Festivals

> An editorial broadside gazette and registration passbook for avant-garde cultural symposiums, typographic letterpress salons, analog modular synthesis, and wild gastronomy across India.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple.svg)](https://vitejs.dev/)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-orange.svg)](https://github.com/css-modules/css-modules)

---

## 1. Project Overview

**CIRCA** is a handcrafted, human-designed Event Management platform designed as a printed cultural broadsheet and festival poster rather than a sterile SaaS dashboard. Built with **React 18**, **React Router v6**, and **pure CSS Modules with CSS custom properties**, it showcases upcoming cultural gatherings, interactive schedules, guest practitioners, and a complete browser-backed ticketing passbook.

### Design Concept: "The Printed Broadside Poster"
Traditional event websites suffer from homogenous template design: generic purple/blue gradients, floating blurred blobs, standard 3-column card rows, and impersonal placeholder text. **CIRCA** departs decisively from this:
- **Warm Raw Paper Aesthetic**: Light paper canvas (`#F6F1E7`) and printer's charcoal ink (`#1B1A17`), illuminated by burnt vermilion (`#E4492B`) and heritage olive (`#5A623F`).
- **Dark Mode ("Warm Charcoal")**: Deep warm soot (`#14130F`), avoiding harsh pitch blacks, paired with calibrated vermilion (`#FF5738`).
- **High-Contrast Expressive Typography**: `Fraunces` optical variable serif for expressive display headlines paired with `DM Sans` for clean tabular metadata.
- **Asymmetric Grid Composition**: Break monotonous card grids with one dominant editorial poster card complemented by horizontal cuts, oversized date stamps (`28`, `04 OCT`), and ticket-cut notch accents.
- **Authentic Microcopy**: Every event is rooted in genuine subcontinental craft—Delhi letterpress matrices, Byculla modular synthesis, Western Ghats coffee microlots, and Koodiyattam Sanskrit gesture theatre.

---

## 2. Features

- **Editorial Home Overview (`/`)**:
  - Sticky header with subtle border & background blur after scroll.
  - Huge fluid headline with hand-drawn SVG underline highlight.
  - Live real-time countdown to the nearest seasonal gathering.
  - Interactive collage of 3 angled ticket stubs.
  - Infinite category marquee strip (pauses on hover, respects reduced motion).
  - Asymmetric featured showcase with live seat capacity meters.
  - Numbered vertical timeline explaining registration in 3 clear steps.
  - Viewport-triggered animated statistics counters via `IntersectionObserver`.
- **Full Seasonal Programme (`/events`)**:
  - 250ms debounced live search across title, venue, city, and discipline.
  - Horizontally scrollable category chips with dynamic event counts.
  - Sort by earliest date, latest date, alphabetical title, or remaining capacity.
  - "Free admission only" toggle filter.
  - Bi-directional URL search params synchronization (`?q=...&category=...&free=true&sort=...`).
  - Skeleton loaders on initial render and friendly empty states.
- **Event Dossier (`/events/:id`)**:
  - Hero banner with date stamp, countdown timer, and category pill.
  - Interactive venue card with external Google Maps navigation link.
  - Live seat availability meter with color-coded urgency.
  - Detailed chronological schedule/agenda timeline.
  - Guest practitioner profiles with avatars, titles, and affiliations.
  - Collapsible interactive FAQ accordion.
  - Desktop sticky registration card transforming into a fixed bottom sheet on mobile.
  - Related/similar events recommendation row.
- **Registration Engine (`/register/:id` & In-Page Modal)**:
  - 6-field JavaScript-based validation (Name, Email, Indian Mobile with `+91`, Selected Event, Ticket Count 1–5, Special Requests).
  - Validation on blur and on submit, with form shake animation on invalid submission and auto-focus on the first invalid field.
  - Duplicate registration protection (prevents identical email booking the same event).
  - Simulated 1-second reservation transaction loading state.
  - Canvas confetti particle burst in brand colors.
  - Perforated broadside ticket pass generation with unique booking reference (e.g. `CIRCA-7K9M2X`).
  - RFC 5545 standard `.ics` calendar invitation download.
  - Local Storage persistence that reduces available seats in real time.
- **Passbook (`/my-registrations`)**:
  - Offline-first passbook reading directly from Local Storage.
  - Perforated ticket stubs with barcode visualization and booking references.
  - Cancel pass dialog with seat restitution to the community ledger.
  - Empty state with custom typographic illustration and direct CTA.
- **Witty 404 Page**:
  - "The Stage Has Been Struck" broadside with quick return navigation.

---

## 3. Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI framework with Concurrent Features |
| **Vite 5** | High-performance build tool and dev server |
| **React Router v6** | Client-side routing with URL query param sync |
| **CSS Modules** | Scoped, zero-runtime CSS with BEM conventions |
| **CSS Custom Properties** | Light/dark theme tokens and fluid typographic scale |
| **Lucide React** | Thin-stroke consistent iconography (no emojis) |
| **Google Fonts** | `Fraunces` (variable optical serif) & `DM Sans` (grotesk) |

---

## 4. Architecture & Folder Structure

```
circa-events/
├── index.html                   # HTML entry point with fonts & metadata
├── package.json                 # Project dependencies & build scripts
├── vite.config.js               # Vite build configuration
├── vercel.json                  # Vercel SPA rewrites
├── public/
│   └── _redirects               # Netlify SPA redirects
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── App.jsx                  # Root router & layout providers
│   ├── context/
│   │   ├── ThemeContext.jsx     # Dark/light theme engine & storage
│   │   ├── ToastContext.jsx     # Notification dispatcher
│   │   └── RegistrationContext.jsx # Bookings, seat decrements & local ledger
│   ├── hooks/
│   │   ├── useLocalStorage.js   # Type-safe storage sync with try/catch
│   │   ├── useCountdown.js      # Real-time countdown timer
│   │   ├── useDebounce.js       # Search input debouncer (250ms)
│   │   └── useIntersectionObserver.js # Viewport visibility detector
│   ├── utils/
│   │   ├── validators.js        # Form validation rules (Name, Email, Indian Phone)
│   │   ├── dateUtils.js         # Editorial date & time formatting
│   │   ├── icsGenerator.js      # RFC 5545 .ics calendar exporter
│   │   └── confetti.js          # Pure HTML5 canvas confetti burst
│   ├── data/
│   │   └── events.js            # 18 rich realistic event dossiers
│   ├── styles/
│   │   ├── tokens.css           # Design tokens for light/dark palettes
│   │   ├── reset.css            # Modern CSS reset
│   │   └── global.css           # Global typography, focus rings, accessibility
│   ├── components/
│   │   ├── common/              # Navbar, Footer, Modal, Toast, ThemeToggle, Badge, Skeleton
│   │   ├── home/                # Hero, MarqueeStrip, FeaturedSection, Timeline, StatsCounter
│   │   ├── events/              # EventCard, SearchBar, CategoryChips, FilterBar, EmptyState
│   │   ├── details/             # Accordion, ScheduleList, SpeakerGrid, StickyBookingCard
│   │   └── registration/        # RegistrationForm, TicketConfirmation
│   └── pages/
│       ├── Home.jsx             # Front broadside overview
│       ├── EventsCatalogue.jsx  # Searchable, filterable catalogue (/events)
│       ├── EventDetails.jsx     # Full event dossier (/events/:id)
│       ├── RegisterStandalone.jsx # Dedicated reservation portal (/register/:id)
│       ├── MyRegistrations.jsx  # User passbook (/my-registrations)
│       └── NotFound.jsx         # 404 Lost in Program
└── LICENSE                      # MIT License
```

---

## 5. Form Validation & Storage Mechanics

### Validation Rules (Pure JavaScript):
- **Full Name**: 2–50 characters, letters, spaces, hyphens, and apostrophes (`/^[a-zA-ZÀ-ÿ\s.'-]+$/`).
- **Email**: Strict format checking (`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`).
- **Indian Mobile Phone**: Normalizes input by stripping spaces/dashes, then validates a 10-digit number starting with 6, 7, 8, or 9, supporting optional `+91` or `0` prefix (`/^(?:\+91|0)?[6-9]\d{9}$/`).
- **Ticket Allocation**: 1 to 5 passes maximum, restricted by remaining event capacity.
- **Duplicate Prevention**: Rejects submissions if the same email address has an active booking for the requested gathering.

### Local Storage Schema:
- `circa_theme`: `'light' | 'dark'`
- `circa_registrations`: Array of verified booking objects with unique `bookingRef` (e.g. `CIRCA-4F7K2Q`), date, venue, attendee info, and ticket counts.
- `circa_event_seat_overrides`: Reactive mapping `{ [eventId]: seatsLeft }` ensuring seat deductions and cancellations persist across sessions.

---

## 6. Setup & Running Locally

### Prerequisites
- Node.js 18+ (tested on Node v22)
- npm or pnpm

### Quick Start
```bash
# 1. Clone repository
git clone https://github.com/<your-username>/circa-events.git
cd circa-events

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Production Build
```bash
# Build optimized static assets
npm run build

# Preview production build locally
npm run preview
```

---

## 7. Deployment Instructions

### Deploy to Vercel
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run deployment from project root:
   ```bash
   vercel
   ```
3. Set build settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   *(The included `vercel.json` automatically configures SPA rewrite rules).*

### Deploy to Netlify
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Run deployment:
   ```bash
   netlify deploy --prod --dir=dist
   ```
   *(The included `public/_redirects` file routes all traffic to `index.html`).*

### Pushing to GitHub
```bash
git remote add origin https://github.com/<your-username>/circa-events.git
git branch -M main
git push -u origin main
```

---

## 8. Accessibility & Quality Standards

- **WCAG AA Compliance**: High contrast ratios in both light paper and dark soot themes.
- **Keyboard Operable**: Modals support Escape key dismissal and tab focus trapping; category chips and filters are keyboard navigable.
- **Accessible ARIA Landmarks**: Full semantic elements (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`), `aria-expanded` on accordions, `aria-describedby` on input errors.
- **Motion Sensitivity**: All transitions, count-up animations, and canvas confetti respect `prefers-reduced-motion`.

---

## 9. Future Enhancements

1. **Web Share API**: Native device sheet sharing for event dossiers.
2. **Apple Wallet / Google Wallet**: Direct pkpass passbook integration.
3. **Multi-Currency Converter**: Dynamic conversion between INR, USD, EUR, and GBP for international patrons.
4. **Offline Service Worker**: Full PWA caching for offline access to stored passes.

---

&copy; 2026 CIRCA Cultural Forum. Released under the [MIT License](LICENSE).
