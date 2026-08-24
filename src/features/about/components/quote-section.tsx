import { Bounded } from "@/components/shared/bounded";
import { ScrollAnimatedContainer } from "@/components/animated";

export function QuoteSection() {
  return (
    <Bounded className="bg-[#FAF9F6] border-y border-border/40 py-20">
      <ScrollAnimatedContainer type="zoom" delay={0.1} className="max-w-5xl mx-auto text-center">
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-snug select-none">
          &ldquo;We believe focus should feel rewarding, not restrictive. Every minute of deep work deserves to bloom into something beautiful.&rdquo;
        </blockquote>
      </ScrollAnimatedContainer>
    </Bounded>
  );
}
