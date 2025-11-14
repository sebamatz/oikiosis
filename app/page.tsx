import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Who We Are */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Ποιοι είμαστε</h2>
          <p className="mb-8 text-center text-lg leading-relaxed text-muted-foreground">
            Η <span className="font-semibold text-foreground">Οικείωσις</span> είναι ένας ασφαλής χώρος, όπου ο ρόλος μας ως <span className="font-semibold text-foreground">First Responder</span> (Πρώτος Αναγκαίος Βοηθός) γίνεται πράξη.
          </p>
          <p className="mb-8 text-center text-lg leading-relaxed text-muted-foreground">
            Εδώ, ο ψυχικός πόνος δεν λαμβάνει απλώς κατανόηση, αλλά άμεση, ρυθμιστική παρέμβαση (S.O.S.)* που βασίζεται στην επιστημονική τεκμηρίωση και την ανθρώπινη παρουσία.
          </p>
        </div>
      </Section>

      {/* Our Team */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Η ομάδα μας</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Ιωάννης Γιαννόπουλος, Ψυχολόγος</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Founder, Reverse Momentum Model. Εξειδίκευση στη Διαχείριση Σχέσεων Υψηλής Σύγκρουσης & Γονεϊκής Αποξένωσης.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Σοφία Μίαρη, Ψυχολόγος, PhD, MSc</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Συστημική θεραπεία, Θεραπεία Ζεύγους, Συμβουλευτική Γονέων & Εφήβων, Εκπαιδεύτρια Ενηλίκων.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-lg leading-relaxed text-muted-foreground">
            Η κοινή μας αποστολή είναι να πλοηγήσουμε το χάος της σύγκρουσης (High-Conflict) και να το μετατρέψουμε σε Ορμή (Momentum) για αναδόμηση.
          </p>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Η φιλοσοφία μας</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-center font-semibold text-foreground">
              Η αναγνώριση προηγείται της θεραπείας.
            </p>
            <p className="text-center text-muted-foreground">
              Δεν είστε «χαλασμένοι». Δεν είστε «το πρόβλημα».
            </p>
            <p className="text-muted-foreground">
              Αυτό που βιώνετε – η αίσθηση της καταιγίδας (High-Conflict), ο πόνος της σύγκρουσης, ο φόβος της αποξένωσης (PA)* – βγάζει απόλυτο νευροβιολογικό νόημα.
            </p>
            <p className="text-muted-foreground">
              Η στάση μας, ως θεραπευτές και First Responders, δεν είναι να σας αναλύσουμε παθητικά, αλλά να σας συν-ρυθμίσουμε (co-regulate) ενεργητικά.
            </p>
            <p className="text-muted-foreground">
              Η ενσυναίσθηση δεν είναι απλώς μια «αρετή». Είναι η πρώτη, πρακτική πράξη Σταθεροποίησης (S.O.S.).
            </p>
            <p className="text-muted-foreground">
              Η δουλειά μας δεν ξεκινά ρωτώντας «τι είναι λάθος με εσάς;». Ξεκινά προσφέροντας το καταφύγιο (Safety / Ασφάλεια) και την πυξίδα (Orientation / Προσανατολισμός) που χρειάζεται ο εγκέφαλός σας τώρα.
            </p>
            <p className="text-muted-foreground">
              Αφού παρέμβουμε στο επείγον – στη «φωτιά» – με το Πρωτόκολλο ΤΕΠΨΥ / ER-Flow, τότε, και μόνο τότε, έχουμε τη σταθερότητα να αναδομήσουμε τον νέο σας χάρτη (Πρωτόκολλο R.E.A.C.H.)*.
            </p>
            <p className="text-center font-semibold text-foreground">
              Η φιλοσοφία μας είναι ότι η κρίση – η «πρόσκρουσή» σας – δεν είναι παθολογία. Είναι η Ορμή (p) που, με τον σωστό πλοηγό, μπορεί να γίνει το καύσιμο για την πιο ανθεκτική εκδοχή του εαυτού σας.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Oikiosis */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Γιατί Οικείωσις – Η Πυξίδα μας</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-center font-semibold text-foreground">
              Η «Μάζα» (m) μας: Δεν είμαστε γενικοί θεραπευτές. Η εξειδίκευσή μας – ο «Φάρος» μας – εστιάζει στην πλοήγηση της Υψηλής Σύγκρουσης (HCD)* και της Γονεϊκής Αποξένωσης (PA)*, στην Οικογενειακή Θεραπεία και στη Συμβουλευτική Γονέων & Συν-Γονέων.
            </p>
            <div className="space-y-4">
              <p className="font-semibold text-foreground">
                Το Πρωτόκολλο S.O.S. είναι η δέσμευσή μας:
              </p>
              <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    Ασφάλεια (Safety):
                  </p>
                  <p className="text-muted-foreground">
                    Παιδοκεντρική (Child-Centric) προσέγγιση, με απόλυτο σεβασμό στην αξιοπρέπεια και την εμπειρία κάθε μέλους.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    Προσανατολισμός (Orientation):
                  </p>
                  <p className="text-muted-foreground">
                    Όχι αόριστη θεωρία. Παρέχουμε έναν σαφή Χάρτη 5 Φάσεων (R.E.A.C.H.)* και «εργαλεία πλοήγησης» (π.χ. BIFF)* από την πρώτη μέρα.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    Σταθεροποίηση (Stabilization):
                  </p>
                  <p className="text-muted-foreground">
                    Αυτός είναι ο ρόλος μας ως First Responders. Επιστημονική σκέψη και ρεαλισμός. Προσφέρουμε άμεση Σταθεροποίηση (S.O.S.)*, όχι «μαγικές λύσεις».
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">ΓΛΩΣΣΑΡΙΟ ΑΚΡΩΝΥΜΙΩΝ R.M.</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="space-y-4 text-left">
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      S.O.S.:
                    </p>
                    <p className="text-muted-foreground">
                      Safety (Ασφάλεια), Orientation (Προσανατολισμός), Stabilization (Σταθεροποίηση) – Πρωτόκολλο επείγουσας παρέμβασης.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      HCD:
                    </p>
                    <p className="text-muted-foreground">
                      High-Conflict Divorce (Διαζύγιο Υψηλής Σύγκρουσης).
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      PA:
                    </p>
                    <p className="text-muted-foreground">
                      Parental Alienation (Γονεϊκή Αποξένωση).
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      R.E.A.C.H.:
                    </p>
                    <p className="text-muted-foreground">
                      Regulate (Ρύθμιση), Extract (Απο-σύμπλεξη), Align (Ανασύνδεση), Co-resolve (Συνεπίλυση), Harvest (Αναδόμηση) – Χάρτης 5 φάσεων του μοντέλου.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      BIFF:
                    </p>
                    <p className="text-muted-foreground">
                      Brief (Σύντομο), Informative (Πληροφοριακό), Friendly (Φιλικό), Firm (Σταθερό) – Εργαλείο επικοινωνίας σε HCD.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      PTG:
                    </p>
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
