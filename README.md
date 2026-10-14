# Josephine Nantege — Data Science Portfolio

A static portfolio site built with [Astro](https://astro.build), deployed free
on Vercel. Case studies live as markdown files under
`src/content/case-studies/`.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run verify   # production build + behavioural assertions against dist/
```

## Your TODOs to finish personalising

1. **Contact details** — edit `src/config.ts`: set `email`, `linkedin`, and
   `cvPath`. They appear in the footer, contact page and About automatically.
2. **CV download** — drop your PDF into `public/cv/` and set `cvPath` in
   `src/config.ts` to `/cv/<filename>.pdf`.
3. **Dashboard screenshots** — for each case study, export images of your
   Power BI / Excel pages as PNGs into `public/images/case-studies/`, named to
   match the `screenshots:` list in that case study's markdown frontmatter.
   Until a file exists, the site shows a tasteful placeholder instead.

## Adding a case study later

Copy an existing `.md` file in `src/content/case-studies/`, edit the
frontmatter and body, and push — the site picks it up automatically. `order`
controls sorting (lower comes first).

## Deploying

The site is connected to Vercel: every push to `main` redeploys automatically.
