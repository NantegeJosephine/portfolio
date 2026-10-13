---
title: 'Safari & Travel Bookings — End to End'
tagline: 'Three years of raw booking exports, cleaned in Python and presented in a Power BI dashboard.'
order: 1
tools: ['Python', 'pandas', 'Jupyter', 'Power BI']
repoUrl: 'https://github.com/NantegeJosephine/travel-analytics'
screenshots:
  - '/images/case-studies/safari-1.png'
  - '/images/case-studies/safari-2.png'
  - '/images/case-studies/safari-3.png'
summary: 'An end-to-end analytics project: from yearly booking exports to a stakeholder-ready Power BI dashboard.'
problem: >
  Booking records for a safari/travel operation arrived as separate yearly
  exports (2023–2025). Each file had its own inconsistencies, so questions like
  "how have bookings and revenue trended year over year?" had no single trusted
  answer.
data: >
  Raw booking exports for 2023, 2024 and 2025, plus a supplementary sales
  dataset. The datasets are practice data and are not published with the code.
method: >
  Cleaned and consolidated the yearly exports in pandas notebooks —
  deduplication, type fixes and consistency checks — then modelled the cleaned
  output in Power BI and built an interactive dashboard (Safari Connect) so the
  trends are explorable without touching the notebooks.
outcomes:
  - 'A single consolidated, cleaned dataset covering three years of bookings.'
  - 'An interactive Power BI dashboard that stakeholders can filter and explore on their own.'
  - 'A reproducible pipeline: the repository rebuilds the environment from a lockfile, so the analysis can be rerun and extended.'
---

## How it went

The interesting work was in the seams between the years: the same real-world
messiness appearing in different shapes in each export. Cleaning first in
pandas kept the Power BI model simple, because it only ever saw tidy data.

The companion dashboard is a Power BI report (*Safari Connect*); screenshots
are on this page and the full pipeline lives in the repository below.
