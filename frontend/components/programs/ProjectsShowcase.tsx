// src/components/programs/ProjectsShowcase.tsx
import Image from "next/image";
import { ProjectItem } from "@/types/program";

interface ProjectsShowcaseProps {
  projects: ProjectItem[];
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
          >
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}