# HAX — Hussain Alkhaldi Portfolio

A futuristic, dark, neon‑green personal portfolio built with **Next.js + TypeScript + Tailwind CSS + shadcn UI** primitives.

## ✨ Features

- Dark theme by default with a neon‑green accent (`#C3E41D`)
- Animated hero (HAX blur text, signature, tagline, location line)
- Animated project showcase with cursor glow + hover preview
- Sections: Hero, About, Projects, More Projects, Skills, Experience, Education, Writing, Certifications, Contact, Footer
- Quick contact form that opens the user's mail client (mailto)
- Fade‑in on scroll via IntersectionObserver
- Fully responsive (mobile → tablet → desktop)

## 🧱 Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v3](https://tailwindcss.com/) + `tailwindcss-animate`
- shadcn UI‑style primitives under `@/components/ui/*`
- [lucide-react](https://lucide.dev/) icons

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm run start
```

## 🗂 Project structure

```
app/
  layout.tsx        # Root layout, dark mode default, Google Fonts
  page.tsx          # Composes all sections
  globals.css       # Tailwind + theme tokens
components/
  ui/               # shadcn UI primitives (badge, button, card, input, textarea, portfolio-hero, project-showcase)
  section-*.tsx     # Page sections (about, projects, skills, education, certifications, contact, experience, writing)
  section-utils.tsx # Reusable section helpers (heading, fade‑in hook)
  footer.tsx
lib/
  utils.ts          # cn() helper
```

## 🧩 Replacing placeholders

| What                          | Where                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| Hero blur text / signature    | `components/ui/portfolio-hero.tsx` (search `HAX`, `Hussain Alkhaldi`)                       |
| Tagline                       | `components/ui/portfolio-hero.tsx`                                                          |
| Featured project list         | `components/ui/project-showcase.tsx` (the `projects` array)                                 |
| Extra projects                | `components/section-projects.tsx` (the `projects` array)                                   |
| Certifications                | `components/section-certifications.tsx` (the `certs` array)                                |
| Experience entries            | `components/section-experience-writing.tsx`                                                 |
| Writing posts                 | `components/section-experience-writing.tsx` (the `writing` array)                          |
| Contact info / GitHub / LI    | `components/section-contact.tsx` (the `contactItems` array)                                 |
| Avatar (no photo)             | `components/section-about.tsx` (`HA` initials in the neon‑green frame)                     |
| Neon green accent             | `tailwind.config.ts` (`neon` palette) and `app/globals.css`                                 |

## 🖼 Images

The animated showcase uses Unsplash. To swap in your own:

1. Drop the image into `public/` (e.g. `public/projects/nasa.jpg`).
2. Replace the `image:` string in `components/ui/project-showcase.tsx` with `"/projects/nasa.jpg"`.

## 🔗 GitHub repo links

Project cards currently use `link: "#"`. Replace them with real repo URLs:

- `components/ui/project-showcase.tsx` — featured projects
- `components/section-projects.tsx` — more projects

## 🌐 Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial HAX portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/hax-portfolio.git
git push -u origin main
```

### Recommended repo structure

- `main` — production
- `dev` — ongoing work
- PRs from feature branches (`feat/...`, `fix/...`)
- Enable GitHub Pages / Vercel for deployment

## 🎨 Design tokens

- Background: `hsl(0 0% 4%)` (near‑black)
- Foreground: `hsl(0 0% 98%)`
- Accent / Neon: `#C3E41D` (`hsl(75 81% 50%)`)
- Fonts:
  - `font-hud` → **Share Tech Mono** (HUD/sci‑fi labels, status, eyebrows)
  - `font-code` → **Fira Code** (code, project titles, kinetic HAX)
  - `font-display` → **Space Grotesk** (body copy, project descriptions)

## ✨ Visual style

- **HUD / Sci‑Fi FUI + Cyberpunk UI** — thin 1px neon lines, monospace labels, corner brackets on key blocks, scanline overlays, blinking caret.
- **Constellation background** in the hero with animated star points and connecting lines.
- **Marquee ticker** at the bottom of the hero, terminal boot log, live status pill.
- **Asymmetric project showcase** with a 7/5 split — sticky preview with HUD frame on the right.
- All colors meet AA contrast on dark. Hover transitions are 150–300ms and respect `prefers-reduced-motion` via plain CSS (no infinite animations on form / interactive content).
