import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, ArrowRight, Phone, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      {/* How We Help You */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Πώς σε βοηθάμε</h2>
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <p className="text-lg text-muted-foreground">
                Στην <span className="font-semibold text-foreground">Οικείωσις</span>, δεν ξεκινάμε με το «τι κάνεις λάθος».
              </p>
              <p className="text-xl font-medium text-foreground">
                Ξεκινάμε από το: «Πώς είναι να είσαι εσύ μέσα σε αυτή τη σύγκρουση;»
              </p>
            </div>
            <div className="space-y-4 text-center">
              <p className="text-base leading-relaxed text-muted-foreground">
                Σε βοηθάμε να μειωθεί η ένταση μέσα σου, ώστε να μπορείς να σκεφτείς πιο καθαρά.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Σε στηρίζουμε να προστατεύσεις όσο γίνεται τη σχέση με τα παιδιά σου, μέσα σε διαζύγιο ή γονεϊκή αποξένωση.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Σε καθοδηγούμε βήμα–βήμα σε δύσκολες επικοινωνίες, συζητήσεις με τον/την πρώην και κρίσιμες αποφάσεις.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Σε υποστηρίζουμε στην δημιουργία υγιών σχέσεων με τους δικούς ανθρώπους
              </p>
            </div>
            <p className="pt-2 text-center text-base italic leading-relaxed text-foreground">
              Είναι ένας χώρος όπου δεν χρειάζεται να είσαι «δυνατός». Αρκεί να είσαι ειλικρινής με αυτό που περνάς.
            </p>
          </div>
        </div>
      </Section>

      {/* Who We Are */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Ποιοι είμαστε</h2>
          <p className="mb-8 text-center text-lg text-muted-foreground">
            Είμαστε δύο ψυχολόγοι με κοινό στόχο: να σε βοηθήσουμε να βγεις από την εξουθενωτική σύγκρουση, με σεβασμό σε εσένα και στα παιδιά και να δημιουργήσεις υγιείς σχέσεις.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Ιωάννης Γιαννόπουλος, Ψυχολόγος</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Εξειδικεύεται σε σχέσεις υψηλής σύγκρουσης, διαζύγιο και γονεϊκή αποξένωση.
                </p>
                <p>
                  Είναι ο εμπνευστής και δημιουργός του θεραπευτικού μοντέλου «Αντίστροφη Ορμή» (Reverse Momentum Model), που σχεδιάστηκε ειδικά για αυτές τις περιπτώσεις.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Σοφία Μίαρη, Ψυχολόγος PhD, MSc</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Εξειδικεύεται στη θεραπεία ζεύγους, οικογενειακή θεραπεία και υποστήριξη νέων.
                </p>
                <p>
                  Δουλεύει με ζευγάρια και οικογένειες που θέλουν να σταματήσουν την κλιμάκωση και να χτίσουν πιο ασφαλείς σχέσεις.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-lg text-muted-foreground">
            Δουλεύουμε σε συνεργασία, ώστε να καλύπτουμε όλο το φάσμα: από την κρίση και το διαζύγιο, μέχρι τη θεραπεία ζεύγους και τη στήριξη των παιδιών.
          </p>
        </div>
      </Section>

      {/* Our Model */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Το Μοντέλο μας «Αντίστροφη Ορμή»</h2>
          <div className="space-y-6">
            <p className="text-center text-lg text-muted-foreground">
              Στις σχέσεις υψηλής σύγκρουσης, η κρίση μοιάζει σαν να σε σπρώχνει με δύναμη προς έναν τοίχο.
            </p>
            <p className="text-center text-lg font-medium text-foreground">
              Το μοντέλο Αντίστροφης Ορμής (Reverse Momentum Model):
            </p>
            <div className="space-y-4 text-center">
              <p className="text-base leading-relaxed text-muted-foreground">
                δεν σε κατηγορεί για την πρόσκρουση
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                χρησιμοποιεί τη δύναμη της κρίσης, αντί να την αγνοεί.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                τη μετατρέπει σε σταδιακά, πρακτικά βήματα αλλαγής.
              </p>
            </div>
            <div className="">
              <p className="mb-4 text-center text-base text-muted-foreground">
                Είναι ένα απλό, εξειδικευμένο και δοκιμασμένο μοντέλο, φτιαγμένο ειδικά για:
              </p>
              <ul className="space-y-2 text-center text-base text-muted-foreground">
                <li>σχέσεις υψηλής σύγκρουσης</li>
                <li>διαζύγια με ένταση</li>
                <li>γονεϊκή αποξένωση</li>
              </ul>
            </div>
            <div className="pt-6 border-t">
              <p className="text-center text-lg font-medium text-foreground">
                Κεντρικός στόχος:
              </p>
              <p className="mt-2 text-center text-base leading-relaxed text-muted-foreground">
                να νιώσεις πρώτα πιο ασφαλής και πιο σταθερός, και μετά, με καθαρό μυαλό, να πάρεις τις αποφάσεις που χρειάζεται.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Η φιλοσοφία μας</h2>
          </div>
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>-
              <CardTitle className="text-2xl">Reverse Momentum Model</CardTitle>
              <CardDescription className="text-lg">Μοντέλο Αντίστροφης Ορμής</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-lg">
              <p>
                Το θεραπευτικό μας πλαίσιο, <span className="font-semibold">Reverse Momentum Model (Μοντέλο Αντίστροφης Ορμής)</span>, στηρίζεται στην ιδέα ότι κάθε πτώση και κάθε εσωτερική αντίσταση μπορούν να μετατραπούν σε ώθηση για επανεκκίνηση, νόημα και ζωή.
              </p>
              <p>
                Δεν σε βλέπουμε ως «πρόβλημα προς επίλυση», αλλά ως άνθρωπο σε διαδικασία επαναφοράς.
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Ο πόνος σου ακούγεται.</li>
                <li>Η ιστορία σου κατανοείται.</li>
                <li>Η ψυχή σου ξαναβρίσκει κατεύθυνση.</li>
              </ul>
              <p>
                Εργαζόμαστε για να αποκατασταθούν οι δεσμοί, να αποσυμφορηθεί ο ψυχικός πόνος και να χτιστεί ξανά η συναισθηματική ασφάλεια, ακόμη και σε σχέσεις που μοιάζουν διαλυμένες.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Who It's For */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Σε ποιους απευθύνεται</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Γονείς
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Γονείς που βιώνουν αποξένωση ή αποκλεισμό από τη σχέση με το παιδί.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Ζευγάρια
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ζευγάρια/πρώην σύντροφοι σε έντονη ή χρόνια σύγκρουση.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Οικογένειες
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Οικογένειες μετά από διαζύγιο, νομικές διαμάχες ή επώδυνες μεταβάσεις.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Επαγγελματίες
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Επαγγελματίες που αναζητούν εξειδικευμένη συμβουλευτική πάνω σε δύσκολες δυναμικές σχέσεων.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Τι προσφέρουμε</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-40 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80"
                  alt="Ατομική Ψυχοθεραπεία"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>1. Ατομική Ψυχοθεραπεία</CardTitle>
                <CardDescription>Ενήλικες</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ρύθμιση συναισθηματικής έντασης, επαναπλαισίωση ιστορίας, δεξιότητες ορίων και επικοινωνίας.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-40 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80"
                  alt="Συνεδρίες Συν-Γονέων"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>2. Συνεδρίες Συν-Γονέων</CardTitle>
                <CardDescription>Co-parenting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Απο-κλιμάκωση σύγκρουσης, συμφωνίες ελαχίστων κινδύνων, πρακτικά πρωτόκολλα για το παιδί.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-40 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&h=400&fit=crop&q=80"
                  alt="Παρέμβαση Επανασύνδεσης"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>3. Παρέμβαση Επανασύνδεσης</CardTitle>
                <CardDescription>Γονέα–Παιδιού</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Σταδιακή αποκατάσταση δεσμού με ασφάλεια, προστασία από πισωγυρίσματα, συνεργασία με το οικογενειακό σύστημα.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-40 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&q=80"
                  alt="Συμβουλευτική Διαζυγίου"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>4. Συμβουλευτική Διαζυγίου</CardTitle>
                <CardDescription>Μεταβάσεων</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Πλοήγηση σε δικαστικές/νομικές συνθήκες, ψυχοεκπαίδευση για το παιδί, σταθεροποίηση ρουτίνας.
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-40 w-full md:h-48">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop&q=80"
                  alt="Εποπτεία & Εκπαίδευση"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>5. Εποπτεία & Εκπαίδευση</CardTitle>
                <CardDescription>Επαγγελματιών</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Κλινική εποπτεία, πρωτόκολλα διαχείρισης υψηλής σύγκρουσης, εργαστήρια για ομάδες.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="max-w-[400px] w-full whitespace-normal overflow-hidden"
              asChild
            >
              <Link href="/services" className="flex items-center justify-center gap-2 min-w-0 overflow-hidden">
                <span className="break-words whitespace-normal min-w-0">Δείτε όλες τις Υπηρεσίες</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Oikiosis */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Γιατί Οικείωσις</h2>
          <div className="space-y-4 text-lg">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">•</span>
                    <span>Εξειδίκευση σε υψηλή σύγκρουση & γονεϊκή αποξένωση.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">•</span>
                    <span>Ευθύ, σαφές πλαίσιο με πρακτικά εργαλεία.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">•</span>
                    <span>Σεβασμός σε κάθε μέλος της οικογένειας.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">•</span>
                    <span>Αξιοπρέπεια και επιστημονική σκέψη, χωρίς υπερβολικές υποσχέσεις.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <p className="text-xl font-semibold text-primary">
              Οικείωσις σημαίνει να επιστρέφεις στο ανθρώπινο.
            </p>
            <p className="text-lg text-muted-foreground">
              Και εδώ, κάθε επιστροφή είναι δυνατή.
            </p>
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Τι να περιμένεις</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ήρεμο πλαίσιο</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Καθαρή διαδικασία, ρεαλιστικοί στόχοι.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Σεβασμός</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Σε κάθε μέλος της οικογένειας.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Πρακτικά εργαλεία</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Για δύσκολες στιγμές και κρίσεις.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Second Call to Action */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-2xl text-center">
          <Button 
            size="lg" 
            className="mb-4 text-lg font-semibold py-4 shadow-lg hover:shadow-xl transition-shadow max-w-[400px] w-full whitespace-normal overflow-hidden"
            asChild
          >
            <Link href="/services" className="break-words text-center whitespace-normal">
              Δείτε πώς μπορούμε να σας βοηθήσουμε
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Υπηρεσίες για άτομα, ζευγάρια, γονείς και επαγγελματίες.
          </p>
        </div>
      </Section>
    </>
  );
}
