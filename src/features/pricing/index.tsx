"use client";

import { FeatureComparison } from "./components/feature-comparison";
import { PricingCards } from "./components/pricing-cards";
import { TeamsBanner } from "./components/teams-banner";

export function PricingFeature() {
  return (
    <div className="flex flex-col w-full bg-background overflow-x-clip">
      <PricingCards />
      <FeatureComparison />
      <TeamsBanner />
    </div>
  );
}
