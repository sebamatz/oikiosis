import Section from "@/components/Section";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GlossaryPage() {
  return (
    <>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/services"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στις Υπηρεσίες
          </Link>
          <div className="mb-4 text-center">
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">Γλωσσάριο</h1>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
            ΓΛΩΣΣΑΡΙΟ ΑΚΡΩΝΥΜΙΩΝ R.M.
          </h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="space-y-4 text-left">
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      S.O.S.:
                    </p>
                    <p className="text-muted-foreground">
                      Safety (Ασφάλεια), Orientation (Προσανατολισμός),
                      Stabilization (Σταθεροποίηση) – Πρωτόκολλο επείγουσας
                      παρέμβασης.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">HCD:</p>
                    <p className="text-muted-foreground">
                      High-Conflict Divorce (Διαζύγιο Υψηλής Σύγκρουσης).
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">PA:</p>
                    <p className="text-muted-foreground">
                      Parental Alienation (Γονεϊκή Αποξένωση).
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      R.E.A.C.H.:
                    </p>
                    <p className="text-muted-foreground">
                      Regulate (Ρύθμιση), Extract (Απο-σύμπλεξη), Align
                      (Ανασύνδεση), Co-resolve (Συνεπίλυση), Harvest (Αναδόμηση)
                      – Χάρτης 5 φάσεων του μοντέλου.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">BIFF:</p>
                    <p className="text-muted-foreground">
                      Brief (Σύντομο), Informative (Πληροφοριακό), Friendly
                      (Φιλικό), Firm (Σταθερό) – Εργαλείο επικοινωνίας σε HCD.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">PTG:</p>
                    <p className="text-muted-foreground">
                      Posttraumatic Growth (Μετατραυματική Ανάπτυξη).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
