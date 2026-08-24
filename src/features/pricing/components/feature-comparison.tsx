import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { ScrollAnimatedContainer } from "@/components/animated";

const COMPARISON_ROWS = [
  {
    feature: "Focus Timer Blocks",
    free: "Basic (25m)",
    pro: "Fully Customizable",
  },
  {
    feature: "Sapling Garden Size",
    free: "3 basic species",
    pro: "Unlimited (150+ species)",
  },
  {
    feature: "White Noise Sanctuary",
    free: "5 basic sounds",
    pro: "Full Library + Spotify Sync",
  },
  {
    feature: "Forest Analytics",
    free: "Weekly Overview",
    pro: "Detailed Diagnostic Graphs",
  },
  {
    feature: "Leaderboard & Badges",
    free: "Read-only access",
    pro: "Custom badges & Profile art",
  },
  {
    feature: "Customer Care priority",
    free: "Community forums",
    pro: "Direct Priority Email",
  },
];

export function FeatureComparison() {
  return (
    <Bounded className="bg-background py-16">
      <div className="flex flex-col items-center gap-10 w-full max-w-5xl mx-auto">
        <ScrollAnimatedContainer type="fade" delay={0.1}>
          <Heading variant="section" className="text-center font-semibold select-none">
            Compare Features
          </Heading>
        </ScrollAnimatedContainer>

        <ScrollAnimatedContainer type="zoom" delay={0.2} className="w-full">
          <div className="w-full overflow-x-auto border border-border/70 rounded-2xl bg-card shadow-2xs">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-border/70 bg-[#F8F9FA] select-none">
                  <th className="p-5 font-semibold text-foreground/80">Feature</th>
                  <th className="p-5 font-semibold text-foreground/80 text-center w-1/4">Free</th>
                  <th className="p-5 font-semibold text-foreground/80 text-center w-1/4">Forest Pro</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50 last:border-0 hover:bg-[#FAF9F6]/30 transition-colors">
                    <td className="p-5 font-medium text-foreground">{row.feature}</td>
                    <td className="p-5 text-secondary text-center select-none">{row.free}</td>
                    <td className="p-5 font-semibold text-foreground text-center select-none">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollAnimatedContainer>
      </div>
    </Bounded>
  );
}
