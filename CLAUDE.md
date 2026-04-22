# Claude Code — Client Site Instructions

This repo is a client website cloned from the master template.
Read `client-input.md` before touching any code. Every edit must reflect that file.

---

## Stack

- React + TypeScript + Vite (client at `client/src/`)
- tRPC + Drizzle ORM (server at `server/`)
- Tailwind CSS + shadcn/ui (`components.json`)
- Wouter for routing
- Framer Motion for animations
- Design system: **Velocity Minimalism** — keep it unless told otherwise

---

## Pages (all in `client/src/pages/`)

| File | Route |
|---|---|
| Home.tsx | / |
| About.tsx | /about |
| Services.tsx | /services |
| HowItWorks.tsx | /how-it-works |
| Payments.tsx | /payments |
| FAQ.tsx | /faq |
| Contact.tsx | /contact |

Add or remove pages based on `client-input.md`. Update routes in `client/src/App.tsx` and nav links in `client/src/components/Navbar.tsx` to match.

---

## Components to update for every client

- `client/src/components/Navbar.tsx` — business name, logo initial, nav links, phone number
- `client/src/components/Footer.tsx` — business name, tagline, services list, phone, email, address, license/credential line
- `client/src/components/GoogleMap.tsx` — embed URL with the real address

---

## Replacement rules

- Replace ALL hardcoded business name, city, phone, email, address, license numbers
- Replace all services, stats, testimonials, and FAQs with content from `client-input.md`
- Replace all page `<title>` and meta description content
- Replace all CTAs with the CTA defined in `client-input.md`
- Replace hero image URL only if a new one is provided — otherwise keep the slot and add a TODO comment
- Colors: use `client-input.md` primary/secondary. Update Tailwind classes throughout (`#1A56DB` → new primary, `#3B82F6` → new secondary, keep `#0A0A0F` footer unless told otherwise)
- Logo initial in Navbar and Footer: use the first letter of the business name

## What NOT to change

- The Velocity Minimalism layout structure and animation patterns
- The tRPC/Drizzle server setup (unless a new feature requires it)
- shadcn/ui component library wiring
- Auth system (`_core/`) unless explicitly asked

---

## Quality bar

- Zero placeholder or demo content in the final output
- Every page must read as written for this specific client
- If critical info is missing from `client-input.md`, add a `// TODO:` comment at the exact location
- Do not add features, pages, or sections not listed in `client-input.md`
