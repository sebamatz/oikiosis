import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title:
    "Εμπειρίες Καταιγίδας | Τι Λένε Άνθρωποι που μας εμπιστεύθηκαν | Οικείωσις | Γιάννης Γιαννόπουλος",
  description:
    "Πραγματικές εμπειρίες ανθρώπων που έζησαν διαζύγιο, γονεϊκή αποξένωση και σύγκρουση. Δημοσιεύονται με προστασία ιδιωτικότητας.",
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
