# Sachin Pathak Portfolio

Modern personal portfolio for Sachin Pathak, built from resume-extracted information and focused on enterprise AI, Azure OpenAI, RAG, cloud data engineering, Azure Databricks, PySpark, and production-grade engineering delivery.

Production GitHub Pages target: `https://sachin9837.github.io/`

## Features

- React + TypeScript + Tailwind CSS single-page portfolio
- Framer Motion page and section animations
- Dark/light theme toggle with `localStorage` persistence
- Sticky navigation, smooth scrolling, scroll progress indicator, and back-to-top action
- Resume-driven sections for hero, about, skills, projects, experience, certifications, achievements, resume, testimonials, blog placeholder, and contact
- Skill categories with progress bars, filters, hover states, and animated tech cloud
- Project filtering for AI/ML, cloud, backend, full stack, and enterprise apps
- Functional client-side contact form with validation and `mailto:` email handoff
- SEO metadata, accessible controls, lazy-loaded imagery, and responsive mobile-first layouts
- GitHub Pages workflow plus Vercel and Netlify deployment notes

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router

## Folder Structure

```text
.
├── public/
│   └── resume/
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .github/workflows/deploy.yml
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow builds and publishes `dist`.

### Vercel

1. Import the GitHub repository into Vercel.
2. Use these defaults:
   - Framework: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

### Netlify

1. Import the GitHub repository into Netlify.
2. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy.

## GitHub Repository Setup

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/sachin9837/sachin9837.github.io.git
git push -u origin main
```

## Resume Data Notes

The site data is stored in `src/data/portfolio.ts`. GitHub, Twitter/X, live demo, and source-code links were not present in the resume, so they are modeled as optional fields and shown as private/configurable where appropriate.
