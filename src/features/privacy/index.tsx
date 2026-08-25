"use client";

import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { TocLayout } from "./components/toc-layout";

export function PrivacyFeature() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Page Header */}
      <Bounded className="bg-background py-20 pb-10">
        <ScrollAnimatedContainer
          type="fade"
          delay={0.1}
          className="flex flex-col items-center text-center gap-3 max-w-4xl mx-auto"
        >
          <Heading
            variant="hero"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold select-none"
          >
            Privacy Policy
          </Heading>
          <Paragraph
            variant="card"
            className="text-foreground/50 select-none font-medium md:text-lg"
          >
            Last updated: August 2026
          </Paragraph>
          <Paragraph
            variant="section"
            className="text-secondary select-none mt-2"
          >
            Your privacy matters. At Lorofy, we believe in complete transparency
            about how we collect, handle, and store your focus data. We
            prioritize local storage and minimize third-party tracking.
          </Paragraph>
        </ScrollAnimatedContainer>
      </Bounded>

      {/* Main TOC Layout */}
      <TocLayout />
    </div>
  );
}
