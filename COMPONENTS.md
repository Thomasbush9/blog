# Component Usage Guide

This guide shows how to use the custom components available in your blog.

## Callouts/Admonitions

Callouts are great for highlighting important information in your posts.

### Basic Usage

In your markdown files, use the `Callout` component:

```markdown
---
import Callout from '../../components/Callout.astro';
---

<Callout>
This is a basic note.
</Callout>
```

### Types

Available types: `note`, `tip`, `warning`, `danger`, `info`

```markdown
<Callout type="note">
Default note style - blue accent.
</Callout>

<Callout type="tip">
Pro tip for your readers - green accent.
</Callout>

<Callout type="warning">
Heads up! Something to be careful about - yellow accent.
</Callout>

<Callout type="danger">
Critical information! - red accent.
</Callout>

<Callout type="info">
Just some information - mauve accent.
</Callout>
```

### Custom Titles

```markdown
<Callout type="tip" title="Pro Tip">
You can customize the title!
</Callout>
```

## Social Sharing

The `SocialShare` component is automatically included in posts. It provides:
- Twitter/X
- LinkedIn
- Hacker News
- Reddit
- Copy link button

No action needed - it's already integrated!

## Using Components in MDX

If you create `.mdx` files instead of `.md`, you can import and use components:

```mdx
---
title: "My Post"
import Callout from '../components/Callout.astro';
---

<Callout type="warning">
This only works in MDX files!
</Callout>
```

## Footnotes

Astro/Markdown supports standard footnotes:

```markdown
Here's a statement with a footnote.[^1]

[^1]: This is the footnote content.
```

## Example Post

See `src/content/posts/getting-started-ml.md` for examples of:
- Code blocks with syntax highlighting
- Math equations (LaTeX)
- Images
- Links
- Blockquotes
