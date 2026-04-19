import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Γιάννης Γιαννόπουλος | Ψυχολόγος | Γονεϊκή Αποξένωση & Διαζύγια Υψηλής Σύγκρουσης",
  description:
    "Εξειδικευμένη ψυχοθεραπεία για διαζύγιο υψηλής σύγκρουσης, γονεϊκή αποξένωση, συν-γονεϊκότητα, Θεραπεία ζεύγους. Ατομικές συνεδρίες online ή δια ζώσης στην Αθήνα.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Γιάννης Γιαννόπουλος",
    jobTitle: "Ψυχολόγος",
    description:
      "Ψυχολόγος με εξειδίκευση στη Γονεϊκή Αποξένωση, διαζύγια και σχέσεις υψηλής σύγκρουσης. Δημιουργός του Reverse Momentum Model℠.",
    url: "https://oikeiosis.gr",
    telephone: "+306989940588",
    email: "ikiosis@ikiosis.com",
    sameAs: [
      "https://www.linkedin.com/in/gianopoulosjohn/",
      "https://www.tiktok.com/@sjlifewings",
    ],
    knowsAbout: [
      "Γονεϊκή - Γονική Αποξένωση",
      "Διαζύγια Υψηλής Σύγκρουσης",
      "Reverse Momentum Model",
      "Litigation Support Psychology",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Οικείωσις | Γιάννης Γιαννόπουλος",
    url: "https://oikeiosis.gr",
    telephone: "+306989940588",
    email: "ikiosis@ikiosis.com",
    areaServed: ["Μαρούσι", "Χολαργός", "Αθήνα", "Online"],
    priceRange: "€€",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <HomeClient />
    </>
  );
}
