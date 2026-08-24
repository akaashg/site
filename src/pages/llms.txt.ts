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
  'Akaash Garg is the Lead XR Engineer at 2 Dude Studios, ' +
  'based in Bangalore, India and working remotely worldwide. 17+ years in software, currently ' +
  'focused on enterprise XR: Unity VR/AR product delivery, multiplayer systems, and ' +
  'standalone-headset performance on Quest, HoloLens, Varjo, and SteamVR.';

/** Mirrors the nav. Descriptions are the same ones the pages carry in <head>. */
const PAGES: Array<{ path: string; name: string; description: string }> = [
  {
    path: '/',
    name: 'Home',
    description:
      'Overview of the practice: enterprise XR, multiplayer VR, and AR with real-time performance on Quest, HoloLens, Varjo, and SteamVR.',
  },
  {
    path: '/services/',
    name: 'Services',
    description:
      'XR engineering services — Unity VR and AR development, multiplayer systems, performance optimization, gamified training, and technical leadership. Explains how engagements are structured.',
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
      '17+ years in software, currently focused on multiplayer XR simulation for medical, industrial, and enterprise training.',
  },
  {
    path: '/contact/',
    name: 'Contact',
    description:
      'Book a 30-minute call or send a project brief. Engagement types, availability, and time-zone overlap.',
  },
];

const FACTS = [
  'Role: Lead XR Engineer, 2 Dude Studios',
  'Based in: Bangalore, India (IST) — remote worldwide, with overlap for EU and US calls',
  'Client base: India, the United States, and the United Kingdom',
  'Engagements: fixed-scope projects, monthly retainers, technical audits and rescues, and senior or long-term roles',
  'Core stack: Unity, C#, OpenXR, AR Foundation, Photon and Netcode multiplayer, Meta Quest, HoloLens, Varjo, SteamVR',
  'Languages: English, Hindi',
  'Availability: taking new engagements',
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

  const body = `# Akaash Garg — Lead XR Engineer

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
- [xrapp.dev](https://xrapp.dev/): XR development studio site.
- [2 Dude Studios](https://2dudestudios.com/): studio site.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
