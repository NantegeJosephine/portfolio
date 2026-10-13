/**
 * Site-wide configuration. This is the one file to edit for personal details.
 */
export const SITE = {
  name: 'Josephine Nantege',
  headline: 'Data Scientist',
  subtitle: 'Analytics and dashboards with Python, SQL, Power BI and Excel',

  // TODO(you): fill these in and they appear across the site automatically.
  email: null as string | null, // e.g. 'josephine@example.com'
  linkedin: null as string | null, // e.g. 'https://www.linkedin.com/in/josephine-nantege'
  github: 'https://github.com/NantegeJosephine',

  // Drop your CV PDF into public/cv/ and set this to '/cv/your-file.pdf'
  // to make the download button appear on the About page.
  cvPath: null as string | null,

  siteUrl: 'https://josephine-nantege.vercel.app',
};

export const SKILL_GROUPS = [
  {
    title: 'Analysis & programming',
    skills: ['Python', 'pandas', 'Jupyter', 'SQL'],
  },
  {
    title: 'BI & dashboards',
    skills: ['Power BI', 'DAX', 'Excel'],
  },
  {
    title: 'Data wrangling',
    skills: ['Cleaning messy sources', 'Validation', 'Documentation'],
  },
];
