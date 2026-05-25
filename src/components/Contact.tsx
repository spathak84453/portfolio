import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { profile, socialLinks } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (form.name.trim().length < 2) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email.";
    if (form.message.trim().length < 20) nextErrors.message = "Message should be at least 20 characters.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s Build Something Useful"
        description="Reach out for enterprise AI, data engineering, Azure OpenAI, RAG, or cloud workflow opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-6"
        >
          <h3 className="font-display text-2xl font-bold">Contact Information</h3>
          <div className="mt-6 space-y-4">
            <a href={`mailto:${profile.email}`} className="focus-ring flex items-center gap-3 rounded-xl p-3 transition hover:bg-ink-100 dark:hover:bg-white/10">
              <Mail className="h-5 w-5 text-mint" />
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="focus-ring flex items-center gap-3 rounded-xl p-3 transition hover:bg-ink-100 dark:hover:bg-white/10">
              <Phone className="h-5 w-5 text-coral" />
              <span>{profile.phone}</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl p-3">
              <MapPin className="h-5 w-5 text-ocean" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const disabled = !link.href;
              return (
                <a
                  key={link.label}
                  href={link.href || undefined}
                  target={link.external && link.href ? "_blank" : undefined}
                  rel={link.external && link.href ? "noreferrer" : undefined}
                  aria-disabled={disabled}
                  className={`focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    disabled
                      ? "cursor-not-allowed border-ink-200 text-ink-700 opacity-50 dark:border-white/10 dark:text-ink-200"
                      : "border-ink-200 hover:border-mint hover:text-mint dark:border-white/10"
                  }`}
                >
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="glass-panel rounded-2xl p-6"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold">Name</span>
              <input
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="focus-ring mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition dark:border-white/10 dark:bg-ink-950 dark:text-white"
                placeholder="Your name"
              />
              {errors.name ? <span className="mt-1 block text-sm text-coral">{errors.name}</span> : null}
            </label>
            <label className="block">
              <span className="text-sm font-semibold">Email</span>
              <input
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="focus-ring mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition dark:border-white/10 dark:bg-ink-950 dark:text-white"
                placeholder="you@example.com"
                type="email"
              />
              {errors.email ? <span className="mt-1 block text-sm text-coral">{errors.email}</span> : null}
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-semibold">Message</span>
            <textarea
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              className="focus-ring mt-2 min-h-40 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition dark:border-white/10 dark:bg-ink-950 dark:text-white"
              placeholder="Tell me about the role, product, or AI/data challenge."
            />
            {errors.message ? <span className="mt-1 block text-sm text-coral">{errors.message}</span> : null}
          </label>

          <button className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-mint hover:text-ink-950 dark:bg-mint dark:text-ink-950 dark:hover:bg-white sm:w-auto">
            <Send className="h-4 w-4" />
            Send Message
          </button>
          {submitted ? <p className="mt-4 text-sm font-medium text-mint">Email client opened with your message.</p> : null}
        </motion.form>
      </div>
    </section>
  );
}
