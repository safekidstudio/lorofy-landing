import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";

const PRO_TIPS = [
  {
    title: "Clear Desk, Clear Mind",
    description: "Keep your physical study desk organized and set your phone out of arm's reach.",
  },
  {
    title: "Hard Lock Focus Mode",
    description: "Enable hard lock settings to build self-discipline and minimize phone pickup impulses.",
  },
  {
    title: "Use the Ambient Sounds",
    description: "Turn on forest ambient loops to mask distracting background hums and chatter.",
  },
  {
    title: "Streaks Matter",
    description: "Growing just 1 plant a day keeps your streak multiplier active and boosts focus coin yields.",
  },
];

export function TipsSection() {
  return (
    <Bounded className="bg-[#FAF9F6] border-t border-border/20 py-20">
      <div className="flex flex-col items-center gap-12">
        <ScrollAnimatedContainer type="fade" delay={0.1}>
          <Heading variant="section" className="text-center font-semibold mb-2">
            Pro Tips for Mindful Focus
          </Heading>
        </ScrollAnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto mt-2">
          {PRO_TIPS.map((tip, index) => (
            <ScrollAnimatedContainer
              key={tip.title}
              type="slide"
              direction="up"
              delay={0.1 * (index % 2 + 1)} // stagger columns (left/right staggered together)
            >
              <div className="flex flex-col items-start gap-2 p-6 md:p-8 bg-[#EFF2F1] border border-border/20 rounded-2xl h-full shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_378_1525)">
                      <path
                        d="M1.66602 17.5C1.66602 14.9999 3.20777 13.0332 5.89959 12.4998C7.91637 12.0998 9.99982 10.8331 10.8332 9.9997M9.16622 16.6666C7.70285 16.6711 6.29126 16.1254 5.21142 15.1378C4.13158 14.1502 3.46237 12.7928 3.3365 11.3348C3.21064 9.87692 3.63731 8.42493 4.53191 7.26687C5.42651 6.1088 6.72369 5.32925 8.16616 5.08283C12.9164 4.16612 14.1665 3.73277 15.8333 1.66602C16.6666 3.33275 17.5 5.1495 17.5 8.33296C17.5 12.9165 13.5165 16.6666 9.16622 16.6666Z"
                        stroke="#00160A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_378_1525">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <Heading variant="card" as="h4" className="text-base font-semibold">
                    {tip.title}
                  </Heading>
                </div>
                <Paragraph variant="card" className="text-sm text-foreground/70">
                  {tip.description}
                </Paragraph>
              </div>
            </ScrollAnimatedContainer>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
