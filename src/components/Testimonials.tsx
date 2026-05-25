import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote: "A reliable engineering partner for high-impact AI and cloud data initiatives.",
    person: "Enterprise AI Stakeholder",
    context: "Placeholder testimonial"
  },
  {
    quote: "Combines practical architecture decisions with measurable delivery outcomes.",
    person: "Product Collaborator",
    context: "Placeholder testimonial"
  },
  {
    quote: "Strong ownership across prompt workflows, monitoring, and data pipelines.",
    person: "Engineering Lead",
    context: "Placeholder testimonial"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell">
      <SectionHeading
        eyebrow="Testimonials"
        title="Feedback-ready carousel"
        description="A testimonial area is included as an enhancement and can be swapped with real quotes when available."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.quote} className="glass-panel rounded-2xl p-6">
            <Quote className="h-7 w-7 text-coral" />
            <p className="mt-5 text-lg font-semibold leading-7">{testimonial.quote}</p>
            <p className="mt-5 font-bold text-mint">{testimonial.person}</p>
            <p className="text-sm text-ink-700 dark:text-ink-300">{testimonial.context}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
