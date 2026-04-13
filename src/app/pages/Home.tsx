import { HeroSection } from "../components/HeroSection";
import { ProblemAccessSection } from "../components/ProblemAccessSection";
import { SolutionSAGSection } from "../components/SolutionSAGSection";
import { ServicesSection } from "../components/ServicesSection";
import { Vision2030Section } from "../components/Vision2030Section";
import { ImmersionProgramSection } from "../components/ImmersionProgramSection";
import { FoundersSection } from "../components/FoundersSection";
import { PartnersSection } from "../components/PartnersSection";
import { OnboardingTimeline } from "../components/OnboardingTimeline";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemAccessSection />
      <SolutionSAGSection />
      <ServicesSection />
      <Vision2030Section />
      <ImmersionProgramSection />
      <OnboardingTimeline />
      <FoundersSection />
      <PartnersSection />
    </>
  );
}
