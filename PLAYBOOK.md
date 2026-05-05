# The Buddy Buck Playbook

> **A portable methodology for building modern, story-led, lead-converting websites for owner-operator service businesses.** Distilled from buddybuck.com (a 23-year Duvall WA real-estate broker positioning as Jester + Expert) and the briefs that produced it. Apply to dbtrcamp.com and the next 19 sites Brett rebuilds.

This is the synthesis. The full source briefs live in `repo-docs/` (reference-grade extracts) and the live design tokens live in `design-system.md`.

---

## 0. WHAT THIS PLAYBOOK IS — AND ISN'T

**This is METHODOLOGY, not output.** Per-business work that is **always** done fresh from scratch, never inherited:

- **ICP research** — every business has its own customers with their own fears, budgets, decision triggers, and language. Buddy's "first-time seller" is not Eve's "softball parent." Discovery for each new site begins with a fresh ICP interview pass: who are the 3–6 personas, what is each one afraid of, what specific dollar/outcome do they want, what category default would they reject? Output: per-site `/content/brief/ICP.md`.
- **Brand style guide** — palette, typography, voice, photography direction, visual references. Buddy's blue + yellow + warmth is buddybuck-specific. DBTR's pink + yellow + bold-uppercase is DBTR-specific. Buddy's "Jester + Expert" is not DBTR's "Coach + Friend." Output: per-site `/content/brief/BRAND.md` and `/content/brief/DESIGN-DIRECTION.md` *modeled on* buddybuck's, never copy-pasted.
- **The 5 ICP-mapped lead magnets** — what each persona would actually download.
- **Real receipts** — the specific $42.16M, the specific 100.56%, the specific 41-five-star-reviews. These come from interviewing the owner, not from a template.
- **Voice samples** — the way Buddy says "I'll find out" is buddybuck. The way Eve says "show up ready to work" is DBTR. Capture per-business.

What IS portable verbatim from this playbook:

- The **frameworks** (StoryBrand + PAS + Dan Kennedy + Hormozi)
- The **page-level skeletons** (hero / problem / old-vs-new / value stack / proof / lead magnet / final CTA)
- The **tech stack** (Next.js 16 + React 19 + Tailwind v4 + shadcn/ui + framer-motion + MDX)
- The **repo conventions** (`/content/brief/` per page, `/content/blog/` MDX, `/AGENTS.md`)
- The **glassmorphism recipe** (retuned to brand palette)
- The **animated blob** background pattern
- The **drip-sequence cadence**
- The **quiz-as-content-engine** mechanic
- The **performance + a11y floors**

Per business, expect to spend roughly the first **5 days of every project** doing fresh ICP and brand-style discovery before any of this playbook gets applied. Templates that skip this step produce templated sites. Buddy's site doesn't feel like a template because it isn't.

---

## 1. THE BRAND THESIS

Every site we build needs a one-sentence positioning that sits at the intersection of two things the category usually treats as opposites.

For Buddy Buck: **Jester + Expert.** Real estate agents are usually one of two dead aesthetics — Luxury Cliché (gold serif, italicized "luxury professional") or Stock Template (Zillow blue, smiling family photo). Buddy is neither. He is funny *and* he has $42.16M in receipts. The thesis lives in every word and pixel.

For DBTR Camp: **Coach + Friend** would be the parallel — a softball camp that's ruthlessly competitive AND deeply caring, where Eve Buck (Olympic-level credentials) makes 8-year-olds laugh while teaching them mechanics most college pitchers don't know.

For each new client, the first deliverable should be a **two-word positioning that violates the category default.** The whole site flows from there.

---

## 2. THE COPYWRITING FRAMEWORK

Every long-form page on a buddybuck-style site follows this stacked framework:

| Layer            | Source                  | What it does                                                       |
|------------------|-------------------------|--------------------------------------------------------------------|
| **StoryBrand**   | Donald Miller           | Customer is hero, brand is guide. "You deserve X" not "We provide X." |
| **PAS**          | Direct response classic | Problem → Agitate → Solve. Let the reader feel the pain first.    |
| **Dan Kennedy**  | Direct response classic | Specificity (`100.56% sold-to-list`, not "great track record") + fear of the cost of inaction. |
| **Hormozi Value Stack** | $100M Offers      | List every component of the offer with $ value. Total >> price. The "Grand Slam Offer." |

