import { getCollection } from 'astro:content';

const posts = await getCollection('posts');
const bookReviews = await getCollection('book-reviews');
const projects = await getCollection('projects');
const notes = await getCollection('notes');

const site = 'https://thomasbush.github.io/blog';

const searchIndex = [
  ...posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    type: 'post',
    url: `${site}/posts/${post.slug}`,
    tags: post.data.tags,
    date: post.data.pubDate.toISOString(),
    content: post.body || ''
  })),
  ...bookReviews.map(review => ({
    title: review.data.title,
    description: `${review.data.description} by ${review.data.author}`,
    type: 'book-review',
    url: `${site}/book-reviews/${review.slug}`,
    tags: review.data.tags,
    date: review.data.pubDate.toISOString(),
    content: review.body || ''
  })),
  ...projects.map(project => ({
    title: project.data.title,
    description: project.data.description,
    type: 'project',
    url: `${site}/projects/${project.slug}`,
    tags: project.data.tags,
    date: new Date().toISOString(),
    content: project.body || ''
  })),
  ...notes.map(note => ({
    title: note.data.title,
    description: (note.data as any).description || '',
    type: 'note',
    url: `${site}/notes/${note.slug}`,
    tags: note.data.tags || [],
    date: (note.data as any).updatedDate?.toISOString() || new Date().toISOString(),
    content: note.body || ''
  }))
];

export async function GET() {
  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
