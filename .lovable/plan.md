# Al-Aswani — Bilingual Travel Landing Page

The project is currently a blank TanStack Start template. I'll build the entire single-page experience from scratch as a premium, editorial torn-paper collage with full Arabic (RTL) and English (LTR) support, baking in every correction you listed.

## Visual Direction
- **Mood:** editorial magazine × luxury adventure brand × handmade paper collage. Airy, sunlit, premium, emotional — never corporate.
- **Palette (added as tokens in `styles.css`):** sky blue, cloud white, sand beige, grass green, warm brown, dark elegant text. Calm and muted, not neon/glossy.
- **Typography:** elegant serif display for headlines + clean sans for nav/labels/cards. Arabic gets a proper Arabic serif/display + Arabic sans so it reads native, not mirrored. Fonts loaded via `<link>` in `__root.tsx` (Google Fonts), never `@import` in CSS.

## Torn-Paper Cut — the key fix
The cut must happen **inside the section's own color**, dissolving at the section's bottom edge into the next section (like the reference) — not a white rip floating in the middle of a blue block.
- Build a reusable `TornEdge` component rendered at the **bottom of each section**, colored to match the section it sits in, with an organic irregular hand-torn edge (layered SVG path + soft paper texture/shadow, slight fuzzy fiber feel — not a single clean jagged SVG).
- The edge color = current section color, overlapping onto the next section so the transition reads as paper physically ripped and stacked.
- Applied consistently at every section boundary (blue→white, white→scenic, etc.), plus subtle torn framing around image cutouts.
- This replaces the "white cut in the middle of the blue" problem across **all** sections.

## Page Sections (long vertical scroll)
1. **Hero** — soft blue sky, scenic torn-paper-staged cutout, large serif headline (left for LTR / right for RTL), small descriptive copy, pill CTA, minimal nav + language switcher + logo (top-left LTR / top-right RTL). Bottom dissolves into a blue torn edge.
2. **Find Your Perfect Trip** — light paper, floating image objects, large spaced editorial text, tourism + transport promise.
3. **Services / Packages** — scenic background, staggered tilted postcard cards (Tourist Trips, Transportation, Professional Arab Drivers, Hotel Booking) with soft shadows, hover lift, gentle drift.
4. **Travel Lifestyle / Human Moment** — full-width cutout of a **man lying on grass** (replacing the woman), integrated with torn-paper boundary. **His shoes must be fully visible** (no cropped feet). Caption: "Leave everything to us. Lie back, breathe, remember." / "اترك كلّ شيء لنا. استلقِ، وتنفّس، وتذكّر."
5. **Brand Promise** — scenic full-width value statement (trusted Europe tourism, NL→Europe transport, Arabic-speaking drivers, hotel booking) + subtle CTA.
6. **Testimonials** — white paper, postcard/note cards with avatar circles, names, short reviews. The "Stories from our guests" / "قصصٌ سمعناها من ضيوفنا" section uses **Khalid Ahmed / خالد أحمد with a man's portrait** (replacing نور الهدى).
7. **Final CTA / Footer** — closing scenic section, large elegant closing text, small image panel, social icons, footer links, and the contact phone **+31 6 44444226**.

## Bilingual / RTL System
- A lightweight i18n setup: `LanguageContext` holding `lang` (`ar`/`en`) + `dir`, with a single `translations` data module (all copy for both languages, naturally adapted — not literal).
- `dir` and `lang` set on `<html>` (via root) and a wrapper so the **entire layout flips** (flex/grid order, text alignment, logo side, arrow/icon direction) — not just text.
- Header language switcher shows `AR / EN`, toggles direction live.
- Arabic copy uses Modern Standard Arabic, editorial tone, adapted headlines and microcopy. Phone number identical in both.

## Motion (Framer Motion / `motion`)
Refined and atmospheric: soft card hover-lift, slight button scale, gentle hero parallax, drifting card cluster, scroll reveals, paper layers fading/sliding in. Nothing flashy or fast.

## Imagery
Generated cutout-style travel assets (scenic landscapes, postcard destinations, the reclining man with visible shoes, portraits incl. Khalid Ahmed). Treated as feathered cutouts with soft drop shadows and occasional paper frames — no rectangular photo boxes. Descriptive bilingual alt text.

## Responsiveness & Accessibility
- Desktop: full layered collage. Tablet: reduced complexity, torn edges kept. Mobile: elegant vertical stacking, controlled headline sizes, visible switcher, swipe/stack card groups, no harmful overlaps.
- Readable contrast, keyboard-navigable nav/buttons, accessible language switcher, semantic HTML, single H1, SEO meta + JSON-LD.

## Technical Notes
- Componentized: `Header`, `Hero`, `TornEdge`, `ServiceCard`, `PostcardCard`, `Testimonial`, `Footer`, section components, `LanguageContext`, `translations.ts`.
- Frontend-only (no backend needed for a landing page). All content in `index.tsx` composed from section components.
- New color/texture tokens added to `src/styles.css`; fonts via root `<link>`.

I'll generate the required images, build all sections, verify the torn-edge transitions and RTL flipping in the preview, and confirm the three content fixes (man with shoes, Khalid Ahmed, phone number) appear in both languages before finishing.