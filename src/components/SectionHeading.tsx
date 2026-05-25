import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 max-w-3xl"
    >
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-mint">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-normal text-ink-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-ink-700 dark:text-ink-200 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
