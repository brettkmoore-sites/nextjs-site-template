# /content/video

Long-form filmable video scripts. Different from `/content/social/youtube/` — videos here are 5+ minutes and become source assets that get cut down into shorts.

## Standard frontmatter

```yaml
---
title: A Day at <Camp/Office/Studio>
target_length: 6 minutes
youtube_title: "<SEO title with keyword>"
youtube_description: |
  Multi-paragraph description that ranks
youtube_tags:
  - tag1
  - tag2
shorts_cuts:
  - 0:23–0:53 → "<descriptive cut name>"
  - 2:14–2:44 → "<descriptive cut name>"
---
```

Body is a beat-by-beat script with on-screen text annotations, b-roll lists, and CTA placement.
