// src/types/program.ts
export interface CurriculumItem {
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  image: string;
  description: string;
}

export interface Program {
  slug: string;
  title: string;
  tagline: string;
  ageGroups: string[];
  overview: string;
  benefits: string[];
  curriculum: CurriculumItem[];
  outcomes: string[];
  projects: ProjectItem[];
  ctaText: string;
}