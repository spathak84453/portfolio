import { Download, Eye, FileText } from "lucide-react";
import { profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Resume() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeading
        eyebrow="Resume"
        title="Resume preview and download"
        description="A polished resume card with quick actions for previewing or downloading the extracted source resume."
      />
      <div className="glass-panel grid gap-6 rounded-2xl p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
        <div className="grid h-20 w-20 place-items-center rounded-2xl bg-ink-950 text-white dark:bg-mint dark:text-ink-950">
          <FileText className="h-9 w-9" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold">{profile.name} - Resume</h3>
          <p className="mt-2 text-ink-700 dark:text-ink-200">
            Senior Software Engineer 1 with enterprise AI, Azure OpenAI, RAG, Databricks, PySpark, and cloud data engineering experience.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-3 font-semibold transition hover:border-mint hover:text-mint dark:border-white/10"
          >
            <Eye className="h-4 w-4" />
            Preview
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-5 py-3 font-semibold text-white transition hover:bg-mint hover:text-ink-950 dark:bg-mint dark:text-ink-950 dark:hover:bg-white"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      </div>
    </section>
  );
}
