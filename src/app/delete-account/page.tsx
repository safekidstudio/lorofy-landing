import type { Metadata } from "next";
import { DeleteAccountFeature } from "@/features/delete-account";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "Request the permanent deletion of your Lorofy account and associated focus data.",
  openGraph: {
    title: "Delete Account — Lorofy",
    description:
      "Request the permanent deletion of your Lorofy account and associated focus data.",
    url: "https://app.lorofy.space/delete-account",
    siteName: "Lorofy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delete Account — Lorofy",
    description:
      "Request the permanent deletion of your Lorofy account and associated focus data.",
  },
};

export default function DeleteAccountPage() {
  return <DeleteAccountFeature />;
}
