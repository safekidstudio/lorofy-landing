import type { Metadata } from "next";
import { AboutFeature } from "@/features/about";

export const metadata: Metadata = {
  title: "About — Lorofy",
  description:
    "Meet the team behind Lorofy. Born from frustration with distraction-first apps, we built a productivity tool that makes focus feel like tending a garden.",
  openGraph: {
    title: "About — Lorofy",
    description:
      "Meet the team behind Lorofy. Born from frustration with distraction-first apps, we built a productivity tool that makes focus feel like tending a garden.",
    url: "https://app.lorofy.space/about",
    siteName: "Lorofy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Lorofy",
    description:
      "Meet the team behind Lorofy and learn why we believe focus should feel rewarding, not restrictive.",
  },
};

export default function AboutPage() {
  return <AboutFeature />;
}
