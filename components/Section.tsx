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
      className={cn("py-4 md:py-6 lg:py-8", className)}
    >
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}

