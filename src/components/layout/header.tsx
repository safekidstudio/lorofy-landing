"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Guide", href: "/guide" },
  { name: "Pricing", href: "/pricing" },
  { name: "Privacy", href: "/privacy" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="transition-opacity hover:opacity-85">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm md:text-base font-medium transition-colors",
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="w-20" />
      </div>
    </header>
  );
}
