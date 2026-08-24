import React from "react";
import { cn } from "@/lib/utils";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "hero" | "section" | "card";
}

export function Paragraph({
  variant = "card",
  className,
  children,
  ...props
}: ParagraphProps) {
  const styles = {
    hero: "text-[17px] sm:text-lg leading-relaxed text-secondary font-sans",
    section: "text-base sm:text-lg leading-relaxed text-secondary font-sans",
    card: "text-sm md:text-base leading-relaxed text-secondary font-sans",
  };

  return (
    <p className={cn(styles[variant], className)} {...props}>
      {children}
    </p>
  );
}
