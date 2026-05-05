# AGENTS.md

> This is a TEMPLATE. Each child repo (`<client>-website`) overrides the **Who this site is for** section with the client's specific brand archetype and ICP summary. The rest of the file stays consistent.

You are a Claude agent contributing to a website built from `brettkmoore/site-template`.

## Who this site is for

> Replace this section in each child repo with the client's specifics:
> - One-sentence brand archetype + customer summary
> - Pointer to `/research/ICP.md` for the five customer personas
> - Pointer to `/research/BRAND.md` for voice rules + the founder's three operating rules
> - Pointer to `/content/brief/DESIGN-DIRECTION.md` for the visual system

## What this site is built on

- Next.js 16 App Router · TypeScript · Tailwind v4 · shadcn/ui · framer-motion
- Server Components by default; client components only where interactive
- MDX blog posts with gray-matter frontmatter, rendered via remark
- next/font/local for self-hosted brand fonts
- Vercel hosting, preview deploys per PR

## Where to look first

| Question                       | Look in                                     |
|--------------------------------|---------------------------------------------|
| Customer voice / who's reading | `/research/ICP.md`                          |
| Brand voice rules / archetype  | `/research/BRAND.md`                        |
| Visual system / design tokens  | `/content/brief/DESIGN-DIRECTION.md` + `/src/app/globals.css` |
| Page copy                      | `/content/brief/<page>-COPY.md`             |
| Blog patterns / examples       | `/content/blog/*.mdx` + the playbook        |
| Local SEO / map pack           | `/research/MAP-PACK.md` + `/research/KEYWORDS.md` |
| Methodology / framework        | `PLAYBOOK.md` (root)                        |
| Operations / contributors      | `CLIENT-REPO-SYSTEM.md` (root)              |

## How to contribute

1. **Branch naming** (see also `/CONTRIBUTING.md`):
   - `research/<topic>` — research/market doc edits
   - `content/blog/<slug>` — new blog posts
   - `content/social/<slug>` — social-script PRs
   - `content/locations/<city>` — new map-pack location pages
   - `feat/<scope>` — new code features
   - `fix/<scope>` — code fixes
   - `chore/<scope>` — non-code maintenance

2. **Open a PR** using the template at `.github/pull_request_template.md`. Include:
   - One-sentence WHAT
   - One-sentence WHY
   - Author archetype checkbox
   - ICP / brand-rule check

3. **CODEOWNERS auto-routes review** to the right person. Don't merge your own PRs.

4. **Vercel posts a preview link** on every PR within ~90 seconds. Use it to verify visually before requesting review.

## What NOT to do

- Don't commit secrets — use Vercel env vars, never `.env` files in the repo
- Don't push directly to `main` — branch protection will reject
- Don't introduce new dependencies without justification in the PR description
- Don't change the brand voice without first updating `/research/BRAND.md` and getting approval
- Don't add tracking pixels or third-party scripts without a PR review
- Don't touch `/research/ICP.md` or `/research/BRAND.md` without owner sign-off — they're the spine
- Don't use placeholder copy (`Lorem ipsum`, "your brand here") in committed files — write real copy or skip the section

## Voice rules (override per client)

Replace this block in each child repo with the client's specific voice rules from `/research/BRAND.md`. General rules that apply to every client:

- **Specific > vague.** Real numbers, real names, real dates beat "trusted" / "leading" / "premier."
- **Named > anonymous.** Cite specific clients, athletes, properties, events (with consent).
- **One CTA per section.** Never compete with yourself in the same fold.
- **Honor effort.** Earn boldness with receipts. Don't be confident without evidence.
- **Mobile first.** 70%+ of traffic is mobile for owner-operator services. Design and copy mobile-first, not "responsive."

## Performance + accessibility floors (locked, every site)

- LCP < 2.0s · FCP < 1.2s · CLS < 0.1 · TBT < 200ms
- First-load JS < 200KB
- WCAG 2.2 AA throughout (contrast, keyboard nav, screen reader, reduced motion, semantic HTML, focus states)
- All `<img>` via `next/image` with explicit width/height + alt text
- All forms via react-hook-form + zod with accessible error messages
- Phone numbers as `tel:` links
- 44×44 minimum tap targets on mobile

<!-- BEGIN:nextjs-agent-rules -->
This Next.js may have breaking changes — APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

*Template. Customize per client. The structure stays. The brand voice changes.*
