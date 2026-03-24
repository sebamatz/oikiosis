import type { Metadata } from "next";
import FirstSessionClient from "./FirstSessionClient";

export const metadata: Metadata = {
  title:
    "Τι να Περιμένεις στην Πρώτη Συνάντηση | Οικείωσις | Γιάννης Γιαννόπουλος",
  description:
    "Η πρώτη συνάντηση είναι διερευνητική, όχι δεσμευτική. Μάθε τι συμβαίνει, πόσο διαρκεί και πώς μπορείς να ξεκινήσεις χωρίς να έχεις έτοιμες απαντήσεις.",
  alternates: {
    canonical: "/first-session",
  },
};

export default function FirstSessionPage() {
  return <FirstSessionClient />;
}
