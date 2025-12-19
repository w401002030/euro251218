# Euro Stable EA - Pro Chinese Edition

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/w401002030/euro-stable-ea-pro-chinese-edition)

A visually stunning, high-conversion sales landing page for **Euro Stable EA**, adapted for the Chinese market. This comprehensive marketing platform showcases an automated Forex trading robot with minimalist, trust-inspiring design, interactive performance charts, and optimized user flows for maximum engagement and conversions.

## Key Features

- **Hero Section**: Captivating entry with dynamic value proposition, subtle animations, and prominent CTAs.
- **Performance Dashboard**: Interactive Recharts-powered equity curve chart simulating live trading results.
- **Key Features Grid**: Elegant cards highlighting low drawdown, automated strategy, currency pairs, and risk management (with Lucide icons).
- **Live Stats Ticker**: Real-time metrics display (win rate, total profit, active users).
- **Pricing Plans**: Responsive pricing table with hover effects and "Recommended" highlighting (Basic, Pro, Unlimited tiers).
- **FAQ Accordion**: Expandable support section addressing common queries.
- **Trust Elements**: Testimonials, prominent Forex risk disclaimers, and professional footer.
- **Checkout Modal**: Simulated purchase flow with success feedback.
- **Mobile-First Responsive**: Flawless across all devices with Framer Motion scroll animations.
- **Dark Mode Support**: Seamless theme switching.

Single-page application (SPA) layout with sticky glassmorphism navbar and smooth-scroll navigation.

## Tech Stack

- **Frontend**: React 18, React Router, TypeScript
- **UI/UX**: shadcn/ui, Tailwind CSS 3, Lucide React icons
- **Charts & Animations**: Recharts, Framer Motion
- **State & Forms**: Zustand, React Hook Form, Zod
- **Utilities**: clsx, tailwind-merge, sonner (toasts)
- **Deployment**: Cloudflare Workers/Pages, Vite, Wrangler
- **Other**: TanStack Query, Radix UI Primitives

## Quick Start

### Prerequisites
- [Bun](https://bun.sh/) (recommended package manager)
- [Node.js](https://nodejs.org/) 18+ (for Wrangler CLI)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed globally: `bun add -g wrangler`

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd euro-stable-ea-cn
   ```
2. Install dependencies:
   ```
   bun install
   ```
3. Run development server:
   ```
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- **Linting**: `bun lint`
- **Build for Production**: `bun build`
- **Preview Build**: `bun preview`
- **Type Generation (Cloudflare)**: `bun cf-typegen`

The app uses React Router for routing (single route: `/`). Edit `src/pages/HomePage.tsx` for the main landing page. All shadcn/ui components are pre-installed in `src/components/ui/`.

Hot reload works out-of-the-box with Vite. Theme toggle (dark/light) is available via `useTheme` hook.

## Deployment

Deploy to Cloudflare Workers/Pages with one command:

```
bun run deploy
```

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/w401002030/euro-stable-ea-pro-chinese-edition)

This bundles assets, runs Wrangler, and deploys your app globally on Cloudflare's edge network. Free tier available.

### Custom Domain & Config
- Edit `wrangler.jsonc` or `wrangler.toml` for bindings, KV, D1, etc.
- Set environment variables via Wrangler dashboard.
- Preview deployments: `wrangler deploy --preview`.

## Project Structure

```
src/
├── components/ui/     # shadcn/ui primitives
├── pages/            # Route components (HomePage.tsx)
├── hooks/            # Custom hooks
└── lib/              # Utilities & error reporting
worker/               # API routes (Hono)
```

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/AmazingFeature`.
3. Commit changes: `git commit -m 'Add some AmazingFeature'`.
4. Push: `git push origin feature/AmazingFeature`.
5. Open a Pull Request.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Support

For issues, open a GitHub issue. Built with ❤️ for rapid, production-ready Forex marketing sites.