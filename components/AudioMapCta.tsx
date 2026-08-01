"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import {
  AUDIO_MAPS_LIST_ID,
  AUDIO_MAPS_LIST_NAME,
  allAudioMapProducts,
  catalogUrl,
  productUrl,
  toGaItem,
  type AudioMapProduct,
} from "@/lib/audio-maps";

interface AudioMapCtaProps {
  /**
   * The series this button sells. Omit for the page-level CTA, which points at
   * the school's course listing rather than a single course.
   */
  product?: AudioMapProduct;
  label?: string;
  className?: string;
}

/**
 * The call to action for an Ηχητικός Χάρτης.
 *
 * Until the LearnWorlds course URLs are filled in (`lib/audio-maps.ts`) this
 * renders the disabled «Προσεχώς» badge, visually identical to what shipped.
 * Once a `path` is set it becomes a real link that reports the funnel step to
 * GA4 before the browser leaves for audio.oikeiosis.gr.
 *
 * The destination is a subdomain, so the GA4 cookie carries over on its own and
 * the click needs no linker parameter. See the note in `lib/audio-maps.ts`.
 */
export default function AudioMapCta({
  product,
  label,
  className,
}: AudioMapCtaProps) {
  const href = product ? productUrl(product) : catalogUrl();

  if (!href) {
    return (
      <Button
        size="lg"
        variant="outline"
        disabled
        aria-disabled="true"
        className={cn(
          // 44px minimum touch target, and full opacity so the label keeps real
          // contrast instead of the default 50% disabled wash.
          "min-h-11 border-primary/30 bg-muted/40 text-foreground/80 disabled:opacity-100",
          className,
        )}
      >
        {label ? <span>{label}</span> : null}
        <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Προσεχώς
        </span>
      </Button>
    );
  }

  const items = product
    ? [toGaItem(product)]
    : allAudioMapProducts.map(toGaItem);

  const handleClick = () => {
    // `select_item` only. The checkout itself happens on LearnWorlds, so
    // `begin_checkout` and `purchase` must come from there. Firing them here
    // would inflate the funnel with people who never reached the checkout.
    trackEvent("select_item", {
      item_list_id: AUDIO_MAPS_LIST_ID,
      item_list_name: AUDIO_MAPS_LIST_NAME,
      items,
    });
  };

  return (
    <Button size="lg" className={cn("min-h-11", className)} asChild>
      {/* Same tab on purpose: a new tab loses the referrer chain some payment
          providers rely on, and the school is part of the same journey. */}
      <a href={href} onClick={handleClick}>
        {label ?? "Απόκτησέ το"}
      </a>
    </Button>
  );
}
