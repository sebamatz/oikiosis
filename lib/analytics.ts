/**
 * Thin wrapper around the Google tag.
 *
 * `window.gtag` only exists once gtag.js has loaded, and Cookiebot runs in
 * auto-blocking mode — so on a page where the visitor has not accepted
 * statistics cookies the function is never defined at all. Every call therefore
 * has to tolerate a missing `gtag` instead of throwing.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** A single product in a GA4 ecommerce `items[]` array. */
export interface GaItem {
  item_id: string;
  item_name: string;
  price?: number;
  quantity?: number;
  item_list_id?: string;
  item_list_name?: string;
}

export function trackEvent(
  name: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}
