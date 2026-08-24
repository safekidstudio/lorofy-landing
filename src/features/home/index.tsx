import { HeroSection } from './components/hero-section'
import { ToolsSection } from './components/tools-section'
import { StepsSection } from './components/steps-section'
import { StatsSection } from './components/stats-section'
import { TestimonialsSection } from './components/testimonials-section'
import { CtaSection } from './components/cta-section'

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
  )
}

export default HomeFeature