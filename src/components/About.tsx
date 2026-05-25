import { motion } from "framer-motion";
import { education, profile, quickFacts } from "../data/portfolio";
import { AnimatedCounter } from "./AnimatedCounter";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About Me"
        title="AI engineering with delivery discipline"
        description={profile.about}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="rounded-2xl border border-ink-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
                  <Icon className="h-6 w-6 text-mint" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink-700 dark:text-ink-300">{fact.label}</p>
                  <p className="mt-1 font-display text-xl font-bold">{fact.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-ink-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-700 dark:text-ink-300">Education</p>
            <h3 className="mt-2 font-display text-2xl font-bold">{education.degree}</h3>
            <p className="mt-2 text-ink-700 dark:text-ink-200">
              {education.institution}, {education.location}
            </p>
            <p className="mt-1 text-sm text-ink-700 dark:text-ink-300">
              {education.duration} · {education.score}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="space-y-6"
        >
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-700 dark:text-ink-300">Experience</p>
            <div className="mt-3 font-display text-5xl font-extrabold">
              <AnimatedCounter value={profile.yearsExperience} suffix="+" />
            </div>
            <p className="mt-2 text-ink-700 dark:text-ink-200">Years building production AI, cloud data, and enterprise workflow systems.</p>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-display text-2xl font-bold">Personal Strengths</h3>
            <div className="mt-5 space-y-3">
              {profile.strengths.map((strength) => (
                <div key={strength} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                  <p className="text-ink-700 dark:text-ink-200">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
