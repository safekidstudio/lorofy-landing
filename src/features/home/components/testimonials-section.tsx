import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";

export function TestimonialsSection() {
  return (
    <Bounded className="bg-background border-t border-border/20" id="about">
      <div className="flex flex-col items-center gap-14">
        {/* Section Header */}
        <ScrollAnimatedContainer
          type="fade"
          delay={0.1}
          className="flex flex-col items-center text-center gap-3"
        >
          <Heading variant="section">Cultivated by focused users</Heading>
        </ScrollAnimatedContainer>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
          {/* Card 1 */}
          <ScrollAnimatedContainer
            type="slide"
            direction="up"
            delay={0.1}
            className="h-full"
          >
            <div className="flex flex-col justify-between p-7 rounded-2xl bg-card border border-border/40 shadow-xs hover:shadow-sm transition-shadow gap-6 h-full">
              <Paragraph className="italic text-foreground/80">
                "Lorofy completely gamified my study hours. I actually look
                forward to growing my digital garden every afternoon!"
              </Paragraph>
              <div className="flex items-center gap-3.5 mt-auto">
                <div className="size-10 rounded-full bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center text-xs font-bold text-emerald-600 select-none">
                  EM
                </div>
                <div className="flex flex-col">
                  <Heading
                    variant="card"
                    as="span"
                    className="text-sm md:text-base font-semibold"
                  >
                    Elyana Martinez
                  </Heading>
                  <Paragraph className="text-xs md:text-sm">
                    Dental Student
                  </Paragraph>
                </div>
              </div>
            </div>
          </ScrollAnimatedContainer>

          {/* Card 2 */}
          <ScrollAnimatedContainer
            type="slide"
            direction="up"
            delay={0.2}
            className="h-full"
          >
            <div className="flex flex-col justify-between p-7 rounded-2xl bg-card border border-border/40 shadow-xs hover:shadow-sm transition-shadow gap-6 h-full">
              <Paragraph className="italic text-foreground/80">
                "The hard block sound picker keeps my ADHD brain perfectly
                contained. I have a forest of over 300 virtual trees now."
              </Paragraph>
              <div className="flex items-center gap-3.5 mt-auto">
                <div className="size-10 rounded-full bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-xs font-bold text-blue-600 select-none">
                  AF
                </div>
                <div className="flex flex-col">
                  <Heading
                    variant="card"
                    as="span"
                    className="text-sm md:text-base font-semibold"
                  >
                    Adian Finch
                  </Heading>
                  <Paragraph className="text-xs md:text-sm">
                    Software Engineer
                  </Paragraph>
                </div>
              </div>
            </div>
          </ScrollAnimatedContainer>

          {/* Card 3 */}
          <ScrollAnimatedContainer
            type="slide"
            direction="up"
            delay={0.3}
            className="h-full"
          >
            <div className="flex flex-col justify-between p-7 rounded-2xl bg-card border border-border/40 shadow-xs hover:shadow-sm transition-shadow gap-6 h-full">
              <Paragraph className="italic text-foreground/80">
                "A beautifully clean productivity app. Highly recommended for
                remote workers who struggle with self-imposed limits."
              </Paragraph>
              <div className="flex items-center gap-3.5 mt-auto">
                <div className="size-10 rounded-full bg-purple-500/10 border border-purple-500/10 flex items-center justify-center text-xs font-bold text-purple-600 select-none">
                  CS
                </div>
                <div className="flex flex-col">
                  <Heading
                    variant="card"
                    as="span"
                    className="text-sm md:text-base font-semibold"
                  >
                    Dr. Clara Sterling
                  </Heading>
                  <Paragraph className="text-xs md:text-sm">
                    Researcher
                  </Paragraph>
                </div>
              </div>
            </div>
          </ScrollAnimatedContainer>
        </div>
      </div>
    </Bounded>
  );
}
