import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Phone, Clock, CheckCircle } from "lucide-react";

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
            <p className="text-lg text-muted-foreground">
              Safety (Ασφάλεια), Orientation (Προσανατολισμός), Stabilization (Σταθεροποίηση) – Πρωτόκολλο επείγουσας παρέμβασης.
            </p>
          </div>
        </div>
      </Section>

      {/* Introduction */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Όταν όλα μοιάζουν να «τρέχουν» πιο γρήγορα απ' όσο αντέχεις, χρειάζεσαι ένα ασφαλές σημείο επανεκκίνησης και προσανατολισμού.
            </p>
            <div className="space-y-4">
              <p className="text-center text-lg leading-relaxed text-muted-foreground">
                Η <span className="font-semibold text-foreground">10λεπτη Κλήση S.O.S.</span> είναι αυτό ακριβώς:
              </p>
              <div className="space-y-2 text-center text-base leading-relaxed text-muted-foreground">
                <p>ένα σύντομο, ασφαλές «διάλειμμα» μαζί μου, για να πούμε δυνατά τι συμβαίνει</p>
                <p>και να βάλουμε σε τάξη το χάος των επόμενων ημερών.</p>
              </div>
            </div>
            <div className="pt-6 space-y-3 text-center">
              <p className="text-base font-medium leading-relaxed text-foreground">Είναι δωρεάν.</p>
              <p className="text-base font-medium leading-relaxed text-foreground">Δεν είναι θεραπευτική συνεδρία.</p>
              <p className="text-base font-medium leading-relaxed text-foreground">Είναι η πρώτη, μικρή αλλά κρίσιμη κίνηση προσανατολισμού και αποφόρτισης.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What is the 10-minute SOS Call */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Τι είναι η 10λεπτη Κλήση S.O.S.</h2>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              Η κλήση γίνεται με τον <span className="font-semibold text-foreground">Ιωάννη Γιαννόπουλο</span>, ψυχολόγο και δημιουργό του μοντέλου <span className="font-semibold text-foreground">Αντίστροφη Ορμή</span> (Reverse Momentum Model), ειδικά σχεδιασμένου για:
            </p>
            <ul className="space-y-2 ml-6 list-disc text-base leading-relaxed text-muted-foreground">
              <li>σχέσεις υψηλής σύγκρουσης</li>
              <li>δύσκολα ή συγκρουσιακά διαζύγια</li>
              <li>γονεϊκή αποξένωση.</li>
            </ul>
            <div className="pt-6 space-y-3">
              <p className="text-base font-medium leading-relaxed text-foreground">Μέσα σε 10 λεπτά:</p>
              <p className="text-base leading-relaxed text-muted-foreground">δεν «λύνεται» όλη η κατάσταση</p>
              <p className="text-base leading-relaxed text-muted-foreground">αλλά σταματάς να είσαι μόνος με ό,τι συμβαίνει</p>
              <p className="text-base leading-relaxed text-muted-foreground">και αποκτάς μια πρώτη, καθαρή εικόνα για το πού βρίσκεσαι και πιο είναι το αμέσως επόμενο βήμα.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What we do in these 10 minutes */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Τι κάνουμε σε αυτά τα 10 λεπτά</h2>
          <p className="mb-10 text-center text-base leading-relaxed text-muted-foreground italic">
            Σκέψου την κλήση σαν έναν μικρό «θάλαμο ηρεμίας» μέσα στην καταιγίδα.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-primary">1.</span>
                  Ασφάλεια – Να νιώσεις ότι χωράς
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-base leading-relaxed text-muted-foreground">Ακούω, χωρίς να σε κρίνω, τι είναι αυτό που σε πονάει περισσότερο αυτή τη στιγμή.</p>
                <p className="text-base leading-relaxed text-muted-foreground">Επιβεβαιώνουμε ότι αυτά που ζεις έχουν νόημα μέσα στις συνθήκες που βρίσκεσαι.</p>
                <p className="text-base leading-relaxed font-medium text-foreground">Δε χρειάζεται να είσαι «ήρεμος» ή «λογικός». Αρκεί να είσαι ειλικρινής.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-primary">2.</span>
                  Προσανατολισμός – Να ξέρεις πού βρίσκεσαι
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-base leading-relaxed text-muted-foreground">Βάζουμε σε λόγια τι είδους κατάσταση ζεις: υψηλή σύγκρουση; διαζύγιο; πιθανή αποξένωση;</p>
                <p className="text-base leading-relaxed text-muted-foreground">Διευκρινίζουμε αν το πλαίσιο της Αντίστροφης Ορμής ταιριάζει σε αυτό που περνάς.</p>
                <p className="text-base leading-relaxed text-muted-foreground">Ξεχωρίζουμε τι είναι επείγον από τι μπορεί να περιμένει.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-primary">3.</span>
                  Σταθεροποίηση – Το επόμενο μικρό βήμα
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-base leading-relaxed text-muted-foreground">Συμφωνούμε σε 1–2 πολύ συγκεκριμένα βήματα για τις αμέσως επόμενες ώρες ή μέρες.</p>
                <p className="text-base leading-relaxed text-muted-foreground">Εστιάζουμε σε ό,τι μπορεί να μειώσει έστω και λίγο την ένταση:</p>
                <ul className="ml-4 space-y-1 list-disc text-base leading-relaxed text-muted-foreground">
                  <li>στον εαυτό σου</li>
                  <li>στα παιδιά</li>
                  <li>στην καθημερινότητα.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <Card className="border-primary/20 bg-muted/30">
              <CardContent className="pt-6">
                <p className="text-lg font-medium leading-relaxed text-foreground">
                  Στόχος της κλήσης:
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  να κλείσεις το τηλέφωνο νιώθοντας λιγότερο μόνος και λίγο πιο σταθερός, ακόμα κι αν τίποτα γύρω δεν έχει αλλάξει (ακόμα).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Step 1: Book the call */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Βήμα 1: Κλείστε την 10λεπτη Κλήση S.O.S.</h2>
          <div className="space-y-6">
            <p className="text-center text-base leading-relaxed text-muted-foreground">
              Επίλεξε την ημέρα και την ώρα που σε εξυπηρετεί.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-muted-foreground">Πατάς στο κουμπί <span className="font-semibold text-foreground">Κράτηση 10λεπτης Κλήσης S.O.S.</span></p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-muted-foreground">Ανοίγει το ημερολόγιο</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-muted-foreground">Βλέπεις μόνο τις διαθέσιμες 10λεπτες υποδοχές.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-muted-foreground">Δεν χρειάζεται να γράψεις πολλά. Σε αυτή τη φάση είναι αρκετό να βρούμε έναν κοινό χρόνο.</p>
              </div>
            </div>
            <div className="pt-8 text-center">
              <Button 
                size="lg" 
                className="text-lg font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-shadow max-w-[400px] w-full whitespace-normal overflow-hidden"
                asChild
              >
                <Link href="/booking" className="flex items-center justify-center gap-2 min-w-0 overflow-hidden">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="break-words text-center whitespace-normal min-w-0 text-sm md:text-normal">Κράτηση 10λεπτης Κλήσης S.O.S.</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Step 2: Fill Black Box Data */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Βήμα 2: Συμπλήρωσε τα Δεδομένα «Black Box»</h2>
          <div className="space-y-8">
            <p className="text-center text-base leading-relaxed text-muted-foreground">
              Μετά την επιλογή ώρας, θα σου ζητηθούν 4 σύντομα στοιχεία.
            </p>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Τι σημαίνει «Black Box»</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Η λέξη «Black Box» εδώ σημαίνει: τα απολύτως βασικά που χρειάζομαι για να σε καταλάβω καλύτερα πριν μιλήσουμε.
                </p>
              </CardContent>
            </Card>
            <div className="space-y-5">
              <p className="text-base font-medium leading-relaxed text-foreground">Τα 4 στοιχεία:</p>
              <ul className="space-y-4 ml-6 list-disc">
                <li className="text-base leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Όνομα</span></li>
                <li className="text-base leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Email</span></li>
                <li className="text-base leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Κινητό τηλέφωνο</span> (για την κλήση)</li>
                <li className="text-base leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Η κρίσιμη ερώτηση, σε μία πρόταση:</span>
                  <p className="mt-2 italic leading-relaxed text-foreground">
                    «Με μία μόνο πρόταση, ποια είναι η "πρόσκρουση" που βιώνεις αυτή τη στιγμή;»
                  </p>
                </li>
              </ul>
            </div>
            <div className="pt-6 text-center space-y-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                Δεν χρειάζεται να είναι τέλεια διατυπωμένη.
              </p>
              <p className="text-base font-medium leading-relaxed text-foreground">
                Αρκεί να είναι δική σου.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What happens after booking */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Τι συμβαίνει μετά την κράτηση</h2>
          <div className="space-y-8">
            <p className="text-center text-base leading-relaxed text-muted-foreground">
              Μόλις ολοκληρώσεις αυτά τα βήματα, το <span className="font-semibold text-foreground">Πρωτόκολλο S.O.S.</span> έχει ουσιαστικά ενεργοποιηθεί.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-muted-foreground">Λαμβάνεις ένα <span className="font-semibold text-foreground">email επιβεβαίωσης</span> με την ημέρα και την ώρα της κλήσης.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-muted-foreground">Την καθορισμένη ώρα, σε <span className="font-semibold text-foreground">καλώ προσωπικά</span> στο κινητό που έχεις δηλώσει.</p>
              </div>
            </div>
            <Card className="border-primary/20 bg-background">
              <CardHeader>
                <CardTitle className="text-xl">Μέχρι τότε, η μόνη σου «αποστολή» είναι:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-base leading-relaxed text-muted-foreground">Να παρατηρείς, όχι να αντιδράς.</p>
                <p className="text-base leading-relaxed text-muted-foreground">Δεν χρειάζεται να απαντήσεις σε όλα τα μηνύματα.</p>
                <p className="text-base leading-relaxed text-muted-foreground">Δεν χρειάζεται να πάρεις όλες τις αποφάσεις σήμερα.</p>
                <p className="text-base leading-relaxed font-medium text-foreground">Μπορείς απλώς να σημειώνεις, να αναπνέεις, να περιμένεις.</p>
              </CardContent>
            </Card>
            <div className="pt-8 text-center">
              <Card className="border-primary/20 bg-muted/30">
                <CardContent className="pt-6">
                  <p className="text-xl font-semibold leading-relaxed text-foreground mb-3">Το σημαντικό:</p>
                  <p className="text-base leading-relaxed text-muted-foreground mb-3">
                    Δεν είσαι πια μόνος μέσα στην κρίση.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Έχεις ήδη βάλει μπροστά μια διαδικασία που θα σε βοηθήσει να βρεις ξανά πυξίδα.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

