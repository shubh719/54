# Landing Page Design Specification
### Agency Landing Page - Minimalist & Clean Theme

---

## 1. Design Tokens

### 1.1 Theme
**Minimalist and Clean**: generous whitespace, high contrast, no visual clutter, content-first hierarchy. Every element should earn its place; when in doubt, remove rather than add.

### 1.2 Colour Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#ffffff` (white) | Page background, card backgrounds, nav background |
| Primary | `#000000` | Primary CTA buttons, headings, key accents |

**Shared Black Scale** (use for hierarchy, states, and structure; avoid introducing new colours):

| Token | Hex | Suggested Usage |
|---|---|---|
| black-50 | `#fafafa` | Section alt-background (subtle separation between white sections) |
| black-100 | `#f5f5f5` | Card backgrounds, input backgrounds, hover surface |
| black-200 | `#e6e6e6` | Borders, dividers, table lines |
| black-300 | `#d6d6d6` | Disabled borders, subtle strokes |
| black-400 | `#a5a5a5` | Disabled text, placeholder text |
| black-500 | `#767676` | Secondary/muted text (captions, meta info) |
| black-600 | `#575757` | Body text (secondary emphasis) |
| black-700 | `#434343` | Body text (default paragraph colour) |
| black-800 | `#292929` | Subheadings |
| black-900 | `#1a1a1a` | Near-black for large headings (softer than pure black) |
| black-950 / Primary | `#000000` | Headings, primary buttons, icons, nav logo, footer background (optional) |

**Usage principles:**
- Background stays white (`#ffffff`) throughout; use `black-50` sparingly to separate adjacent sections without introducing colour.
- Text hierarchy uses the black scale rather than opacity: e.g. headings `#000000`/`black-900`, body `black-700`, captions/meta `black-500`.
- Borders and dividers use `black-200`; never use pure black for hairlines (too harsh against white).
- Reserve pure `#000000` for high-intent elements: primary buttons, active states, icons that need to command attention.
- Contrast is inherently strong (black-on-white), so maintain WCAG AA minimum by using `black-700` or darker for any body copy, not lighter greys.

### 1.3 Typography - Geist Sans + Space Grotesk

Both families are self-hosted via `@fontsource` (latin subset, `font-display: swap`), imported in `src/main.jsx`.

| Role | Font | Weight | Size (desktop) | Size (mobile) | Colour |
|---|---|---|---|---|---|
| H1 / Hero headline | Space Grotesk | SemiBold (600) | 48-56px | 32-36px | `#000000` / cream (dark hero) |
| H2 / Section title | Space Grotesk | SemiBold (600) | 32-36px | 24-28px | `black-900` |
| H3 / Card title | Space Grotesk | Medium (500) | 20-22px | 18-20px | `black-900` |
| Body / Paragraph | Geist Sans | Regular (400) | 16-18px | 15-16px | `black-700` |
| Caption / Meta | Geist Sans | Regular (400) | 13-14px | 12-13px | `black-500` |
| Button label | Space Grotesk | Medium (500) | 15-16px | 15-16px | inverted (white on black, or black on white for secondary) |
| Nav links | Geist Sans | Medium (500) | 15px | 15px | `black-800`, `#000000` on hover/active |

**Guidelines:**
- Line height: 1.4-1.5 for body text, 1.1-1.2 for large headings.
- Letter-spacing: default for body; consider +0.02em on all-caps labels (e.g. "OUR WORK", "PROCESS") for a clean, structured feel.
- Geist Sans carries Regular (body) and Medium (labels/buttons); Space Grotesk carries the display weights (500-700). Keep both to their roles; use Medium sparingly on body text.
- Avoid italics; the minimalist theme favors weight and size contrast over style variation.

### 1.4 Iconography - Material Symbols (Outlined)
- Family: **Material Symbols Outlined**, self-hosted via `@fontsource` (Outlined variant only; avoid Filled, which reads heavier/busier against a minimalist theme).
- Colour: `#000000` on white backgrounds, or `#ffffff` when placed inside a black element (e.g. icon inside a filled circle button).
- Size: 24px standard (nav/inline), 32-40px for service/feature icons, 20px for small meta icons (e.g. checkmarks in FAQ).
- Stroke weight: consistent across the page; do not mix outlined and filled styles.
- Usage: Services section (one icon per service), Process section (one icon per step), Why Choose Us (one icon per value point), social/contact icons in footer.

### 1.5 Spacing & Layout
- Base unit: 8px grid (8 / 16 / 24 / 32 / 48 / 64 / 96px spacing scale).
- Section vertical padding: 96-120px desktop, 56-64px mobile; generous breathing room is core to the minimalist feel.
- Max content width: ~1200-1280px container, centered, with consistent side padding (24px mobile, 64-80px desktop).
- Grid: 12-column grid desktop; single column stack on mobile.

