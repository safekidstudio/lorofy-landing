"use client";

import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";
import { OriginSection } from "./components/origin-section";
import { QuoteSection } from "./components/quote-section";
import { ValuesSection } from "./components/values-section";
import { AboutStatsSection } from "./components/stats-section";
import { TeamSection } from "./components/team-section";
import { ContactSection } from "./components/contact-section";

export function AboutFeature() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Page Header */}
      <Bounded className="bg-background py-20 pb-10">
        <ScrollAnimatedContainer
          type="fade"
          delay={0.1}
          className="flex flex-col items-center text-center gap-3 mx-auto"
        >
          <Heading variant="hero" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-semibold select-none">
            About Lorofy
          </Heading>
          <Paragraph variant="section" className="text-secondary select-none mt-1">
            Making productivity feel like tending a garden
          </Paragraph>
        </ScrollAnimatedContainer>
      </Bounded>

      <OriginSection />
      <QuoteSection />
      <ValuesSection />
      <AboutStatsSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
