import Image from "next/image";
import MewIllustration from "@/assets/illustrations/mew.svg";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";

export function OriginSection() {
  return (
    <Bounded className="bg-background py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center w-full mx-auto">
        {/* Text Column */}
        <ScrollAnimatedContainer
          type="slide"
          direction="left"
          delay={0.1}
          className="md:col-span-7 flex flex-col gap-5 text-left"
        >
          <Heading variant="section" as="h2" className="text-3xl md:text-4xl font-semibold">
            Born from frustration
          </Heading>
          <Paragraph className="text-foreground/75 leading-relaxed">
            We built Lorofy because most focus apps promised a lot but delivered distraction halls. They ranked down sessions, enabled doomscrolling among progress, and tracked us all because omnipresent engagement meant more followers.
          </Paragraph>
          <Paragraph className="text-foreground/75 leading-relaxed">
            We aimed at something simpler. Lorofy transforms focus and idle time more into a rewarding growing process. By pairing productivity through attention-intentional growth feedback, we help creatives and teams build healthier habits without pressure.
          </Paragraph>
        </ScrollAnimatedContainer>

        {/* Illustration Column */}
        <ScrollAnimatedContainer
          type="slide"
          direction="right"
          delay={0.2}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-xs md:max-w-sm aspect-square flex items-center justify-center bg-[#F5F5F0] border border-border/50 rounded-3xl overflow-hidden p-8">
            <Image
              src={MewIllustration}
              alt="Mew the Lorofy mascot illustration"
              className="w-full h-auto object-contain"
              width={280}
              height={280}
            />
          </div>
        </ScrollAnimatedContainer>
      </div>
    </Bounded>
  );
}
