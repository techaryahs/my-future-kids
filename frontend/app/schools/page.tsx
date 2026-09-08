import SchoolHero from "@/components/schools/SchoolHero";
import SchoolOptions from "@/components/schools/SchoolOptions";
import ProblemOpportunity from "@/components/schools/ProblemOpportunity";
import EcosystemGrid from "@/components/schools/EcosystemGrid";
import LabShowcase from "@/components/schools/LabShowcase";
import ImplementationJourney from "@/components/schools/ImplementationJourney";
import Outcomes from "@/components/schools/Outcomes";
import WhyChooseUs from "@/components/schools/WhyChooseUs";
import SuccessStories from "@/components/schools/SuccessStories";
import SchoolCTA from "@/components/schools/SchoolCTA";

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchoolHero />

      <SchoolOptions />

      <ProblemOpportunity />

      <EcosystemGrid />

      <LabShowcase />

      <ImplementationJourney />

      <Outcomes />

      <WhyChooseUs />

      <SuccessStories />

      <SchoolCTA />
    </main>
  );
}