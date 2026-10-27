import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/**
 * /llms.txt — a curated, plain-markdown map of the site for language models
 * (llmstxt.org). Assistants that answer "who can build my VR app" fetch a
 * handful of pages, not the whole site; this gives them the summary and the
 * links worth following instead of leaving them to guess from nav markup.
 *
 * Generated rather than committed as a static file for the same reason the
 * sitemap is: the case-study list lives in the content collection, and a
 * hand-maintained copy silently goes stale the first time one is added.
 */

const SUMMARY =
  'Akaash Garg is a full-stack systems architect and the technical lead at 2 Dude Studios, ' +
  'based in Bangalore, India and working remotely worldwide. 17+ years in software — a decade of ' +
  'full-stack web and product delivery, then six years architecting real-time distributed systems: ' +
  'server-authoritative multiplayer, PostgreSQL and Node backends, offline-first data pipelines, and ' +
  'Unity clients held inside a 13.9ms frame budget on standalone headsets.';

/** Mirrors the nav. Descriptions are the same ones the pages carry in <head>. */
const PAGES: Array<{ path: string; name: string; description: string }> = [
  {
    path: '/',
    name: 'Home',
    description:
      'Overview of the practice: real-time and distributed system architecture, authoritative multiplayer, backend and data design, and clients held to a fixed frame budget.',
  },
  {
    path: '/services/',
    name: 'What I do',
    description:
      'What Akaash Garg is hired to own: systems architecture and design, backend and platform engineering, multiplayer systems, performance optimization, and Unity VR and AR development. Covers contract shapes, overlap hours, and how he works inside an existing team.',
  },
  {
    path: '/projects/',
    name: 'Case studies',
    description: 'Index of shipped XR and full-stack work, with the stack and outcome for each.',
  },
  {
    path: '/about/',
    name: 'About',
    description:
      '17+ years in software: 12 years of full-stack web and product delivery, then six years of real-time distributed systems. Career history, grouped stack, and what he is open to.',
  },
  {
    path: '/contact/',
    name: 'Contact',
    description:
      'Book an intro call or send a role description. Contract shapes, availability, and time-zone overlap.',
  },
];

const FACTS = [
  'Role: Full-stack systems architect and technical lead, 2 Dude Studios',
  'Based in: Bangalore, India (IST) — remote worldwide, with overlap for EU and US calls',
  'Client base: India, the United States, and the United Kingdom',
  'Open to: full-time contracts (4-5 days/week), part-time contracts (2-3 days/week), permanent roles, architecture and design sprints, and fixed-scope projects',
  'Working style: hands-on individual contributor, remote, embedded in the client team repository and process',
  'Core stack: C#, Unity, Photon Fusion, Mirror, Node.js, Express, PostgreSQL, React, Supabase, OpenXR, AR Foundation',
  'Specialism: server-authoritative state, client-side prediction and reconciliation, offline-first sync, relational data modelling, and performance against fixed frame budgets',
  'Languages: English, Hindi',
  'Availability: open to contract work now',
  'Contact: akaash.garg@gmail.com — https://cal.com/akaash-garg-xvijkt/hi',
];

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://akaashgarg.com');
  const url = (path: string) => new URL(path, origin).toString();

  const projects = (await getCollection('projects', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );

  /* One line per case study. Role, company, and timeframe matter here: they are
     what makes a citation checkable rather than a vague claim of experience. */
  const caseStudies = projects.map((project) => {
    const { title, company, role, timeframe, stack, summary } = project.data;
    const context = `${role} at ${company}, ${timeframe}`;
    return `- [${title}](${url(`/projects/${project.slug}/`)}): ${summary} (${context}. Stack: ${stack.join(', ')}.)`;
  });

  const body = `# Akaash Garg — Full-Stack Systems Architect

> ${SUMMARY}

${FACTS.map((fact) => `- ${fact}`).join('\n')}

## Pages

${PAGES.map((page) => `- [${page.name}](${url(page.path)}): ${page.description}`).join('\n')}

## Case studies

${caseStudies.join('\n')}

## Optional

- [Résumé (PDF)](${url('/Akaash-Garg-XR-Engineer-Resume.pdf')}): full work history and stack detail.
- [Sitemap](${url('/sitemap.xml')}): every indexable route.
- [LinkedIn](https://www.linkedin.com/in/akaashgarg/)
- [2 Dude Studios](https://2dudestudios.com/): studio site.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
