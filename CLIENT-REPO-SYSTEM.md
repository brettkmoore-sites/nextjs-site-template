# The Client Repo System

> **A repeatable GitHub-backed agency system for building owner-operated service-business websites.** Every client gets their own private repo. The repo is the single source of truth for research, briefs, code, blog content, social scripts, and operational playbooks. Multiple Claude accounts (Brett's, the client's, contributors') collaborate through the repo. Vercel deploys on merge.

This is the operational backbone for the next 20 sites Brett rebuilds. dbtrcamp is the first one to use it cleanly; buddybuck is the prior-art reference; everything else inherits.

---

## 1. WHY A REPO IS THE SOURCE OF TRUTH

Three problems any agency-style operation must solve:

1. **Multiple humans contribute** — Brett, his team, the client, the client's other vendors (videographer, copywriter, photographer).
2. **Multiple Claude accounts contribute** — Brett's Cowork, his teammates' Cowork, the client's Cowork.
3. **The work compounds across clients** — improvements to one client's site (a new component, a better hero pattern, a refined ICP framework) should backflow to the agency template.

A GitHub repo solves all three at once because it is:
- **Versioned** — every change is attributed and reversible
- **Branchable** — speculative work in branches; merged work in main
- **Permissioned** — fine-grained access via collaborators + CODEOWNERS
- **API-readable** — Claude can read it, write it, PR against it
- **Vercel-connected** — main always reflects production
- **Markdown-native** — non-developers can edit research and briefs in plain text

The pattern that does NOT work: research lives in Notion, briefs live in Google Docs, code lives in GitHub, social scripts live in Loom comments, the Claude account that reads one can't read the others. Drift, lost handoffs, no traceability.

The pattern that works: **everything lives in the repo.** Research is markdown. Briefs are markdown. Blog posts are MDX. Social scripts are markdown. Even meeting notes can live in the repo. Claude reads, writes, and PRs against all of it.

---

## 2. OWNERSHIP MODEL

For each client, exactly one of these arrangements:

### Model A — Client-owned (preferred for handoff)
- The repo is created under the client's GitHub org or personal account
- Brett (`brettkmoore`) is added as an admin collaborator
- Brett's team members are added as write/triage collaborators
- The client owns the asset; Brett operates on it
- At the end of the engagement, brettkmoore can be removed without disrupting the asset

### Model B — Brett-owned (during build, transferred at handoff)
- Brett creates the repo under `brettkmoore` or under a Brett-owned org (e.g. `newberry-media-sites`)
- Client is added as a collaborator during build
- At handoff, the repo is **transferred** to the client's GitHub account (GitHub's "Transfer ownership" feature preserves history, issues, PRs, deployment connections)
- Brett re-adds himself as a collaborator post-transfer

**Recommended:** Model A for clients who already have GitHub fluency (rare). Model B for everyone else, with Model A as the post-handoff steady state.

dbtrcamp likely starts in **Model B** — Brett creates `brettkmoore/dbtrcamp-website` (or `newberry-media-sites/dbtrcamp-website`), builds, transfers to Eve at launch.

---

## 3. THE STANDARD REPO STRUCTURE

Every client repo follows this exact layout. The pattern is hard-locked so any contributor (human or Claude) can navigate any client's repo from day one.

