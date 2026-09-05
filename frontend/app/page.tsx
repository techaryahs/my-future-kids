import Hero from "@/components/home/Hero";
import TechnologyEcosystem from "@/components/home/TechnologyEcosystem";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import LearningJourney from "@/components/home/LearningJourney";
import FeaturedPreview from "@/components/home/FeaturedPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TechnologyEcosystem />
      <WhyChooseUs />
      <Stats />
      <LearningJourney />
      <FeaturedPreview />
      <CTASection />
    </>
  );
}
