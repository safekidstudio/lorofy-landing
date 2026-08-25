import type { Metadata } from "next";
import { DeleteAccountFeature } from "@/features/delete-account";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "Request the permanent deletion of your Lorofy account and associated focus data.",
};

export default function DeleteAccountPage() {
  return <DeleteAccountFeature />;
}
