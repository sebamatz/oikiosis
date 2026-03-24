import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Γονεϊκή Αποξένωση | Υποστήριξη σε Σχέσεις Υψηλής Σύγκρουσης | Οικείωσις | Ψυχοθεραπεία | Ψυχικό Τραύμα  | Γιάννης Γιαννόπουλος",
  description:
    "Εξειδικευμένη ψυχοθεραπεία για διαζύγιο υψηλής σύγκρουσης, γονεϊκή αποξένωση, συν-γονεϊκότητα, Θεραπεία ζεύγους. Ατομικές συνεδρίες online ή δια ζώσης στην Αθήνα.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
