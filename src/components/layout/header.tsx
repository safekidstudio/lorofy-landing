"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Guide", href: "/guide" },
  { name: "Pricing", href: "/pricing" },
  { name: "Privacy", href: "/privacy" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-10 hover:bg-accent/50 rounded-full transition-all"
                />
              }
            >
              <Menu className="size-6 text-foreground" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between bg-background/95 backdrop-blur-md border-l border-border/40 shadow-2xl"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="transition-opacity hover:opacity-85"
                  >
                    <Logo />
                  </Link>
                </div>

                <nav className="flex flex-col gap-5 mt-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-all py-2 border-b border-border/10 hover:translate-x-1 duration-200",
                          isActive
                            ? "text-primary font-semibold"
                            : "text-foreground/75 hover:text-foreground",
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="flex flex-col gap-4 border-t border-border/40 pt-6">
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} Lorofy Inc. All rights reserved.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:block w-20" />
      </div>
    </header>
  );
}
