import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";

export function TeamsBanner() {
  return (
    <Bounded className="bg-background py-16">
      <ScrollAnimatedContainer type="zoom" delay={0.1}>
        <div className="flex flex-col items-start gap-4 p-8 md:p-12 bg-brand-dark border border-emerald-950 rounded-3xl shadow-xs max-w-5xl mx-auto w-full text-left">
          <Heading variant="section" as="h3" className="text-2xl md:text-3xl font-semibold text-white leading-tight">
            Lorofy for Teams
          </Heading>
          <Paragraph className="text-white/80 text-sm md:text-base leading-relaxed">
            Want to support concentration and well-being inside your corporate workspace or studio environment? We offer customized enterprise accounts, group garden challenges, and specialized SLA setups.
          </Paragraph>
        </div>
      </ScrollAnimatedContainer>
    </Bounded>
  );
}
