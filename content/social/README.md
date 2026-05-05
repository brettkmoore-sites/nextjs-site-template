# /content/social

Every social post or video has a script committed to the repo BEFORE it's posted. This preserves attribution + iteration history and feeds analytics back into research.

## Subfolders

- `instagram/` — feed posts (caption + hashtags + image-prompt)
- `tiktok/` — vertical video scripts
- `reels/` — IG/FB Reels scripts (typically same source as TikTok, exported separately)
- `youtube/` — long-form scripts + shorts cuts
- `linkedin/` — for B2B clients
- `gbp/` — Google Business Profile post scripts

## Standard frontmatter (per platform)

```yaml
---
platform: instagram
date: 2026-07-12
hook: "If your daughter freezes at a 1-2 count, here's why."
caption: |
  Multi-line caption goes here.
hashtags:
  - #fastpitch
  - #softballmom
  - #bothellsoftball
image_prompt: "<description of the visual asset>"
cta: "Link in bio → /camps/bothell-softball/"
---
```

For video platforms (tiktok / reels / youtube), the frontmatter additionally includes `length`, `beats` (timecoded outline), `b_roll` list, `on_screen_text` array, and `audio` note.
