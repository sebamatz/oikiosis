import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title:
    "Συχνές Ερωτήσεις | Γονεϊκή Αποξένωση, Μοντέλο RMM, Πρακτικά | Οικείωσις | Γιάννης Γιαννόπουλος",
  description:
    "29 απαντήσεις σε αυτό που συχνά αναρωτιέσαι: τι είναι η γονεϊκή αποξένωση, πώς λειτουργεί το μοντέλο RMM, κόστος, απόρρητο και πρώτα βήματα.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Τι είναι η Οικείωσις και σε ποιον απευθύνεται;",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Είναι ένας εξειδικευμένος χώρος ψυχοθεραπείας για ανθρώπους που ζουν σε σχέσεις υψηλής σύγκρουσης: διαζύγιο με ένταση, γονεϊκή αποξένωση, συν-γονεϊκότητα ή οικογένεια σε αποδρομή. Δεν είναι γενική ψυχοθεραπεία.",
        },
      },
      {
        "@type": "Question",
        name: "Τι είναι το Μοντέλο Αντίστροφης Ορμής;",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Είναι θεραπευτικό μοντέλο σχεδιασμένο από τον Ιωάννη Γιαννόπουλο. Η κρίση έχει δύναμη — τη χρησιμοποιούμε για αλλαγή, βήμα βήμα.",
        },
      },
      {
        "@type": "Question",
        name: "Τι είναι η γονεϊκή αποξένωση;",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Είναι μια δυναμική όπου ένα παιδί απορρίπτει τον έναν γονιό, συχνά μέσα σε σύγκρουση. Ο γονιός που χάνει τη σχέση βιώνει βαθύ, αόρατο πόνο.",
        },
      },
      {
        "@type": "Question",
        name: "Βοηθάτε και τον γονιό και το παιδί;",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ναι. Παιδοκεντρική προσέγγιση. Δεν παίρνουμε μέρος. Δουλεύουμε για αποκατάσταση όπου είναι εφικτό και ασφαλές.",
        },
      },
      {
        "@type": "Question",
        name: "Πώς γίνονται οι συνεδρίες;",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Οι συνεδρίες διαρκούν 60 λεπτά, δια ζώσης ή online, για ανθρώπους στην Ελλάδα και στο εξωτερικό.",
        },
      },
      {
        "@type": "Question",
        name: "Κόστος;",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ατομική 50€ · Ζεύγους 100€ · Οικογενείας 150€. Αν σε δυσκολεύει, πες το ανοιχτά.",
        },
      },
      {
        "@type": "Question",
        name: "Συνεργασία με δικηγόρο;",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ναι. Σε στηρίζουμε ψυχολογικά και, αν θες, επικοινωνούμε με το νομικό σου γραφείο.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <FAQClient />
    </>
  );
}
