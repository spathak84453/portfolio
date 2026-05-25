import {
  Award,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  SquareTerminal
} from "lucide-react";
import type { Certification, Education, Experience, LinkItem, Project, Skill } from "../types/portfolio";

export const profile = {
  name: "Sachin Pathak",
  title: "Senior Software Engineer 1",
  role: "Enterprise AI & Data Engineering Specialist",
  location: "Noida, India",
  phone: "+91-8445390124",
  email: "spathak84453@gmail.com",
  resumeUrl: "resume/SachinPathak2026-May.pdf",
  linkedIn: "https://www.linkedin.com/in/sachin-pathak-a5a29b1ab/",
  github: "",
  twitter: "",
  portfolio: "",
  yearsExperience: 4,
  intro:
    "Senior Software Engineer specializing in Azure OpenAI, Prompt Flow, RAG, Azure Cognitive Search, Azure Databricks, PySpark, Snowflake, and production cloud workflows for enterprise-scale AI platforms.",
  about:
    "I build production-ready AI and data engineering systems that turn enterprise documents, CRM data, and multilingual content into reliable business workflows. My work spans prompt orchestration, hallucination mitigation, document intelligence, distributed data pipelines, monitoring, and Agile engineering leadership.",
  strengths: [
    "Enterprise-scale AI delivery with measurable adoption and user impact",
    "Strong ownership across architecture, implementation, performance tuning, and monitoring",
    "Comfortable guiding engineers through complex Agile delivery cycles",
    "Pragmatic focus on reliability, SLA adherence, and clear stakeholder outcomes"
  ],
  highlights: [
    { label: "Daily AI users supported", value: 3000, suffix: "+" },
    { label: "Query relevance improvement", value: 40, suffix: "%" },
    { label: "Daily CRM data processed", value: 50, suffix: "GB+" },
    { label: "Records transformed daily", value: 10, suffix: "M+" },
    { label: "Multilingual NLP accuracy", value: 92, suffix: "%" },
    { label: "Hours saved per week", value: 30, suffix: "+" }
  ],
  typedRoles: [
    "Azure OpenAI Engineer",
    "Generative AI Specialist",
    "RAG Solution Builder",
    "Azure Databricks Developer",
    "PySpark Data Engineer",
    "Prompt Flow Architect"
  ]
};

export const socialLinks: LinkItem[] = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedIn, icon: Linkedin, external: true },
  { label: "GitHub", href: profile.github, icon: Github, external: true },
  { label: "Phone", href: `tel:${profile.phone.replace(/-/g, "")}`, icon: Phone }
];

export const quickFacts = [
  { icon: BriefcaseBusiness, label: "Current Company", value: "MAQ Software" },
  { icon: MapPin, label: "Location", value: "Noida, India" },
  { icon: Sparkles, label: "Focus", value: "AI, RAG, Cloud Data" },
  { icon: GraduationCap, label: "Education", value: "B.Tech IT" }
];

