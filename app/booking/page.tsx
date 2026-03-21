import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title:
    "Κλείσε Πρώτη Συνάντηση | Ατομική, Ζεύγους ή Οικογένειας | Οικείωσις | Γιάννης Γιαννόπουλος",
  description:
    "Κράτησε ραντεβού για την πρώτη σου συνάντηση. Online ή δια ζώσης, 60 λεπτά. Ατομική 50€ · Ζεύγους 100€ · Οικογένειας 150€.",
};

export default function BookingPage() {
  return <BookingClient />;
}
