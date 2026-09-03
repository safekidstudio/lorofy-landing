"use client";

import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { FaqSection } from "./components/faq-section";
import { MechanicsSection } from "./components/mechanics-section";
import { OnboardingSection } from "./components/onboarding-section";
import { SaplingSection } from "./components/sapling-section";
import { TipsSection } from "./components/tips-section";

export function GuideFeature() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* 1. Page Header */}
      <Bounded className="bg-background py-20">
        <ScrollAnimatedContainer
          type="fade"
          delay={0.1}
          className="flex flex-col items-center text-center gap-3"
        >
          <Heading
            variant="hero"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold select-none"
          >
            How to use Lorofy
          </Heading>
          <Paragraph
            variant="section"
            className="text-base sm:text-lg text-secondary select-none"
          >
            A quick start guide to achieving your focus milestones
          </Paragraph>
        </ScrollAnimatedContainer>
      </Bounded>

      {/* Modular sections */}
      <OnboardingSection />
      <MechanicsSection />
      <FaqSection />
      <SaplingSection />
      <TipsSection />
    </div>
  );
}
