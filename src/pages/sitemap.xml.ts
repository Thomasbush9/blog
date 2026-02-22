import { getCollection } from 'astro:content';

const posts = await getCollection('posts');
const bookReviews = await getCollection('book-reviews');
const projects = await getCollection('projects');
const notes = await getCollection('notes');

const site = 'https://thomasbush.github.io/blog';

const pages = [
  { url: site, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
  { url: `${site}/about`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
  { url: `${site}/posts`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
  { url: `${site}/book-reviews`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
  { url: `${site}/projects`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
  { url: `${site}/notes`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
  { url: `${site}/tags`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.7 },
  { url: `${site}/archive`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.7 },
];

posts.forEach(post => {
  pages.push({
    url: `${site}/posts/${post.slug}`,
    lastmod: post.data.pubDate.toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  });
});

bookReviews.forEach(review => {
  pages.push({
    url: `${site}/book-reviews/${review.slug}`,
    lastmod: review.data.pubDate.toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  });
});

projects.forEach(project => {
  pages.push({
    url: `${site}/projects/${project.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7,
  });
});

notes.forEach(note => {
  pages.push({
    url: `${site}/notes/${note.slug}`,
    lastmod: (note.data as any).updatedDate?.toISOString() || new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  });
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

export async function GET() {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
