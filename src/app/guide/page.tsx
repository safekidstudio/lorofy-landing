import type { Metadata } from "next";
import { GuideFeature } from "@/features/guide";

export const metadata: Metadata = {
  title: "Guide",
  description:
    "Learn how to get the most out of Lorofy. From planting your first seedling to mastering hard-lock focus mode, your complete onboarding guide is here.",
};

export default function GuidePage() {
  return <GuideFeature />;
}
