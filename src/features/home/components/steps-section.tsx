import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";

export function StepsSection() {
  return (
    <Bounded className="bg-background border-t border-border/20">
      <div className="flex flex-col items-center gap-16">
        {/* Section Header */}
        <ScrollAnimatedContainer type="fade" delay={0.1} className="flex flex-col items-center text-center gap-3">
          <Heading variant="section">
            Three steps to your first seedling
          </Heading>
          <Paragraph variant="section">
            No complicated settings. Open Lorofy, set a timer threshold, and start your growth journey.
          </Paragraph>
        </ScrollAnimatedContainer>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-4">
          {/* Step 1 */}
          <ScrollAnimatedContainer type="slide" direction="up" delay={0.1} className="w-full">
            <div className="flex flex-col items-center text-center gap-4 group">
              <div className="size-14 md:size-16 rounded-full bg-accent flex items-center justify-center text-xl md:text-2xl font-bold text-foreground shadow-2xs group-hover:border-primary/50 transition-colors font-sans select-none">
                01
              </div>
              <div className="flex flex-col gap-2 max-w-sm">
                <Heading variant="card" as="h3">Set your timer</Heading>
                <Paragraph variant="card">
                  Decide on your task and set the customized focus session that fits your schedule best.
                </Paragraph>
              </div>
            </div>
          </ScrollAnimatedContainer>

          {/* Step 2 */}
          <ScrollAnimatedContainer type="slide" direction="up" delay={0.2} className="w-full">
            <div className="flex flex-col items-center text-center gap-4 group">
              <div className="size-14 md:size-16 rounded-full bg-accent flex items-center justify-center text-xl md:text-2xl font-bold text-foreground shadow-2xs group-hover:border-primary/50 transition-colors font-sans select-none">
                02
              </div>
              <div className="flex flex-col gap-2 max-w-sm">
                <Heading variant="card" as="h3">Stay focused</Heading>
                <Paragraph variant="card">
                  Keep the app active. Leaving your focus session will pause or halt your growth deficit.
                </Paragraph>
              </div>
            </div>
          </ScrollAnimatedContainer>

          {/* Step 3 */}
          <ScrollAnimatedContainer type="slide" direction="up" delay={0.3} className="w-full">
            <div className="flex flex-col items-center text-center gap-4 group">
              <div className="size-14 md:size-16 rounded-full bg-accent flex items-center justify-center text-xl md:text-2xl font-bold text-foreground shadow-2xs group-hover:border-primary/50 transition-colors font-sans select-none">
                03
              </div>
              <div className="flex flex-col gap-2 max-w-sm">
                <Heading variant="card" as="h3">Watch your plant grow</Heading>
                <Paragraph variant="card">
                  Complete the timer to add a gorgeous new plant to your private garden collection.
                </Paragraph>
              </div>
            </div>
          </ScrollAnimatedContainer>
        </div>
      </div>
    </Bounded>
  );
}
