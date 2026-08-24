import { Timer, Sprout, Volume2, ShieldAlert } from "lucide-react";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";

export function ToolsSection() {
  return (
    <Bounded className="bg-background border-t border-border/20" id="guide">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <ScrollAnimatedContainer type="fade" delay={0.1} className="flex flex-col items-center text-center gap-3">
          <Heading variant="section">
            Gamified tools for absolute clarity
          </Heading>
          <Paragraph variant="section">
            Ditch distracting screens and replace empty scrolls with lush organic feedback loops.
          </Paragraph>
        </ScrollAnimatedContainer>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
          {/* Card 1 - Focus Timer */}
          <ScrollAnimatedContainer type="slide" direction="up" delay={0.1}>
            <div className="flex items-start p-8 rounded-2xl bg-secondary/10 shadow-2xs hover:shadow-xs transition-shadow gap-6 h-full">
              <div className="p-3.5 rounded-xl bg-white text-primary shrink-0">
                <Timer className="size-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <Heading variant="card" as="h3">Focus Timer</Heading>
                <Paragraph variant="card">
                  A customisable Pomodoro timer designed to lock in your concentration without distraction.
                </Paragraph>
              </div>
            </div>
          </ScrollAnimatedContainer>

          {/* Card 2 - Plant Growing */}
          <ScrollAnimatedContainer type="slide" direction="up" delay={0.2}>
            <div className="flex items-start p-8 rounded-2xl bg-[#FFF9EA] shadow-2xs hover:shadow-xs transition-shadow gap-5 h-full">
              <div className="p-3.5 rounded-xl bg-white text-primary shrink-0">
                <Sprout className="size-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <Heading variant="card" as="h3">Plant Growing</Heading>
                <Paragraph variant="card">
                  As you focus, watch a random digital seedling evolve into a unique botanical asset.
                </Paragraph>
              </div>
            </div>
          </ScrollAnimatedContainer>

          {/* Card 3 - Sound Picker */}
          <ScrollAnimatedContainer type="slide" direction="up" delay={0.3}>
            <div className="flex items-start p-8 rounded-2xl bg-[#E8F5FF] shadow-2xs hover:shadow-xs transition-shadow gap-5 h-full">
              <div className="p-3.5 rounded-xl bg-white text-primary shrink-0">
                <Volume2 className="size-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <Heading variant="card" as="h3">Sound Picker</Heading>
                <Paragraph variant="card">
                  Ambient sounds including soft rain, forest winds, and white noise to create your focus sanctuary.
                </Paragraph>
              </div>
            </div>
          </ScrollAnimatedContainer>

          {/* Card 4 - App Blocker */}
          <ScrollAnimatedContainer type="slide" direction="up" delay={0.4}>
            <div className="flex items-start p-8 rounded-2xl bg-[#FEECEF] shadow-2xs hover:shadow-xs transition-shadow gap-5 h-full">
              <div className="p-3.5 rounded-xl bg-white text-primary shrink-0">
                <ShieldAlert className="size-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <Heading variant="card" as="h3">App Blocker</Heading>
                <Paragraph variant="card">
                  Smart hard-block mode that restricts distracting social applications during focus blocks.
                </Paragraph>
              </div>
            </div>
          </ScrollAnimatedContainer>
        </div>
      </div>
    </Bounded>
  );
}
