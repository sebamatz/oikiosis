import type { GaItem } from "@/lib/analytics";

/**
 * The LearnWorlds school runs on a subdomain of the main site, which is the
 * single most important fact for analytics: GA4's `_ga` cookie is written on
 * `.oikeiosis.gr` (gtag's default `cookie_domain: 'auto'`), so it is shared with
 * audio.oikeiosis.gr automatically.
 *
 * Consequences — do not "fix" these by adding cross-domain config:
 *  - the visitor keeps the same client_id and the same session across the hop,
 *  - campaign attribution survives, so a sale traces back to the ad or search
 *    that started the journey,
 *  - no `linker` / `_gl` parameter is needed, and adding one would be noise.
 *
 * All that is required on the LearnWorlds side is the *same* measurement ID
 * (G-4N9G5VR4R9) plus its ecommerce integration, so `purchase` fires there.
 */
export const LEARNWORLDS_ORIGIN = "https://audio.oikeiosis.gr";

/** GA4 item_list_id / item_list_name for the /audio-maps listing. */
export const AUDIO_MAPS_LIST_ID = "audio_maps";
export const AUDIO_MAPS_LIST_NAME = "Ηχητικοί Χάρτες";

export interface AudioMapProduct {
  /**
   * GA4 `item_id`. This is the join key between our funnel events and the
   * `purchase` LearnWorlds reports — keep it stable, and use the same value on
   * the LearnWorlds side once the courses exist.
   */
  id: string;
  /** GA4 `item_name`. */
  name: string;
  /** Final price including VAT, in EUR. */
  price: number;
  /**
   * Path on the LearnWorlds school, e.g. `/course/otan-to-paidi-apomakrynetai`.
   *
   * `null` until the course is published. While it is null the CTA renders as
   * the disabled «Προσεχώς» badge exactly as it does today, so going live is a
   * one-line change here rather than a component rewrite.
   */
  path: string | null;
}

export const audioMapProducts = {
  childDistancing: {
    id: "otan-to-paidi-apomakrynetai",
    name: "Όταν το Παιδί Απομακρύνεται",
    price: 29,
    path: null,
  },
  familyReconstitution: {
    id: "oikogeneia-se-anasystasi",
    name: "Νέοι Δεσμοί, Νέοι Ρόλοι, Νέος Χάρτης",
    price: 29,
    path: null,
  },
} satisfies Record<string, AudioMapProduct>;

export const allAudioMapProducts: AudioMapProduct[] =
  Object.values(audioMapProducts);

/**
 * Path to the course listing on the school, for the page-level CTA.
 * `null` until the school is public — same rule as `AudioMapProduct.path`.
 */
export const CATALOG_PATH: string | null = null;

/** The absolute LearnWorlds URL, or `null` while the course is unpublished. */
export function productUrl(product: AudioMapProduct): string | null {
  return product.path ? `${LEARNWORLDS_ORIGIN}${product.path}` : null;
}

/** The absolute course-listing URL, or `null` while the school is unpublished. */
export function catalogUrl(): string | null {
  return CATALOG_PATH ? `${LEARNWORLDS_ORIGIN}${CATALOG_PATH}` : null;
}

/** Shape a product as a GA4 ecommerce item. */
export function toGaItem(product: AudioMapProduct): GaItem {
  return {
    item_id: product.id,
    item_name: product.name,
    price: product.price,
    quantity: 1,
    item_list_id: AUDIO_MAPS_LIST_ID,
    item_list_name: AUDIO_MAPS_LIST_NAME,
  };
}
