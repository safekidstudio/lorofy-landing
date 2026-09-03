import Image from "next/image";
import HeroImage from "@/assets/images/hero.png";
import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";

export function HeroSection() {
  return (
    <Bounded className="bg-background" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="md:col-span-7">
          <ScrollAnimatedContainer
            type="slide"
            direction="left"
            delay={0.1}
            className="flex flex-col items-start text-left gap-6"
          >
            {/* Badge */}
            <div className="inline-flex leading-none items-center gap-1.5 px-4 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold select-none">
              🌱 GROW THOSE STREAKS
            </div>

            {/* Title */}
            <Heading as="h1" variant="hero">
              Every second you focus is a step toward growth
            </Heading>

            {/* Description */}
            <Paragraph variant="hero">
              Lorofy combines the proven Pomodoro technique with whimsical plant
              gamification. Block distractions, grow rare flora, and build
              life-changing habits.
            </Paragraph>
          </ScrollAnimatedContainer>
        </div>

        {/* Hero Mockup Image */}
        <div className="md:col-span-5 w-full flex justify-center items-center">
          <ScrollAnimatedContainer
            type="slide"
            direction="right"
            delay={0.2}
            className="w-full"
          >
            <div className="relative w-full max-w-md md:max-w-none transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={HeroImage}
                alt="Lorofy mobile application mockup showing companion selector, focus tracking, and timer"
                width={480}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </ScrollAnimatedContainer>
        </div>
      </div>
    </Bounded>
  );
}
