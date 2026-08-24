"use client";

import { useState } from "react";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { ScrollAnimatedContainer } from "@/components/animated";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Bounded className="bg-background py-20 border-t border-border/40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mx-auto">
        {/* Left: Text */}
        <ScrollAnimatedContainer type="slide" direction="left" delay={0.1} className="flex flex-col gap-5 text-left">
          <Heading variant="section" as="h2" className="text-3xl md:text-4xl font-semibold">
            Get in touch with us
          </Heading>
          <Paragraph className="text-foreground/70 leading-relaxed">
            Have a suggestion for a new botanical asset, a custom edition team focus, or looking to make Lorofy available in more studios? Drop us a question about our greenhouse Package or about focus.
          </Paragraph>
          <div className="flex flex-col gap-2 text-sm text-foreground/80">
            <p>
              General inquiries{" "}
              <a href="mailto:hello@lorofyapp.com" className="text-primary font-medium hover:underline">
                hello@lorofyapp.com
              </a>
            </p>
            <p>
              Press{" "}
              <a href="mailto:press@lorofyapp.com" className="text-primary font-medium hover:underline">
                press@lorofyapp.com
              </a>
            </p>
          </div>
        </ScrollAnimatedContainer>

        {/* Right: Form */}
        <ScrollAnimatedContainer type="slide" direction="right" delay={0.2}>
          <div className="flex flex-col gap-5 p-8 bg-card border border-border/70 rounded-3xl shadow-2xs">
            <Heading variant="card" as="h3" className="text-base font-semibold select-none">
              Send a message
            </Heading>

            {sent ? (
              <div className="flex flex-col gap-2 py-6 text-center">
                <span className="text-2xl">🌱</span>
                <Paragraph className="text-sm text-foreground/70">
                  Thanks! We'll get back to you within 24 hours.
                </Paragraph>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={cn(
                      "w-full px-4 py-3 text-sm bg-background border border-border/70 rounded-xl",
                      "placeholder:text-foreground/40",
                      "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60",
                      "transition-all"
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <textarea
                    id="contact-message"
                    required
                    placeholder="Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className={cn(
                      "w-full px-4 py-3 text-sm bg-background border border-border/70 rounded-xl resize-none",
                      "placeholder:text-foreground/40",
                      "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60",
                      "transition-all"
                    )}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all select-none"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </ScrollAnimatedContainer>
      </div>
    </Bounded>
  );
}
