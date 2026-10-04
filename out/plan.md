# Plan — PRX Research redesign (design language of researchdesignagency.com, content of prxresearch.com)

Single-page site, React + TS + Vite + Tailwind + framer-motion. All copy is PRX Research content mapped onto the RDA design system. Source frames are 1376×651 after cropping browser chrome (top 85px, left 55px sidebar). SRC stills cite this cropped space.

## Layout strategy

[S1] Fixed top nav: brand caps text left ("PRX"), links About/Services/Trials/Contact center-right (24px gaps), action link right; nav renders white with mix-blend-difference so it reads black on white sections and light over the dark hero (still @1.5s) {core}
[S2] Design tokens: bg #FFFFFF, ink #000000, accent chartreuse #D7EC2D (one-shot sample @56.5s), thin separators #00000014; type = light humanist sans for display paragraphs (300 weight), heavy grotesque caps for section headings/wordmark; ALL-CAPS for list headings and meta labels {core}
[S3] Hero: full-viewport (100vh) B&W video, heading block bottom-left ~40px above bottom edge: display line "PRX Research" ~44px light, subtitle "Clinical Research — Advancing Healthcare Every Day" ~28px below it; both light/white ~80% opacity over video (still @1.5s) {core} (full-frame anchor)
[S4] About intro: white section, display paragraph ~48px, weight 300, line-height ~1.25, spans ~88% of page width, starts ~110px below nav; text: "PRX RESEARCH is a premier community-based clinical research institution advancing healthcare across North Texas — conducting trials with precision, compassion, and speed." (still @9s) {core}
[S5] About image row: B&W image left ~57% width, aspect ~16:10; right column ~28% width vertically centered paragraph ~18px + "Learn More" outlined pill button bottom-right of section (still @9.0–10.9s) {core}
[S6] Services list: 5 full-width rows ~180px tall, giant text ~72px weight 400, sentence case, thin 1px separators, left margin ~48px; rows: Clinical Trials / Lab Collection Studies / Sponsor Services / Medical Services / Community Engagement (still @20s) {core} (full-frame anchor)
[S7] Work grid → RESEARCH AREAS: 3 columns, item width ~28% of viewport, gaps ~30px, portrait images aspect ~3:4, caption row under each: caps title ~13px left ("CARDIOLOGY", "NEUROLOGY", "GI & HEPATOLOGY") + small meta right; "All Specialties →" link bottom-right (still @27.5s, captions @29.3s) {core}
[S8] Trials list: caps heading "LATEST TRIALS" ~56px; 3 rows: small index (01/02/03) left, caps title ~30px (wraps to 2 lines), right meta small caps gray "ENROLLING · 2026"; 1px separators; "Contact →" bottom-right (still @33.5s) {core}
[S9] Collage (Why PRX): dark section ~200vh worth of collage — B&W photo tiles as background strip (top ~40% of viewport), label stack top-left "PRX RESEARCH / NORTH TEXAS" white caps, giant display text "ADVANCING HEALTHCARE*" ~90px white over tiles, center portrait photo ~27% width overlapping tiles and white area below, right column paragraph ~18px white on black block: "PRX embraces innovation and collaboration to address the most pressing healthcare challenges…" + small stats lines (stills @46s, @46.7s) {core} (full-frame anchor)
[S10] Contact CTA: white section, paragraph ~20px max-width ~40ch: "Embarking on your journey to better health starts with a single step. Schedule your appointment now." + "GET IN TOUCH" outlined button ~170×48px, left-aligned (still @52.5s) {detail}
[S11] Footer: full-bleed #D7EC2D; link columns top (Company / Patients / Social / Hours, small caps headers ~12px, links ~14px); giant wordmark "PRX RESEARCH" bottom-left ~150px heavy caps black; drawn black sticker-style mark (microscope + flask motif) bottom-right ~200px tall; "© 2026 PRX Research" ~12px under mark (still @56.5s) {core} (full-frame anchor)
[S12] Sticker badge design: circular die-cut sticker ~170px — chartreuse ring band with rotated caps text "PRX • RESEARCH • ADVANCING HEALTHCARE", black center illustration (drawn SVG microscope motif), slight white outline (zoom @20.7s) {detail}

