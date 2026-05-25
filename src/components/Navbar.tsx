import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "border-b border-ink-200/80 bg-white/78 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/78"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-950 font-display text-sm font-extrabold text-white dark:bg-mint dark:text-ink-950">
            SP
          </span>
          <span className="hidden font-display text-lg font-extrabold sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-ink-700 transition hover:bg-ink-100 hover:text-ink-950 dark:text-ink-200 dark:hover:bg-white/10 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white/70 text-ink-900 dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden ${open ? "block" : "hidden"}`}>
        <div className="mx-4 mb-4 rounded-2xl border border-ink-200 bg-white p-3 shadow-glass dark:border-white/10 dark:bg-ink-900">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring block rounded-xl px-4 py-3 text-sm font-semibold text-ink-700 transition hover:bg-ink-100 dark:text-ink-100 dark:hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
