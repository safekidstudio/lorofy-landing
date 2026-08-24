import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";

const CORE_VALUES = [
  {
    emoji: "🧘",
    title: "Mindful Focus",
    description:
      "Concentration is a form of self-care. We design every feature to reduce mental friction and amplify deep flow states.",
  },
  {
    emoji: "🌱",
    title: "Organic Growth",
    description:
      "Progress should feel structured. We believe in carefully cultivating seedlings that reflect real discipline.",
  },
  {
    emoji: "🤝",
    title: "Shared Garden",
    description:
      "Collaboration amplifies. Shared goals and co-tended milestones make the community flourish around us.",
  },
  {
    emoji: "✨",
    title: "Pure Simplicity",
    description:
      "No excess complexity here. Just polite cues, pure color, and an honest clear greenhouse view.",
  },
];

export function ValuesSection() {
  return (
    <Bounded className="bg-background py-20">
      <div className="flex flex-col items-center gap-12">
        <ScrollAnimatedContainer type="fade" delay={0.1}>
          <Heading variant="section" className="text-center font-semibold select-none">
            Our core botanical values
          </Heading>
        </ScrollAnimatedContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {CORE_VALUES.map((value, index) => (
            <ScrollAnimatedContainer
              key={value.title}
              type="slide"
              direction="up"
              delay={0.1 * (index + 1)}
            >
              <div className="flex flex-col gap-3 p-6 bg-card border border-border/70 rounded-2xl h-full shadow-2xs hover:shadow-xs transition-shadow">
                <span className="text-2xl select-none">{value.emoji}</span>
                <Heading variant="card" as="h3" className="text-base font-semibold">
                  {value.title}
                </Heading>
                <Paragraph variant="card" className="text-sm text-foreground/70 leading-relaxed">
                  {value.description}
                </Paragraph>
              </div>
            </ScrollAnimatedContainer>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
