import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Phone, CheckCircle } from "lucide-react";

export default function SOSPage() {
  return (
    <>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <div className="mb-4 text-center">
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">Ενεργοποίηση Πρωτοκόλλου S.O.S.</h1>
            <p className="text-muted-foreground">
              Safety (Ασφάλεια), Orientation (Προσανατολισμός), Stabilization (Σταθεροποίηση) – Πρωτόκολλο επείγουσας παρέμβασης.
            </p>
          </div>
        </div>
      </Section>

      {/* Introduction - The 10-minute SOS Call */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Τι είναι η 10λεπτη Κλήση S.O.S.</h2>
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Όταν όλα μοιάζουν να «τρέχουν» πιο γρήγορα απ' όσο αντέχεις, χρειάζεσαι ένα ασφαλές σημείο επανεκκίνησης και προσανατολισμού.
            </p>
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Η 10λεπτη Κλήση S.O.S. είναι αυτό ακριβώς: ένα σύντομο, ασφαλές «διάλειμμα» μαζί μου, για να πούμε δυνατά τι συμβαίνει και να βάλουμε σε τάξη το χάος των επόμενων ημερών.
            </p>
            <div className="grid gap-4 md:grid-cols-3 mt-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold text-foreground mb-2">Είναι δωρεάν.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold text-foreground mb-2">Δεν είναι πλήρης θεραπευτική συνεδρία.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold text-foreground mb-2">Είναι η πρώτη, μικρή αλλά κρίσιμη κίνηση προσανατολισμού και αποφόρτισης.</p>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-6 border-primary/20 bg-muted/30">
              <CardHeader>
                <CardTitle className="text-xl">Η κλήση γίνεται με τον Ιωάννη Γιαννόπουλο</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Ψυχολόγος και δημιουργός του μοντέλου Αντίστροφη Ορμή (Reverse Momentum Model), ειδικά σχεδιασμένου για:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>σχέσεις υψηλής σύγκρουσης</li>
                  <li>δύσκολα ή συγκρουσιακά διαζύγια</li>
                  <li>γονεϊκή αποξένωση</li>
                </ul>
                <p className="text-base leading-relaxed text-muted-foreground mt-4">
                  <span className="font-semibold text-foreground">Μέσα σε 10 λεπτά:</span>
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>δεν «λύνεται» όλη η κατάσταση</li>
                  <li>αλλά σταματάς να είσαι μόνος με ό,τι συμβαίνει</li>
                  <li>και αποκτάς μια πρώτη, καθαρή εικόνα για το πού βρίσκεσαι και ποιο είναι το αμέσως επόμενο βήμα</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* What we do in 10 minutes */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Τι κάνουμε σε αυτά τα 10 λεπτά</h2>
          <p className="text-center text-lg leading-relaxed text-muted-foreground mb-6">
            Σκέψου την κλήση σαν έναν μικρό «θάλαμο ηρεμίας» μέσα στην καταιγίδα.
          </p>
          <div className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-primary">1.</span>
                  Ασφάλεια – Να νιώσεις ότι χωράς
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Ακούω, χωρίς να σε κρίνω, τι είναι αυτό που σε πονάει περισσότερο αυτή τη στιγμή.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Επιβεβαιώνουμε ότι αυτά που ζεις έχουν νόημα μέσα στις συνθήκες που βρίσκεσαι.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Δε χρειάζεται να είσαι «ήρεμος» ή «λογικός». Αρκεί να είσαι ειλικρινής.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-primary">2.</span>
                  Προσανατολισμός – Να ξέρεις πού βρίσκεσαι
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Βάζουμε σε λόγια τι είδους κατάσταση ζεις: υψηλή σύγκρουση; διαζύγιο; πιθανή αποξένωση;
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Διευκρινίζουμε αν το πλαίσιο της Αντίστροφης Ορμής ταιριάζει σε αυτό που περνάς.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Ξεχωρίζουμε τι είναι επείγον από τι μπορεί να περιμένει.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-primary">3.</span>
                  Σταθεροποίηση – Το επόμενο μικρό βήμα
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Συμφωνούμε σε 1–2 πολύ συγκεκριμένα βήματα για τις αμέσως επόμενες ώρες ή μέρες.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Εστιάζουμε σε ό,τι μπορεί να μειώσει έστω και λίγο την ένταση:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>στον εαυτό σου</li>
                  <li>στα παιδιά</li>
                  <li>στην καθημερινότητα</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-muted/30 mt-6">
              <CardContent className="pt-6">
                <p className="text-center text-lg font-semibold text-foreground">
                  Στόχος της κλήσης: να κλείσεις το τηλέφωνο νιώθοντας λιγότερο μόνος και λίγο πιο σταθερός, ακόμα κι αν τίποτα γύρω δεν έχει αλλάξει (ακόμα).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Step 1: Book the call */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Βήμα 1: Κλείστε την 10λεπτη Κλήση S.O.S.</h2>
          <div className="space-y-6">
            <p className="text-center text-base leading-relaxed text-muted-foreground">
              Επίλεξε την ημέρα και την ώρα που σε εξυπηρετεί.
            </p>
            <Card className="border-primary/20 bg-muted/30">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground text-center space-y-2">
                  <span className="block">• Πατάς στο κουμπί Κράτηση 10λεπτης Κλήσης S.O.S.</span>
                  <span className="block">• Ανοίγει το ημερολόγιο (π.χ. Calendly)</span>
                  <span className="block">• Βλέπεις μόνο τις διαθέσιμες 10λεπτες υποδοχές.</span>
                </p>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Δεν χρειάζεται να γράψεις πολλά. Σε αυτή τη φάση είναι αρκετό να βρούμε έναν κοινό χρόνο.
                </p>
              </CardContent>
            </Card>
            <div className="pt-4 text-center">
              <Button 
                size="lg" 
                className="text-lg font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-shadow max-w-[400px] w-full whitespace-normal overflow-hidden"
                asChild
              >
                <Link href="/booking" className="flex items-center justify-center gap-2 min-w-0 overflow-hidden">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="break-words text-center whitespace-normal min-w-0 text-sm md:text-base">Κράτηση 10λεπτης Κλήσης S.O.S.</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Step 2: Fill Black Box Data */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Βήμα 2: Συμπληρώστε τα Δεδομένα «Black Box»</h2>
          <div className="space-y-6">
            <p className="text-center text-base leading-relaxed text-muted-foreground">
              Μετά την επιλογή ώρας, θα σου ζητηθούν 4 σύντομα στοιχεία.
            </p>
            <p className="text-center text-sm leading-relaxed text-muted-foreground italic">
              Η λέξη «Black Box» εδώ σημαίνει: τα απολύτως βασικά που χρειάζομαι για να σε καταλάβω καλύτερα πριν μιλήσουμε.
            </p>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-base font-semibold text-foreground mb-1">Όνομα</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-base font-semibold text-foreground mb-1">Email</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-base font-semibold text-foreground mb-1">Κινητό τηλέφωνο</p>
                      <p className="text-sm text-muted-foreground">(για την κλήση)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-base font-semibold text-foreground mb-1">Η κρίσιμη ερώτηση, σε μία πρόταση:</p>
                      <p className="text-base italic leading-relaxed text-foreground mt-2">
                        «Με μία μόνο πρόταση, ποια είναι η "πρόσκρουση" που βιώνεις αυτή τη στιγμή;»
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Δεν χρειάζεται να είναι τέλεια διατυπωμένη. Αρκεί να είναι δική σου.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* What happens after */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Τι συμβαίνει μετά την κράτηση</h2>
          <div className="space-y-6">
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Μόλις ολοκληρώσεις αυτά τα βήματα, το Πρωτόκολλο S.O.S. έχει ουσιαστικά ενεργοποιηθεί.
            </p>
            <div className="space-y-4">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-base font-semibold text-foreground mb-1">1. Λαμβάνεις ένα email επιβεβαίωσης</p>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        με την ημέρα και την ώρα της κλήσης.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-base font-semibold text-foreground mb-1">2. Την καθορισμένη ώρα, σε καλώ προσωπικά</p>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        στο κινητό που έχεις δηλώσει.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-xl">3. Μέχρι τότε, η μόνη σου «αποστολή» είναι: να παρατηρείς, όχι να αντιδράς.</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Δεν χρειάζεται να απαντήσεις σε όλα τα μηνύματα.</li>
                    <li>Δεν χρειάζεται να πάρεις όλες τις αποφάσεις σήμερα.</li>
                    <li>Μπορείς απλώς να σημειώνεις, να αναπνέεις, να περιμένεις.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="border-primary/20 bg-muted/30 mt-6">
              <CardContent className="pt-6">
                <p className="text-center text-lg font-semibold text-foreground">
                  Το σημαντικό: Δεν είσαι πια μόνος μέσα στην κρίση. Έχεις ήδη βάλει μπροστά μια διαδικασία που θα σε βοηθήσει να βρεις ξανά πυξίδα.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
