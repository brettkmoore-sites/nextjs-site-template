# /content/email

All outbound email goes through PR review before sending.

## Subfolders

- `drips/<funnel-name>/` — automated drip sequences (one .md per email, named `01-day-0.md`, `02-day-1.md`, etc.)
- `broadcasts/` — one-off broadcasts (e.g. seasonal announcements)

## Standard frontmatter

```yaml
---
funnel: quiz-takers-hot
day: 0
subject: "<Subject line>"
preheader: "<Preheader text — 50-90 chars>"
cta_label: "Book a 15-min call"
cta_url: /book/
---
```

Body is plain markdown converted to HTML at send time.
