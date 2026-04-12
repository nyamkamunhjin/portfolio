# AGENTS.md

## Monorepo Structure

- **pnpm** monorepo with Turborepo. Package manager: `pnpm@9.15.9`
- `apps/web` — Next.js 16 app (App Router, Turbopack dev mode)
- `packages/ui` — Shared shadcn/ui component library (`@workspace/ui`)
- `packages/eslint-config`, `packages/typescript-config` — Shared configs

## Commands

All commands run from repo root via Turborepo:

```bash
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build
pnpm lint         # ESLint
pnpm format       # Prettier (write)
pnpm typecheck    # TypeScript check
```

## Adding shadcn Components

Must target the `web` app explicitly from repo root:

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

Components are placed in `packages/ui/src/components/`. CSS lives in `packages/ui/src/styles/globals.css`.

## Key Conventions

- **Tailwind CSS v4** — no `tailwind.config.*` file; config is CSS-based via `@theme inline` in `globals.css`
- **shadcn style**: `radix-lyra` with `phosphor` icons (`@phosphor-icons/react`). Base primitives: `radix-ui`
- **isRSC**: true — any component with `useState`, `useEffect`, or event handlers needs `"use client"`
- **Font**: JetBrains Mono (body + headings). Set in `layout.tsx` via `next/font/google`
- **Theme**: Dark mode by default via `next-themes`. Toggle with `d` key
- **Prettier**: sorts Tailwind classes automatically (`prettier-plugin-tailwindcss`). Semi: false, double quotes, trailing comma es5

## Import Paths

```tsx
import { Button } from "@workspace/ui/components/button" // UI components
import { cn } from "@workspace/ui/lib/utils" // cn() utility
import { Input } from "@/components/input" // App-local components
```

## CSS Theme

Dark mode colors are customized for the portfolio theme in `globals.css`:

- Background: `#0e0e0e`, surfaces layered (`surface-container-low` through `highest`)
- Accent colors: `secondary` (indigo `#9093ff`), `accent` (purple `#c180ff`)
- Custom utilities: `.hero-gradient`, `.glow-accent` in `@layer utilities`

## Remote Images

`next.config.mjs` allows `lh3.googleusercontent.com` for remote images.
