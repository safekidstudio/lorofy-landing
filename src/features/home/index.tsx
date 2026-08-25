import { CtaSection } from "./components/cta-section";
import { HeroSection } from "./components/hero-section";
import { StatsSection } from "./components/stats-section";
import { StepsSection } from "./components/steps-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { ToolsSection } from "./components/tools-section";

const HomeFeature = () => {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <StepsSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomeFeature;
