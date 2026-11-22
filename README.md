# Scolah Engineering blog

Source for https://teamscolah.github.io, built with Astro and deployed by GitHub Actions on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

Posts live in `src/content/blog/` as MDX. Photos go in `src/assets/blog/<post>/` so Astro optimises them; diagrams go in `public/images/<post>/` as SVG with a `prefers-color-scheme: dark` style block. Every photo needs a credit in the post.
