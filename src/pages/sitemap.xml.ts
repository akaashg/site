import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/**
 * Hand-rolled sitemap so search engines and LinkedIn's crawler can enumerate
 * every route. Static pages carry a priority hint; case studies inherit 0.7.
 */
const STATIC_ROUTES: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/services/', priority: '0.9', changefreq: 'monthly' },
  { path: '/projects/', priority: '0.8', changefreq: 'monthly' },
  { path: '/about/', priority: '0.7', changefreq: 'yearly' },
  { path: '/contact/', priority: '0.9', changefreq: 'yearly' },
];

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://akaashgarg.com');
  const projects = await getCollection('projects', ({ data }) => !data.draft);

  const urls = [
    ...STATIC_ROUTES.map((route) => ({
      loc: new URL(route.path, origin).toString(),
      priority: route.priority,
      changefreq: route.changefreq,
    })),
    ...projects.map((project) => ({
      loc: new URL(`/projects/${project.slug}/`, origin).toString(),
      priority: '0.7',
      changefreq: 'yearly',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url>\n    <loc>${url.loc}</loc>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
