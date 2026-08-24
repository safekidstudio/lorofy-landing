import { Bounded } from "@/components/shared/bounded";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";

export function StatsSection() {
  return (
    <Bounded className="bg-brand-dark text-white border-y border-emerald-950" id="pricing">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center text-center">
        {/* Stat 1 */}
        <ScrollAnimatedContainer type="fade" delay={0.1}>
          <div className="flex flex-col gap-1">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading select-none">
              50K+
            </span>
            <Paragraph className="text-primary-foreground/50 select-none">
              Active focusers
            </Paragraph>
          </div>
        </ScrollAnimatedContainer>

        {/* Stat 2 */}
        <ScrollAnimatedContainer type="fade" delay={0.2}>
          <div className="flex flex-col gap-1 border-y md:border-y-0 md:border-x border-emerald-800/20 py-8 md:py-0">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading select-none">
              2M+
            </span>
            <Paragraph className="text-primary-foreground/50 select-none">
              Focus hours saved
            </Paragraph>
          </div>
        </ScrollAnimatedContainer>

        {/* Stat 3 */}
        <ScrollAnimatedContainer type="fade" delay={0.3}>
          <div className="flex flex-col gap-1">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading select-none">
              100K+
            </span>
            <Paragraph className="text-primary-foreground/50 select-none">
              Plants grown successfully
            </Paragraph>
          </div>
        </ScrollAnimatedContainer>
      </div>
    </Bounded>
  );
}
