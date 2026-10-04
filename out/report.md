# PRX Research — 5-Page Redesign (researchdesignagency.com design language)

## Shipped

Redesign of prxresearch.com in `prx-v2/app` (React 19 + TypeScript + Vite + Tailwind v4 + framer-motion 14 + React Router HashRouter), replicating the **design language of researchdesignagency.com** (from the client's 58s screen recording) while keeping the **content and palette of the client's own site** from the 5 supplied screenshots: mostly white, teal **#0C8873** as the accent (mapped onto RDA's chartreuse role), deep navy **#0D1B26** for dark sections (mapped from RDA's black), and orange **#F97A20** reserved for buttons.

**RDA signature elements replicated (verified in browser):**
- 100svh B&W film hero (client's own hero.mp4) with light display "PRX Research" and white blinds that sweep down as you scroll away (D2)
- mix-blend-difference caps nav that inverts over light/dark sections + outline "APPOINTMENT" pill (S1)
- teal marquee strips ("Advancing Healthcare Every Day ✳ 100+ Clinical Trials …")
- scroll-driven word-fill manifesto paragraphs (D3) on Home and About
- giant service rows (Clinical Trials / Lab Collection Studies / Sponsor Services / Medical Services / Community Engagement) with deep-navy wipe fill, text flip, hover text-scramble (D5/D7) and a **spinning teal die-cut sticker** with ring caps text + drawn microscope mark that follows the cursor (D6)
- 3-column grayscale research-areas grid with captions and image zoom (S7/D8)
- "Latest Trials" rows with two-layer teal→navy sweep fill and ENROLLING meta (D9/D10)
- dark collage section: tile strip, "ADVANCING HEALTHCARE*" display type, parallax center photo, teal copy block with stats (S9/D11)
- RDA-style closing CTA, ruled stats grid with giant teal numerals, numbered list rows across About/Sponsors, 12 therapeutic-area rows on a dark section, index-numbered FAQ accordion with + rotation, contact page with giant info rows, underline form and grayscale map
- **curtain footer**: full-bleed teal, fixed behind the page and revealed as the content scrolls away — link columns, giant navy "PRX RESEARCH" wordmark, navy die-cut sticker with microscope mark (S11/D12)

**5 routed pages** (`#/` hash router for any static host): Home, About Us, Sponsors & Clinical Trials, FAQs, Contact. All copy transcribed from the client's screenshots/live site; hero video and photos are the client's own assets in `public/assets/`.

## Verified

- `tsc -b && vite build` clean; served at http://localhost:4173/.
- Browser-checked on all 5 pages: hero + blinds, word-fill mid-scroll state, service-row hover fill + cursor sticker, trials rows, collage, curtain footer, FAQ accordion, contact info rows/form/map.
- Two build-time fixes: removed unused imports; page-content wrapper made opaque (`bg-paper`) so the fixed footer only shows through the transparent reveal spacer (stacking bug found during verification). Sticker spin gated to hover to avoid a perpetual rAF loop.

## Verification limits

- The in-app browser's screenshot pipeline is flaky with constantly-repainting layers (autoplay video, infinite marquee). Verified by pausing/removing the video element during capture and retrying captures; production build is unaffected.
- Mobile layout was not pixel-verified (no viewport resize available in the harness); responsive classes are used throughout.

## Notes for the client

- **FAQ answers:** only the first two answers were visible in the captures; the other nine are standard clinical-trial placeholder answers to confirm (`src/data/content.ts`, commented).
- **"Latest Trials" rows** use therapeutic-area names as enrolling categories (no real trial list was provided) — swap in real study names when available.
- **Contact form** composes a pre-filled email to admin@prxresearch.com (no backend). Wire up FormSubmit/their backend if server-side delivery is wanted.
- Hover text-scramble, sticker spin, marquee speed and all colors are tokens in `src/index.css` / `src/data/content.ts` for easy tuning.
