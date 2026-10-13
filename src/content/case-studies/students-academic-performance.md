---
title: 'Students Academic Performance Dashboard'
tagline: 'Turning deliberately messy student records into a clean performance dashboard.'
order: 2
tools: ['Power BI', 'Power Query', 'DAX']
repoUrl: 'https://github.com/NantegeJosephine/Students-Academic-analytics-performance-dashboard'
screenshots:
  - '/images/case-studies/students-1.png'
  - '/images/case-studies/students-2.png'
summary: 'A Power BI project focused on the unglamorous part of analytics: rescuing dirty data before it can be visualised.'
problem: >
  The source data was "dirty" by design — inconsistent entries, structural
  noise and quality problems that make straightforward charting misleading.
  The task was to make student performance genuinely measurable.
data: >
  A student records dataset riddled with quality issues (the file is literally
  named "STUDENTS DIRTY DATA"), standing in for the kind of messy exports real
  institutions produce.
method: >
  Profiled every column, fixed structural and consistency problems in Power
  Query, then built a performance dashboard in Power BI with measures written
  in DAX — so the cleaning logic is documented and repeatable, not a one-off
  manual patch.
outcomes:
  - 'A cleaned, trustworthy model of student records powering the report.'
  - 'An interactive dashboard for exploring academic performance across the cleaned data.'
  - 'Cleaning steps captured in the Power Query pipeline, so refreshing with new data repeats them automatically.'
---

## Why it matters

Most dashboard demos start from clean data; almost no real project does. This
one starts from the mess and shows the discipline that has to come before the
first chart.
