# site-template

> A modern, story-led website template for **owner-operator service businesses** — built by [brettkmoore.com](https://brettkmoore.com).

This is the public agency template behind every client site shipped through Brett K. Moore's website-rebuild practice. Fork it, read the playbook, follow the conventions, and you'll have a Vercel-ready Next.js site that speaks the right voice to the right customer in roughly 30 days.

It's also a portfolio piece. The methodology is open. The patterns compound across clients. New patterns flow back into this template after every shipped engagement.

---

## The stack

- **Next.js 16** (App Router, Server Components by default)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (oklab gradient interpolation, lab() colors, zero-runtime atomic CSS)
- **shadcn/ui** primitives over Radix UI (accordion, dialog, navigation-menu, select, separator, slot, label)
- **Framer Motion** for scroll-triggered reveals + micro-interactions
- **react-hook-form** + **zod** for typed, validated, accessible forms
- **gray-matter** + **remark** for MDX blog rendering
- **next/font/local** for self-hosted brand fonts
- **Vercel** for hosting + preview deploys per pull request
- **lucide-react** for icons
- **clsx** + **tailwind-merge** + **class-variance-authority** for component variants

Performance floors locked at the framework level: LCP < 2.0s, FCP < 1.2s, CLS < 0.1, TBT < 200ms, first-load JS < 200KB. WCAG 2.2 AA on every shipped page.

---

## What's in here

```
site-template/
├── README.md                — this file
├── PLAYBOOK.md              — the methodology (brand, voice, pages, blog, lead-gen)
├── CLIENT-REPO-SYSTEM.md    — operations: contributors, branches, factories
├── CONTRIBUTING.md          — how humans + Claude agents contribute
├── AGENTS.md                — rules for AI coding agents
├── CLAUDE.md                — Cowork pointer to AGENTS.md
├── CODEOWNERS               — PR review routing template
├── LICENSE                  — MIT
├── .github/
│   └── pull_request_template.md
│
├── research/                — discovery docs (markdown only)
│   ├── ICP.md               — five customer personas with fears, desires, language
│   ├── BRAND.md             — archetype, voice rules, three operating rules
│   ├── MARKET.md            — competitive landscape, pricing, positioning moat
│   ├── KEYWORDS.md          — SEO + map-pack target queries
│   ├── MAP-PACK.md          — local-SEO city plan + GBP setup
│   └── INTERVIEW-NOTES.md   — raw discovery interviews
│
├── content/
│   ├── brief/               — per-page content briefs read by components
│   ├── blog/                — MDX blog posts with frontmatter
│   ├── locations/           — map-pack neighborhood guides
│   ├── social/              — per-platform social scripts
│   │   ├── instagram/       │
│   │   ├── tiktok/          │
│   │   ├── reels/           │
│   │   ├── youtube/         │
│   │   ├── linkedin/        │
│   │   └── gbp/             — Google Business Profile post scripts
│   ├── video/               — long-form video scripts with b-roll lists
│   ├── email/               — drip sequences + broadcast emails
│   ├── lead-magnets/        — PDF source markdown
│   ├── testimonials/        — attributed client quotes
│   └── case-studies/        — long-form proof stories
│
├── public/                  — static assets
├── src/
│   ├── app/                 — Next.js App Router
│   ├── components/          — UI components
│   └── lib/                 — utilities + content loaders
└── docs/                    — operational notes (webhooks, CMS, vendor logins)
```

The `content/brief/*.md` pattern is the single most valuable convention here: every page has a markdown brief that contains the headline, subhead, sections, and CTAs in plain English. Components read briefs. Non-developer clients edit copy via Claude or directly without touching React.

---

## How to spin up a new site from this template

The 30-minute Day-Zero sequence:

```bash
# 1. Create the new repo from this template
gh repo create <client>/<client>-website --private --template=brettkmoore/site-template

# 2. Clone it locally
gh repo clone <client>/<client>-website
cd <client>-website

# 3. Replace the placeholders (client name, brand summary, etc.)
# Edit: README.md, AGENTS.md, package.json (the "name" field)

# 4. Configure CODEOWNERS with the actual collaborator handles

# 5. Connect to Vercel
vercel link
vercel --prod=false

# 6. Set branch protection on `main` (web UI)
#    - require pull request before merging
#    - require 1 approving review (CODEOWNERS counts)
#    - require status checks: lint + build
```

After Day Zero, the work flows through four content factories: research, blog, social, and map-pack location pages. See [`CLIENT-REPO-SYSTEM.md`](./CLIENT-REPO-SYSTEM.md) for the full operating model.

---

## The methodology

This template encodes a specific opinion about how to build websites for owner-operator service businesses (real estate brokers, sports camps, boutique consultants, local-trade pros, anyone whose brand is *a person* delivering *a service* in *a community*).

The opinion has six pillars:

1. **Two-word positioning.** Every brand sits at the intersection of two things its category usually treats as opposites. Find that intersection. The whole site flows from there.

2. **StoryBrand + Dan Kennedy + Hormozi + PAS.** Stack the four classic copywriting frameworks. StoryBrand makes the customer the hero. PAS (Problem-Agitate-Solve) lets the reader feel the pain. Dan Kennedy demands specificity and confronts the cost of inaction. Hormozi's value stack lists every component of the offer with a dollar figure so the total dwarfs the price.

3. **Glassmorphism + animated blobs + brutalist type.** A modern visual system that signals craft. Used sparingly — one glass element visible at a time, never as decoration.

4. **MDX blog with story-led patterns.** Five recurring blog patterns: the "I'll find out" customer-service story, the recognition/serendipity story, the improbable coincidence, the give-first philosophy, and the case-study with receipts.

5. **Quiz as content engine.** A scored assessment built so nobody passes. Every result drives to "book a call." Every question doubles as a social post.

6. **Map-pack location pages.** A neighborhood guide per catchment city, internally linked, with LocalBusiness JSON-LD. Compounds local-SEO authority over months.

Read [`PLAYBOOK.md`](./PLAYBOOK.md) for the full methodology with examples.

---

## Multi-contributor model

Built to be edited by humans and Claude agents from multiple GitHub accounts at once. Each contributor — Brett, his team, the client, the client's videographer, the client's Cowork — works on a branch, opens a PR, gets reviewed via CODEOWNERS, and merges to `main`. Vercel deploys on merge.

A typical Cowork session that contributes to a child repo looks like:

```
1. cd ~/Desktop/client-sites/<client>
2. git pull
3. Read /research/ICP.md, /research/BRAND.md, the relevant /content/brief/*.md
4. git checkout -b content/blog/<slug>
5. Write /content/blog/<slug>.mdx
6. git add . && git commit -m "Blog: <slug>"
7. git push -u origin content/blog/<slug>
8. gh pr create  (uses the PR template)
```

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full contributor workflow.

---

## Why this is public

Three reasons:

1. **Marketing.** Future clients can see what they're getting before they sign. The methodology *is* the pitch.
2. **Compounding.** Patterns improve when they're reviewable. Issues + PRs from anyone help the template get sharper.
3. **Honesty.** The opinion in this template is public-grade — there's no secret sauce hidden behind a paywall. The work is execution, not access to a magic playbook.

If you're a brand owner thinking about a website rebuild, [reach out](https://brettkmoore.com). If you're a developer who wants to use this template directly, fork away — MIT licensed, no permission required.

---

## License

MIT. See [`LICENSE`](./LICENSE).

---

*Built by [Brett K. Moore](https://brettkmoore.com).*
