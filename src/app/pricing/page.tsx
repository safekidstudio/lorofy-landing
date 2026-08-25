import type { Metadata } from "next";
import { PricingFeature } from "@/features/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free and upgrade when you need more greenhouse space. Compare the Free Plan and Forest Pro — simple, transparent pricing with no hidden fees.",
  openGraph: {
    title: "Pricing — Lorofy",
    description:
      "Start free and upgrade when you need more greenhouse space. Compare the Free Plan and Forest Pro — simple, transparent pricing with no hidden fees.",
    url: "https://app.lorofy.space/pricing",
    siteName: "Lorofy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Lorofy",
    description:
      "Free forever or upgrade to Forest Pro at $4.99/mo. No hidden fees. 30-day money-back guarantee.",
  },
};

export default function PricingPage() {
  return <PricingFeature />;
}
