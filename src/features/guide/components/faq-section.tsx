import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";

const FAQ_ITEMS = [
  {
    question: "What happens if I receive a phone call during a focus block?",
    answer: "Lorofy allows for incoming emergency calls, but leaving the app to check other apps will pause or wither your plant.",
  },
  {
    question: "How do I lock focus mode?",
    answer: "Turn on the Hard Lock settings in your focus settings pane. This prevents you from pausing the timer once started.",
  },
  {
    question: "Is my focus history synced across devices?",
    answer: "Yes, cloud sync is included for all users. You can review metrics on both Android and iOS devices.",
  },
  {
    question: "Can I customize the background soundtrack?",
    answer: "Yes! You can load customized background audio tracks and adjust duration fade-ins.",
  },
  {
    question: "Is Lorofy free to use?",
    answer: "Yes, Lorofy's core tools, focus timer, and basic plants are completely free. Upgrade to Premium for advanced stats.",
  },
  {
    question: "Can I share my plants with my friends?",
    answer: "Yes, you can export high-quality screenshots of your botanical assets or share your leaderboard links.",
  },
];

export function FaqSection() {
  return (
    <Bounded className="bg-[#FAF9F6] border-y border-border/20 py-20">
      <div className="flex flex-col items-center gap-12">
        <ScrollAnimatedContainer type="fade" delay={0.1} className="flex flex-col items-center text-center gap-3">
          <Heading variant="section" className="font-semibold">
            Frequently Asked Questions
          </Heading>
          <Paragraph variant="section" className="text-secondary">
            Quick answers to help you get the most out of your focus sessions
          </Paragraph>
        </ScrollAnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
          {FAQ_ITEMS.map((faq, index) => (
            <ScrollAnimatedContainer
              key={faq.question}
              type="slide"
              direction="up"
              delay={0.1 * (index % 2 + 1)} // stagger columns (left/right staggered together)
            >
              <div className="flex flex-col gap-2 p-8 rounded-2xl bg-card border border-border/70 h-full">
                <Heading variant="card" as="h3" className="text-base md:text-lg font-semibold flex items-center gap-2">
                  {faq.question}
                </Heading>
                <Paragraph variant="card" className="text-sm md:text-base text-secondary leading-relaxed">
                  {faq.answer}
                </Paragraph>
              </div>
            </ScrollAnimatedContainer>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
