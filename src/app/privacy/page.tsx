import type { Metadata } from "next";
import { PrivacyFeature } from "@/features/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Lorofy is built privacy-first. We do not sell your data or transmit study schedules to advertisers. Read our full policy on data collection, storage, and your rights.",
};

export default function PrivacyPage() {
  return <PrivacyFeature />;
}
