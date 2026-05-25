import { motion } from "framer-motion";
import { ExternalLink, Github, LockKeyhole } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "../data/portfolio";
import type { ProjectCategory } from "../types/portfolio";
import { SectionHeading } from "./SectionHeading";

const filters: Array<"All" | ProjectCategory> = ["All", "AI/ML", "Backend", "Full Stack", "Cloud", "Enterprise Apps"];

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filteredProjects = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.categories.includes(active))),
    [active]
  );

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Enterprise AI project showcase"
        description="Resume-derived project cards with technologies, features, responsibilities, and impact."
      />

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === filter
                ? "border-ink-950 bg-ink-950 text-white dark:border-mint dark:bg-mint dark:text-ink-950"
                : "border-ink-200 bg-white/70 text-ink-700 hover:border-mint hover:text-mint dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.name}
            layout
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.07 }}
            className="group overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glass dark:border-white/10 dark:bg-ink-900"
          >
            <div className="relative overflow-hidden">
              <img src={project.image} alt={`${project.name} mockup`} className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/72 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.categories.slice(0, 3).map((category) => (
                  <span key={category} className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink-950">
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl font-bold">{project.name}</h3>
              <p className="mt-3 text-ink-700 dark:text-ink-200">{project.description}</p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">Key Features</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                    {project.keyFeatures.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Responsibilities</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                    {project.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((technology) => (
                  <span key={technology} className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-800 dark:bg-white/10 dark:text-ink-100">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <ProjectLink href={project.githubUrl} label="Source" icon="github" />
                <ProjectLink href={project.liveUrl} label="Live Demo" icon="external" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ProjectLink({ href, label, icon }: { href?: string; label: string; icon: "github" | "external" }) {
  const Icon = href ? (icon === "github" ? Github : ExternalLink) : LockKeyhole;
  return (
    <a
      href={href || undefined}
      aria-disabled={!href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className={`focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
        href
          ? "bg-ink-950 text-white hover:bg-mint hover:text-ink-950 dark:bg-mint dark:text-ink-950 dark:hover:bg-white"
          : "cursor-not-allowed border border-ink-200 text-ink-700 opacity-60 dark:border-white/10 dark:text-ink-200"
      }`}
    >
      <Icon className="h-4 w-4" />
      {href ? label : "Private"}
    </a>
  );
}