### Page-level skeleton (use this for every long-form page)

```
HERO
├── Headline (one specific stat OR one specific promise OR one specific joke)
├── Subhead (the StoryBrand "you deserve X" + the implicit problem)
├── Primary CTA (book / call / download)
├── Secondary CTA (lower-friction alternative)
└── Stat ribbon (4 specific receipts)

THE PROBLEM (PAS)
├── Name the fear they actually have, in their words
└── Make it specific and visceral ("the sign in your yard when the leaves turn")

OLD WAY vs OUR WAY
├── Bullet column of category-default failures
└── Bullet column of how we're different (be specific, not generic)

THE GRAND SLAM OFFER (Hormozi)
├── 5–8 included components, each with a dollar value
├── Total stated value >> price
└── At least one risk-reversal guarantee ("if X doesn't happen, I'll do Y")

PROOF (stories, not slogans)
├── Named-client case studies with exact dollar outcomes
└── Specific narrative — names, dates, addresses, numbers

SOCIAL PROOF
├── Testimonial pulls (real reviews, attributed)
└── Star count / review count

LEAD MAGNET
├── Free PDF / checklist / worksheet specific to this page's intent
└── Email capture (optional — never gate the primary content)

FINAL CTA
├── Repeat primary CTA
├── Phone number as `tel:` link
└── Subhead tells them exactly what they'll get from the call
```

### Voice rules
- **Specific > vague.** `$250,000 over asking in 5 days` beats `we get great results`.
- **Named > anonymous.** `Scott and Erica Regal's Bellevue mid-century` beats `our recent clients`.
- **Concrete > abstract.** `Rita Moreno at City Hall picks up on the first ring` beats `we have great relationships`.
- **Funny > serious, but earn it with receipts.** The Jester only works after you've proven the Expert.
- **One CTA per section, repeated.** Never compete with yourself.

---

## 3. THE VISUAL SYSTEM

(Full token extract in `design-system.md`. Highlights:)

### Palette pattern
Two brand colors + four neutrals + one alert + one surprise accent. For Buddy:
- Brand pair: `#19469D` (Buck Blue) + `#FFDE69` (Duvall Yellow)
- Neutrals: `#0E1420` (ink) · `#1A1A2E` (charcoal) · `#FBF9F5` (bone) · `#E6EAF2` (mist) · `#8892A0` (fog)
- Alert: `#E40014` (red)
- Surprise: `#275A3A` (evergreen) — used sparingly for "success/landscape"

For DBTR, the parallel is: pink pair (`#D80D87` + `#FF68C3`) + yellow accent (`#E3FF38`) + purple accent (`#9157FF`) + the same neutral ladder.

### Typography pattern
Three or four families, never two. Buddy uses:
- **Display** (Inter / Neue Haas Grotesk): bold, tight tracking, brutalist scale (up to 128px)
- **Body** (Inter): variable, 1.6 line-height for reading
- **Editorial accent** (Playfair Display / GT Sectra): warm serif for pull quotes and storytelling
- **Handwritten** (Caveat): for signatures, marginal notes, the human "I'm a real person" touch
- **Monospace** (JetBrains Mono): for stats — `$42.16M` in mono feels engineered

For DBTR, swap in: Archivo (display) + Poppins (body) + a hand-coach-marker font for athlete callouts (e.g., Caveat or Permanent Marker).

### The glassmorphism recipe (transferable verbatim)
```css
.glass-dark {
  background: var(--brand-primary) / 0.15;     /* 15% alpha */
  border: 1px solid var(--brand-primary) / 0.3;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.glass-light {
  background: white / 0.7;
  border: 1px solid white / 0.5;
  backdrop-filter: blur(12px);
}
.glass {                                          /* hero overlay */
  background: var(--brand-primary) / 0.5;
  border: 1px solid white / 0.25;
  backdrop-filter: blur(2px);
}
```
**Rule:** only one glass element visible at a time. Otherwise it gets blurry-soup.

### Animated blob background
The secret-sauce element. A `@keyframes blob` with `transform: translate() scale()` cycling on 2–3 large blurred orbs (in brand colors at low alpha) drifting behind glass-dark cards. Creates the depth-of-field that makes the cards feel suspended.