```
<client>-website/
├── AGENTS.md                 # short rules for AI coding agents
├── CLAUDE.md                 # @AGENTS.md (symlink-style include)
├── CONTRIBUTING.md           # how humans contribute (branch naming, PR template, review)
├── README.md                 # for-humans overview, "how to get this running"
├── CODEOWNERS                # PR review routing (see §4)
├── .github/
│   ├── pull_request_template.md
│   └── workflows/            # CI: lint, build, lighthouse on PRs
│
├── research/                 # ALL discovery + market work — markdown only
│   ├── INDEX.md              # navigation
│   ├── ICP.md                # ideal customer profiles (the personas)
│   ├── MARKET.md             # competitive landscape, pricing, positioning moat
│   ├── BRAND.md              # archetype, voice rules, three operating rules
│   ├── INTERVIEW-NOTES.md    # raw discovery interviews with the founder
│   ├── KEYWORDS.md           # SEO keyword research, search-volume estimates
│   └── MAP-PACK.md           # local-SEO plan: cities, keywords, GBP setup
│
├── content/
│   ├── brief/                # per-page content briefs (markdown)
│   │   ├── HERO-COPY.md
│   │   ├── ABOUT-COPY.md
│   │   ├── FOR-FAMILIES-COPY.md
│   │   ├── FOR-ATHLETES-COPY.md
│   │   ├── FOR-COACHES-COPY.md
│   │   ├── QUIZ-DESIGN.md
│   │   └── DESIGN-DIRECTION.md
│   │
│   ├── blog/                 # MDX blog posts
│   │   ├── _drafts/          # work-in-progress (excluded from build)
│   │   └── <slug>.mdx        # frontmatter + body
│   │
│   ├── locations/            # map-pack neighborhood guides (MDX)
│   │   └── <city-slug>.mdx
│   │
│   ├── social/               # social media scripts
│   │   ├── instagram/        # one .md per post — caption, hashtags, image-prompt
│   │   ├── tiktok/           # one .md per video — script, beats, b-roll list
│   │   ├── reels/            # IG/FB reels scripts
│   │   ├── youtube/          # long-form scripts + shorts scripts
│   │   └── linkedin/         # for B2B clients
│   │
│   ├── video/                # filmable scripts (longer-form)
│   │   └── <topic>.md        # opening hook, beats, on-screen graphics, CTA
│   │
│   ├── email/                # drip sequences, broadcast emails
│   │   ├── drips/            # per-funnel sequences
│   │   └── broadcasts/
│   │
│   ├── lead-magnets/         # PDF source files (markdown → PDF) + outlines
│   │   └── <magnet-slug>.md
│   │
│   ├── testimonials/         # raw client quotes, attributed
│   │   └── <client-slug>.md
│   │
│   └── case-studies/         # long-form proof stories
│       └── <slug>.mdx
│
├── public/                   # static assets — images, fonts, OG images
│   ├── images/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── athletes/         # or /clients/, /properties/, etc.
│   │   ├── blog/
│   │   ├── locations/
│   │   └── social-cards/
│   ├── fonts/
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml           # generated, but committed for clarity
│
├── src/                      # Next.js App Router source
│   ├── app/
│   ├── components/
│   └── lib/
│
├── docs/                     # ops notes (webhook setup, CMS handoff, vendor logins)
│   └── *.md
│
├── package.json
├── next.config.ts
├── tailwind.config.ts (if needed; Tailwind v4 mostly auto-discovers)
├── postcss.config.mjs
└── tsconfig.json
```

### What goes in each top-level folder, in one sentence each

- **`research/`** — discovery work that happens *before* a single line of code is written. Lives in the repo so future contributors can challenge or update assumptions without losing the trail.
- **`content/brief/`** — page-level content briefs in plain English. Components read these. Non-developers can edit copy here.
- **`content/blog/`** — long-form story-led blog posts as MDX with frontmatter.
- **`content/locations/`** — map-pack neighborhood guides; same MDX format as blog but routed at `/<city>` for SEO.
- **`content/social/`** — every social post or video has a script committed to the repo BEFORE it's posted, so attribution + iteration history is preserved.
- **`content/video/`** — full video scripts with on-screen text, b-roll lists, CTAs.
- **`content/email/`** — every email goes through PR review.
- **`content/lead-magnets/`** — PDFs are generated from these markdown sources via build step (`pandoc` or `md-to-pdf`).
- **`public/`** — static assets, organized in parallel with `content/`.
- **`src/`** — Next.js App Router code.
- **`docs/`** — operational notes: webhook setups, vendor logins (NEVER secrets — use Vercel env vars for those), CMS notes.

---

## 4. PERMISSIONS AND CODEOWNERS

GitHub's `CODEOWNERS` file routes PR review automatically. Standard for every client repo:

```
# /.github/CODEOWNERS

# Default — everything requires Brett's review
*                       @brettkmoore

# Code changes — Brett only (until the client is technical)
/src/                   @brettkmoore
/package.json           @brettkmoore
/next.config.ts         @brettkmoore
/.github/               @brettkmoore

# Research can be edited by Brett or the client (the client knows their own ICP)
/research/              @brettkmoore @<client-handle>

# Content can be edited by anyone with write access
/content/               @brettkmoore @<client-handle> @<copywriter-handle>

# Public assets — visual collaborators
/public/                @brettkmoore @<client-handle> @<photographer-handle>
```

### Collaborator roles to set up on every repo

- **Admin (Owner):** the client at handoff (Model A) or Brett during build (Model B)
- **Maintainer (Brett, brettkmoore):** can merge PRs, manage settings, configure deployments
- **Write (team members + the client):** can push branches, open PRs
- **Triage (the videographer, copywriter, photographer):** can manage issues + review without code-merge rights

### Branch protection (set on `main` for every client repo)

