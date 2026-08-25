"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { Button } from "@/components/ui/button";

export function DeleteAccountFeature() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!confirm) {
      setError(
        "You must confirm that you understand the terms of account deletion.",
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-[70vh] justify-center">
      <Bounded className="py-16 md:py-24">
        <div className="max-w-xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form-container"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8"
              >
                {/* Header */}
                <div className="flex flex-col gap-3 text-center sm:text-left">
                  <div className="mx-auto sm:mx-0 flex items-center justify-center size-12 rounded-2xl bg-destructive/10 text-destructive mb-2">
                    <AlertTriangle className="size-6" />
                  </div>
                  <Heading
                    variant="hero"
                    as="h1"
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold select-none text-left"
                  >
                    Delete Account
                  </Heading>
                  <Paragraph className="text-secondary text-sm md:text-base leading-relaxed text-left">
                    We are sad to see you go. Deleting your Lorofy account will
                    permanently erase your focus data, garden trees, and all
                    virtual logs. This action cannot be undone.
                  </Paragraph>
                </div>

                {/* Form Card */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 p-6 md:p-8 bg-card border border-border/70 rounded-3xl shadow-sm"
                >
                  {error && (
                    <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-xs md:text-sm text-destructive font-medium">
                      {error}
                    </div>
                  )}

                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs md:text-sm font-semibold text-foreground/80"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="enter your account email"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border/75 text-sm md:text-base outline-none focus:border-destructive focus:ring-2 focus:ring-destructive/10 transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* Reason Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="reason"
                      className="text-xs md:text-sm font-semibold text-foreground/80"
                    >
                      Reason for deleting (optional)
                    </label>
                    <textarea
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Help us improve. Why are you deleting your account?"
                      disabled={isSubmitting}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border/75 text-sm md:text-base outline-none focus:border-destructive focus:ring-2 focus:ring-destructive/10 transition-all resize-none placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* Confirmation Checkbox */}
                  <label className="flex gap-3 items-start cursor-pointer select-none group">
                    <input
                      type="checkbox"
                      checked={confirm}
                      onChange={(e) => setConfirm(e.target.checked)}
                      disabled={isSubmitting}
                      className="mt-1 size-4 rounded border-border text-destructive focus:ring-destructive/20 cursor-pointer"
                    />
                    <span className="text-xs md:text-sm text-foreground/70 group-hover:text-foreground transition-colors leading-relaxed">
                      I understand that deleting my account is permanent. All of
                      my focus progress, custom gardens, and purchase details
                      will be permanently wiped.
                    </span>
                  </label>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="destructive"
                    disabled={isSubmitting}
                    className="w-full py-6 rounded-xl font-semibold bg-destructive hover:bg-destructive/95 text-white shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>Processing Request...</span>
                      </>
                    ) : (
                      <span>Permanently Delete My Account</span>
                    )}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col items-center text-center gap-6 p-8 md:p-12 bg-card border border-border/70 rounded-3xl shadow-sm"
              >
                <div className="flex items-center justify-center size-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
                  <CheckCircle2 className="size-8" />
                </div>
                <div className="flex flex-col gap-3">
                  <Heading
                    variant="card"
                    as="h2"
                    className="text-2xl md:text-3xl font-semibold text-[#00160A]"
                  >
                    Request Received
                  </Heading>
                  <Paragraph className="text-foreground/80 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                    We have received your account deletion request for{" "}
                    <strong className="text-foreground">{email}</strong>. A
                    confirmation link has been sent to this email.
                  </Paragraph>
                  <Paragraph className="text-xs md:text-sm text-secondary leading-relaxed max-w-sm mx-auto mt-2">
                    As required by global data protection and store compliance
                    standards, your account and all associated focus telemetry
                    will be permanently wiped within 14 days.
                  </Paragraph>
                </div>

                <Link href="/" passHref className="mt-4">
                  <Button
                    variant="outline"
                    className="gap-2 px-6 rounded-xl hover:translate-x-0.5 transition-transform"
                  >
                    <span>Back to Home</span>
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Bounded>
    </div>
  );
}
