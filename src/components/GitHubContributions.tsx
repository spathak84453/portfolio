import { Github } from "lucide-react";
import { profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const weeks = Array.from({ length: 42 }, (_, index) => {
  const levels = [0, 1, 2, 3, 4];
  return levels[(index * 7 + 3) % levels.length];
});

const levelClass = ["bg-ink-100 dark:bg-white/10", "bg-mint/25", "bg-mint/45", "bg-mint/70", "bg-mint"];

export function GitHubContributions() {
  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow="GitHub"
        title="Contribution-ready section"
        description="The resume did not include a GitHub URL, so this block is ready to connect once the profile link is added."
      />
      <div className="glass-panel rounded-2xl p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Github className="h-7 w-7 text-mint" />
            <div>
              <h3 className="font-display text-xl font-bold">GitHub Activity</h3>
              <p className="text-sm text-ink-700 dark:text-ink-300">
                {profile.github ? "Live profile connected." : "Add GitHub URL in src/data/portfolio.ts to connect this section."}
              </p>
            </div>
          </div>
          <a
            href={profile.github || undefined}
            aria-disabled={!profile.github}
            target={profile.github ? "_blank" : undefined}
            rel={profile.github ? "noreferrer" : undefined}
            className={`focus-ring rounded-full px-5 py-2 text-sm font-semibold ${
              profile.github
                ? "bg-ink-950 text-white hover:bg-mint hover:text-ink-950 dark:bg-mint dark:text-ink-950"
                : "cursor-not-allowed border border-ink-200 text-ink-700 opacity-60 dark:border-white/10 dark:text-ink-200"
            }`}
          >
            View Profile
          </a>
        </div>
        <div className="mt-6 grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1 overflow-hidden sm:grid-cols-[repeat(21,minmax(0,1fr))] md:grid-cols-[repeat(42,minmax(0,1fr))]">
          {weeks.map((level, index) => (
            <span key={index} className={`aspect-square rounded-[4px] ${levelClass[level]}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
