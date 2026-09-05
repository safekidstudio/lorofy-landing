"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { cn } from "@/lib/utils";

const FREE_FEATURES = [
  "Basic focus timer limits (25m)",
  "3 basic seedling classes",
  "Weekly progress logs",
];

const PRO_FEATURES = [
  "Custom timers & hard lock blocks",
  "150+ rare botanical classes",
  "Full sound picker + Spotify integrations",
  "Community achievement milestones",
];

export function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Bounded className="bg-background py-16">
      <div className="flex flex-col items-center gap-12 w-full">
        {/* Header Block */}
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
            Simple, transparent pricing
          </Heading>
          <Paragraph variant="section" className="text-secondary select-none">
            Start free, upgrade when you require more greenhouse space.
          </Paragraph>
        </ScrollAnimatedContainer>

        {/* Toggle Switch */}
        <ScrollAnimatedContainer type="fade" delay={0.2}>
          <div className="flex items-center p-1 bg-[#F1F3F5] rounded-full border border-border/40 select-none">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-5 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300",
                !isYearly
                  ? "bg-white text-foreground shadow-2xs"
                  : "text-foreground/50 hover:text-foreground",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "flex items-center gap-1.5 px-5 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300",
                isYearly
                  ? "bg-white text-foreground shadow-2xs"
                  : "text-foreground/50 hover:text-foreground",
              )}
            >
              Yearly
              <span className="px-2 py-0.5 text-[9px] font-bold text-white bg-primary rounded-full select-none">
                SAVE 20%
              </span>
            </button>
          </div>
        </ScrollAnimatedContainer>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-4">
          {/* Card 1: Free Plan */}
          <ScrollAnimatedContainer type="slide" direction="up" delay={0.1}>
            <div className="flex flex-col p-8 bg-card border border-border/70 rounded-3xl h-full shadow-2xs hover:shadow-xs transition-shadow">
              <div className="flex flex-col gap-2">
                <Heading
                  variant="card"
                  as="h3"
                  className="text-xl md:text-2xl font-semibold"
                >
                  Free Plan
                </Heading>
                <Paragraph variant="card" className="text-sm text-secondary">
                  Ideal to build basic time-tracking routines.
                </Paragraph>
              </div>

              {/* Price block */}
              <div className="flex items-baseline gap-1 mt-6 select-none">
                <span className="text-4xl md:text-5xl font-semibold text-foreground">
                  $0
                </span>
                <span className="text-sm text-secondary">/ forever</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/50 my-6" />

              {/* Features checkmarks */}
              <ul className="flex flex-col gap-4">
                {FREE_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm md:text-base text-foreground/80"
                  >
                    <Check className="size-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimatedContainer>

          {/* Card 2: Forest Pro */}
          <ScrollAnimatedContainer type="slide" direction="up" delay={0.2}>
            <div className="flex flex-col p-8 bg-card border-2 border-primary rounded-3xl h-full shadow-xs hover:shadow-sm transition-shadow relative">
              {/* Badge */}
              <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold text-white bg-primary rounded-full select-none">
                Most Popular
              </span>

              <div className="flex flex-col gap-2">
                <Heading
                  variant="card"
                  as="h3"
                  className="text-xl md:text-2xl font-semibold"
                >
                  Forest Pro
                </Heading>
                <Paragraph variant="card" className="text-sm text-secondary">
                  Grow limit-free rare flora with full analytics.
                </Paragraph>
              </div>

              {/* Price block */}
              <div className="flex items-baseline gap-1 mt-6 select-none">
                <span className="text-4xl md:text-5xl font-semibold text-foreground">
                  {isYearly ? "$3.99" : "$4.99"}
                </span>
                <span className="text-sm text-secondary">/ month</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/50 my-6" />

              {/* Features checkmarks */}
              <ul className="flex flex-col gap-4">
                {PRO_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm md:text-base text-foreground/80"
                  >
                    <Check className="size-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimatedContainer>
        </div>

        {/* Guarantee Banner */}
        <ScrollAnimatedContainer
          type="slide"
          direction="up"
          delay={0.1}
          className="w-full max-w-5xl mt-6"
        >
          <div className="flex items-center gap-4 p-5 bg-secondary/20 border border-border/20 rounded-2xl">
            <div className="p-2.5 rounded-full bg-white text-primary shrink-0">
              <Check className="size-5" />
            </div>
            <div className="flex flex-col gap-0.5 text-left">
              <Heading
                variant="card"
                as="h4"
                className="text-base font-semibold"
              >
                7-Day Trial + 30-Day Money-Back Guarantee
              </Heading>
              <Paragraph variant="card" className="text-sm text-foreground/70">
                No questions asked. Cancel at any point during your premium
                trial and you won't be charged.
              </Paragraph>
            </div>
          </div>
        </ScrollAnimatedContainer>
      </div>
    </Bounded>
  );
}
