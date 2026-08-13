# AGENTS.md — FiveFour website

Living source of truth for this project's current state. The actual code is always the final authority; update this file after any major design change, feature, structural change, or content update, and never leave outdated info here.

## Project purpose

Static one-page marketing site for **FiveFour**, a web design agency selling clean, mobile-first websites to Indian small-business owners (shops, cafes, gyms, local services) at honest one-time INR prices with WhatsApp-first communication. Goal: a visitor understands the offer in seconds and starts contact via the form or WhatsApp.

## Tech stack

- Vite 8 + React 19 (JSX, no TypeScript) + Tailwind CSS v4 (via `@tailwindcss/vite`), static site, no backend/CMS.
- Fonts self-hosted via `@fontsource`: Geist Sans (400/500, body), Space Grotesk (400–700, display), Material Symbols Outlined (400). All imported in `src/main.jsx`; glyphs rendered via `Icon.jsx` (`.ms` class in `index.css`).
- Scripts: `npm run dev` / `build` / `preview`. No lint or test setup.

## Structure

- `index.html` — shell + meta/OG tags + a "direction contract" comment (brand thesis, palette, story).
- `src/App.jsx` — composes all sections in order inside `<main>`; also skip-link and fixed grain overlay.
- `src/index.css` — the design system: `@theme` tokens, `.container-site`, `.section-pad`, all `.btn-*` variants, `.input*`, `.label`, `.h2`, `.section-label`, `.reveal`, `.grain`, `.hero-rise`, `.marquee-track`, `.process-line`, mobile-menu overlay animation, scrollbar styling, `prefers-reduced-motion` handling, and short-viewport (`max-height: 700px`) tightening rules.
- `src/components/` — one file per section (Nav, Hero, Services, Portfolio, Process, WhyChooseUs, Testimonials, Pricing, Faq, Contact, FinalCta, Footer) + shared `Icon`, `Logo`, `SocialIcon` (hand-drawn monochrome SVGs matching Material stroke language), `Reveal` (IntersectionObserver fade+rise).
- `src/data/` — **content source of truth; edit these files, not components**: `site.js` (name/email/WhatsApp number/socials/location, `whatsappUrl()`, `FORMSPREE_ENDPOINT`, `navLinks`, `CTA_CONTACT`), `pricing.js`, `services.js`, `projects.js`, `process.js`, `why.js`, `testimonials.js`, `faqs.js`.

## Page sections (in order)

1. **Nav** — sticky white header, desktop links with underline hover; mobile: full-screen black overlay menu (numbered links, staggered `hero-rise` entrance, body scroll lock + `inert` on background for a11y, focus managed).
2. **Hero** — black-950, centered type, radial white glow, `hero-rise` staggered entrance, key-benefit pills (₹4,999 / 7-10 days / WhatsApp-first), inverse CTAs, looping marquee ("Web Design · Development · SEO · Launch") pinned to the fold.
3. **Services** — white; asymmetric 6-card grid (featured black card spans 4 cols/2 rows).
4. **Portfolio** (`#work`) — black-950; 3 dark tiles with tag chips (invert to white on hover) and a "Visit Website" sweep-fill button; disabled state when no URL.
5. **Process** — white; 4 numbered steps; vertical rail through circle centers on mobile, single horizontal rail on desktop (`lg:before`); wrapped in staggered `Reveal`.
6. **WhyChooseUs** — black-950; numbered editorial list rows (01–04), no cards.
7. **Testimonials** — white; horizontal `snap-x` scroll-snap carousel on smaller screens, 3-column grid on large screens, initial-avatar medallions.
8. **Pricing** (`#pricing`) — black-950; 3 cards on cream background (Growth = "Most Picked" ring, desktop lift). Content mirrors `fivefour-pricing.md`.
9. **FAQ** — white; single-open accordion, `grid-template-rows` expand animation, `add`/`remove` icons.
10. **Contact** (`#contact`) — black-950; Formspree form (dark inputs) + contact list; success/error states, inline validation.
11. **FinalCta** — black-950 with giant faded "54" watermark; single CTA plus short support line.
12. **Footer** — white; logo + socials, Explore links, contact info, copyright.

