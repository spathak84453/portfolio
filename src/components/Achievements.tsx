import { motion } from "framer-motion";
import { achievements, certifications } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications & Achievements"
        title="Verified cloud AI skills and measurable delivery wins"
        description="A compact view of certifications and impact highlights extracted from the resume."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-panel rounded-2xl p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">{cert.issuer}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{cert.name}</h3>
              <p className="mt-2 text-sm text-ink-700 dark:text-ink-300">{cert.date}</p>
              <p className="mt-4 text-ink-700 dark:text-ink-200">{cert.highlight}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glass dark:border-white/10 dark:bg-ink-900"
              >
                <Icon className="h-7 w-7 text-coral" />
                <h3 className="mt-5 font-display text-xl font-bold">{achievement.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-700 dark:text-ink-200">{achievement.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
