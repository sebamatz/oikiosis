"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  AUDIO_MAPS_LIST_ID,
  AUDIO_MAPS_LIST_NAME,
  allAudioMapProducts,
  toGaItem,
} from "@/lib/audio-maps";

/**
 * Reports the top of the ecommerce funnel: someone saw the list of series.
 *
 * Renders nothing. Paired with `select_item` from AudioMapCta and `purchase`
 * from LearnWorlds, this gives GA4 a complete funnel
 * (view_item_list → select_item → purchase) and therefore a real drop-off rate
 * between the site and the school.
 *
 * The ref guard keeps React Strict Mode's double-invoked effect from sending
 * the event twice in development; refs survive the simulated remount.
 */
export default function AudioMapsViewTracker() {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    trackEvent("view_item_list", {
      item_list_id: AUDIO_MAPS_LIST_ID,
      item_list_name: AUDIO_MAPS_LIST_NAME,
      items: allAudioMapProducts.map(toGaItem),
    });
  }, []);

  return null;
}
