import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title:
    "Συχνές Ερωτήσεις | Γονεϊκή Αποξένωση, Μοντέλο RMM, Πρακτικά | Οικείωσις | Γιάννης Γιαννόπουλος",
  description:
    "29 απαντήσεις σε αυτό που συχνά αναρωτιέσαι: τι είναι η γονεϊκή αποξένωση, πώς λειτουργεί το μοντέλο RMM, κόστος, απόρρητο και πρώτα βήματα.",
};

export default function FAQPage() {
  return <FAQClient />;
}
