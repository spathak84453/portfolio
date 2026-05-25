import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { skillCategories, skills, stackGroups } from "../data/portfolio";
import type { SkillCategory } from "../types/portfolio";
import { SectionHeading } from "./SectionHeading";

type ActiveFilter = "All" | SkillCategory;

export function Skills() {
  const [active, setActive] = useState<ActiveFilter>("All");
  const filteredSkills = useMemo(() => (active === "All" ? skills : skills.filter((skill) => skill.category === active)), [active]);

  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Tech Stack & Skills"
        title="Cloud AI, data engineering, and delivery toolkit"
        description="Technologies extracted from the resume, grouped into practical categories with proficiency indicators."
      />

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {(["All", ...skillCategories] as ActiveFilter[]).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`focus-ring inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === category
                ? "border-ink-950 bg-ink-950 text-white dark:border-mint dark:bg-mint dark:text-ink-950"
                : "border-ink-200 bg-white/70 text-ink-700 hover:border-mint hover:text-mint dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
            }`}
          >
            {category === "All" ? <Filter className="h-4 w-4" /> : null}
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredSkills.map((skill, index) => (
          <motion.article
            key={`${skill.category}-${skill.name}`}
            layout
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.02 }}
            className="group rounded-2xl border border-ink-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-mint hover:shadow-glass dark:border-white/10 dark:bg-ink-900"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-bold">{skill.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-700 dark:text-ink-300">{skill.category}</p>
              </div>
              {skill.highlight ? <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-mint">Core</span> : null}
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-ink-100 dark:bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-mint via-ocean to-coral"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </div>
            <p className="mt-2 text-right text-sm font-semibold text-ink-700 dark:text-ink-300">{skill.level}%</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {stackGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.label} className="glass-panel rounded-2xl p-5">
              <Icon className="h-6 w-6 text-coral" />
              <h3 className="mt-4 font-display text-lg font-bold">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.values.map((value) => (
                  <span key={value} className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-800 dark:bg-white/10 dark:text-ink-100">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
