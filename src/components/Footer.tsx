import { ChevronUp } from "lucide-react";
import { navItems } from "./Navbar";
import { profile, socialLinks } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-ink-200/80 bg-white/72 px-4 py-10 backdrop-blur dark:border-white/10 dark:bg-ink-950/72 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <a href="#home" className="focus-ring inline-flex items-center gap-2 rounded-full font-display text-xl font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-950 text-sm text-white dark:bg-mint dark:text-ink-950">
              SP
            </span>
            {profile.name}
          </a>
          <p className="mt-4 max-w-md text-sm leading-6 text-ink-700 dark:text-ink-200">{profile.intro}</p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Navigation</h3>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <a key={item.href} className="focus-ring rounded-lg py-1 text-ink-700 transition hover:text-mint dark:text-ink-200" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Social</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href || undefined}
                  aria-label={link.label}
                  aria-disabled={!link.href}
                  target={link.external && link.href ? "_blank" : undefined}
                  rel={link.external && link.href ? "noreferrer" : undefined}
                  className={`focus-ring grid h-10 w-10 place-items-center rounded-full border transition ${
                    link.href
                      ? "border-ink-200 hover:border-mint hover:text-mint dark:border-white/10"
                      : "cursor-not-allowed border-ink-200 opacity-50 dark:border-white/10"
                  }`}
                >
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                </a>
              );
            })}
          </div>
          <a href="#home" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-mint">
            Back to top
            <ChevronUp className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-ink-700 dark:text-ink-300">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
}
