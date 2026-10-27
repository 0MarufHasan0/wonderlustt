# wonderlast

Next.js 16.4.3 app (App Router in `src/app`), React 19.3, plain npm (single package, not a monorepo). No tests and no CI exist yet.

## Commands

```bash
npm run dev       # Turbopack dev server (default bundler)
npm run build     # production build
npm run lint      # eslint (flat config, Next core-web-vitals + TS)
npx tsc --noEmit  # typecheck — there is no dedicated script
```

Use `npx tsc --noEmit` for fast focused verification; `npm run build` is the full check.

## Framework gotchas (Next 16 — verify in bundled docs, don't trust training data)

- `next.config.ts` enables `cacheComponents` + `partialPrefetching`:
  - Data fetching is **dynamic by default**; uncached data must be inside `<Suspense>` or cached with the `use cache` directive (`cacheLife`/`cacheTag` available).
  - The `runtime` route segment config (incl. `runtime = 'nodejs'`) is **not allowed** — remove it.
  - Navigation preserves route state via React `<Activity>` instead of unmounting.
- `reactCompiler: true` — the compiler auto-memoizes; do not add manual `useMemo`/`useCallback` unless profiling shows a need.
- Built-in route/prop types: root layout uses globally-typed `LayoutProps<"/">`; type-aware route helpers are available.
- Version-specific guides live in `node_modules/next/dist/docs/` (e.g. `01-app/03-api-reference/05-config/01-next-config-js/cacheComponents.md`).

## Styling & UI

- **Tailwind CSS v4** with no `tailwind.config.*`; theme is defined in `src/app/globals.css` via `@theme inline` CSS variables. Tailwind is wired through Turbopack rules in `next.config.ts` (not PostCSS).
- **shadcn/ui with `base-nova` style** (`components.json`): components in `src/components/ui` are built on **@base-ui/react** (Base UI, *not* Radix) — import primitives as `import { X } from "@base-ui/react/x"`.
- `cn` comes from the npm package `"cn"`, not `@/lib/utils` (which just re-exports it).
- New ui components: `npx shadcn add <component>` respects `components.json` aliases (`@/components`, `@/hooks`, `@/lib` → `src/*`); path alias `@/*` maps to `./src/*`.
- Icons: `lucide-react`. Fonts: next/font (Josefin Sans) in `src/app/layout.tsx`.

---

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
