import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-10 md:py-12 lg:py-16", className)}
    >
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}