- Require pull request before merging
- Require 1 approving review (CODEOWNERS counts)
- Require status checks to pass (lint + build + Lighthouse)
- Require branches to be up-to-date before merging
- Restrict pushes that create matching branches to admin

This is non-negotiable — it's what lets Brett and three other Claude accounts collaborate without overwriting each other.

---

## 5. THE CONTRIBUTOR WORKFLOW (HUMAN OR CLAUDE)

The same workflow applies whether Brett is at his desk or his Cowork is doing the work or the client's Cowork is drafting a blog post.

### Branch naming convention
- `research/<topic>` — research/market doc edits
- `content/blog/<slug>` — new blog posts
- `content/social/<slug>` — social-script PRs
- `content/locations/<city>` — new map-pack location pages
- `feat/<scope>` — new code features
- `fix/<scope>` — code fixes
- `chore/<scope>` — non-code maintenance

### PR template (`/.github/pull_request_template.md`)

```markdown
## What
One-sentence summary of the change.

## Why
The reason this change matters now.

## Author archetype
- [ ] Brett (human)
- [ ] Brett's Cowork (Claude on Brett's account)
- [ ] Client (human)
- [ ] Client's Cowork
- [ ] Other contributor (specify)

## ICP / brand-rule check
- [ ] This change respects the brand archetype + voice rules in `/research/BRAND.md`
- [ ] If new copy: voice matches one of the personas in `/research/ICP.md`
- [ ] If new visual: aligns with `/content/brief/DESIGN-DIRECTION.md`

## Preview
Vercel preview link auto-posts as a comment when the build completes.
```

### Review responsibility

- **Code PRs** → Brett reviews
- **Brief edits** → Brett reviews
- **Blog drafts** → if from a Claude account, Brett reviews; if from the client, Brett + the client both review
- **Social scripts** → typically auto-approved if from Brett or the client (low-risk, daily volume)
- **Research updates** → Brett reviews and tags the client for awareness

### How a Claude (Cowork) contributor works in practice

1. Claude reads `/research/`, `/content/brief/`, and the `AGENTS.md` for context.
2. Claude is asked: *"draft a blog post about Eve's 12-strikeout coaching breakthrough."*
3. Claude opens a new branch `content/blog/12-strikeout-mechanical-breakthrough`.
4. Claude writes `/content/blog/12-strikeout-mechanical-breakthrough.mdx` with full frontmatter + body, modeled on the existing posts and the rules in `BLOG-STARTER-POSTS.md`.
5. Claude opens a PR using the PR template.
6. Brett (or Eve, on a follow-up Cowork session) reviews and merges.
7. Vercel auto-deploys.

This works because every contributor — human or AI — is reading from the same `/research/` and `/content/brief/` and writing to the same conventions.

---

## 6. THE AGENTS.md / CLAUDE.md PATTERN

Buddy-buck's repo has the right idea but the bare-minimum content. For Brett's system, every client repo's `AGENTS.md` should be richer:

```markdown
# AGENTS.md

You are a Claude agent contributing to <client>-website.

## Who this site is for
1. <one-sentence brand archetype + customer summary>
2. The five ICP personas live in `/research/ICP.md` — read it before writing customer-facing copy
3. The brand voice rules live in `/research/BRAND.md` — voice is non-negotiable
4. The visual system lives in `/content/brief/DESIGN-DIRECTION.md`

## What this site is built on
- Next.js 16 App Router · TypeScript · Tailwind v4 · shadcn/ui · framer-motion
- Server Components by default; client components only where interactive
- MDX blog posts with gray-matter frontmatter
- next/font/local for Inter / Playfair / Caveat (or client-specific)
- Vercel hosting, preview deploys per PR

## How to contribute
1. Branch naming: see `/CONTRIBUTING.md`
2. Open a PR with the standard template
3. CODEOWNERS auto-routes review
4. Vercel posts a preview link on every PR

## What NOT to do
- Don't commit secrets — use Vercel env vars
- Don't push directly to main — branch protection will reject
- Don't introduce new dependencies without justification in the PR description
- Don't change the brand voice without updating `/research/BRAND.md` first
- Don't add tracking pixels or third-party scripts without a PR review

## Where to look first
- For copy questions: `/research/ICP.md` + `/content/brief/<page>.md`
- For design questions: `/content/brief/DESIGN-DIRECTION.md` + the live design tokens in `/src/app/globals.css`
- For SEO: `/research/KEYWORDS.md` + `/research/MAP-PACK.md`

<!-- BEGIN:nextjs-agent-rules -->
This Next.js may have breaking changes — APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
```

