import type { Metadata } from "next";
import { PricingFeature } from "@/features/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free and upgrade when you need more greenhouse space. Compare the Free Plan and Forest Pro — simple, transparent pricing with no hidden fees.",
};

export default function PricingPage() {
  return <PricingFeature />;
}
