import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title:
    "Σχετικά με εμάς | Ψυχολόγοι Εξειδικευμένοι σε Σχέσεις Υψηλής Σύγκρουσης, θεραπεία ζεύγους, οικογενειακή και ατομική θεραπεία | Οικείωσις | Γιάννης Γιαννόπουλος",
  description:
    "Ο Ιωάννης Γιαννόπουλος Δημιουργός του μοντέλου Αντίστροφης Ορμής (RMM), ειδικός στην διαχείριση σχέσεων, διαζυγίου, γονεϊκής αποξένωσης και παιδιών και η Σοφία Μίαρη, οικογενειακή ψυχοθεραπεύτρια",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