## Component breakdown (untagged — architectural)
- App: Nav, Hero, About, Services, Areas (work grid), Trials (posts), Collage, Contact, Footer
- hooks: useScramble (text decode), useMouseBadge (spring cursor-follow), scroll drivers via framer-motion useScroll/useTransform
- assets: client photos grayscale-filtered; /assets/hero.mp4 = client's own video; sticker/mark/logo drawn as inline SVG

## Design tokens
(see S2)

## Interactions & animations

[D1] Hero footage: full-bleed B&W film loop, hard-cut clips ~1–2s apart, no scroll/pointer coupling (source clip 0.0–2.7s; <video autoplay muted loop playsinline> with CSS grayscale; testid=hero-video; asset=/assets/hero.mp4) {core} {footage}
[D2] Hero exit blinds: as user scrolls out of hero, ~8 horizontal white stripes sweep over the video (scaleY top→bottom, staggered slightly), fully covering before the about section arrives; scroll-coupled, reverses with scroll (source clip 2.7–3.8s; framer-motion useScroll; testid=hero-blinds) {core} {render}
[D3] Intro word-fill: intro paragraph starts at ~15% opacity per word and fills to 100% word-by-word as scroll advances; scroll-coupled both directions (source clip 3.8–6.0s; framer-motion word spans + useScroll; testid=about-wordfill) {core} {render}
[D4] About image treatment: chartreuse block sweeps across the B&W image on entrance (translateX reveal ~0.8s) then rests as a partial color block; scroll-triggered once (source clip 9.2–11.9s; framer-motion; testid=about-block) {detail} {render}
[D5] Service row hover: black bar fills the row (wipe from left, ~250ms), text flips to white (source clip 19.9–21.0s; CSS transform on ::before layer; testid=svc-row-1) {core} {render}
[D6] Sticker badge on services: badge appears at cursor over hovered row, follows cursor X with spring lag, spins continuously ~6s/rev (source clip 19.9–22.5s; mousemove + framer-motion spring + rotate loop; testid=svc-badge) {core} {render}
[D7] Service row hover text scramble: letters cycle random glyphs ~0.5s then settle (source clip 21.3–22.0s "pshpscG"; custom hook; testid=svc-row-2) {detail} {render}
[D8] Area card hover: image scales to ~1.06 over ~400ms ease-out, caption stays (source clip 28.3–29.3s; CSS transition; testid=area-card-1) {detail} {render}
[D9] Trial row hover: chartreuse sweep crosses row left→right then row settles to black fill with white text; reverses on leave (source clip 31.7–33.5s; two-layer wipe; testid=trial-row-3) {core} {render}
[D10] List entrance: trial rows enter with stagger + text scramble decode as they scroll into view (source clip 29.9–31.0s; whileInView + scramble; testid=trial-row-1) {detail} {render}
[D11] Collage parallax: center photo translates upward slightly slower than page scroll (subtle, reverses with scroll); collage tiles hold (source clip 41.5–47.0s; useScroll transform; testid=collage-photo) {detail} {render}
[D12] Footer curtain: footer is position:fixed behind page; last section scrolls up revealing it like a curtain; wordmark rides with footer (source clip 52.3–54.3s; sticky/fixed + z-index; testid=footer) {core} {render}
[D13] Button/link hover roll: "Learn More" and "GET IN TOUCH" duplicate their label vertically on hover (text rolls up, duplicate slides in, ~300ms) (source: duplicated label text "Learn MoreLearn More" in site markup, still @10.9s; CSS transform; testid=learn-more) {detail} {render}

## Verification notes
- Content substitution is intentional (client redesign): SRC|REP composites judge layout/typography/motion parity, not word-for-word copy identity.
- Client assets: hero.mp4 (their own film), about/services/why-research JPGs, grayscale via CSS filter.
