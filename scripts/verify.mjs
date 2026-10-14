// Portfolio verification at the production-output seam.
// Run via `npm run verify` (build + assertions). Node built-ins only.
// Asserts what a visitor's browser receives; never framework internals.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');

const failures = [];
let current = { page: '(unlabelled)' };

function expect(condition, expectation) {
  if (!condition) {
    failures.push({ page: current.page, expectation });
    throw new Error(`[verify] ${current.page}: ${expectation}`);
  }
}

function page(route) {
  const clean = route.replace(/\/+$/, '') || '/';
  const file = clean === '/' ? join(DIST, 'index.html') : join(DIST, clean, 'index.html');
  expect(existsSync(file), `route ${route} resolves to a built page (${file})`);
  return { route, html: readFileSync(file, 'utf8') };
}

function checking(route, fn) {
  current = { page: route };
  try {
    fn(page(route));
  } catch (error) {
    if (!failures.some((f) => f.page === route && String(error).includes(f.expectation))) {
      throw error; // not an expect() failure — a real bug in the harness
    }
    console.error(error.message);
    process.exit(1);
  } finally {
    current = { page: '(unlabelled)' };
  }
}

// --- 1. Every page linked from site navigation resolves in the build ---
const home = page('/');
const nav = home.html.match(/<nav>[\s\S]*?<\/nav>/)?.[0] ?? '';
const navLinks = [...nav.matchAll(/href="([^"]+)"/g)].map((m) => m[1]).filter((h) => h.startsWith('/'));
checking('/', () => expect(navLinks.length >= 3, `site navigation exposes at least 3 internal links`));
for (const link of navLinks) {
  checking(link, () => {});
}

// --- 2. Case studies render in their configured order (spec: order field) ---
const EXPECTED_ORDER = [
  'Safari &amp; Travel Bookings — End to End',
  'Students Academic Performance Dashboard',
  'Sales Operations Analytics',
  'Kenyan Crop Data Board',
];
for (const route of ['/', '/projects']) {
  checking(route, ({ html }) => {
    const positions = EXPECTED_ORDER.map((title) => html.indexOf(title));
    expect(
      positions.every((p) => p !== -1),
      `all four case study titles appear on ${route}`
    );
    expect(
      positions.every((p, i) => i === 0 || p > positions[i - 1]),
      `case studies appear in configured order (${EXPECTED_ORDER.join(' → ')})`
    );
  });
}

// --- 3. Tool badges render on each case study page ---
const TOOLS_BY_CASE_STUDY = new Map([
  ['/projects/safari-travel-bookings', ['Python', 'pandas', 'Jupyter', 'Power BI']],
  ['/projects/students-academic-performance', ['Power BI', 'Power Query', 'DAX']],
  ['/projects/sales-operations-excel', ['Excel', 'Pivot Tables', 'Charts']],
  ['/projects/kenyan-crop-data-board', ['Power BI', 'Power Query']],
]);
for (const [route, tools] of TOOLS_BY_CASE_STUDY) {
  checking(route, ({ html }) => {
    for (const tool of tools) {
      expect(html.includes(tool), `tool badge "${tool}" renders`);
    }
  });
}

// --- 4. Repository links render exactly for the case studies that define one ---
const REPO_BY_CASE_STUDY = new Map([
  ['/projects/safari-travel-bookings', 'https://github.com/NantegeJosephine/travel-analytics'],
  [
    '/projects/students-academic-performance',
    'https://github.com/NantegeJosephine/Students-Academic-analytics-performance-dashboard',
  ],
  ['/projects/sales-operations-excel', 'https://github.com/NantegeJosephine/Sales-Operations-Analytics'],
]);
for (const [route, repoUrl] of REPO_BY_CASE_STUDY) {
  checking(route, ({ html }) => {
    expect(html.includes(repoUrl), `"View repository" links to ${repoUrl}`);
  });
}
checking('/projects/kenyan-crop-data-board', ({ html }) => {
  expect(!html.includes('View repository'), `no repository link (none defined for this case study yet)`);
});

console.log(`[verify] all assertions passed against ${DIST}`);