### 1.6 Components - General Style
- **Buttons:** Rectangular or slightly rounded (4-8px radius) to stay minimal; avoid full pill shapes, which can feel less "clean/structured." Primary = black background, white text. Secondary = white/transparent background, black border + text.
- **Cards:** White or `black-50` background, `black-200` 1px border (or a soft shadow instead of a border; pick one, not both, to avoid visual noise), 8-12px radius.
- **Dividers:** 1px `black-200` line, used sparingly between major sections if needed instead of background shifts.
- **Shadows:** If used at all, keep extremely subtle (e.g. `0 2px 8px rgba(0,0,0,0.04)`); minimalism favors borders/whitespace over drop shadows.

---

## 2. Page Structure with Design Notes

### 1. Navigation Bar
- Background: white, `black-200` bottom border (1px) on scroll or persistently for definition.
- Logo: black wordmark/icon, left-aligned.
- Links: `black-800`, Medium weight, black underline or colour shift on hover/active.
- CTA button: primary black button, right-aligned.

### 2. Hero Section
- Background: white (or `black-50` if you want subtle separation from nav).
- Headline: H1 style, `#000000`, generous line-height.
- Subheadline: body text, `black-600`, max-width ~600px for readability.
- CTA button: primary (black bg, white text).
- Visual: if using a mockup/image, frame it with a thin `black-200` border or subtle shadow to keep it grounded in the minimal aesthetic; avoid heavy drop shadows or gradients.

### 3. Trust Bar / Social Proof
- Background: `black-50` strip to visually separate from hero without breaking the white theme.
- Client logos: rendered in grayscale/black to stay consistent with the monochrome palette (avoid full-colour logos breaking the theme; use black/white versions if clients provide them).
- Stat text: Caption/meta style, `black-500`, centered.

### 4. Services Overview
- Layout: 3-4 column grid (desktop), stacked (mobile).
- Each card: icon (outlined, 32-40px, black) + H3 title + short body copy.
- Card background: white with `black-200` border, or `black-50` fill with no border; pick one consistently.

### 5. Featured Work / Portfolio
- Layout: larger cards/tiles since only 3 projects; give each one visual weight rather than cramming into a dense grid.
- Each project card: screenshot (full-bleed within card, `black-200` border/frame), client name (H3), one-line result (body, `black-600`), "View project" link with an arrow icon (Google icon: `arrow_outward` or `north_east`).
- Optional case-study callout: use a `black-50` background block with more generous padding to distinguish it from standard cards.

### 6. Process / How It Works
- Layout: horizontal step row (desktop) or vertical timeline (mobile).
- Each step: numbered marker (simple black circle/number, since this genuinely is a sequential process) + icon + short title + 1-line description.
- Connecting line between steps: thin `black-200` line.

### 7. Why Choose Us
- Layout: 3-4 column grid, icon + short heading + 1-2 line description, same visual pattern as Services for consistency.
- Icons: outlined, black, 32px.

### 8. Testimonials
- Layout: single centered quote (if few testimonials) or simple horizontal cards.
- Quote text: H3-ish size but Regular weight, `black-800`, italics avoided per typography guidance; use size/weight for emphasis instead.
- Attribution: name (Medium, `black-900`) + business (caption, `black-500`).
- If no testimonials yet: use a quiet, neutral placeholder card ("Client feedback coming soon") styled in `black-50` so it doesn't look like a broken/empty section.

### 9. Pricing or Packages (optional)
- Layout: 2-3 column card grid.
- Featured/recommended package: black background card (inverted, white text) to draw the eye; other packages stay white with `black-200` border.
- Price: large SemiBold number, `#000000`.

### 10. FAQ
- Layout: accordion, single column, max-width ~800px centered.
- Question row: Medium weight, `black-900`, with a `add`/`remove` (or `expand_more`/`expand_less`) Google icon on the right, black.
- Answer text: body style, `black-600`.
- Divider between items: 1px `black-200`.

### 11. Final CTA Section
- Background: **inverted** (black `#000000` background with white text and a white/outline button); this is the one place to break from the white background, creating a strong visual bookend and sense of urgency/finality.
- Headline: white, H2 scale.
- Button: white background, black text (inverse of primary button elsewhere).

### 12. Footer
- Background: white or black-950 (`#000000`); choose one consistently; if black, invert all text/icons to white/`black-300`.
- Content: contact info, social icons (outlined, 20-24px), nav links (caption/body size), copyright (caption, `black-400`/`black-500`).

---

## 3. Accessibility Notes
- Black-on-white text combinations in this palette all exceed WCAG AA contrast; maintain this by never using anything lighter than `black-500` for text meant to be read as body copy (reserve `black-400` for disabled/placeholder only).
- Ensure buttons have a visible focus state (e.g. 2px outline offset in `black-600`) for keyboard navigation.
- Icon-only buttons (e.g. FAQ expand icon, social icons) need `aria-label`s since colour/shape alone won't convey meaning to screen readers.

---

## 4. Notes / Open Items
- Client logos in the Trust Bar should be provided in monochrome (or converted) to preserve the palette.
- Confirm whether the Final CTA and Footer should both be black, or whether one should stay white to avoid too much heavy black at the bottom of the page; recommend keeping Footer white/black-50 if Final CTA is black, so the inversion still feels intentional rather than repetitive.