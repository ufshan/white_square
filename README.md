# White Square UPVC Windoor (JB Group) — Pixel-Accurate Recreation

A complete, fully functional, pixel-accurate recreation of [https://jbwhitesquare.com](https://jbwhitesquare.com) built with React 18, TypeScript, and Vite.

## Features
- **Pixel-Accurate Visuals**: Strict reproduction of typography (`Merriweather`, `Magra`, `Roboto`), colors (`#1b274f`, `#0fafe9`), spacing, and custom Windazo Fontello icon glyphs.
- **Complete Route Coverage**: Every accessible page recreated:
  - Homepage (`/`) with 11 custom sections, interactive parallax slider, partner badges, and dynamic forms.
  - Shop & WooCommerce catalog (`/shop/`, `/product/:slug/`, `/product-category/:slug/`).
  - Services & Consultation (`/services/`, `/services/:slug/`).
  - Company & Trust (`/about-us/`, `/contacts/`, `/faq/`, `/team/`, `/testimonials/`).
  - Galleries (`/gallery-2-columns/`, `/gallery-3-columns/`, `/gallery-4-columns/`).
  - UI Elements library (`/elements/`, `/elements/:slug/`).
  - Blog & Insights (`/blog/`, `/:slug/`).
  - WooCommerce flow (`/cart/`, `/checkout/`, `/my-account/`).
  - Legal (`/privacy/`, `/terms/`).
  - Error handling (`/404-layout/`, `*`).
- **Authentic Assets**: 38 self-hosted media files including the 83 MB official brochure PDF, testing certificates (BSI UK, SGS RoHS, Renolit), logos, and sliders.
- **Interactive UI**:
  - Floating WhatsApp widget (`qlwapp`) with pre-filled messaging.
  - Interactive Enquiry Modal with persistent `localStorage` storage.
  - Smooth Back to Top button and sticky navigation bar with search.
  - Responsive drawer menu for mobile and tablet devices.

## Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation
```bash
# Navigate to the project root
cd jbwhitesquare

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build & Preview
```bash
npm run build
npm run preview
```

## Project Structure
```
jbwhitesquare/
├── public/
│   ├── assets/           # Self-hosted authentic assets & font glyphs
│   ├── robots.txt        # Search engine instructions
│   └── sitemap.xml       # SEO XML sitemap
├── src/
│   ├── components/       # Shared UI components (Header, Footer, Modals, Widgets)
│   ├── data/             # Structured data models (products, services, posts, etc.)
│   ├── pages/            # Page route components
│   ├── styles/           # Theme variables and global typography
│   ├── App.tsx           # Router and application shell
│   └── main.tsx          # Application entry point
├── package.json
└── tsconfig.json
```
