"use client";

import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

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

      {/* Introduction - The S.O.S. Message */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Τι είναι το S.O.S. μήνυμα</h2>
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Όταν όλα μοιάζουν να «τρέχουν» πιο γρήγορα απ' όσο αντέχεις, χρειάζεσαι ένα ασφαλές σημείο επανεκκίνησης και προσανατολισμού.
            </p>
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Το S.O.S. μήνυμα είναι αυτό ακριβώς: ένα σύντομο, ασφαλές «διάλειμμα» μέσα από το site, για να πούμε δυνατά τι συμβαίνει και να βάλουμε σε τάξη το χάος των επόμενων ημερών.
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
                <CardTitle className="text-xl">Το μήνυμα διαβάζεται από τον Ιωάννη Γιαννόπουλο</CardTitle>
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
                  <span className="font-semibold text-foreground">Μέσα από το S.O.S. μήνυμα:</span>
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

      {/* What we do through the S.O.S. message */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Τι κάνουμε μέσα από το S.O.S. μήνυμα</h2>
          <p className="text-center text-lg leading-relaxed text-muted-foreground mb-6">
            Σκέψου το μήνυμα σαν έναν μικρό «θάλαμο ηρεμίας» μέσα στην καταιγίδα.
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
                  Στόχος του μηνύματος: να νιώσεις λιγότερο μόνος και λίγο πιο σταθερός, ακόμα κι αν τίποτα γύρω δεν έχει αλλάξει (ακόμα).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Step 1: Send the S.O.S. message */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Βήμα 1: Στείλε το S.O.S. μήνυμά σου</h2>
          <div className="space-y-6">
            <p className="text-center text-base leading-relaxed text-muted-foreground">
              Γράψε με απλά λόγια τι σε δυσκολεύει και σου απαντώ μέσα από το S.O.S. chat.
            </p>
            <Card className="border-primary/20 bg-muted/30">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground text-center space-y-2">
                  <span className="block">• Πατάς στο κουμπί S.O.S. μήνυμα</span>
                  <span className="block">• Ανοίγει το chat</span>
                  <span className="block">• Γράφεις το μήνυμά σου.</span>
                </p>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Δεν χρειάζεται να γράψεις πολλά. Αρκεί να πεις τι σε δυσκολεύει.
                </p>
              </CardContent>
            </Card>
            <div className="pt-4 text-center">
              <Button 
                size="lg" 
                className="text-lg font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-shadow max-w-[400px] w-full whitespace-normal overflow-hidden"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("openSOSChat"));
                  }
                }}
              >
                <span className="break-words text-center whitespace-normal min-w-0 text-sm md:text-base">Στείλε S.O.S. μήνυμα</span>
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
              Μετά την αποστολή του μηνύματος, θα σου ζητηθούν 3 σύντομα στοιχεία.
            </p>
            <p className="text-center text-sm leading-relaxed text-muted-foreground italic">
              Η λέξη «Black Box» εδώ σημαίνει: τα απολύτως βασικά που χρειάζομαι για να σε καταλάβω καλύτερα πριν απαντήσω.
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
                      <p className="text-sm text-muted-foreground">(για την απάντηση στο μήνυμα)</p>
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
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Τι συμβαίνει μετά την αποστολή</h2>
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
                      <p className="text-base font-semibold text-foreground mb-1">1. Λαμβάνεις επιβεβαίωση</p>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        ότι το μήνυμά σου έχει σταλεί.
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
                      <p className="text-base font-semibold text-foreground mb-1">2. Ο Ιωάννης διαβάζει το μήνυμά σου</p>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        και σου απαντάει μέσα από το chat με ένα μήνυμα μόνο για σένα.
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
