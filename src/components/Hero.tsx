import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { profile } from "../data/portfolio";
import { AnimatedCounter } from "./AnimatedCounter";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const role = profile.typedRoles[roleIndex];

  useEffect(() => {
    const typing = window.setInterval(() => {
      setVisibleChars((count) => {
        if (count >= role.length) {
          window.clearInterval(typing);
          window.setTimeout(() => {
            setVisibleChars(0);
            setRoleIndex((current) => (current + 1) % profile.typedRoles.length);
          }, 1200);
          return count;
        }
        return count + 1;
      });
    }, 48);

    return () => window.clearInterval(typing);
  }, [role, roleIndex]);

  const visibleRole = useMemo(() => role.slice(0, visibleChars), [role, visibleChars]);

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-mesh-light pt-24 dark:bg-mesh-dark">
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="h-full w-full object-cover opacity-[0.18] mix-blend-multiply dark:opacity-[0.16] dark:mix-blend-screen"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/62 to-ink-50 dark:from-ink-950/92 dark:via-ink-950/72 dark:to-ink-950" />

      <div className="section-shell flex min-h-[calc(100vh-6rem)] items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-4 py-2 text-sm font-semibold text-ink-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-ink-200">
              <Sparkles className="h-4 w-4 text-mint" />
              {profile.role}
            </div>

            <h1 className="mt-7 max-w-4xl font-display text-5xl font-extrabold tracking-normal text-ink-950 dark:text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 min-h-10 text-2xl font-bold text-ink-800 dark:text-ink-100 sm:text-3xl">
              <span className="gradient-text">{visibleRole}</span>
              <span className="ml-1 inline-block h-8 w-0.5 translate-y-1 bg-mint" aria-hidden="true" />
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700 dark:text-ink-200">{profile.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(`Hiring inquiry for ${profile.name}`)}`}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-mint hover:text-ink-950 dark:bg-mint dark:text-ink-950 dark:hover:bg-white"
              >
                Hire Me
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-300 bg-white/70 px-6 py-3 font-semibold text-ink-950 backdrop-blur transition hover:-translate-y-0.5 hover:border-mint hover:text-mint dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-6 py-3 font-semibold text-ink-800 transition hover:bg-white/70 dark:text-ink-100 dark:hover:bg-white/10"
              >
                Contact Me
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {profile.highlights.slice(0, 3).map((metric) => (
                <div key={metric.label} className="glass-panel rounded-2xl p-4">
                  <div className="font-display text-2xl font-extrabold">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-ink-700 dark:text-ink-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="glass-panel animate-float rounded-[2rem] p-5">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern AI engineering workstation"
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="grid gap-3 pt-5 sm:grid-cols-2">
                {profile.highlights.slice(3).map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-ink-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="font-display text-2xl font-extrabold text-ink-950 dark:text-white">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-ink-700 dark:text-ink-300">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
