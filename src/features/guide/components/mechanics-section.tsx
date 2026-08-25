import { Sprout, Timer, Trophy, Volume2 } from "lucide-react";
import Image from "next/image";
import AmbientSoundImg from "@/assets/images/screenshoots/ambient-sound.png";
// Import Screenshoots
import FocusSettingsImg from "@/assets/images/screenshoots/focus-settings.png";
import LeaderboardImg from "@/assets/images/screenshoots/leaderboard.png";
import PlantCollectionImg from "@/assets/images/screenshoots/plant-collection.png";
import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { cn } from "@/lib/utils";

const DEEP_DIVE_MECHANICS = [
  {
    icon: Timer,
    title: "Focus Modes (Pomodoro & Block)",
    description:
      "Set pomodoro cycles, lock focus windows, and restrict usage of chosen distracting applications.",
    image: FocusSettingsImg,
    imageAlt:
      "Focus settings menu showcasing pomodoro duration, tags, and app blocking options",
    imageWidth: 320,
    imageHeight: 640,
    reverse: false,
  },
  {
    icon: Volume2,
    title: "Ambient Sound Picker",
    description:
      "A curated set of ambient sounds including soft rain, forest winds, and brown noise to shield you from noise.",
    image: AmbientSoundImg,
    imageAlt: "Ambient sound picker console",
    imageWidth: 320,
    imageHeight: 200,
    reverse: true,
  },
  {
    icon: Trophy,
    title: "Leaderboards & Community Achievements",
    description:
      "Compete with friends, climb weekly ranks, and earn special badges for long-run streaks.",
    image: LeaderboardImg,
    imageAlt: "Leaderboard user rankings dashboard screen layout",
    imageWidth: 320,
    imageHeight: 640,
    reverse: false,
  },
  {
    icon: Sprout,
    title: "Rare Plant Collection",
    description:
      "Acquire rare flora seeds and expand your garden blocks. Watch your plants flourish.",
    image: PlantCollectionImg,
    imageAlt: "User rare plants collection gallery screen layout",
    imageWidth: 320,
    imageHeight: 400,
    reverse: true,
  },
];

export function MechanicsSection() {
  return (
    <Bounded className="bg-background py-20">
      <div className="flex flex-col items-center gap-16">
        <ScrollAnimatedContainer type="fade" delay={0.1}>
          <Heading variant="section" className="text-center font-semibold mb-4">
            Deep-Dive Mechanics
          </Heading>
        </ScrollAnimatedContainer>

        <div className="flex flex-col gap-24 w-full">
          {DEEP_DIVE_MECHANICS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
              >
                {/* Text Container */}
                <ScrollAnimatedContainer
                  type="slide"
                  direction={item.reverse ? "right" : "left"}
                  delay={0.1}
                  className={cn(
                    "md:col-span-6 flex flex-col items-start gap-4",
                    item.reverse ? "order-1 md:order-2" : "",
                  )}
                >
                  <div className="p-3 rounded-xl bg-accent text-foreground">
                    <Icon className="size-5" />
                  </div>
                  <Heading
                    variant="section"
                    as="h3"
                    className="text-2xl md:text-3xl font-semibold"
                  >
                    {item.title}
                  </Heading>
                  <Paragraph
                    variant="section"
                    className="text-secondary leading-relaxed"
                  >
                    {item.description}
                  </Paragraph>
                </ScrollAnimatedContainer>

                {/* Image Container */}
                <ScrollAnimatedContainer
                  type="slide"
                  direction={item.reverse ? "left" : "right"}
                  delay={0.2}
                  className={cn(
                    "md:col-span-6 flex justify-center",
                    item.reverse ? "order-2 md:order-1" : "",
                  )}
                >
                  <div className="relative w-full max-w-sm overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-auto object-contain rounded-2xl"
                      width={item.imageWidth}
                      height={item.imageHeight}
                    />
                  </div>
                </ScrollAnimatedContainer>
              </div>
            );
          })}
        </div>
      </div>
    </Bounded>
  );
}
