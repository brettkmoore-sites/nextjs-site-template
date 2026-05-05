# /content/lead-magnets

Source markdown for the downloadable PDFs offered as lead magnets across the site.

## Standard structure

```
content/lead-magnets/
└── <magnet-slug>/
    ├── magnet.md       — the markdown source
    ├── outline.md      — the brief / outline / approval doc
    └── assets/         — images used in the PDF
```

PDFs are generated from `magnet.md` via a build step (e.g. `pandoc` or `md-to-pdf`) and committed alongside.
