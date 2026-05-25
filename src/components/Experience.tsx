import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Professional timeline"
        description="A timeline of roles, responsibilities, technologies, and measured outcomes across MAQ Software."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-ink-200 dark:bg-white/10 md:block" />
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.title}-${experience.duration}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="relative md:pl-12"
            >
              <span className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-mint ring-8 ring-mint/15 md:block" />
              <div className="glass-panel rounded-2xl p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{experience.title}</h3>
                    <p className="mt-1 font-semibold text-mint">
                      {experience.company} · {experience.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-700 dark:border-white/10 dark:text-ink-200">
                    {experience.duration}
                  </span>
                </div>
                <p className="mt-4 text-ink-700 dark:text-ink-200">{experience.summary}</p>

                <div className="mt-5 grid gap-5 lg:grid-cols-2">
                  <div>
                    <h4 className="font-semibold">Responsibilities</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                      {experience.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Achievements</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                      {experience.achievements.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amberline" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-800 dark:bg-white/10 dark:text-ink-100">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
