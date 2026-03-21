import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title:
    "Υπηρεσίες Ψυχοθεραπείας | Γονεϊκή Αποξένωση & Σχέσεις Υψηλής Σύγκρουσης | Οικείωσις  | Γιάννης Γιαννόπουλος",
  description:
    "R.E.A.C.H., Co-Parenting Design, Θεραπεία Χωρισμού και Συμβουλευτική Γονέων. Δες ποια υπηρεσία ταιριάζει σε αυτό που ζεις αυτή την περίοδο.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
