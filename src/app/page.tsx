import type { Metadata } from "next";
import HomeFeature from "@/features/home";

export const metadata: Metadata = {
  title: "Lorofy — Focus & Grow",
  description:
    "Lorofy turns your deep-work sessions into a living botanical garden. Stay focused, track habits, and grow rare flora with every timer you complete.",
  openGraph: {
    title: "Lorofy — Focus & Grow",
    description:
      "Lorofy turns your deep-work sessions into a living botanical garden. Stay focused, track habits, and grow rare flora with every timer you complete.",
    url: "https://app.lorofy.space",
    siteName: "Lorofy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorofy — Focus & Grow",
    description:
      "Lorofy turns your deep-work sessions into a living botanical garden. Stay focused, track habits, and grow rare flora.",
  },
};

export default function Home() {
  return <HomeFeature />;
}
