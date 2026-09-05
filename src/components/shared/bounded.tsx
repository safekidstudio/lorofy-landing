import type React from "react";
import { cn } from "@/lib/utils";

interface BoundedProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Bounded({
  as: Component = "section",
  className,
  children,
  ...props
}: BoundedProps) {
  return (
    <Component
      className={cn("w-full py-12 md:py-16 lg:py-20", className)}
      {...props}
    >
      <div className="container">{children}</div>
    </Component>
  );
}
