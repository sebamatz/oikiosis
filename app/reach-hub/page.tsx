import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import SOSButton from "@/components/SOSButton";

export default function ReachHubPage() {
  return (
    <>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Link href="/services" className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στις Υπηρεσίες
          </Link>
          <div className="mb-4 text-center">
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">Ο ΚΟΜΒΟΣ R.E.A.C.H.</h1>
            <p className="text-muted-foreground">(The R.E.A.C.H. Hub)</p>
          </div>
        </div>
      </Section>

      {/* Hero Section */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/το αποτέλεσμα.jpg"
                alt="Το φυτό που φυτρώνει στον βράχο"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold md:text-3xl">Δεν χρειάζεται να πλοηγείσαι την καταιγίδα μόνος.</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Όταν ζεις:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>σχέση σε υψηλή σύγκρουση</li>
                <li>δύσκολο διαζύγιο</li>
                <li>γονεϊκή αποξένωση</li>
              </ul>
              <p className="text-lg leading-relaxed text-muted-foreground">
                είναι φυσιολογικό να νιώθεις ότι δεν προλαβαίνεις να ζητήσεις βοήθεια ή ότι η ατομική, 1-σε-1 θεραπεία δεν είναι εφικτή αυτή τη στιγμή – οικονομικά, χρονικά ή ψυχικά.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ο Κόμβος R.E.A.C.H. είναι το ψηφιακό κέντρο πλοήγησης που βασίζεται στο μοντέλο Αντίστροφη Ορμή (Reverse Momentum Model), ειδικά σχεδιασμένο για τέτοιες καταστάσεις.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg border border-primary/20">
                <p className="font-semibold text-foreground mb-2">Δεν είναι ψυχοθεραπεία.</p>
                <p className="text-muted-foreground">
                  Είναι ασύγχρονη πλοήγηση: πρόσβαση σε εργαλεία, στρατηγικές και ρυθμιστικές τεχνικές, για να μπορείς να κάνεις μικρές, στοχευμένες κινήσεις με τον δικό σου ρυθμό, όποτε εσύ μπορείς.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Difficulty */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Η Δυσκολία – Γιατί νιώθεις «κολλημένος»</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Γιατί νιώθεις ότι δεν προχωράει τίποτα;
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Σε συνθήκες υψηλής σύγκρουσης:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Οι εντάσεις είναι μεγάλες.</li>
              <li>Τα μηνύματα, τα emails, οι δικαστικές κινήσεις δεν σταματούν.</li>
              <li>Οι αντιδράσεις γίνονται είτε εκρήξεις είτε «πάγωμα».</li>
            </ul>
            <p className="text-lg font-semibold text-foreground mt-4">
              Η Ορμή της κρίσης σου είναι τεράστια.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Όταν η συναισθηματική ταχύτητα είναι υψηλή, αλλά:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>δεν έχεις σταθερή στρατηγική,</li>
              <li>δεν έχεις χάρτη για το τι να κάνεις πρώτα,</li>
              <li>δεν έχεις έτοιμα εργαλεία επικοινωνίας,</li>
            </ul>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              είναι απολύτως λογικό να νιώθεις ότι η πρόσκρουση είναι αναπόφευκτη.
            </p>
            <Card className="border-primary/20 bg-background mt-6">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-foreground">
                  Ο Κόμβος R.E.A.C.H. δημιουργήθηκε ακριβώς για αυτό: για να σου δώσει τη «μάζα» που λείπει – τη στρατηγική, τη γνώση και τα πρακτικά εργαλεία που μετατρέπουν την παθητική αντίδραση σε ενεργή πλοήγηση.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Content Pillars */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Τι περιλαμβάνει ο Κόμβος – Οι Πυλώνες R.E.A.C.H.</h2>
          <p className="text-center text-lg leading-relaxed text-muted-foreground mb-8">
            Τι παίρνεις με τη συνδρομή σου
          </p>
          <p className="text-center text-base leading-relaxed text-muted-foreground mb-8">
            Η συνδρομή σου ανοίγει πρόσβαση σε τέσσερις βασικούς πυλώνες περιεχομένου, δομημένους πάνω στον χάρτη R.E.A.C.H. – από τη ρύθμιση μέχρι την αναδόμηση.
          </p>
          
          <div className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">1. Η «ΣΤΟΛΗ G» – Ρύθμιση & Γείωση</CardTitle>
                <CardDescription>(Phase R: Regulate)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-foreground">Βιβλιοθήκη "Νευρο-Άγκυρες 90''</p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Καθοδηγούμενες audio-ασκήσεις από τον Ιωάννη Γιαννόπουλο, για εκείνες τις στιγμές που:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>πας να απαντήσεις σε ένα φορτισμένο email,</li>
                  <li>νιώθεις να «παγώνεις» ή να εκρήγνυσαι,</li>
                  <li>χρειάζεσαι γρήγορη επαναφορά για να μην πάρεις απόφαση μέσα στην καταιγίδα.</li>
                </ul>
                <p className="text-base leading-relaxed text-muted-foreground mt-3">
                  <span className="font-semibold text-foreground">Στόχος:</span> να μπορείς να ρυθμίζεις το νευρικό σου σύστημα σε 1–2 λεπτά, πριν κάνεις την επόμενη κίνηση.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">2. Το «ΜΑΥΡΟ ΚΟΥΤΙ» – Κατανόηση του Χάους</CardTitle>
                <CardDescription>(Phase E: Extract)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-foreground">Workshops & Webinars</p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Βίντεο-μαθήματα και σεμινάρια, όπως:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>«Ανατομία ενός Email Υψηλής Σύγκρουσης»</li>
                  <li>«Αποσύνδεση από την Τοξική Αφήγηση»</li>
                  <li>«Πώς αλλάζει η δυναμική όταν σταματήσεις να απαντάς προβλέψιμα».</li>
                </ul>
                <p className="text-base leading-relaxed text-muted-foreground mt-3">
                  Εδώ «ανοίγουμε» το μαύρο κουτί της σύγκρουσης, για να καταλάβεις τι ακριβώς συμβαίνει και γιατί νιώθεις όπως νιώθεις.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">3. Το BIFF / S.A.F.E. Toolkit – Εργαλεία Επικοινωνίας</CardTitle>
                <CardDescription>(Phase A & C: Align & Co-resolve)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-foreground">Βιβλιοθήκη Templates & Παραδειγμάτων</p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Πρακτικά προσχέδια για:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>emails τύπου BIFF (Brief, Informative, Friendly, Firm)</li>
                  <li>σενάρια S.A.F.E. (Specific, Accountable, Firm, Empathic)</li>
                </ul>
                <p className="text-base leading-relaxed text-muted-foreground mt-3">
                  ώστε να μπορείς:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>να απαντάς χωρίς να ρίχνεις λάδι στη φωτιά,</li>
                  <li>να προστατεύεις τον εαυτό σου και τα παιδιά,</li>
                  <li>να κρατάς σταθερό και ήρεμο τόνο, ακόμα κι όταν ο άλλος κλιμακώνει.</li>
                </ul>
                <p className="text-base leading-relaxed text-muted-foreground mt-3">
                  Κατεβάζεις τα templates και τα προσαρμόζεις στη δική σου πραγματικότητα.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">4. Το «Εργαστήριο Πλοηγών» – Ζωντανή Καθοδήγηση</CardTitle>
                <CardDescription>(Phase H: Harvest)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-foreground">Μηνιαίο Group Q&A Call</p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Μία ζωντανή (live) ομαδική κλήση 90' κάθε μήνα, όπου:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>ο Ιωάννης Γιαννόπουλος απαντά σε ανώνυμες, προ-υποβληθείσες ερωτήσεις,</li>
                  <li>συζητάμε πραγματικά σενάρια υψηλής σύγκρουσης,</li>
                  <li>χτίζουμε, μαζί, στρατηγικές για πραγματικές, σύνθετες καταστάσεις.</li>
                </ul>
                <p className="text-base leading-relaxed text-muted-foreground mt-3">
                  <span className="font-semibold text-foreground">Διαθέσιμο στο Tier 2 – «Ο Πλοηγός».</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Subscription Plans */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Τα Πλάνα Συνδρομής – Επιλέξτε το κανάλι πλοήγησής σας</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Tier 1 */}
            <Card className="shadow-lg border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Πλάνο 1 – TIER 1: «Ο Παρατηρητής»</CardTitle>
                <CardDescription className="text-base">(Self-Paced Navigation)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold text-foreground">Ιδανικό αν:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>θέλεις να κατανοήσεις τη στρατηγική της Αντίστροφης Ορμής,</li>
                  <li>προτιμάς να δουλεύεις σιωπηλά, με τον δικό σου ρυθμό,</li>
                  <li>χρειάζεσαι άμεση πρόσβαση σε εργαλεία, αλλά όχι ζωντανή επικοινωνία κάθε μήνα.</li>
                </ul>
                <div className="border-t pt-4 mt-4">
                  <p className="font-semibold text-foreground mb-2">Περιλαμβάνει:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Πλήρη πρόσβαση στη «Στολή G» (Audio Library)</li>
                    <li>Πλήρη πρόσβαση στο «Μαύρο Κουτί» (Workshops)</li>
                    <li>Πλήρη πρόσβαση στο BIFF / S.A.F.E. Toolkit (Templates)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    Δεν περιλαμβάνει πρόσβαση στο Μηνιαίο Live Q&A.
                  </p>
                </div>
                <div className="border-t pt-4 mt-4">
                  <p className="text-2xl font-bold text-foreground mb-1">€19 / μήνα</p>
                  <p className="text-sm text-muted-foreground">ή €190 / έτος (2 μήνες δώρο)</p>
                </div>
                <Button 
                  size="lg" 
                  className="w-full mt-4"
                  asChild
                >
                  <Link href="#">
                    ΕΓΓΡΑΦΗ ΣΤΟΝ «ΠΑΡΑΤΗΡΗΤΗ»
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tier 2 */}
            <Card className="shadow-lg border-primary/40 border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Πλάνο 2 – TIER 2: «Ο Πλοηγός»</CardTitle>
                <CardDescription className="text-base">(Active Navigation)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold text-foreground">Για εσένα που:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>χρειάζεσαι περισσότερο από υλικό – χρειάζεσαι και ζωντανό καθρέφτισμα,</li>
                  <li>θέλεις να φέρνεις συγκεκριμένες ερωτήσεις στρατηγικής (π.χ. «πώς απαντώ σε αυτό το email;»),</li>
                  <li>νιώθεις ασφάλεια όταν ξέρεις ότι, κάθε μήνα, θα υπάρχει ένας χώρος να ρωτήσεις.</li>
                </ul>
                <div className="border-t pt-4 mt-4">
                  <p className="font-semibold text-foreground mb-2">Περιλαμβάνει:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Πλήρη πρόσβαση στη «Στολή G» (Audio Library)</li>
                    <li>Πλήρη πρόσβαση στο «Μαύρο Κουτί» (Workshops)</li>
                    <li>Πλήρη πρόσβαση στο BIFF / S.A.F.E. Toolkit (Templates)</li>
                    <li className="font-semibold text-foreground">PLUS: Πρόσβαση στο «Εργαστήριο Πλοηγών» – Μηνιαίο Live Q&A Call (90') με τον Ι. Γιαννόπουλο</li>
                  </ul>
                </div>
                <div className="border-t pt-4 mt-4">
                  <p className="text-2xl font-bold text-foreground mb-1">€49 / μήνα</p>
                  <p className="text-sm text-muted-foreground">ή €490 / έτος (2 μήνες δώρο)</p>
                </div>
                <Button 
                  size="lg" 
                  className="w-full mt-4"
                  variant="default"
                  asChild
                >
                  <Link href="#">
                    ΕΓΓΡΑΦΗ ΣΤΟΝ «ΠΛΟΗΓΟ»
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Safety Note */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-muted/30">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Σημείωση Ασφαλείας (Guardrail)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-semibold text-foreground">Πολύ σημαντικό να το ξέρεις από πριν</p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ως First Responder, η ασφάλειά σου είναι προτεραιότητα.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ο Κόμβος R.E.A.C.H. είναι ένα ψυχοεκπαιδευτικό πρόγραμμα πλοήγησης. Σου δίνει γνώση, εργαλεία και στρατηγική – δεν παίρνει τη θέση της άμεσης, προσωπικής φροντίδας όπου χρειάζεται.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Δεν είναι ψυχοθεραπεία και δεν αντικαθιστά την ατομική θεραπεία.</li>
                <li>Δεν παρέχει ιατρική ή νομική συμβουλή.</li>
                <li>Δεν είναι υπηρεσία διαχείρισης κρίσεων 24/7.</li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground mt-4">
                Αν βρίσκεσαι σε οξεία κρίση, αισθάνεσαι ότι «είσαι στο όριο» ή χρειάζεσαι άμεση, 1-σε-1 πλοήγηση:
              </p>
              <div className="pt-4">
                <SOSButton 
                  align="center"
                  className="mb-0"
                  showDescription={false}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

