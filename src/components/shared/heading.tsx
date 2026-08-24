import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  variant?: "hero" | "section" | "card";
}

export function Heading({
  as: Tag = "h2",
  variant = "section",
  className,
  children,
  ...props
}: HeadingProps) {
  const styles = {
    hero: "text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground font-sans",
    section: "text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground font-sans",
    card: "text-lg md:text-xl font-semibold text-foreground font-sans",
  };

  return (
    <Tag className={cn(styles[variant], className)} {...props}>
      {children}
    </Tag>
  );
}