## Design system

- **Colors**: strict monochrome — `black-50`→`black-950` scale (black-950 is `#0a0a0a`, not pure black) + `cream #f1efe9` (light text on dark surfaces, pricing cards). No other colors, ever.
- **Typography**: Space Grotesk for all headings/display and button labels (uppercase, `tracking-[0.18em]` on `.btn`); Geist Sans for body/captions. `.h2` uses fluid `clamp()` sizes.
- **Radius**: controls 6px, cards 14px, medallions full-round. Sharp-ish, no pills except badges/avatars.
- **Spacing**: 8px grid; `.section-pad` = `py-20 md:py-32`; `.container-site` = max-w 1240px, `px-6 md:px-16`.
- **Buttons**: `.btn-primary` (black), `.btn-secondary` (outline), `.btn-inverse` / `.btn-inverse-outline` (for dark sections), `.btn-sweep` (portfolio white-fill sweep), sizes `btn-sm/lg`. Active state scales to 0.97.
- **Motion**: `Reveal` scroll reveals (fade+rise, staggered via inline delay), `hero-rise` entrance, infinite marquee (pauses on hover), FAQ grid-row accordion. All respect `prefers-reduced-motion`.
- **Section rhythm**: white / black-950 alternate; section intro = `section-label` (small uppercase with dash) or plain label + `.h2` + one muted paragraph, max-w-2xl, left- or center-aligned.
- **Z-index scale**: header 40, mobile menu 50, grain 60.

## Content & placeholders (marked as such in code comments)

- **Real**: 2 portfolio projects (Society Meter App, Gurukul Tuition Classes — live Vercel URLs in `projects.js`); pricing/FAQ copy (consistent with `fivefour-pricing.md`).
- **Placeholders — must be replaced before real use**: testimonials in `testimonials.js` (UI says "Sample quotes"), 3rd portfolio card ("Your Next Project"), `site.email`, WhatsApp number, social URLs, Formspree endpoint.
- **Contact form**: `FORMSPREE_ENDPOINT` in `src/data/site.js` is `""` → demo mode (fake 700ms submit, shows success). Paste a Formspree endpoint there to activate; no keys in client. The UI now hides or soft-disables WhatsApp/social actions when those values are still placeholders so users do not hit dead links.
- **Pricing**: `src/data/pricing.js` must stay in sync with `fivefour-pricing.md` (verbatim source). FAQs reference the same numbers (₹4,999 / ₹11,999 / from ₹18,000; 7-10 / 12-18 days / 3-6 weeks; ₹500-800 `.in` domain; Netlify/Vercel free tier).

## Constraints / do not change casually

- Brand commitments: name "FiveFour", black/white + cream only, no new fonts, Outlined Material Symbols only (never Filled).
- Keep data content in `src/data/*` files; components read from them.
- Keep pricing/FAQ copy consistent with `fivefour-pricing.md`.
- Don't remove a11y machinery: skip-link, `inert` + focus management in Nav, `aria` attributes, focus-visible outlines, reduced-motion rules.
- Project tiles: leave `url` empty until a live link exists (button renders disabled).

## Known limitations / unfinished

- No deployment config in repo (no netlify.toml/vercel.json); remote is `github.com/shubh719/54`. Portfolio live sites are hosted on Vercel free tier.
- No real testimonials, client logos, social URLs, WhatsApp number, or Formspree endpoint yet.
- No OG image, no analytics.

## Reference docs

- `Design.md` — full page design spec (tokens, structure, a11y). Spec is white-dominant; the built site evolved to alternating white/black-950 sections, cream accents — the code (and this file) win over the spec on conflicts.
- `PRODUCT.md` — product positioning, principles, constraints.
- `fivefour-pricing.md` — verbatim pricing source.
