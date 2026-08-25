import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";

const ONBOARDING_STEPS = [
  {
    id: "01",
    title: "Choose focus & plant type",
    description:
      "Choose your duration, companion type, and select your botanical asset to grow.",
  },
  {
    id: "02",
    title: "Get ready to focus",
    description:
      "Tap grow, put your phone face down, and let your companion work.",
  },
  {
    id: "03",
    title: "Harvest and grow",
    description:
      "Completing your timer unlocks rare flora assets. Leaving early will cause seedlings to wither.",
  },
];

export function OnboardingSection() {
  return (
    <Bounded className="bg-[#FAF9F6] py-20">
      <div className="flex flex-col items-center gap-12">
        <ScrollAnimatedContainer type="fade" delay={0.1}>
          <Heading variant="section" className="text-center font-semibold">
            Onboarding Guide
          </Heading>
        </ScrollAnimatedContainer>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
          {ONBOARDING_STEPS.map((step, index) => (
            <ScrollAnimatedContainer
              key={step.id}
              type="slide"
              direction="up"
              delay={0.1 * (index + 1)}
            >
              <div className="flex items-center gap-5 p-8 bg-card border border-border/70 rounded-2xl shadow-2xs hover:shadow-xs transition-shadow">
                <div className="size-12 md:size-14 rounded-full bg-secondary/20 text-foreground flex items-center justify-center font-bold text-lg md:text-xl shrink-0 select-none">
                  {step.id}
                </div>
                <div className="flex flex-col gap-0.5">
                  <Heading
                    variant="card"
                    as="h3"
                    className="text-base md:text-lg font-semibold"
                  >
                    {step.title}
                  </Heading>
                  <Paragraph
                    variant="card"
                    className="text-sm md:text-base text-secondary"
                  >
                    {step.description}
                  </Paragraph>
                </div>
              </div>
            </ScrollAnimatedContainer>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
