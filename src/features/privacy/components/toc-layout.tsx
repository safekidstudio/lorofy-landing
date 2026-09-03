"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ScrollAnimatedContainer } from "@/components/animated";
import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "collection", label: "Data Collection", title: "1. Data Collection" },
  { id: "use-data", label: "How We Use Data", title: "2. How We Use Data" },
  {
    id: "storage",
    label: "Data Storage",
    title: "3. Data Storage & Encryption",
  },
  {
    id: "third-party",
    label: "Third-Party Services",
    title: "4. Third-Party Integrations",
  },
  { id: "rights", label: "Your Rights", title: "5. Your Rights & Control" },
  {
    id: "contact",
    label: "Contact Us",
    title: "Have questions about your data?",
  },
];

export function TocLayout() {
  const [activeId, setActiveId] = useState("collection");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies the middle third of screen
        threshold: 0.1,
      },
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120; // header height offset + buffer
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Bounded className="bg-background py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-x divide-accent/50 gap-12 lg:gap-16 w-full">
        {/* Left Side: Table of Contents */}
        <aside className="lg:col-span-3 hidden lg:block select-none">
          <div className="sticky top-28 flex flex-col gap-6">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-foreground/40 uppercase pl-5">
              Table of Contents
            </span>
            <div className="relative flex flex-col gap-4 border-l border-border/70 pl-5 text-left">
              {SECTIONS.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => handleScrollTo(section.id)}
                    className={cn(
                      "text-xs md:text-sm font-medium transition-all text-left relative py-0.5",
                      isActive
                        ? "text-primary font-semibold translate-x-1"
                        : "text-foreground/50 hover:text-foreground hover:translate-x-0.5",
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="toc-active-line"
                        className="absolute left-[-23px] top-0 bottom-0 w-0.5 rounded-full bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Side: Content Blocks */}
        <div className="lg:col-span-9 flex flex-col gap-16 text-left">
          {/* Privacy-First Guarantee */}
          <ScrollAnimatedContainer type="zoom" delay={0.1}>
            <div className="flex flex-col gap-2.5 p-7 md:p-8 bg-secondary/20 border border-border/70 rounded-3xl">
              <Heading
                variant="card"
                as="h3"
                className="text-base md:text-lg font-semibold text-[#00160A] select-none"
              >
                Privacy-First Guarantee
              </Heading>
              <Paragraph className="text-foreground/80 text-sm md:text-base leading-relaxed">
                Lorofy is designed to run locally first. We do not sell your
                personal data or transmit study schedules to advertisers. Your
                garden is strictly yours.
              </Paragraph>
            </div>
          </ScrollAnimatedContainer>

          {/* Section 1: Data Collection */}
          <ScrollAnimatedContainer type="fade" delay={0.1}>
            <section
              id="collection"
              className="flex flex-col gap-4 scroll-mt-28"
            >
              <Heading
                variant="section"
                as="h2"
                className="text-2xl md:text-3xl font-semibold"
              >
                1. Data Collection
              </Heading>
              <Paragraph className="text-secondary leading-relaxed">
                We collect information to help customize your habit loops and
                cultivate trees efficiently. Here is exactly what we require:
              </Paragraph>
              <ul className="list-disc pl-5 flex flex-col gap-2.5 text-sm md:text-base text-foreground/80">
                <li>
                  Account information (email addresses for backup syncing and
                  premium verification)
                </li>
                <li>
                  Focus session metadata (durations, date stamps, and plant
                  evolution logs)
                </li>
                <li>
                  Device information (operating system parameters and active
                  app-block statuses)
                </li>
                <li>
                  Aggregated usage diagnostics for fixing greenhouse simulation
                  glitches
                </li>
              </ul>
            </section>
          </ScrollAnimatedContainer>

          {/* Section 2: How We Use Data */}
          <ScrollAnimatedContainer type="fade" delay={0.1}>
            <section id="use-data" className="flex flex-col gap-4 scroll-mt-28">
              <Heading
                variant="section"
                as="h2"
                className="text-2xl md:text-3xl font-semibold"
              >
                2. How We Use Data
              </Heading>
              <Paragraph className="text-secondary leading-relaxed">
                Your focus telemetry serves dedicated product functions. We
                process your data to:
              </Paragraph>
              <ul className="list-disc pl-5 flex flex-col gap-2.5 text-sm md:text-base text-foreground/80">
                <li>
                  Provide seamless cross-device synchronization for premium
                  greenhouse vaults.
                </li>
                <li>
                  Run botanical algorithms that grow rare flower seedlings
                  dynamically based on your focused minutes.
                </li>
                <li>
                  Enable friendly community achievements and cooperative
                  terrarium sharing features.
                </li>
                <li>
                  Optimize soft rain ambient tracks and focus block shields.
                </li>
              </ul>
            </section>
          </ScrollAnimatedContainer>

          {/* Section 3: Data Storage */}
          <ScrollAnimatedContainer type="fade" delay={0.1}>
            <section id="storage" className="flex flex-col gap-4 scroll-mt-28">
              <Heading
                variant="section"
                as="h2"
                className="text-2xl md:text-3xl font-semibold"
              >
                3. Data Storage & Encryption
              </Heading>
              <Paragraph className="text-secondary leading-relaxed">
                Security remains our utmost priority. All data sync processes
                use end-to-end TLS encryption pipelines. Our servers leverage
                advanced firewall containers to prevent leak possibilities.
                Offline progress records reside encrypted inside local SQLite
                device namespaces.
              </Paragraph>
            </section>
          </ScrollAnimatedContainer>

          {/* Section 4: Third-Party Services */}
          <ScrollAnimatedContainer type="fade" delay={0.1}>
            <section
              id="third-party"
              className="flex flex-col gap-6 scroll-mt-28"
            >
              <div className="flex flex-col gap-3">
                <Heading
                  variant="section"
                  as="h2"
                  className="text-2xl md:text-3xl font-semibold"
                >
                  4. Third-Party Integrations
                </Heading>
                <Paragraph className="text-secondary leading-relaxed">
                  We leverage reliable developer infrastructure to coordinate
                  syncs and payments safely:
                </Paragraph>
              </div>

              {/* Integrations Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
                <div className="flex flex-col gap-2 p-6 rounded-2xl bg-card border border-border/70 shadow-2xs">
                  <Heading
                    variant="card"
                    as="h4"
                    className="text-sm md:text-base font-semibold"
                  >
                    Firebase Sync
                  </Heading>
                  <Paragraph className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                    Secures live database sync for your garden backups.
                  </Paragraph>
                </div>
                <div className="flex flex-col gap-2 p-6 rounded-2xl bg-card border border-border/70 shadow-2xs">
                  <Heading
                    variant="card"
                    as="h4"
                    className="text-sm md:text-base font-semibold"
                  >
                    App Store Pay
                  </Heading>
                  <Paragraph className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                    Secures global Forest Pro subscription billing natively.
                  </Paragraph>
                </div>
                <div className="flex flex-col gap-2 p-6 rounded-2xl bg-card border border-border/70 shadow-2xs">
                  <Heading
                    variant="card"
                    as="h4"
                    className="text-sm md:text-base font-semibold"
                  >
                    Spotify API
                  </Heading>
                  <Paragraph className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                    Streams audio from your custom playlists into focus slots.
                  </Paragraph>
                </div>
              </div>
            </section>
          </ScrollAnimatedContainer>

          {/* Section 5: Your Rights */}
          <ScrollAnimatedContainer type="fade" delay={0.1}>
            <section id="rights" className="flex flex-col gap-6 scroll-mt-28">
              <div className="flex flex-col gap-3">
                <Heading
                  variant="section"
                  as="h2"
                  className="text-2xl md:text-3xl font-semibold"
                >
                  5. Your Rights & Control
                </Heading>
                <Paragraph className="text-secondary leading-relaxed">
                  You command full ownership over your digital garden
                  parameters. Access, manage, or delete your information at any
                  point:
                </Paragraph>
              </div>

              {/* Control Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <div className="flex flex-col gap-2 p-6 md:p-8 rounded-2xl bg-card border border-border/70 shadow-2xs">
                  <Heading
                    variant="card"
                    as="h4"
                    className="text-sm md:text-base font-semibold"
                  >
                    Export Data
                  </Heading>
                  <Paragraph className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                    Retrieve full JSON logs of focus stats and garden metadata
                    directly from settings.
                  </Paragraph>
                </div>
                <div className="flex flex-col gap-2 p-6 md:p-8 rounded-2xl bg-card border border-border/70 shadow-2xs">
                  <Heading
                    variant="card"
                    as="h4"
                    className="text-sm md:text-base font-semibold"
                  >
                    Delete Account
                  </Heading>
                  <Paragraph className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                    Permanently wipe all server backups and subscription history
                    immediately.
                  </Paragraph>
                </div>
              </div>
            </section>
          </ScrollAnimatedContainer>

          {/* Section 6: Contact Banner */}
          <ScrollAnimatedContainer type="zoom" delay={0.1}>
            <section
              id="contact"
              className="flex flex-col gap-4 p-8 md:p-10 bg-[#FAF9F6] border border-border/70 rounded-3xl scroll-mt-28"
            >
              <Heading
                variant="card"
                as="h3"
                className="text-lg md:text-xl font-semibold text-foreground select-none"
              >
                Have questions about your data?
              </Heading>
              <Paragraph className="text-secondary text-sm md:text-base leading-relaxed">
                Our support team answers all privacy and compliance requests
                within 24 hours. Get in touch at:
              </Paragraph>
              <a
                href="mailto:privacy@lorofyapp.com"
                className="text-sm md:text-base font-semibold text-primary hover:underline self-start transition-all"
              >
                privacy@lorofyapp.com
              </a>
            </section>
          </ScrollAnimatedContainer>
        </div>
      </div>
    </Bounded>
  );
}
