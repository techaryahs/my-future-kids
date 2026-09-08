// src/components/programs/ProjectsShowcase.tsx
import Image from "next/image";
import { ProjectItem } from "@/types/program";

interface ProjectsShowcaseProps {
  projects: ProjectItem[];
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:shadow-lg transition"
          >
            <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}