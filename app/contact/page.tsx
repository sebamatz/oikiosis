import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Επικοινωνία | Κάνε το Πρώτο Βήμα | Οικείωσις | Γιάννης Γιαννόπουλος",
  description:
    "Στείλε μας μήνυμα ή κάλεσέ μας. Απαντάμε εντός 24–48 ωρών. Η φόρμα δεν είναι επείγουσα υπηρεσία — για άμεση βοήθεια κάλεσε ΕΚΑΒ 166.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
