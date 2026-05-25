import { About } from "../components/About";
import { Achievements } from "../components/Achievements";
import { BackToTop } from "../components/BackToTop";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { ExperienceTimeline } from "../components/Experience";
import { Footer } from "../components/Footer";
import { GitHubContributions } from "../components/GitHubContributions";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Resume } from "../components/Resume";
import { Skills } from "../components/Skills";
import { TechCloud } from "../components/TechCloud";
import { Testimonials } from "../components/Testimonials";
import { useEffect } from "react";

export function PortfolioPage() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;

      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-ink-50 text-ink-950 transition-colors dark:bg-ink-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechCloud />
        <Projects />
        <ExperienceTimeline />
        <Achievements />
        <Resume />
        <GitHubContributions />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
