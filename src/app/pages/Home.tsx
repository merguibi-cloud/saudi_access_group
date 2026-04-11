import { HeroSection } from "../components/HeroSection";
import { ProblemAccessSection } from "../components/ProblemAccessSection";
import { SolutionSAGSection } from "../components/SolutionSAGSection";
import { ServicesSection } from "../components/ServicesSection";
import { OnboardingTimeline } from "../components/OnboardingTimeline";
import { Vision2030Section } from "../components/Vision2030Section";
import { ImmersionProgramSection } from "../components/ImmersionProgramSection";
import { FoundersSection } from "../components/FoundersSection";
import { PartnersSection } from "../components/PartnersSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemAccessSection />
      <SolutionSAGSection />
      <ServicesSection />
      <OnboardingTimeline />
      <Vision2030Section />
      <ImmersionProgramSection />
      <FoundersSection />
      <PartnersSection />
    </>
  );
}
