# Personal Website

A personal website built with Astro, featuring a Catppuccin-themed TUI aesthetic. Supports posts, projects, notes, and book reviews.

## Features

- Catppuccin Mocha dark theme (default)
- Light beige theme option
- Terminal/CLI-inspired UI
- Syntax highlighting (Shiki)
- Math equations (KaTeX)
- Content collections (posts, projects, notes, book-reviews)
- Fully static output

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to preview.

**Note:** The site is configured with `base: '/blog'` for GitHub Pages. For local dev without `/blog` prefix, temporarily change `base` in `astro.config.mjs` to `'/'`.

## Adding Posts

Create markdown files in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
description: "A brief description shown on the homepage"
coverUrl: "https://example.com/image.jpg"  # Optional: 16:9 aspect ratio
pubDate: 2026-02-20
tags: ["tag1", "tag2"]
categories: ["category1", "category2"]
---

Your content here...
```

### Images

**In-content:**
```markdown
![Alt text](https://example.com/image.jpg)
```

**With custom size:**
```html
<img src="https://example.com/image.jpg" width="600" alt="Description" />
```

**Remote images:** Use full URLs - they work automatically.

### Math Equations

**Inline:** `$E = mc^2$`

**Block:**
```latex
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi Code Blocks

```javascript
function hello()}
$$
```

### {
  console.log("Hello, world!");
}
```

Syntax highlighting is automatic with Shiki (Catppuccin Mocha theme).

### Links

```markdown
[Link text](https://example.com)
```

### Lists, Tables, Blockquotes

All standard markdown works:
- Bullet lists
- Numbered lists
- > Blockquotes
- | Tables | work | too |

## Adding Book Reviews

Create markdown files in `src/content/book-reviews/`:

```markdown
---
title: "Book Title"
description: "Brief description"
author: "Author Name"
rating: 5  # 1-5 stars
coverUrl: "https://example.com/cover.jpg"  # Optional
pubDate: 2026-02-20
tags: ["genre", "topic"]
categories: ["fiction", "tech"]
---

Your review content...
```

## Adding Projects

Create markdown files in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "What it does"
url: "https://demo.com"  # Optional
github: "https://github.com/user/repo"  # Optional
tags: ["tech1", "tech2"]
featured: true
order: 1
---
```

## Adding Notes

Create markdown files in `src/content/notes/`:

```markdown
---
title: "Note Title"
description: "Description"
updatedDate: 2026-02-20
tags: ["tag1"]
---
```

## Theme

- **Dark mode** is default (Catppuccin Mocha)
- Click ◐ in the nav to toggle light beige mode
- Preference is saved in localStorage

## Deployment to GitHub Pages

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### 2. Configure GitHub Pages

1. Go to your repository on GitHub
2. Go to **Settings** → **Pages**
3. Under "Build and deployment", select **Source: GitHub Actions**
4. The workflow will run automatically on the next push

### 3. Deploy

Push to main branch to trigger deployment:

```bash
git add .
git commit -m "Update content"
git push
```

Wait ~1-2 minutes for the action to complete. Your site will be at:
- Project site: `https://username.github.io/repo-name/`
- User site: `https://username.github.io/`

### Configuration

This repo is configured for a project site (`/blog` base path). If deploying to user/organization site, update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/',
  // ...
});
```

## Tech Stack

- Astro
- MDX
- KaTeX (math)
- Shiki (syntax highlighting)
- GitHub Actions (deployment)
