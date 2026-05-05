# Contributing

Whether you're a human, a Claude agent, the founder, or an outside contractor — the workflow is the same.

## 1. Pick a branch name

| Type of change                    | Branch name                          |
|-----------------------------------|--------------------------------------|
| Research / market / brand docs    | `research/<topic>`                   |
| New blog post                     | `content/blog/<slug>`                |
| New location / map-pack page      | `content/locations/<city-slug>`      |
| New social script (any platform)  | `content/social/<platform>/<slug>`   |
| New video script                  | `content/video/<slug>`               |
| New email (drip / broadcast)      | `content/email/<slug>`               |
| New lead magnet                   | `content/lead-magnets/<slug>`        |
| New page brief edit               | `content/brief/<page-name>`          |
| New code feature                  | `feat/<scope>`                       |
| Code fix                          | `fix/<scope>`                        |
| Non-code maintenance              | `chore/<scope>`                      |

## 2. Open a pull request

Use the PR template at `.github/pull_request_template.md`. It will pre-fill with the structure:

- **What** — one-sentence summary of the change
- **Why** — the reason this change matters now
- **Author archetype** — Brett, Brett's Cowork, the client, the client's Cowork, or other contributor
- **ICP / brand-rule check** — confirm the change respects `/research/BRAND.md` + `/research/ICP.md`

## 3. Review

CODEOWNERS auto-routes review based on which folders changed:

- **Code changes** → Brett reviews
- **Brief edits** → Brett reviews
- **Blog drafts** → Brett + the founder review (founder has final say on factual accuracy)
- **Social scripts** → typically auto-approved if from Brett or the founder; review otherwise
- **Research updates** → Brett reviews and tags the founder for awareness

Reviews require at least 1 approving reviewer. Branch protection will block merges otherwise.

## 4. Use the Vercel preview

Vercel posts a preview link as a PR comment within ~90 seconds. Click it. Verify visually. Request changes or approve.

## 5. Merge to main, Vercel deploys

Use **Squash and merge** unless the PR contains research-grade history worth preserving (rare). After merge, delete the source branch.

---

## Conventions

### Markdown style
- Sentence-case headings
- One blank line before lists, headings, code blocks
- Hard wrap at no specific column — let the editor handle wrapping
- Use specific nouns and dollar figures wherever possible (per the voice rules in AGENTS.md)

### MDX frontmatter (blog + locations)

```yaml
---
title: "Specific outcome or unusual noun: what this teaches"
slug: kebab-with-place-name
date: 2026-05-12
author: <founder-name>
tags: [primary-place, content-type, customer-type, specific-topic]
hero_image: /images/blog/<slug>-hero.jpg
excerpt: 25-30 word meta-description-quality summary
---
```

### Social / video script structure

Every social or video file is markdown with frontmatter listing: platform, post date, hook, beats, b-roll list, on-screen text, caption, hashtags, audio note, CTA. See examples in `/content/social/<platform>/`.

### Commit messages
- `Blog: <slug>` for new blog posts
- `Location: <city>` for new map-pack pages
- `Brief: <page>` for content brief edits
- `Research: <topic>` for research doc updates
- `Feat: <scope>` for code features
- `Fix: <scope>` for code fixes
- `Chore: <scope>` for everything else

Keep messages under 72 characters.

---

## When in doubt

Read `AGENTS.md`, `PLAYBOOK.md`, and the most relevant `/research/*.md` first. They contain almost every answer.

If they don't, ping Brett.
