import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Tell search engines NOT to index this page, just in case
export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου | Οικείωσις",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  // This physically prevents the page from rendering in production.
  // It will throw a 404 error if someone tries to visit it on the live site.
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      <Section className="bg-linear-to-b from-muted/30 to-background pt-12 md:pt-16 pb-10">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl text-foreground">
            Πολιτική Απορρήτου
          </h1>
          <p className="text-muted-foreground text-lg">
            Προστασία Προσωπικών Δεδομένων
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Draft Warning Banner */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-500">
                ΠΡΟΣΟΧΗ: Προσχέδιο υπό διαμόρφωση
              </p>
              <p className="text-sm text-amber-700/80 dark:text-amber-400/80 mt-1">
                Αυτή η σελίδα είναι ορατή μόνο στο τοπικό περιβάλλον ανάπτυξης
                (local environment). Δεν θα δημοσιευτεί στο live site μέχρι να
                αφαιρεθεί ο σχετικός κώδικας. Πριν γίνει δημόσιο, θα ελεγχθεί
                από νομικό σύμβουλο.
              </p>
            </div>
          </div>

          <Card className="border-primary/10 shadow-lg">
            <CardContent className="p-8 md:p-10 space-y-8 text-muted-foreground leading-relaxed">
              <div className="text-sm border-b border-border pb-4">
                <span className="font-semibold text-foreground">
                  Τελευταία ενημέρωση:
                </span>{" "}
                16 Μαρτίου 2026
              </div>

              {/* Section 1 */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  Ποιοι είμαστε
                </h2>
                <p>
                  Ο ιστότοπος oikeiosis.gr ανήκει στον Ιωάννη Γιαννόπουλο,
                  Ψυχολόγο – Ψυχοθεραπευτή, με έδρα την Αθήνα. Μέσα από αυτόν
                  τον ιστότοπο παρέχουμε πληροφορίες για τις υπηρεσίες μας και
                  δίνουμε τη δυνατότητα επικοινωνίας μέσω φόρμας, email ή
                  τηλεφώνου.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  Τι δεδομένα συλλέγουμε και γιατί
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground font-medium">
                      Μέσω φόρμας επικοινωνίας:
                    </strong>{" "}
                    όνομα, email, τηλέφωνο, το μήνυμα που γράφεις.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">
                      Μέσω S.O.S.:
                    </strong>{" "}
                    το μήνυμά σου και, προαιρετικά, όνομα, email ή τηλέφωνο. Τα
                    συλλέγουμε αποκλειστικά για να σου απαντήσουμε και να
                    δρομολογήσουμε τυχόν ραντεβού.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">
                      Μέσω φόρμας /tiktok:
                    </strong>{" "}
                    τα ίδια στοιχεία, με ενδεχόμενη αυτόματη σημείωση ότι η
                    επαφή έγινε μέσω TikTok. Αυτό μας βοηθά να κατανοούμε πώς
                    μας βρίσκει ο κόσμος, χωρίς να μοιραζόμαστε τα στοιχεία σου
                    με τρίτους.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">
                      Cookies και analytics:
                    </strong>{" "}
                    ο ιστότοπος μπορεί να χρησιμοποιεί βασικά cookies
                    λειτουργίας και analytics (π.χ. Google Analytics) για να
                    καταλαβαίνουμε πόσοι επισκέπτονται τη σελίδα. Δεν σε
                    ταυτοποιούν προσωπικά.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  Τι δεν κάνουμε ποτέ
                </h2>
                <p>
                  Δεν πουλάμε, δεν μοιραζόμαστε και δεν μεταβιβάζουμε τα
                  στοιχεία σου σε τρίτους για εμπορικούς ή διαφημιστικούς
                  σκοπούς. Δεν αποθηκεύουμε ευαίσθητα προσωπικά δεδομένα μέσω
                  του site (π.χ. ιστορικό υγείας, περιεχόμενο συνεδριών). Αυτά
                  ανήκουν αποκλειστικά στη θεραπευτική σχέση και προστατεύονται
                  από τον Κώδικα Δεοντολογίας του Συλλόγου Ελλήνων Ψυχολόγων.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  Θεραπευτικό απόρρητο
                </h2>
                <p>
                  Ό,τι μοιράζεσαι μαζί μας στο πλαίσιο της θεραπευτικής σχέσης
                  προστατεύεται από το επαγγελματικό απόρρητο, σύμφωνα με τον
                  Κώδικα Δεοντολογίας του ΣΕΨ και την ελληνική νομοθεσία.
                  Μοναδική εξαίρεση: αν υπάρξει σαφής και άμεσος κίνδυνος ζωής.
                  Και σε αυτή την περίπτωση θα ενημερωθείς πρώτος/η.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  Πόσο καιρό κρατάμε τα δεδομένα σου
                </h2>
                <p>
                  Τα μηνύματα από φόρμες διατηρούνται μόνο όσο χρειάζεται για να
                  σου απαντήσουμε και να δρομολογήσουμε τυχόν συνεργασία. Αν δεν
                  προχωρήσουμε, τα διαγράφουμε εντός εύλογου χρόνου.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  Τα δικαιώματά σου
                </h2>
                <p>
                  Σύμφωνα με τον Κανονισμό GDPR (ΕΕ 2016/679), έχεις δικαίωμα
                  πρόσβασης στα δεδομένα σου, διόρθωσης, διαγραφής, περιορισμού
                  της επεξεργασίας και φορητότητας. Για οποιοδήποτε αίτημα,
                  μπορείς να επικοινωνήσεις μαζί μας στο ikiosis@ikiosis.com.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  Αρμόδια αρχή
                </h2>
                <p>
                  Αν θεωρείς ότι τα δικαιώματά σου δεν τηρούνται, μπορείς να
                  απευθυνθείς στην Αρχή Προστασίας Δεδομένων Προσωπικού
                  Χαρακτήρα (www.dpa.gr).
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  Αλλαγές στην πολιτική
                </h2>
                <p>
                  Αυτή η πολιτική μπορεί να ενημερωθεί. Η τελευταία ημερομηνία
                  ενημέρωσης αναγράφεται στην κορυφή αυτής της σελίδας.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  );
}
