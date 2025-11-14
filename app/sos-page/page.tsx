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
          </div>
        </div>
      </Section>

      {/* Introduction - The 10-minute Triage Call */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Η 10λεπτη Κλήση Αξιολόγησης (Triage)</h2>
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Καλώς ήρθατε στον «Προθάλαμο» ΤΕΠΨΥ (ER-Flow). Κάνατε το πρώτο, κρίσιμο βήμα.
            </p>
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Αυτή δεν είναι πλήρης συνεδρία. Είναι η 10λεπτη, δωρεάν Κλήση Διαλογής (Triage Call) με τον <span className="font-semibold text-foreground">Ιωάννη Γιαννόπουλο</span>, τον <span className="font-semibold text-foreground">First Responder</span> του μοντέλου R.M.
            </p>
          </div>
        </div>
      </Section>

      {/* Goals in 10 minutes */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Στόχος σε 10 λεπτά</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-primary">(S)</span>
                  Safety – Ασφάλεια
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Να επικυρώσουμε την κρίση σας.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-primary">(O)</span>
                  Orientation – Προσανατολισμός
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Να αξιολογήσουμε αν το R.M. είναι ο κατάλληλος χάρτης για εσάς.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-primary">(S)</span>
                  Stabilization – Σταθεροποίηση
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Να ορίσουμε το άμεσο επόμενο βήμα.
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
              Επιλέξτε την ημέρα και ώρα που σας εξυπηρετεί.
            </p>
            <Card className="border-primary/20 bg-muted/30">
              <CardContent className="pt-6">
                <p className="text-sm italic text-muted-foreground text-center">
                  [Εδώ ενσωματώνεται το ημερολόγιο (π.χ. Calendly), με μόνο τις διαθέσιμες 10λεπτες υποδοχές (slots) για triage.]
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
              Αφού επιλέξετε ώρα, το ημερολόγιο θα σας ζητήσει 4 κρίσιμα στοιχεία:
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
                      <p className="text-base font-semibold text-foreground mb-1">Η Κρίσιμη Ερώτηση (1 πρόταση):</p>
                      <p className="text-base italic leading-relaxed text-foreground mt-2">
                        «Με μία μόνο πρόταση, ποια είναι η "πρόσκρουση" που βιώνετε αυτή τη στιγμή;»
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
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Τι συμβαίνει μετά</h2>
          <div className="space-y-6">
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Μόλις ολοκληρώσετε την κράτηση, έχετε ενεργοποιήσει το πρωτόκολλο.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-muted-foreground">
                  Θα λάβετε <span className="font-semibold text-foreground">άμεσο email επιβεβαίωσης</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed text-muted-foreground">
                  Την επιλεγμένη ώρα, θα σας <span className="font-semibold text-foreground">καλέσω προσωπικά</span>.
                </p>
              </div>
            </div>
            <Card className="border-primary/20 bg-muted/30">
              <CardHeader>
                <CardTitle className="text-xl">Μέχρι να μιλήσουμε, η μόνη σας αποστολή είναι να παρατηρείτε, όχι να αντιδράτε.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Η βοήθεια είναι ήδη σε κίνηση.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