`CLAUDE.md` is just `@AGENTS.md` — the indirection is so the same content is loaded by both Cowork (which prefers CLAUDE.md) and other coding agents (which prefer AGENTS.md).

---

## 7. CONTENT WORKFLOWS — THE FOUR FACTORIES

Each kind of content has its own factory pattern. All four factories produce markdown that goes through the same PR/review/merge flow.

### Factory 1 — Research (one-time, then refreshed quarterly)

- **Initiated by:** Brett, after the discovery interview with the founder
- **Authored by:** Brett's Cowork primarily; the founder reviews
- **Output:** `/research/ICP.md`, `/research/BRAND.md`, `/research/MARKET.md`, `/research/MAP-PACK.md`
- **Cadence:** locked in Week 1 of the engagement; quarterly review thereafter
- **Review:** founder must approve `BRAND.md` and `ICP.md` before any customer-facing copy gets written

### Factory 2 — Blog posts (weekly)

- **Initiated by:** Brett, the founder, or a Cowork prompt ("draft this week's post about X")
- **Authored by:** Brett's Cowork or the client's Cowork
- **Output:** `/content/blog/<slug>.mdx` with full frontmatter
- **Cadence:** 1–2 per week (per the playbook)
- **Review:** Brett + founder; founder has final say on factual accuracy
- **Promotion:** every blog post auto-fans into 4–6 social posts (factory 3) once published

### Factory 3 — Social scripts (daily)

- **Initiated by:** Brett, the founder, or a Cowork prompt
- **Authored by:** any Cowork instance with access — including the founder's
- **Output:** `/content/social/<platform>/<slug>.md` with caption, hashtags, image-prompt, posting date
- **Cadence:** ~5 per week minimum (one per weekday across platforms)
- **Review:** Brett or the founder approves; lower bar than blog posts
- **Posting:** the founder (or a contracted social manager) posts manually OR via a Vercel cron + Buffer/Hypefury API integration

### Factory 4 — Map-pack location pages (one-time, then refreshed annually)

- **Initiated by:** Brett, in Week 4 of the engagement
- **Authored by:** Brett's Cowork primarily, with city-specific facts the founder verifies
- **Output:** `/content/locations/<city-slug>.mdx`, ~1500–2000 words each
- **Cadence:** all built in a single sprint at launch; refreshed annually with new data
- **Review:** Brett + founder
- **Promotion:** linked from the homepage city-cards section, internally cross-linked, and submitted to Google Search Console

---

## 8. THE GOOGLE BUSINESS PROFILE PIECE

Map-pack rankings are a function of three things, in roughly this order of importance:

1. **Google Business Profile** completeness, freshness, and review velocity
2. **NAP consistency** (Name, Address, Phone) across the web
3. **Location-specific landing pages** with local schema markup

The repo handles #3. The other two are operational, not code, but the playbook should still own them. Add to every new client repo:

```
docs/
├── GBP-SETUP.md          # step-by-step Google Business Profile setup
├── GBP-MAINTENANCE.md    # weekly post cadence, review-request scripts, photo cadence
└── NAP-CONSISTENCY.md    # the canonical NAP block, plus a checklist of citations to claim/fix
```

For DBTR, the canonical NAP is:

```
DBTR Camp
14735 NE 145th St, Woodinville, WA 98072
(206) 484-1359
```

This needs to match exactly across: GBP, the website footer, every directory listing, every Yelp/Facebook/Instagram bio.

---

## 9. WHAT BRETT'S AGENCY GAINS FROM THIS SYSTEM

Five compounding advantages that emerge after about 3 client repos:

1. **Templates compound.** A new component built for buddybuck (the glass-dark hero card, the animated blob background, the quiz state machine) gets pulled into a private `brettkmoore/site-template` repo. New clients are forked from that template — faster every time.
2. **Research compounds.** ICP frameworks, archetype mappings, and voice-rule patterns improve across clients. The `/research/` folder format gets sharper every time.
3. **Claude gets better at each new repo.** Because every repo follows the same structure, every Cowork session lands fast. The AGENTS.md pattern means new contributors (human or AI) onboard in one read.
4. **The client owns their asset.** At handoff, the repo transfer is one click. The client can hire any developer, any agency, any future-Claude — the repo is portable.
5. **Brett's brand compounds.** Each repo has a `Built with the brettkmoore.com agency template` tag in the README footer. Each handoff is a forward-referenceable case study.

---

