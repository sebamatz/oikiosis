import type { Metadata } from "next";
import SOSPageClient from "./SOSPageClient";

export const metadata: Metadata = {
  title:
    "S.O.S. Μήνυμα | Άμεση Ψυχολογική Υποστήριξη σε Κρίση | Οικείωσις",
  description:
    "Όταν δεν αντέχεις άλλο μόνος: στείλε ένα S.O.S. μήνυμα και πάρε άμεση ανθρώπινη ανταπόκριση. Πρωτόκολλο Safety – Orientation – Stabilization.",
  alternates: {
    canonical: "/sos-page",
  },
};

export default function SOSPage() {
  return <SOSPageClient />;
}
