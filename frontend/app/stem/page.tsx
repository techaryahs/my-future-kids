import ProgramHero from "@/components/programs/ProgramHero";
import BenefitsSection from "@/components/programs/BenefitsSection";
import CurriculumSection from "@/components/programs/CurriculumSection";
import OutcomesSection from "@/components/programs/OutcomesSection";
import ProjectsShowcase from "@/components/programs/ProjectsShowcase";
import ProgramCTA from "@/components/programs/ProgramCTA";
import { programs } from "@/constants/programs";

export default function StemPage() {
  const program = programs.find((p) => p.slug === "stem")!;

  return (
    <>
      <ProgramHero title={program.title} tagline={program.tagline} overview={program.overview} ageGroups={program.ageGroups} />
      <BenefitsSection benefits={program.benefits} />
      <CurriculumSection curriculum={program.curriculum} />
      <OutcomesSection outcomes={program.outcomes} />
      <ProjectsShowcase projects={program.projects} />
      <ProgramCTA ctaText={program.ctaText} />
    </>
  );
}