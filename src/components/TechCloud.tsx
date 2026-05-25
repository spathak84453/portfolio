import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export function TechCloud() {
  const featured = skills.filter((skill) => skill.highlight).slice(0, 14);

  return (
    <section className="section-shell pt-0">
      <div className="glass-panel overflow-hidden rounded-2xl p-6">
        <div className="flex flex-wrap justify-center gap-3">
          {featured.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-bold text-ink-800 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
