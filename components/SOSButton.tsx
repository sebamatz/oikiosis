import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SOSButtonProps {
  href?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  showDescription?: boolean;
  description?: string;
  fullWidth?: boolean;
  align?: "center" | "left" | "right";
}

export default function SOSButton({
  href = "/sos-page",
  className,
  variant = "default",
  showDescription = true,
  description,
  fullWidth = true,
  align = "left",
}: SOSButtonProps) {
  const alignmentClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
    right: "items-end text-right",
  };

  const textAlignmentClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  const defaultDescription = (
    <div className="flex flex-col items-start">
      <p
        className={cn(
          "text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-2 break-words"
        )}
      >
        Το δωρεάν S.O.S. μήνυμά σου για άμεσο Προσανατολισμό & Σταθεροποίηση.
      </p>
    </div>
  );

  // Handle responsive alignment via className override
  const baseAlignment = alignmentClasses[align];

  return (
    <div className={cn("flex flex-col w-full", baseAlignment, className)}>
      <Button
        variant={variant}
        size="lg"
        className={cn(
          "group relative mb-3 sm:mb-4",
          "px-4 sm:px-6 md:px-8",
          "py-3 sm:py-4",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-200",
          "max-w-[400px]",
          "whitespace-normal",
          "overflow-hidden",
          fullWidth ? "w-full sm:w-auto" : "w-auto",
          variant === "outline" && "border-2 border-primary",
          variant === "ghost" && "bg-transparent hover:bg-primary/10"
        )}
        asChild
      >
        <Link
          href={href}
          className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-0 overflow-hidden"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transition-transform group-hover:scale-110" />
          <span className="text-sm sm:text-base md:text-lg font-semibold leading-tight break-words text-center whitespace-normal min-w-0">
            ΕΝΕΡΓΟΠΟΙΗΣΗ S.O.S.
          </span>
        </Link>
      </Button>
      {showDescription && (
        <div>
          {description ? (
            <p
              className={cn(
                "text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed break-words",
                textAlignmentClasses[align]
              )}
            >
              {description}
            </p>
          ) : (
            defaultDescription
          )}
        </div>
      )}
    </div>
  );
}
