import Image from "next/image";
// Import Illustration
import MewIllustration from "@/assets/illustrations/mew.svg";
import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";

export function SaplingSection() {
  return (
    <Bounded className="bg-background py-16">
      <ScrollAnimatedContainer type="slide" direction="up" delay={0.1}>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 p-8 md:p-10  mx-auto w-full">
          {/* Left Illustration */}
          <div className="shrink-0 flex justify-center items-center">
            <Image
              src={MewIllustration}
              alt="Illustration showing a withered sprout in the garden block"
              className="size-[180px] md:size-[240px] object-contain"
              width={144}
              height={144}
            />
          </div>
          {/* Right content */}
          <div className="flex flex-col items-start gap-4">
            <Heading
              variant="section"
              as="h3"
              className="text-2xl md:text-3xl font-semibold text-[#00160A] leading-tight"
            >
              Want to remove a withered sapling?
            </Heading>
            <Paragraph
              variant="section"
              className="text-[#00160A]/80 text-sm md:text-base leading-relaxed"
            >
              If you check out early or break focus parameters, a withered tree
              will appear in your terrarium. Don't worry! You can clear it
              instantly to restore balance, or keep it as a proud monument to
              real-world interruptions.
            </Paragraph>
          </div>
        </div>
      </ScrollAnimatedContainer>
    </Bounded>
  );
}
