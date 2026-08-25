import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Paragraph } from "@/components/shared/paragraph";

const ABOUT_STATS = [
  { value: "50K+", label: "Active focusers" },
  { value: "15+", label: "Countries represented" },
  { value: "100K+", label: "Plants grown successfully" },
  { value: "4.8 ★", label: "App Store Rating" },
];

export function AboutStatsSection() {
  return (
    <Bounded className="bg-brand-dark text-white border-y border-emerald-950 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 items-center text-center max-w-6xl mx-auto">
        {ABOUT_STATS.map((stat, index) => (
          <ScrollAnimatedContainer
            key={stat.label}
            type="fade"
            delay={0.1 * (index + 1)}
          >
            <div className="flex flex-col gap-1">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-heading select-none">
                {stat.value}
              </span>
              <Paragraph className="text-white/50 select-none text-sm">
                {stat.label}
              </Paragraph>
            </div>
          </ScrollAnimatedContainer>
        ))}
      </div>
    </Bounded>
  );
}
