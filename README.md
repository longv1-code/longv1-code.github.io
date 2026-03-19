# longvo-portfolio

Personal portfolio built with React + Vite + React Router.

## Getting started

```bash
npm install
npm run dev
```

## Customising your content

All personal content lives in `src/data/` — nothing else needs to change.

| File | What to edit |
|------|-------------|
| `src/data/profile.js` | Name, bio, email, GitHub, LinkedIn, résumé URL |
| `src/data/projects.js` | Add / remove / edit projects and case studies |
| `src/data/skills.js`   | Skill groups and individual skills |

### Adding your portrait

In `src/sections/About.jsx`, replace the placeholder block:

```jsx
<div className="p-icon">🧑‍💻</div>
<span className="p-label">Your portrait here</span>
```

with:

```jsx
<img
  src="/portrait.jpg"
  alt="Long Vo"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>
```

Place `portrait.jpg` in the `/public` folder.

### Résumé

Drop your résumé PDF at `/public/resume.pdf` — the Download and View links will work automatically.

## Project URLs

Each project card links to `/project/:id` (e.g. `/project/1`).
The `id` field in `projects.js` drives the URL — keep them unique integers.

## Deployment

```bash
npm run build   # outputs to /dist
```

Deploy `/dist` to any static host — Vercel, Netlify, GitHub Pages, etc.
For client-side routing to work on Netlify, add a `public/_redirects` file:

```
/* /index.html 200
```
