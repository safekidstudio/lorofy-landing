import type { Metadata } from "next";
import { PrivacyFeature } from "@/features/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Lorofy",
  description:
    "Lorofy is built privacy-first. We do not sell your data or transmit study schedules to advertisers. Read our full policy on data collection, storage, and your rights.",
  openGraph: {
    title: "Privacy Policy — Lorofy",
    description:
      "Lorofy is built privacy-first. We do not sell your data or transmit study schedules to advertisers. Read our full policy on data collection, storage, and your rights.",
    url: "https://app.lorofy.space/privacy",
    siteName: "Lorofy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Lorofy",
    description: "Lorofy is built privacy-first. Read our full privacy policy.",
  },
};

export default function PrivacyPage() {
  return <PrivacyFeature />;
}
