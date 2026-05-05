# /content/locations

Map-pack neighborhood guides. Same MDX format as `/content/blog/` but routed at `/<city-slug>/` for local SEO.

## Frontmatter

```yaml
---
city: "Bothell"
state: "WA"
slug: bothell-softball
title: "[City] Softball Camps & Coaching Near You — DBTR Camp"
drive_time_minutes: 5
school_district: "Northshore School District"
primary_keyword: "softball camp bothell wa"
---
```

## Page outline

```
H1
INTRO (local fact only a resident would notice)
SECTION 1 — How [City] families get to <venue>
SECTION 2 — What [activity] looks like in [City] right now
SECTION 3 — Why [City] families end up with us
SECTION 4 — A [City] family's actual story (named-with-consent or initialed)
SECTION 5 — What to bring on day one
SECTION 6 — FAQ (6-8 Q's, schema.org FAQPage markup)
CTA
```

## JSON-LD on every page

- `LocalBusiness` (canonical NAP)
- `Person` (founder + credentials)
- `EducationEvent` / `Service` (specific to the offer)
- `FAQPage` (the FAQ section)

## Internal linking
Each location page links to the other 7 (rotating "Other towns we serve" footer). Linked FROM: homepage city tiles, the global footer (always all cities listed), any blog post that mentions that city.
