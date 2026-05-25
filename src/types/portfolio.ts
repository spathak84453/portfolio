import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href?: string;
  icon?: LucideIcon;
  external?: boolean;
};

export type SkillCategory =
  | "AI / GenAI"
  | "Cloud Platforms"
  | "Data Engineering"
  | "Programming Languages"
  | "Databases"
  | "DevOps"
  | "Tools & Platforms"
  | "Frontend"
  | "Backend"
  | "Testing Tools"
  | "Version Control";

export type Skill = {
  name: string;
  category: SkillCategory;
  level: number;
  highlight?: boolean;
};

export type Experience = {
  company: string;
  location: string;
  title: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
};

export type ProjectCategory =
  | "AI/ML"
  | "Cloud"
  | "Backend"
  | "Full Stack"
  | "Enterprise Apps"
  | "Data Engineering";

export type Project = {
  name: string;
  description: string;
  categories: ProjectCategory[];
  techStack: string[];
  keyFeatures: string[];
  responsibilities: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  highlight: string;
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
};
