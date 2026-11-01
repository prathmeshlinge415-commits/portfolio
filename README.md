# Prathmesh Ravindra Linge | Developer Portfolio

React + TypeScript + Tailwind CSS (Vite) portfolio. Dark, responsive, accessible, with 4 projects and no invented information.

## Setup
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Replace the placeholders
Everything editable lives in `src/data/portfolio.ts`:

| Placeholder | Where | Replace with |
|---|---|---|
| `GITHUB_URL` | `LINKS.github` | `https://github.com/<your-username>` |
| `LINKEDIN_URL` | `LINKS.linkedin` | `https://www.linkedin.com/in/<your-id>` |
| `EMAIL_ADDRESS` | `LINKS.email` | your real email address |
| Resume | `LINKS.resume` | Put your PDF at `public/resume/Prathmesh_Ravindra_Linge_Resume.pdf` (or change the path / use a hosted link). Buttons stay disabled until the PDF is found |
| `CERTIFICATIONS` | `CERTIFICATIONS` array | Add only real certifications: `{ name, issuer, date, description }` |
| `PROJECT_GITHUB_URL` / `PROJECT_LIVE_URL` | each item in `PROJECTS` | the real repo / demo URLs |

Until a placeholder is replaced, its button is shown disabled ("coming soon"); no fake links. Set a project's `liveUrl` to `null` to hide its Live Demo button. The contact form opens your email app via `mailto:` once `LINKS.email` is set. To send from the page itself, swap in Formspree/EmailJS (see the TODO in `src/sections/Contact.tsx`).

Also update `og:url` / `og:image` in `index.html` after deploying.

## Structure
```
src/
  components/  Reveal, SectionHeading, Terminal, ProjectPreview, ProjectLinks
  sections/    Navbar, Hero, About, Skills, Projects, Learning, Certifications, Services, Resume, Contact, Footer
  data/        portfolio.ts (all content + links)
  hooks/       useReveal, useScroll
```

## Deploy
- **Vercel / Netlify:** push to GitHub, import the repo. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.ts`, run `npm run build`, publish `dist/` (e.g. with the `gh-pages` package or a GitHub Action).
