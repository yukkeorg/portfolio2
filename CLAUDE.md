# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website built with [Astro](https://astro.build) (v6). The repository currently holds the unmodified Astro "Basics" starter — `src/pages/index.astro` renders a single `Welcome` component. Treat it as a greenfield site: real content, layouts, and pages still need to be built out.

## Commands

```sh
bun dev      # local dev server at localhost:4321
bun build    # production build to ./dist/
bun preview  # serve the production build locally
bun astro check   # type-check .astro files (run before committing)
```

There is no test runner or linter configured yet.

## Package manager

Use **bun** exclusively. `bun.lock` is the authoritative lockfile — keep it in sync. Do not use pnpm or npm.

## Architecture

Standard Astro layout under `src/`:

- `pages/` — file-based routing; each `.astro` (or `.md`) file becomes a route.
- `layouts/` — shared page shells wrapping `<slot />` content.
- `components/` — reusable `.astro` components.
- `assets/` — images/SVGs imported through Astro's asset pipeline (optimized via sharp).
- `public/` — served as-is at the site root, unprocessed.

TypeScript uses Astro's `strict` config (`tsconfig.json` extends `astro/tsconfigs/strict`). `pnpm-workspace.yaml` enables native builds for `esbuild` and `sharp`.