## 10. SPINNING UP A NEW CLIENT REPO — THE 30-MINUTE CHECKLIST

The repeatable Day-Zero process for every client. Brett or anyone on the team can run this:

1. **Create the repo** — `gh repo create <client>/<client>-website --private --template=brettkmoore/site-template`
2. **Add brettkmoore as admin collaborator** (if Model A) or invite the client as collaborator (if Model B)
3. **Set branch protection** on `main` (1 approving review, status checks required)
4. **Customize CODEOWNERS** — replace placeholder handles with actual collaborators
5. **Customize AGENTS.md** — fill in client-specific brand summary
6. **Configure Vercel** — connect the repo, set env vars, enable preview deploys
7. **Customize README.md** — replace placeholder client name + one-line summary
8. **Open issue: "Discovery interview with the founder"** — assign to Brett, due within 7 days
9. **Open issue: "Lock brand archetype + ICP"** — blocked by the discovery interview
10. **Open issue: "Lock design tokens"** — blocked by the brand-archetype lock
11. **Open issue: "Build homepage v1"** — blocked by all of the above
12. **Open issue: "Map-pack city list"** — assigned to Brett, due Week 3

---

## 11. INTEGRATION WITH COWORK — THE AGENT LAYER

The system above is GitHub-native. Cowork (where Brett's Claude actually runs) connects to it through three mechanisms:

- **Workspace folders** — each client repo gets cloned to `~/Desktop/client-sites/<client>/` once and stays there. Cowork's `request_cowork_directory` mounts the folder. Claude reads/writes via Read/Write/Edit on the host paths.
- **Chrome MCP for GitHub** — when the repo is private and Brett is logged into github.com in Chrome, the Chrome MCP can navigate, browse, and pull raw URLs (with the user-scoped tokens). This is how I read the buddybuck repo today.
- **Bash + git CLI** — for committing, branching, pushing, opening PRs. Either via `git` directly or via `gh` (GitHub CLI) for PR commands.

A typical Cowork session that contributes to a client repo:

```
1. cd ~/Desktop/client-sites/<client>
2. git pull (sync latest)
3. Read /research/ICP.md, /research/BRAND.md, /content/brief/<relevant>.md
4. git checkout -b content/blog/<slug>
5. Write /content/blog/<slug>.mdx
6. git add . && git commit -m "Blog: <slug>"
7. git push -u origin content/blog/<slug>
8. gh pr create --title "Blog: <slug>" --body "<from PR template>"
9. Tell the user: "Drafted the post; PR is open with a Vercel preview link in 90 seconds."
```

Brett (or whoever is reviewing) clicks the PR, looks at the Vercel preview, requests changes or merges. Vercel auto-deploys main.

This is the loop. It's the same loop whether the contributor is Brett, Brett's Claude, the client's Claude, or the client's intern.

---

## 12. THE BACK-FLOW: IMPROVING THE TEMPLATE

When a pattern proves out on one client (e.g., DBTR adds a new "video script" sub-format that turns out to be reusable, or buddybuck's quiz state machine gets generalized into a `<QuizRunner />` component), it should backflow into Brett's master template:

```
brettkmoore/site-template
├── (the standard structure above)
└── packages/ui/             # shared component library — pulled from real client work
```

A change that proves valuable in one client repo should produce a follow-up PR against the template. This is how the agency compounds: every client improves the template that every future client inherits.

---

## 13. WHAT THIS DOC IS NOT

- **Not a CMS.** No headless CMS recommended. Markdown + git is the CMS. If the client needs a non-developer GUI later, layer Sanity Studio or Decap CMS over the existing markdown — don't replace it.
- **Not a project-management system.** GitHub Issues is sufficient for engagement-level work. Don't add Linear/Asana/Trello unless the client already lives there.
- **Not a knowledge graph.** It's a flat folder of markdown. The discoverability comes from the consistent structure, not from cross-references.
- **Not opinionated about copywriting tools.** Whether Brett, his Claude, or the client writes the markdown — the workflow is identical. Keep it tool-agnostic.

---

## 14. CONNECTION TO THE PLAYBOOK

This system doc is the operational backbone of `_research/buddybuck/PLAYBOOK.md`. The playbook tells Brett *what* to build for each client. This doc tells him *how* to organize the work, the contributors, and the asset.

Read in this order:
1. `PLAYBOOK.md` — methodology
2. `CLIENT-REPO-SYSTEM.md` (this doc) — operations
3. The per-client `/research/` folder — the work itself

---

*Written 2026-05-05. Will evolve. Versioning is in the repo's git log.*
