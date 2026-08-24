import Image from "next/image";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";

// Avatar imports
import Avatar02 from "@/assets/images/avatars/02.png";
import Avatar09 from "@/assets/images/avatars/09.png";
import Avatar22 from "@/assets/images/avatars/22.png";

const TEAM_MEMBERS = [
  {
    name: "Dr. Clara Sterling",
    role: "Founder & Botany AI Director",
    bio: "Former neuroscientist who switched to psychological feedback triggers for productive studio schedules.",
    avatar: Avatar02,
  },
  {
    name: "Etienne Martinez",
    role: "Animated Visual Director",
    bio: "Crafts each virtual terrarium backdrop and co-ops green cause teams.",
    avatar: Avatar09,
  },
  {
    name: "Julian Finch",
    role: "Core Games Engineer",
    bio: "Writes core decision data and plants the seed for all integration store.",
    avatar: Avatar22,
  },
];

export function TeamSection() {
  return (
    <Bounded className="bg-background py-20">
      <div className="flex flex-col items-center gap-12">
        <ScrollAnimatedContainer type="fade" delay={0.1}>
          <Heading variant="section" className="text-center font-semibold select-none">
            The Botanical Team
          </Heading>
        </ScrollAnimatedContainer>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {TEAM_MEMBERS.map((member, index) => (
            <ScrollAnimatedContainer
              key={member.name}
              type="slide"
              direction="up"
              delay={0.1 * (index + 1)}
            >
              <div className="flex flex-col items-center text-center gap-4 p-8 bg-card border border-border/70 rounded-3xl shadow-2xs hover:shadow-xs transition-shadow h-full">
                <div className="size-20 rounded-full overflow-hidden border-2 border-border/50 shrink-0">
                  <Image
                    src={member.avatar}
                    alt={`${member.name} avatar`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Heading variant="card" as="h3" className="text-base font-semibold">
                    {member.name}
                  </Heading>
                  <Paragraph variant="card" className="text-xs text-primary font-medium">
                    {member.role}
                  </Paragraph>
                </div>
                <Paragraph variant="card" className="text-sm text-foreground/65 leading-relaxed">
                  {member.bio}
                </Paragraph>
              </div>
            </ScrollAnimatedContainer>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
