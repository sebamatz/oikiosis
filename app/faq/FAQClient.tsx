"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MessageCircle, ArrowLeft, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItemType = {
  q: string;
  a: React.ReactNode;
  plainAnswer?: string; // The '?' makes it optional!
};

type FAQCategory = {
  id: string;
  title: string;
  items: FAQItemType[];
};
// --- FAQ DATA ---
const FAQ_DATA: FAQCategory[] = [
  {
    id: "genika",
    title: "Γενικά",
    items: [
      {
        q: "Τι είναι η Οικείωσις και σε ποιον απευθύνεται;",
        plainAnswer:
          "Είναι ένας εξειδικευμένος χώρος ψυχοθεραπείας για ανθρώπους που ζουν σε σχέσεις υψηλής σύγκρουσης: διαζύγιο με ένταση, γονεϊκή αποξένωση, συν-γονεϊκότητα ή οικογένεια σε αποδρομή. Δεν είναι γενική ψυχοθεραπεία.",
        a: (
          <>
            Είναι ένας εξειδικευμένος χώρος ψυχοθεραπείας για ανθρώπους που ζουν
            σε{" "}
            <Link
              href="/services"
              className="text-primary hover:underline font-medium transition-colors"
            >
              σχέσεις υψηλής σύγκρουσης
            </Link>
            : διαζύγιο με ένταση, γονεϊκή αποξένωση, συν-γονεϊκότητα ή
            οικογένεια σε αποδρομή. Δεν είναι γενική ψυχοθεραπεία.
          </>
        ),
      },
      {
        q: "Πρέπει να έχω ήδη χωρίσει;",
        a: "Όχι. Μπορεί να βρίσκεσαι ακόμη μέσα στη σχέση, να σκέφτεσαι τον χωρισμό, να ζεις ένταση ή να έχεις ήδη χωρίσει.",
      },
      {
        q: "Εργάζεστε μόνο με γονείς;",
        a: "Με γονείς, ζευγάρια και άτομα. Στηρίζουμε και σχέσεις με ένταση χωρίς παιδιά.",
      },
      {
        q: "Σε ποιες περιπτώσεις βοηθά η εξειδίκευσή σας;",
        plainAnswer:
          "Για έντονες συγκρούσεις, διαζύγιο με αντιδικία ή γονεϊκή αποξένωση. Δουλεύουμε εστιασμένα, με εξειδικευμένα εργαλεία.",
        a: (
          <>
            Για έντονες συγκρούσεις, διαζύγιο με αντιδικία ή γονεϊκή αποξένωση.
            Δουλεύουμε εστιασμένα, με{" "}
            <Link
              href="/services"
              className="text-primary hover:underline font-medium transition-colors"
            >
              εξειδικευμένα εργαλεία
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    id: "rmm",
    title: "Μοντέλο Αντίστροφης Ορμής",
    items: [
      {
        q: "Τι είναι το Μοντέλο Αντίστροφης Ορμής;",
        plainAnswer:
          "Είναι θεραπευτικό μοντέλο που δημιούργησε ο Ιωάννης Γιαννόπουλος, μέσα από πάνω από 2.000 ώρες κλινικής δουλειάς σε σχέσεις και διαζύγια υψηλής σύγκρουσης. Η κρίση έχει δύναμη, και τη χρησιμοποιούμε για αλλαγή, βήμα βήμα.",
        a: (
          <>
            Είναι θεραπευτικό μοντέλο που δημιούργησε ο{" "}
            <Link
              href="/about"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Ιωάννη Γιαννόπουλος
            </Link>
            , μέσα από πάνω από 2.000 ώρες κλινικής δουλειάς σε σχέσεις και
            διαζύγια υψηλής σύγκρουσης. Η κρίση έχει δύναμη, και τη
            χρησιμοποιούμε για αλλαγή, βήμα βήμα.
          </>
        ),
      },
      {
        q: "Χρησιμοποιείτε μόνο αυτό;",
        plainAnswer:
          "Είναι ο βασικός οδηγός, αλλά χρησιμοποιούμε και συστημικές, trauma-informed πρακτικές και τεχνικές ρύθμισης.",
        a: (
          <>
            Είναι ο βασικός οδηγός, αλλά χρησιμοποιούμε και συστημικές,{" "}
            <Link
              href="/about#model"
              className="text-primary hover:underline font-medium transition-colors"
            >
              trauma-informed
            </Link>{" "}
            πρακτικές και τεχνικές ρύθμισης.
          </>
        ),
      },
      {
        q: "Πρέπει να το γνωρίζω;",
        a: "Όχι. Εμείς κρατάμε τα εργαλεία. Εσύ μίλα με ειλικρίνεια για αυτό που ζεις.",
      },
      {
        q: "Ποιες είναι οι πέντε φάσεις της διαδρομής;",
        plainAnswer:
          "Είναι η δομημένη ατομική διαδρομή πέντε φάσεων του Μοντέλου Αντίστροφης Ορμής: Ρύθμιση, Επεξεργασία, Ανασύνδεση, Ανάκαμψη, Ανθεκτικότητα.",
        a: (
          <>
            Είναι η δομημένη ατομική διαδρομή πέντε φάσεων του{" "}
            <Link
              href="/services#reach"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Μοντέλου Αντίστροφης Ορμής
            </Link>
            : Ρύθμιση, Επεξεργασία, Ανασύνδεση, Ανάκαμψη, Ανθεκτικότητα.
          </>
        ),
      },
    ],
  },
  {
    id: "apoxenosi",
    title: "Γονεϊκή Αποξένωση",
    items: [
      {
        q: "Τι είναι η γονεϊκή αποξένωση;",
        a: "Είναι μια δυναμική όπου ένα παιδί απορρίπτει τον έναν γονιό, συχνά μέσα σε σύγκρουση. Ο γονιός που χάνει τη σχέση βιώνει βαθύ, αόρατο πόνο.",
      },
      {
        q: "Βοηθάτε και τον γονιό και το παιδί;",
        plainAnswer:
          "Ναι. Παιδοκεντρική προσέγγιση. Δεν παίρνουμε μέρος. Δουλεύουμε για αποκατάσταση όπου είναι εφικτό και ασφαλές. Όπου χρειάζεται, μπορεί να αξιοποιηθεί και Παρέμβαση Επανασύνδεσης.",
        a: (
          <>
            Ναι. Παιδοκεντρική προσέγγιση. Δεν παίρνουμε μέρος. Δουλεύουμε για
            αποκατάσταση όπου είναι εφικτό και ασφαλές. Όπου χρειάζεται, μπορεί
            να αξιοποιηθεί και{" "}
            <Link
              href="/services#parental-alienation"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Παρέμβαση Επανασύνδεσης
            </Link>
            .
          </>
        ),
      },
      {
        q: "Αν ο άλλος γονιός αρνείται;",
        plainAnswer:
          "Μπορούμε να ξεκινήσουμε με έναν γονέα ή με το παιδί, ανάλογα με την κατάσταση. Αν θέλεις να δεις πώς περιγράφεται αυτή η εμπειρία από άλλους ανθρώπους, μπορείς να δεις και σχετικές Εμπειρίες Καταιγίδας.",
        a: (
          <>
            Μπορούμε να ξεκινήσουμε με έναν γονέα ή με το παιδί, ανάλογα με την
            κατάσταση. Αν θέλεις να δεις πώς περιγράφεται αυτή η εμπειρία από
            άλλους ανθρώπους, μπορείς να δεις και σχετικές{" "}
            <Link
              href="/testimonials"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Εμπειρίες Καταιγίδας
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    id: "oikogeneia",
    title: "Οικογένεια & Συνεργασία",
    items: [
      {
        q: "Χρειάζεται παιδοψυχολόγος;",
        plainAnswer:
          "Οι παιδοψυχολόγοι στηρίζουν το παιδί. Εμείς στηρίζουμε το σύστημα των γονέων. Συχνά η συνεργασία με παιδοψυχολόγο και η Συμβουλευτική Γονέων είναι ιδανική.",
        a: (
          <>
            Οι παιδοψυχολόγοι στηρίζουν το παιδί. Εμείς στηρίζουμε το σύστημα
            των γονέων. Συχνά η συνεργασία με παιδοψυχολόγο και η{" "}
            <Link
              href="/services#parent-counseling"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Συμβουλευτική Γονέων
            </Link>{" "}
            είναι ιδανική.
          </>
        ),
      },
      {
        q: "Συνεργάζεστε με δημόσιες δομές;",
        a: "Ναι. Η συμβολή μας είναι συμπληρωματική και εξειδικευμένη. Είμαστε ανοιχτοί στη διεπιστημονική συνεργασία.",
      },
      {
        q: "Τι είναι ο Co-Parenting Design;",
        plainAnswer:
          "Ο Co-Parenting Design είναι δομημένη διαδικασία για γονείς που χώρισαν: όρια, επικοινωνία, διαχείριση δυσκολιών με επίκεντρο τα παιδιά.",
        a: (
          <>
            Ο{" "}
            <Link
              href="/services#co-parenting-design"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Co-Parenting Design
            </Link>{" "}
            είναι δομημένη διαδικασία για γονείς που χώρισαν: όρια, επικοινωνία,
            διαχείριση δυσκολιών με επίκεντρο τα παιδιά.
          </>
        ),
      },
      {
        q: "Δουλεύετε με παλιά τραύματα;",
        plainAnswer:
          "Ναι. Trauma-informed προσέγγιση: λαμβάνουμε υπόψη το παρελθόν, εστιάζουμε στο παρόν.",
        a: (
          <>
            Ναι.{" "}
            <Link
              href="/about#model"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Trauma-informed
            </Link>{" "}
            προσέγγιση: λαμβάνουμε υπόψη το παρελθόν, εστιάζουμε στο παρόν.
          </>
        ),
      },
    ],
  },
  {
    id: "zeugaria",
    title: "Ζευγάρια & Χωρισμός",
    items: [
      {
        q: "Θεραπεία ζεύγους και μετά τον χωρισμό;",
        plainAnswer:
          "Ναι, μέσω Θεραπείας Χωρισμού. Στόχος είναι μια πιο καθαρή μετάβαση, ειδικά για τα παιδιά.",
        a: (
          <>
            Ναι, μέσω{" "}
            <Link
              href="/services#separation-counseling"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Θεραπείας Χωρισμού
            </Link>
            . Στόχος είναι μια πιο καθαρή μετάβαση, ειδικά για τα παιδιά.
          </>
        ),
      },
      {
        q: "Αν ο/η σύντροφος αρνείται;",
        plainAnswer:
          "Δουλεύουμε ατομικά, εστιάζοντας στη δική σου στάση, στα όριά σου και στη διαδρομή R.E.A.C.H.",
        a: (
          <>
            Δουλεύουμε ατομικά, εστιάζοντας στη δική σου στάση, στα όριά σου και
            στη διαδρομή{" "}
            <Link
              href="/services#reach"
              className="text-primary hover:underline font-medium transition-colors"
            >
              R.E.A.C.H.
            </Link>
          </>
        ),
      },
    ],
  },
  {
    id: "litigation",
    title: "Litigation Support & Δικαστικές Διαδικασίες",
    items: [
      {
        q: "Τι είναι η Ψυχολογική Υποστήριξη σε Δικαστικές Διαδικασίες (Litigation Support);",
        a: "Είναι εξειδικευμένη ψυχολογική πλοήγηση για γονείς και εμπλεκόμενους που βρίσκονται σε δικαστικές διαδικασίες υψηλής σύγκρουσης. Στόχος δεν είναι η ψυχοθεραπεία με ανασκαφή παρελθόντος — είναι η ψυχολογική σταθεροποίηση και η λειτουργικότητα μέσα στη διαδικασία.",
      },
      {
        q: "Είναι το ίδιο με forensic αξιολόγηση ή πραγματογνωμοσύνη;",
        a: "Όχι — και αυτό είναι σημαντικό να το ξέρεις. Ο forensic ψυχολόγος αξιολογεί την υπόθεση ή το άτομο για λογαριασμό του δικαστηρίου, ως ουδέτερος εμπειρογνώμονας. Εγώ είμαι ο ψυχολόγος σου — δουλεύω για σένα, για να παραμείνεις λειτουργικός και σταθερός μέσα στη διαδικασία. Δεν αξιολογώ την υπόθεση. Δεν εκδίδω πραγματογνωμοσύνη.",
      },
      {
        q: "Σε ποιες περιπτώσεις ενδείκνυται;",
        a: "Όταν βρίσκεσαι σε διαδικασία επιμέλειας ή επικοινωνίας με ένταση, όταν νιώθεις ότι η συναισθηματική πίεση επηρεάζει τις αποφάσεις σου, όταν χρειάζεσαι στήριξη για να επικοινωνείς πιο αποτελεσματικά με τον/την πρώην ή το νομικό σου γραφείο, ή όταν θέλεις να διατηρήσεις σταθερή γονεϊκή παρουσία σε ένα δύσκολο περιβάλλον.",
      },
      {
        q: "Πόσες συνεδρίες χρειάζονται;",
        a: "Δεν υπάρχει σταθερός αριθμός — εξαρτάται από τη φάση της διαδικασίας και τις ανάγκες σου. Συνήθως ξεκινάμε με 2-4 συνεδρίες σταθεροποίησης και συνεχίζουμε ανάλογα με το τι χρειάζεται. Δεν υπάρχει δέσμευση για συγκεκριμένο πλαίσιο εκ των προτέρων.",
      },
      {
        q: "Μπορεί να συνταχθεί έκθεση για νομική χρήση;",
        a: "Ναι, εφόσον κριθεί απαραίτητο. Μπορεί να συνταχθεί κλινική έκθεση ψυχολογικής προόδου — πάντα με τη γραπτή σου συναίνεση και σαφώς διακριτή από forensic evaluation ή πραγματογνωμοσύνη. Η έκθεση αφορά την ψυχολογική σου κατάσταση και πορεία, δεν αξιολογεί την υπόθεση.",
      },
      {
        q: "Συνεργάζεστε με δικηγόρους;",
        a: "Ναι. Μπορούμε να λειτουργήσουμε παράλληλα με το νομικό σου γραφείο — εσύ διαχειρίζεσαι τη νομική διάσταση, εγώ τη ψυχολογική. Αν επιθυμείς και εφόσον υπάρχει συναίνεση, μπορώ να επικοινωνώ και με τον/την δικηγόρο σου για συντονισμό.",
      },
      {
        q: "Υπάρχει διαφορά στο κόστος σε σχέση με τις άλλες υπηρεσίες;",
        a: "Ατομική συνεδρία: 50€. Αν η συνθήκη σε δυσκολεύει οικονομικά, πες το ανοιχτά — έχουμε εξατομικευμένη κλίμακα τιμών.",
      },
    ],
  },
  {
    id: "praktika",
    title: "Πρακτικά",
    items: [
      {
        q: "Πώς γίνονται οι συνεδρίες;",
        a: "Οι συνεδρίες διαρκούν 60 λεπτά, δια ζώσης ή online, για ανθρώπους στην Ελλάδα και στο εξωτερικό.",
      },
      {
        q: "Πόσο συχνά;",
        a: "Συνήθως εβδομαδιαία. Η συχνότητα προσαρμόζεται ανάλογα με τη φάση και τον στόχο.",
      },
      {
        q: "Πόσες θα χρειαστώ;",
        a: "Δεν υπάρχει ιδανικός αριθμός. Στην πρώτη συνάντηση σου δίνουμε μια ρεαλιστική εικόνα.",
      },
      {
        q: "Κόστος;",
        a: "Ατομική 50€ · Ζεύγους 100€ · Οικογένειας 150€. Αν σε δυσκολεύει, πες το ανοιχτά.",
      },
      {
        q: "Πώς κάνω το πρώτο βήμα;",
        plainAnswer:
          "Μπορείς να ξεκινήσεις από τη φόρμα επικοινωνίας, ένα S.O.S. μήνυμα ή το τηλέφωνο. Δεν χρειάζεται να βρεις τις σωστές λέξεις.",
        a: (
          <>
            Μπορείς να ξεκινήσεις από τη{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline font-medium transition-colors"
            >
              φόρμα επικοινωνίας
            </Link>
            , ένα{" "}
            <Link
              href="/sos-page"
              className="text-primary hover:underline font-medium transition-colors"
            >
              S.O.S. μήνυμα
            </Link>{" "}
            ή το τηλέφωνο. Δεν χρειάζεται να βρεις τις σωστές λέξεις.
          </>
        ),
      },
    ],
  },
  {
    id: "asfaleia",
    title: "S.O.S., Απόρρητο & Ασφάλεια",
    items: [
      {
        q: "Τι είναι το S.O.S.;",
        a: "Είναι μια δωρεάν πρώτη επαφή. Γράφεις τι σε δυσκολεύει, απαντάμε εντός εργάσιμης ημέρας, χωρίς δέσμευση.",
      },
      {
        q: "Είναι γραμμή κρίσης;",
        a: "Όχι. Για επείγοντα: ΕΚΑΒ 166, Γραμμή Ψυχικής Υγείας 10306.",
      },
      {
        q: "Μπορώ να μείνω μόνο στο S.O.S.;",
        a: "Ναι, χωρίς καμία υποχρέωση για συνέχεια.",
      },
      {
        q: "Τηρείται το απόρρητο;",
        a: "Ναι. Κώδικας Δεοντολογίας, GDPR. Εξαίρεση μόνο σε κίνδυνο ζωής.",
      },
      {
        q: "Ασφαλείς online συνεδρίες;",
        a: "Ναι, χρησιμοποιούνται κρυπτογραφημένες πλατφόρμες.",
      },
      {
        q: "Μπορεί να αλλάξει η κατάσταση;",
        a: "Ναι. Με κατάλληλη στήριξη και σταθερή δουλειά, πολλοί βρίσκουν περισσότερο έλεγχο, καθαρότητα και προστασία στις σχέσεις τους.",
      },
    ],
  },
];
// --- CUSTOM ACCORDION COMPONENT ---
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary focus:outline-none"
      >
        <span className="text-[1.05rem] font-medium text-foreground pr-4 leading-relaxed">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180 text-primary",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-5"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-loose font-light pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function FAQClient() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Subtracting header height plus extra padding so the title isn't hidden behind the fixed nav
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Construct JSON-LD schema dynamically from the FAQ data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.flatMap((category) =>
      category.items.map((item: any) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.plainAnswer || (typeof item.a === "string" ? item.a : ""),
        },
      })),
    ),
  };

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section */}
      <Section className="bg-linear-to-b from-muted/30 to-background pt-12 md:pt-16 pb-10">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Συχνές Ερωτήσεις
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light max-w-2xl mx-auto">
            Βρες απαντήσεις στις πιο κοινές απορίες σχετικά με την προσέγγισή
            μας, τις συνεδρίες και τον τρόπο που μπορούμε να σε βοηθήσουμε.
          </p>
        </div>
      </Section>

      {/* Mini Navigation (Anchors) */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm py-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {FAQ_DATA.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                onClick={(e) => scrollToSection(e, category.id)}
                className="px-4 py-2 text-sm md:text-base font-medium text-muted-foreground bg-muted/20 border border-primary/10 rounded-full hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content Sections */}
      <div className="container mx-auto px-4 max-w-3xl mt-16 space-y-24">
        {FAQ_DATA.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-36">
            <h2 className="text-2xl font-semibold text-foreground tracking-wide border-b-2 border-primary/10 pb-4 mb-2">
              {category.title}
            </h2>
            <div className="flex flex-col">
              {category.items.map((item, index) => (
                <FAQItem key={index} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <Section className="mt-32 pt-0">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/10 shadow-xl bg-linear-to-br from-background via-muted/20 to-primary/5 rounded-3xl overflow-hidden">
            <CardContent className="p-10 md:p-14 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                Δεν βρήκες αυτό που χρειάζεσαι;
              </h3>
              <p className="text-muted-foreground font-light text-lg mb-8 max-w-xl leading-relaxed">
                Είμαστε εδώ για να λύσουμε κάθε απορία σου. Μη διστάσεις να
                επικοινωνήσεις μαζί μας για περισσότερες διευκρινίσεις.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-14 shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-500"
              >
                <Link
                  href="/contact"
                  className="text-base font-medium tracking-wide"
                >
                  Στείλε μας μήνυμα
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  );
}