### Gradient pattern
Tailwind v4's oklab interpolation makes brand-color gradients sing. The five used on buddybuck:
1. **Hero scrim**: `from-ink/0 via-ink/45 to-ink/55` (so white type stays legible over hero photos)
2. **Solid brand depth**: `from-brand from-brand to-brand` (looks 2D but isn't — the via stop creates subtle banding)
3. **Brand-to-darker**: `from-brand to-brand-dark` (CTAs, hero card backgrounds)
4. **Cool-to-warm off-white**: `from-mist to-bone` (section divider without hard line)
5. **Brand-to-bone diagonal**: `from-brand to-bone` (hero-to-content fade)

### Shadow philosophy
Apple-soft, not Material-hard. Default `--tw-drop-shadow-color: #00000059` (35% black) on tight 1–2px offsets. The glass surfaces don't need shadows — the blur does the work.

### Animation rules
- Every animation respects `prefers-reduced-motion`. Non-negotiable.
- `whileInView` with stagger for lists. Fade-up reveals.
- One hero-level GSAP/heavy animation maximum (the stat counter ticking up).
- 250–300ms feels best for transitions. Slower feels sluggish; faster feels jittery.

---

## 4. THE TECH STACK (locked, every site)

```jsonc
{
  "framework":   "Next.js 16+ App Router (Server Components by default)",
  "lang":        "TypeScript",
  "styling":     "Tailwind CSS v4",
  "components":  "shadcn/ui (Radix primitives — accordion, dialog, navigation-menu, select, separator, slot, label)",
  "animation":   "Framer Motion (scroll reveals, micro-interactions); GSAP only for hero-level complexity",
  "forms":       "react-hook-form + zod (typed, validated, accessible)",
  "icons":       "lucide-react",
  "blog":        "MDX in /content/blog/*.mdx with gray-matter frontmatter, remark for rendering",
  "fonts":       "next/font/local (Inter + Playfair + Caveat woff2 cached locally)",
  "deploy":      "Vercel (preview deploys per PR, edge for API routes)",
  "analytics":   "GA4 + privacy-first (PostHog or Plausible)",
  "lead-gen":    "API route → Google Sheets API + KVCore webhook + SendGrid drip",
  "utilities":   "clsx + tailwind-merge + class-variance-authority for component variants"
}
```

### Repo conventions (transferable)
```
/AGENTS.md           — short rules for AI coding agents (e.g. "this Next.js has breaking changes — read node_modules/next/dist/docs/ first")
/CLAUDE.md           — symlink/include of AGENTS.md
/content/brief/      — markdown briefs PER PAGE: HERO-COPY.md, ABOUT-COPY.md, FOR-SELLERS-COPY.md, etc.
/content/blog/       — MDX files
/docs/               — operational notes (e.g. quiz-webhook-setup.md)
/public/             — static assets (images organized by /hero, /blog, /testimonials, etc.)
/src/app/            — Next App Router pages
/src/components/     — UI components
/src/lib/            — utilities + content loaders
```

The `content/brief/*.md` pattern is the most valuable repo convention to adopt: **every page has a markdown brief that contains the headline, subhead, sections, and CTAs in plain English.** The component reads the brief. Non-developer clients can edit copy via Claude without touching React.

---

## 5. THE BLOG METHODOLOGY

Five concrete patterns, all using **story → lesson → CTA** as the spine. Source: `BLOG-STARTER-POSTS.md`.

### Pattern 1: The "I'll Find Out" Story (customer service standard)
- Hook: A weird customer request (the wallaby).
- Setup: Every competitor said "probably not."
- Twist: I made one phone call.
- Lesson: The whole game is being someone who picks up the phone.
- Word count: ~900.
- SEO: long-tail title with the unusual noun (`The Wallaby Story: ...`).

### Pattern 2: The Recognition / Serendipity Story (personal brand value)
- Hook: A specific public moment ("the milk aisle").
- Setup: Stranger recognizes me.
- Compound twist: Same person shows up unrelated later that day.
- Lesson: Personal brand consistency over years compounds.
- Word count: ~1,000.

### Pattern 3: The Improbable Coincidence Story (network value)
- Hook: A statistical anomaly (four Curtis Vikings on one closing).
- Setup: Reveal each character's connection.
- Lesson: "Known is better than best." Network = leverage.
- Word count: ~1,000.

### Pattern 4: The Give-First Story (referral economics)
- Hook: A small unselfish action.
- Receipts: 3+ transactions traceable to the action.
- Math: cost of action vs. revenue generated.
- Lesson: ROI only happens when you don't measure it.
- Word count: ~1,100.

### Pattern 5: The Case-Study Story (prove the process)
- Hook: A specific dollar outcome ("$250K over asking in 5 days").
- Setup: The challenge.
- Process: 7 numbered steps with named vendors.
- Receipts: Math at the end.
- Word count: ~1,200.

### Each blog post structure (copy this for every post)
```yaml
seo_title:    "[Specific outcome or unusual noun]: [What this teaches]"
url_slug:     /blog/<kebab-keywords-with-place-name>
meta_description: "[25-30 words]: who, what, why-clickable"
tags:         [primary-place, content-type, customer-type, specific-topic]
hero_image:   /images/blog/<slug>-hero.jpg          # 16:9, warm grade
word_count:   800–1,200
voice:        first-person, specific names + dollars + dates
ending:       primary CTA + phone tel: link + secondary CTA (download / share)
```

### Cadence
**Two posts per week minimum.** One story-led (pattern 1–4), one case-study or location guide (pattern 5 or neighborhood). Posts compound — the wallaby story appears in About, Buyers page, and the email drip.

### Local SEO neighborhood guide pattern
buddybuck has 13 neighborhood guides (Duvall, Carnation, North Bend, Snoqualmie, Sammamish, Kirkland, Redmond, Woodinville, etc.). Each:
- Title: `[Neighborhood] WA Real Estate: [Distinctive Phrase]`
- 1,500–2,000 words
- Median price + commute + schools + landmarks + actual streets
- Real estate-relevant facts a Zillow page would never say
- Internal links to the relevant For-Buyers / For-Sellers page

This is the single highest-leverage SEO move for a local service business. **For DBTR**: a `/locations/woodinville/`, `/locations/redmond/`, `/locations/sammamish/` set of guides for "softball camps near me" queries.

---

## 6. THE LEAD-GEN ENGINE

Source: `QUIZ-DESIGN.md`. The quiz is the highest-ROI page on the site — it does three jobs at once.

### Job 1 — Lead capture
Soft email gate (skippable but unlocks bonus PDF). Quiz-takers self-segment by path (seller / buyer / investor / curious). Each path scores them. **Every result drives to "book a 15-min call."** Scoring is rigged so nobody passes — even high-scorers get "you're sharp; the other side is sharper."

### Job 2 — Education
Each scenario is a real situation that reveals how complex the category is. By question 5, the user has internally agreed they need an expert.

### Job 3 — Content multiplication
Every scenario doubles as a standalone social post. **One quiz = 45 pieces of social content.** The quiz IS the content machine.

### Lead capture flow (transferable verbatim)
```
User submits email
  ↓
Next.js API route
  ├→ Google Sheets API (service account) writes row
  ├→ KVCore webhook (or HubSpot, etc.) tags lead: quiz-completed, path=X, score=N
  ├→ Zapier sends Slack/SMS to Buddy with lead summary
  ├→ SendGrid sends bonus PDF
  └→ Meta pixel fires for retargeting + lookalikes
```

### Drip sequence (7 emails over 14 days)
- Day 0: bonus PDF + first-touch from owner
- Day 1: "the 3 questions most people get wrong"
- Day 3: a story-led blog post
- Day 5: a case-study post
- Day 7: "ready to chat? calendar link"
- Day 14: 90-second personal video

### For DBTR
Build the parallel: **"The Softball Parent's Tryout-Day Checklist"** quiz. 10 scenarios about positioning, tryout politics, mechanical fixes. Soft email gate. Drip leads to the camp registration JotForm. Same flywheel.

---

## 7. THE IP / ICP (IDEAL CUSTOMER PROFILE)

The path-selection screen on the quiz reveals Buddy's full ICP map:

| Persona            | Trigger                          | Primary CTA              | Voice               |
|--------------------|----------------------------------|--------------------------|---------------------|
| **First-time seller** | Scared of pricing wrong       | Listing consultation     | Reassurance + receipts |
| **Move-up seller**    | Has been burned before        | Get home valuation       | Specificity + math  |
| **First-time buyer**  | Doesn't know what they don't know | Buyer strategy call   | Education + protection |
| **Relocating buyer**  | Out-of-area, anxious           | Calendar booking         | Local intel + warmth |
| **Investor**          | Numbers-driven, skeptical      | Strategy session         | DSCR/cap-rate fluency |
| **Curious shopper**   | Just kicking tires             | Download checklist       | No pressure         |

Each persona gets:
- A dedicated page or section
- A dedicated lead magnet (the checklist they'd actually download)
- A dedicated email sequence
- A dedicated set of testimonials (matched to their archetype)
- A dedicated quiz path

**Rule of thumb:** if you can't name the 5 personas, you're not done with discovery.

### For DBTR personas
1. First-time softball parent (8-year-old, scared of being a "bad sport" parent)
2. Travel-ball parent (12-year-old, looking for college-track edge)
3. High-school player (wants pitching/hitting fundamentals)
4. College-bound senior (resume-building, tape-quality coaching)
5. Coach (wants to sub-contract Eve for clinics)

Each gets its own lead magnet (e.g., "The 14-Year-Old's Mechanic Self-Check Video Series").

---

## 8. THE SEO APPROACH

Three pillars:

### A. Long-tail story-led titles
`How I Got $250,000 Over Asking On A Bellevue Inheritance (Full Case Study)` ranks for `bellevue inheritance home sale`, `over asking offer strategy`, `pre-list staging ROI bellevue`, etc. Long titles win in 2026 — Google rewards specificity.

### B. Neighborhood guides (local SEO compound interest)
13 guides covering every town in the catchment. Each ranks for `[town] real estate`, `[town] homes for sale`, `[town] WA real estate guide`. They become the most-trafficked organic pages within 6 months of launch.

### C. Schema.org JSON-LD for everything
- `RealEstateAgent` for the brand
- `Person` for Buddy (with `worksFor`, `award`, `knowsAbout`)
- `BlogPosting` for every blog post
- `LocalBusiness` for the office
- `FAQPage` for the buyer/seller pages with FAQ sections

For DBTR: `Organization`, `EducationEvent` per camp run, `LocalBusiness` for Northshore Athletic Fields, `Person` for Eve Buck, `FAQPage` for camp-info Q&A.

### What NOT to do
- No keyword-stuffed homepage (Google penalizes; Buddy's homepage has 17 words above the fold)
- No AI-template "[city] real estate guide" content (boilerplate, won't rank past page 2)
- No external blog platform — keep MDX in-repo for full control

---

## 9. REFERENCE SITES (the design north stars)

The five reference sites buddybuck reaches toward — use the same set when designing dbtrcamp:

1. **stripe.com** — gradient language, type hierarchy, pixel-level care
2. **linear.app** — restraint, dark surface, smooth interactions
3. **vercel.com** — bento grid, metric cards as design elements
4. **ramp.com** — editorial feel; "magazine with a product attached"
5. **mrbeast.com** — playful boldness, big type, big color, big personality

For DBTR specifically, add: **arc.net** (kinetic + colorful + serious-but-fun) and **teenage.engineering** (the bold-color-block confidence we want for a sports brand that respects its athletes).

---

## 10. PERFORMANCE & ACCESSIBILITY (locked floors)

Every site we build hits these or doesn't ship:

- LCP < 2.0s
- FCP < 1.2s
- CLS < 0.1
- TBT < 200ms
- First-load JS < 200KB
- WCAG 2.2 AA across the board (contrast, keyboard nav, screen reader, reduced motion, semantic HTML, focus states, language attribute)
- All images via `next/image` with explicit width/height
- All forms with React Hook Form + Zod + accessible error messages
- Phone numbers as `tel:` links
- 44×44 minimum tap targets on mobile
- One-thumb mobile navigation

---

## 11. THE OPERATING PHILOSOPHY (Buddy's three rules)

These aren't on the site, but they run the whole engine. Worth stealing for any brand:

1. **"Known is better than best."** Stop chasing competitive advantage in features. Start chasing it in trust.
2. **"You get paid for the good you do in inverse proportion to your expectation of being paid."** Give first. Don't track ROI. The math works exactly because you don't watch it.
3. **"I'll find out."** The four words that keep you in business. Whatever the weird question is, the answer is research, not "probably not."

For DBTR (Eve Buck), the parallel three rules: **"Coach the kid in front of you."** **"Make the work fun, not soft."** **"The mom is your client too."** Get these three out of Eve in a 30-min interview and they become the spine of every page.

---

## 12. THE WORK SEQUENCE (30-day site sprint)

Every new site Brett rebuilds follows this calendar:

### Week 1 — Discovery + Foundation
- Two-word positioning interview with the owner
- Pull 3–5 specific stats / receipts ($X sold, Y reviews, Z years)
- Identify the 5 ICP personas
- Lock palette + type scale + design tokens
- Build the Next.js + Tailwind foundation in code
- Write `/content/brief/HERO-COPY.md` (3 variants for A/B)

### Week 2 — Homepage + About
- Ship the homepage with hero variant A live
- Write and ship `/about` (long-form, photo-heavy)
- Wire up GA4 + lead-capture endpoint

### Week 3 — Service / Conversion pages
- For-X pages (Sellers, Buyers, or whatever the verticals are)
- Lead magnets + email gating
- KVCore/HubSpot webhook integration

### Week 4 — Engines
- The quiz / assessment
- Resources or directory hub
- Blog with first 5 seed posts written
- Sitemap, robots, JSON-LD, OG/Twitter

### Post-launch — Ongoing
- A/B test hero variants for 30 days each
- 2 blog posts per week
- One new neighborhood guide per month
- Vendor / testimonial additions as they come

---

## 13. TRANSFER TO DBTRCAMP — CONCRETE NEXT MOVES

(Full translation in `dbtrcamp-aesthetic-translation.md` at the dbtrcamp folder.)

The 8 highest-leverage borrowings:

1. **Adopt the same stack verbatim**: Next 16, React 19, Tailwind v4, shadcn/ui, framer-motion, MDX blog, Vercel.
2. **Repo conventions**: `/content/brief/` with one MD per page; `/content/blog/` with MDX.
3. **The glassmorphism recipe**, retuned to DBTR pinks (`#D80D87`).
4. **Animated blob background** in pink + yellow + purple (DBTR palette) for the hero.
5. **The animated DBTR-CAMP / DREAM / BELIEVE / TRAIN / REPEAT hero** — staggered CSS keyframes, pure SC, respects reduced-motion.
6. **A `/quiz/` page**: "The Softball Parent's Tryout-Day Checklist." Email-gated, drip-fed, drives to camp registration.
7. **A blog launching with 3 seed posts**, written in the buddybuck story-led pattern: e.g. *"The Pitcher Who Threw 12 Strikeouts After Eve Fixed One Knee"*, *"What I Learned Coaching Caitlin Noble's 457-Strikeout Sophomore Year"*, *"Dream Believe Train Repeat: The Six-Week Standout Process"*.
8. **A neighborhood / district set** for local SEO: `/locations/woodinville/`, `/locations/redmond/`, `/locations/sammamish/`.

---

## 14. THE OPERATING SYSTEM (how Brett's agency runs)

The methodology in this playbook is *what* to build for each client. The operational backbone — *how* the work gets organized, who contributes, and where everything lives — is documented separately in [`/Users/brett/Desktop/client-sites/_research/CLIENT-REPO-SYSTEM.md`](../CLIENT-REPO-SYSTEM.md).

That doc covers:
- The standard repo structure every client gets (research, briefs, blog, social, video, lead magnets, code)
- The multi-contributor model (Brett, his team, the client, multiple Claude/Cowork accounts)
- Branch protection + CODEOWNERS + PR review flow
- The four content factories (research / blog / social / map-pack)
- Google Business Profile + NAP-consistency operations
- The 30-minute checklist for spinning up a new client repo
- The back-flow loop that compounds the agency template across clients

Read the playbook + the system doc together. The playbook is the recipe; the system is the kitchen.

---

## CLOSING

This playbook is the inheritance from buddybuck.com to every site that comes after it. Apply ruthlessly. Update as new patterns prove out. Cite verbatim where possible (it's faster than reinventing).

The next 19 sites will be 10× faster than dbtrcamp because we have this. Dbtrcamp itself will benefit because Brett opened the door to a full visual reimagining.

— Synthesis from `repo-docs/*.md` and `design-system.md`. Captured 2026-05-05.
