import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Who We Are */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ποιοι είμαστε</h2>
          <div className="space-y-3 text-lg text-muted-foreground">
            <p>
              Η <span className="font-semibold text-foreground">Οικίωσις</span> είναι ένας ασφαλής χώρος, όπου ο ψυχικός πόνος συναντά άμεση και ουσιαστική ανταπόκριση με κατανόηση, επιστημονική τεκμηρίωση και ανθρώπινη παρουσία.
            </p>
            <p>
              <span className="font-semibold text-foreground">Ομάδα Οικίωσις:</span> Ιωάννης Γιαννόπουλος & Σοφία Μίαρη (PhD, MSc), Ψυχολόγοι – Ψυχοθεραπευτές.
            </p>
            <p>
              Εξειδίκευση στη γονεϊκή αποξένωση και στις σχέσεις υψηλής σύγκρουσης, εκεί όπου η σύνδεση απειλείται από θυμό, σύγχυση ρόλων και απώλεια ορίων.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Η φιλοσοφία μας</h2>
          </div>
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
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
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Σε ποιους απευθύνεται</h2>
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
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Τι προσφέρουμε</h2>
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
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                Δείτε όλες τις Υπηρεσίες
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Oikiosis */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Γιατί Οικίωσις</h2>
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
              Οικίωσις σημαίνει να επιστρέφεις στο ανθρώπινο.
            </p>
            <p className="text-lg text-muted-foreground">
              Και εδώ, κάθε επιστροφή είναι δυνατή.
            </p>
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Τι να περιμένεις</h2>
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
    </>
  );
}