export const skills: Skill[] = [
  { name: "Python", category: "Programming Languages", level: 92, highlight: true },
  { name: "PySpark", category: "Programming Languages", level: 90, highlight: true },
  { name: "SQL", category: "Programming Languages", level: 88, highlight: true },
  { name: "Azure OpenAI", category: "AI / GenAI", level: 94, highlight: true },
  { name: "GPT-4", category: "AI / GenAI", level: 92, highlight: true },
  { name: "Prompt Engineering", category: "AI / GenAI", level: 94, highlight: true },
  { name: "Prompt Flow", category: "AI / GenAI", level: 92, highlight: true },
  { name: "LangChain", category: "AI / GenAI", level: 82 },
  { name: "Agentic AI", category: "AI / GenAI", level: 82 },
  { name: "LLM Integration", category: "AI / GenAI", level: 90, highlight: true },
  { name: "RAG", category: "AI / GenAI", level: 90, highlight: true },
  { name: "Model Fine-Tuning", category: "AI / GenAI", level: 78 },
  { name: "Azure Functions", category: "Backend", level: 90, highlight: true },
  { name: "Azure Data Factory", category: "Data Engineering", level: 86 },
  { name: "Azure Databricks", category: "Data Engineering", level: 90, highlight: true },
  { name: "Azure Logic Apps", category: "Cloud Platforms", level: 88 },
  { name: "Snowflake", category: "Databases", level: 84 },
  { name: "Azure Data Explorer", category: "Databases", level: 82 },
  { name: "ADLS Gen2", category: "Cloud Platforms", level: 86 },
  { name: "Azure Cognitive Search", category: "AI / GenAI", level: 90, highlight: true },
  { name: "Azure AI Services", category: "AI / GenAI", level: 88 },
  { name: "Azure Document Intelligence", category: "AI / GenAI", level: 86 },
  { name: "Azure Cognitive Services", category: "AI / GenAI", level: 84 },
  { name: "Azure Application Insights", category: "Tools & Platforms", level: 86 },
  { name: "Azure DevOps", category: "Tools & Platforms", level: 82 },
  { name: "Docker", category: "DevOps", level: 78 },
  { name: "React", category: "Frontend", level: 72 },
  { name: "TypeScript", category: "Frontend", level: 74 },
  { name: "Tailwind CSS", category: "Frontend", level: 72 },
  { name: "Validation Frameworks", category: "Testing Tools", level: 78 },
  { name: "Git", category: "Version Control", level: 78 }
];

export const skillCategories = Array.from(new Set(skills.map((skill) => skill.category)));

export const experiences: Experience[] = [
  {
    company: "MAQ Software",
    location: "Noida",
    title: "Senior Software Engineer 1",
    duration: "October 2025 - Present",
    summary:
      "Leading enterprise-scale AI initiatives with Azure OpenAI, Prompt Flow, GPT-4, Azure Cognitive Search, and production monitoring.",
    responsibilities: [
      "Led enterprise AI initiatives supporting 3,000+ daily users and improving query relevance scores by 40%.",
      "Designed reusable prompt orchestration frameworks with validation, hallucination mitigation, and document intelligence controls.",
      "Shipped a GPT-4 based Azure DevOps extension adopted by 6+ teams and improved developer throughput by 25%.",
      "Streamlined 8+ distributed workflows through parallelization and performance tuning."
    ],
    technologies: [
      "Azure Prompt Flow",
      "GPT-4",
      "Azure Cognitive Search",
      "Azure Application Insights",
      "Azure Data Explorer",
      "Azure DevOps"
    ],
    achievements: [
      "Reduced execution latency by 40%.",
      "Reduced incident diagnosis time by 30%.",
      "Guided 10+ engineers across 12+ Agile sprints."
    ]
  },
  {
    company: "MAQ Software",
    location: "Noida",
    title: "Software Engineer 2",
    duration: "September 2024 - September 2025",
    summary:
      "Built automated cloud data pipelines and multilingual NLP workflows across Azure, Databricks, PySpark, and Snowflake.",
    responsibilities: [
      "Built ingestion pipelines processing 50GB+ of CRM Dataverse data daily into ADLS Gen2.",
      "Executed transformations on 10M+ records per day using Azure Functions.",
      "Developed multilingual NLP workflows with Azure Databricks, PySpark, and Snowflake."
    ],
    technologies: ["Azure Logic Apps", "ADLS Gen2", "Azure Functions", "Azure Databricks", "PySpark", "Snowflake"],
    achievements: [
      "Raised data availability SLAs from 95% to 99%.",
      "Shortened data preparation cycles by 65%.",
      "Achieved 92% multilingual accuracy across 6+ languages."
    ]
  },
  {
    company: "MAQ Software",
    location: "Noida",
    title: "Software Engineer 1",
    duration: "June 2022 - September 2024",
    summary:
      "Delivered Generative AI tools for document classification, content extraction, and enterprise document normalization.",
    responsibilities: [
      "Contributed to 3+ Generative AI initiatives using Azure AI Services.",
      "Built tools for document classification, content extraction, structuring, and normalization.",
      "Collaborated with product managers, QA, and UX designers across 4+ releases."
    ],
    technologies: ["Azure AI Services", "Azure Document Intelligence", "LLM Workflows", "Python", "SQL"],
    achievements: [
      "Supported 5+ internal stakeholders across product and analytics teams.",
      "Reduced post-release defects by 20% through iterative release feedback."
    ]
  }
];

