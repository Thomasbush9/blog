---
title: "Getting Started with Astro"
description: "Quick notes on setting up an Astro project"
updatedDate: 2026-02-20
tags: ["astro", "tutorial"]
---

## Installation

```bash
npm create astro@latest my-site
cd my-site
npm install
npm run dev
```

## Project Structure

```
src/
├── content/       # Content collections
├── layouts/       # Page layouts
├── components/    # Reusable components
├── pages/         # Route pages
└── styles/        # Global CSS
```

## Adding Content

Create markdown files in `src/content/posts/`:

```markdown
---
title: "My Post"
pubDate: 2026-02-20
tags: ["tag1", "tag2"]
---

Your content here...
```
