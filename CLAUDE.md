# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Apavayan Sinha built with Next.js 15, featuring a modern 3D interactive background using React Three Fiber, animated UI components with Framer Motion, and a comprehensive component library built on Radix UI primitives.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts the Next.js development server with Turbopack enabled for faster builds.

### Building for Production
```bash
npm run build
```
Creates an optimized production build.

### Starting Production Server
```bash
npm start
```
Runs the production build locally.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues. ESLint is configured with Next.js and TypeScript presets.

## Architecture

### Directory Structure

- **src/app/** - Next.js App Router pages and layouts
  - **api/** - API routes organized by feature (about, contact, data, experiences, projects, skills)
  - Each API route returns data from corresponding models

- **src/components/** - React components
  - **ui/** - Radix UI-based primitives (47 components) using shadcn/ui patterns
  - Page section components: `About.tsx`, `Contact.tsx`, `Experience.tsx`, `Hero.tsx`, `Projects.tsx`, `Skills.tsx`
  - 3D components: `FloatingCube.tsx`, `FloatingText.tsx`, `ParallaxScene.tsx`
  - Utilities: `Navigation.tsx`, `theme-provider.tsx`, `typewriter.tsx`

- **src/models/** - TypeScript data models and static content
  - `about.ts`, `experiences.ts`, `projects.ts`, `skills.ts`
  - These files export both TypeScript interfaces and actual data objects

- **src/lib/** - Utility functions
  - `utils.ts` - `cn()` helper for merging Tailwind classes
  - `api.ts` - `fetchApiData()` wrapper for API calls with error handling

- **src/hooks/** - Custom React hooks
  - `useApiData.ts` - Client-side data fetching with loading/error states
  - `use-mobile.tsx` - Mobile detection hook

- **src/context/** - React Context providers
  - `SceneContext.tsx` - Manages Three.js scene reference for 3D components

- **src/company/logos/** - Static assets for company logos

### Key Architectural Patterns

**Data Flow**
1. Static content is defined in `src/models/` as TypeScript objects
2. API routes in `src/app/api/` expose this data via REST endpoints
3. Client components use `useApiData` hook or `fetchApiData` utility to consume the API
4. Server components can import models directly

**Component Organization**
- UI primitives are in `src/components/ui/` - these are low-level, reusable components
- Page sections are top-level components in `src/components/` - these compose UI primitives
- 3D/Three.js components are prefixed with "Floating" or "Parallax"

**3D Scene Architecture**
- `SceneContext` provides a shared ref to the Three.js scene across components
- `ParallaxScene` is the main 3D canvas component rendered in the root layout
- Scene has mouse-tracking parallax effect with smooth interpolation
- Uses `@react-three/fiber` for declarative Three.js, `@react-three/drei` for helpers

**Styling System**
- Tailwind CSS with custom configuration in `tailwind.config.ts`
- CSS variables for theming (supports light/dark mode via `next-themes`)
- `class-variance-authority` (cva) for component variants
- `cn()` utility from `src/lib/utils.ts` for conditional classes

**Type Safety**
- Strict TypeScript enabled
- Path alias `@/*` maps to `src/*`
- Models define interfaces and export typed data
- API responses use generic `ApiResponse<T>` type

### Important Configuration

**Path Aliases**
- `@/*` → `src/*` (configured in tsconfig.json)
- Always use this alias for imports within the codebase

**Fonts**
- Inter (sans-serif) - CSS variable: `--font-inter`
- Roboto Mono (monospace) - CSS variable: `--font-roboto-mono`
- Both loaded via `next/font/google` in root layout

**SEO & Analytics**
- Comprehensive metadata in `src/app/layout.tsx`
- JSON-LD structured data for Person schema
- Google Analytics integrated via `@next/third-parties/google`

**ESLint Rules**
- Extends `next/core-web-vitals` and `next/typescript`
- `@typescript-eslint/no-empty-object-type` rule disabled

### Data Models Pattern

When adding new content sections:
1. Create TypeScript interface and data in `src/models/[section].ts`
2. Create API route in `src/app/api/[section]/route.ts` that returns the model data
3. Create page component in `src/components/[Section].tsx` that fetches and displays data
4. Import and use component in main page

### Working with UI Components

UI components follow the shadcn/ui pattern:
- Located in `src/components/ui/`
- Built on Radix UI primitives with Tailwind styling
- Use `cn()` for conditional class merging
- Support variants via `class-variance-authority`
- When adding new UI components, follow existing patterns in the ui/ directory

### 3D Development Notes

The background scene uses:
- React Three Fiber for React integration with Three.js
- Drei for common helpers (Environment, OrbitControls)
- Mouse-tracked parallax with lerp interpolation for smooth movement
- Scene reference shared via Context to allow components to access the Three.js scene
- Fixed positioning with `pointer-events-none` to keep it in background