export const projects: Project[] = [
  {
    name: "Generative AI Platform",
    description:
      "AI-driven entity extraction and document intelligence platform for enterprise content processing, search indexing, multilingual text analytics, and compliant comparisons.",
    categories: ["AI/ML", "Cloud", "Backend", "Enterprise Apps", "Data Engineering"],
    techStack: [
      "Azure OpenAI",
      "Azure Functions",
      "Docker",
      "Azure Cognitive Search",
      "Azure AI Services",
      "Azure Document Intelligence",
      "Text Analytics"
    ],
    keyFeatures: [
      "Entity extraction with 40% recognition accuracy improvement",
      "Dockerized Azure Functions for cloud-native execution",
      "Optimized search indexing for faster retrieval",
      "GDPR-compliant comparison flows",
      "Multilingual interpretation with 92% accuracy"
    ],
    responsibilities: [
      "Architected the extraction workflow and cloud execution model.",
      "Optimized processing efficiency by 25%.",
      "Added advanced text analytics capabilities for multilingual interpretation."
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "AI Chatbot Solution",
    description:
      "Conversational AI platform using Azure Prompt Flow and Azure Cognitive Search to improve enterprise query response quality for thousands of daily users.",
    categories: ["AI/ML", "Cloud", "Full Stack", "Enterprise Apps", "Data Engineering"],
    techStack: [
      "Azure Prompt Flow",
      "Azure Cognitive Search",
      "Azure Databricks",
      "Azure Logic Apps",
      "RAG",
      "GPT-4"
    ],
    keyFeatures: [
      "Serves 3,000+ users daily",
      "Improved query response quality by 40%",
      "Processes 150GB/day through orchestrated pipelines",
      "Coordinates 25 workflows",
      "Saves 30+ engineering hours per week"
    ],
    responsibilities: [
      "Engineered conversational orchestration and retrieval workflows.",
      "Systematized cloud data pipelines.",
      "Improved response quality through RAG and search relevance tuning."
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  }
];

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "Date not listed in resume",
    highlight: "Validates Azure AI solution design, implementation, and operational knowledge."
  },
  {
    name: "Databricks Certified: Data Engineer Associate",
    issuer: "Databricks",
    date: "Date not listed in resume",
    highlight: "Validates lakehouse, ETL, data pipeline, and Databricks engineering capabilities."
  }
];

export const education: Education = {
  degree: "Bachelor of Technology in Information Technology",
  institution: "Greater Noida Institute of Technology",
  location: "Noida",
  duration: "August 2018 - June 2022",
  score: "CGPA: 83.33%"
};

export const achievements = [
  {
    icon: Rocket,
    title: "Enterprise AI Adoption",
    text: "Supported 3,000+ daily users through Azure OpenAI and search-powered AI workflows."
  },
  {
    icon: ShieldCheck,
    title: "Production Reliability",
    text: "Improved SLA adherence with Azure Application Insights and Azure Data Explorer monitoring."
  },
  {
    icon: Database,
    title: "Large-Scale Data Processing",
    text: "Processed 50GB+ CRM data daily and transformed 10M+ records per day."
  },
  {
    icon: Award,
    title: "Certified Cloud Data Engineer",
    text: "Holds Microsoft Azure AI Engineer Associate and Databricks Data Engineer Associate certifications."
  }
];

export const stackGroups = [
  { icon: Code2, label: "Languages", values: ["Python", "PySpark", "SQL"] },
  { icon: Sparkles, label: "AI / GenAI", values: ["Azure OpenAI", "GPT-4", "Prompt Flow", "LangChain", "RAG"] },
  { icon: Cloud, label: "Azure Cloud", values: ["Azure Functions", "ADF", "Logic Apps", "ADLS Gen2", "App Insights"] },
  { icon: Database, label: "Data", values: ["Databricks", "Snowflake", "Azure Data Explorer", "Cognitive Search"] },
  { icon: SquareTerminal, label: "Delivery", values: ["Docker", "Azure DevOps", "Monitoring", "Agile"] }
];
