import type { Metadata } from "next";
import { AboutFeature } from "@/features/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Lorofy. Born from frustration with distraction-first apps, we built a productivity tool that makes focus feel like tending a garden.",
};

export default function AboutPage() {
  return <AboutFeature />;
}
