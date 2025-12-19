# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a **multilingual Next.js 15** money transfer platform supporting Polish (pl), English (en), and Ukrainian (ua) languages with internationalization built into the routing structure.

### Key Architecture Patterns

**Internationalization (i18n)**
- Uses App Router with dynamic `[lang]` segments: `/app/[lang]/`
- Middleware automatically redirects users to appropriate locale based on browser preferences
- Dictionary system loads translations from `/dictionaries/{locale}.json`
- Default locale is Polish (`pl`)

**Component Organization**
- `components/ui/` - Shadcn/ui components (button, card, form, etc.)
- `components/util/` - Utility components (container, text, animations)  
- `components/main/` - Main page sections (hero, bento-section, feature-section)
- `components/` - Root level components (navbar, footer, testimonials)

**Data & Content**
- Uses dictionary pattern with `getDictionary()` function for translations
- Server-only imports ensure dictionaries are loaded on server side
- Metadata generation is locale-aware for SEO

### Technology Stack

- **Framework**: Next.js 15 with App Router and Server Components
- **Styling**: Tailwind CSS 4 with custom utilities
- **UI Components**: Radix UI primitives + custom shadcn/ui components  
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Email**: Resend API with React Email templates
- **Icons**: Lucide React
- **TypeScript**: Strict mode enabled

### File Structure

```
app/[lang]/          # Internationalized routes
components/
  ui/                # Shadcn/ui components  
  util/              # Utility components
  main/              # Page section components
lib/
  dictionary.ts      # Translation loading
  utils.ts           # Utility functions
  constants.ts       # App constants
dictionaries/        # Translation files (pl.json, en.json, ua.json)
styles/
  tailwind.css       # Global styles
```

### Important Notes

- TypeScript build errors are ignored in production builds (`ignoreBuildErrors: true`)
- Uses `server-only` imports for dictionary loading
- Middleware handles locale detection and routing
- All pages are under `[lang]` dynamic segment for i18n