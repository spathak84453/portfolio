import { BookOpen, PenLine } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const posts = [
  "Designing hallucination-resistant Azure OpenAI workflows",
  "Scaling RAG pipelines with Azure Cognitive Search",
  "Monitoring production AI systems with Application Insights"
];

export function Blog() {
  return (
    <section id="blog" className="section-shell">
      <SectionHeading
        eyebrow="Blog"
        title="Writing queue"
        description="A ready-to-expand blog area for engineering notes, case studies, and cloud AI implementation lessons."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post} className="rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-glass dark:border-white/10 dark:bg-ink-900">
            <BookOpen className="h-6 w-6 text-ocean" />
            <h3 className="mt-5 font-display text-xl font-bold">{post}</h3>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint">
              <PenLine className="h-4 w-4" />
              Draft placeholder
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
