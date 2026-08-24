import type { Metadata } from "next";
import { GuideFeature } from "@/features/guide";

export const metadata: Metadata = {
  title: "Guide — Lorofy",
  description:
    "Learn how to get the most out of Lorofy. From planting your first seedling to mastering hard-lock focus mode, your complete onboarding guide is here.",
  openGraph: {
    title: "Guide — Lorofy",
    description:
      "Learn how to get the most out of Lorofy. From planting your first seedling to mastering hard-lock focus mode, your complete onboarding guide is here.",
    url: "https://app.lorofy.space/guide",
    siteName: "Lorofy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide — Lorofy",
    description:
      "Learn how to use Lorofy's focus timer, plant mechanics, ambient sounds, and leaderboard system.",
  },
};

export default function GuidePage() {
  return <GuideFeature />;
}
