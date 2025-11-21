import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <div className="mb-4 text-center">
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">Σχετικά με εμάς</h1>
          </div>
        </div>
      </Section>

      {/* Your Navigator */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Ο Πλοηγός σας</h2>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/About Page.jpg"
              alt="Ο Πλοηγός σας"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>
      </Section>

      {/* The Model */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Το Μοντέλο</h2>
            <h3 className="mb-6 text-xl font-semibold text-foreground">Μοντέλο Αντίστροφης Ορμής (Reverse Momentum Model)</h3>
          </div>
          <Card className="overflow-hidden border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Η κρίση δεν είναι «πρόβλημα». Είναι δύναμη – Ορμή.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                Το θεραπευτικό μας μοντέλο δεν προσπαθεί να σταματήσει την πρόσκρουση. Σχεδιάζουμε μαζί σου, αξιοποιώντας τη δύναμή της.
              </p>
              <ul className="space-y-3 ml-6 list-disc text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Ο πόνος σου ακούγεται.</span>
                  <br />
                  <span className="text-sm">(S.O.S. – Safety / Ασφάλεια)</span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">Η ιστορία σου αποκτά νόημα.</span>
                  <br />
                  <span className="text-sm">(R.E.A.C.H. – Extract / Απο-σύμπλεξη)</span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">Η πορεία σου βρίσκει πυξίδα.</span>
                  <br />
                  <span className="text-sm">(S.O.S. – Orientation / Προσανατολισμός)</span>
                </li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Δουλειά μας είναι να χτίσουμε ασφάλεια μέσα στην καταιγίδα και να πλοηγηθούμε προς την αναδόμηση.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* The Process */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Η Διαδικασία</h2>
            <h3 className="mb-6 text-xl font-semibold text-foreground">Πώς δουλεύουμε</h3>
            <p className="mb-8 text-lg text-muted-foreground">
              Έτσι μετατρέπουμε την κρίση σε Ορμή:
            </p>
          </div>
          <div className="space-y-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">1. ΑΣΦΑΛΕΙΑ & ΣΤΑΘΕΡΟΠΟΙΗΣΗ (S.O.S.)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ρόλος First Responder. Παρέχουμε άμεση ρυθμιστική υποστήριξη (S.O.S. – Safety / Ασφάλεια, Orientation / Προσανατολισμός, Stabilization / Σταθεροποίηση).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Θέτουμε όρια, μειώνουμε την Ταχύτητα (v – velocity) της σύγκρουσης και προστατεύουμε τον παιδοκεντρικό δεσμό.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">2. ΠΡΟΣΑΝΑΤΟΛΙΣΜΟΣ & «BLACK BOX»</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ακούμε σε βάθος την ιστορία σας (Επικύρωση). Χαρτογραφούμε τα μοτίβα σύγκρουσης και «εξάγουμε» (Extract) τα δεδομένα-κλειδιά που οδηγούν στην πρόσκρουση.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">3. ΑΝΑΣΥΝΔΕΣΗ & ΣΥΝ-ΕΠΙΛΥΣΗ (Align & Co-Resolve)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Αλλάζουμε το «διάνυσμα». Μετατρέπουμε την ενέργεια της κρίσης (Ορμή) σε πρακτικά, εφαρμόσιμα βήματα (π.χ. BIFF)* και ανασυνδεόμαστε με τις Αξίες (Values) σας.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">4. ΑΝΑΔΟΜΗΣΗ & ΑΝΘΕΚΤΙΚΟΤΗΤΑ (Harvest)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Από την κρίση στην Αναδόμηση. Καλλιεργούμε δεξιότητες ανθεκτικότητας (PTG)* και σχεδιάζουμε τη «νέα κανονικότητα» (New Normality) – μια βιώσιμη, πλοηγήσιμη πορεία.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Team Members */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Η Ομάδα μας</h2>
          </div>
          <div className="space-y-6">
            {/* Ioannis */}
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGrIDl4WJqKcA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680286523298?e=1763596800&v=beta&t=Ki0yT6zZ6XQ1J3sVxcJxsyFhvu9BNO5fPIkyyKvn-CI"
                    alt="Γιαννόπουλος Ιωάννης - Ψυχολόγος Ψυχοθεραπευτής"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Γιαννόπουλος Ιωάννης</CardTitle>
                    <CardDescription className="text-lg">
                      Ψυχολόγος – Ψυχοθεραπευτής
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                <p className="font-semibold">
                  Ειδίκευση στη Γονεϊκή Αποξένωση & στις Σχέσεις Υψηλής Σύγκρουσης
                </p>
                <p className="text-muted-foreground">
                  Σπούδασα Ψυχολογία (BSc Hons) στο University of East London και εξειδικεύτηκα στη Διαχείριση Χωρισμού και Διαζυγίου (ΕΚΠΑ). Ως ψυχολόγος, δραστηριοποιούμαι σε πεδία οξείας ψυχικής και συναισθηματικής κρίσης, με βασικούς άξονες την απώλεια, τη ρήξη και την αποξένωση στις διαπροσωπικές σχέσεις.
                </p>
                <div>
                  <p className="mb-2 font-semibold">Εστιάζω ειδικά:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>στη γονεϊκή αποξένωση</li>
                    <li>στη δυναμική σχέσεων υψηλής σύγκρουσης</li>
                    <li>στην υποστήριξη παιδιών σε περιόδους χωρισμού ή διαζυγίου</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  Η προσέγγισή μου συνδυάζει επιστημονική τεκμηρίωση με βιωματικές, στοχευμένες παρεμβάσεις. Εφαρμόζω το <span className="font-semibold">Μοντέλο Αντίστροφης Ορμής (Reverse Momentum Model)</span> – μια θεραπευτική μεθοδολογία που μετατρέπει την ένταση, την απώλεια και την εσωτερική αντίσταση σε κινητήρια δύναμη αλλαγής και επαναπροσδιορισμού.
                </p>
                <div>
                  <p className="mb-2 font-semibold">Στην πράξη:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Υποστηρίζω γονείς και παιδιά στην αποκατάσταση της σύνδεσης, της σταθερότητας και του αισθήματος ασφάλειας κατά τη διάρκεια οικογενειακών μεταβάσεων</li>
                    <li>Βοηθώ άτομα να επαναπροσδιορίσουν την ταυτότητά τους μετά από χωρισμό ή διαζύγιο</li>
                    <li>Ενισχύω τη συνεργατική γονεϊκότητα και τη θέσπιση υγιών, λειτουργικών ορίων</li>
                    <li>Συμβάλλω στη διαχείριση έντονων συγκρούσεων κατά τη διάρκεια δικαστικών ή άλλων διενέξεων, μέσα από πρακτικά πρωτόκολλα αποκλιμάκωσης</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="font-semibold">Αρχή μου:</p>
                  <p className="mt-2 italic text-muted-foreground">
                    Κάθε ρήξη μπορεί να γίνει αφετηρία. Τίποτα δεν είναι οριστικά χαμένο — ούτε ο δεσμός, ούτε ο εαυτός, ούτε η σχέση.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Founder, Reverse Momentum Model (RMM) Therapy</p>
                  <p className="text-sm text-muted-foreground">
                    - Διαχείριση Κρίσεων & Σχέσεων Υψηλής Σύγκρουσης (Διαζύγιο - Χωρισμός, Γονική Αποξένωση, Πένθος, Ρήξη Ταυτότητας).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Εξέλιξη της προσωπικότητας και των σχέσεων μέσα από την κρίση.
                  </p>
                  <p className="mt-2 italic text-sm text-muted-foreground">
                    «Αν δεν μπορείς να αποφύγεις την πρόσκρουση, μάθε να χρησιμοποιείς τη δύναμή της.»
                  </p>
                </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Sofia */}
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHFdj4B_agnKA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718375053186?e=1763596800&v=beta&t=Doc2DKmGZs_HMjnRGkdpD-eMQuJG1cLa8y3gCmJsGMg"
                    alt="Σοφία Μίαρη - Ψυχολόγος Ψυχοθεραπεύτρια"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Σοφία Μίαρη</CardTitle>
                    <CardDescription className="text-lg">
                      Ψυχολόγος – Ψυχοθεραπεύτρια (MSc, PhD)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Σπούδασα Ψυχολογία στο University of Central Lancashire (Preston, Ηνωμένο Βασίλειο).
                </p>
                <div>
                  <p className="mb-2 font-semibold">Η ψυχοθεραπευτική μου ιδιότητα βασίζεται σε:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>
                      <span className="font-semibold">Τετραετή εκπαίδευση στη Συστημική/Οικογενειακή Θεραπεία</span>
                      <br />
                      <span className="text-sm">– Μονάδα Οικογενειακής Θεραπείας, Ψυχιατρικό Νοσοκομείο Αττικής (Δαφνί)</span>
                    </li>
                    <li>
                      <span className="font-semibold">Διεθνές Μετεκπαιδευτικό Πρόγραμμα στη Συμβουλευτική και Ψυχοθεραπεία</span>
                      <br />
                      <span className="text-sm">– Συστημική, Αφηγηματική και Συνεργατική–Διαλογική προσέγγιση (Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Ακαδημαϊκοί Τίτλοι:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>MSc στις Επιστήμες της Αγωγής – Ελληνικό Ανοικτό Πανεπιστήμιο</li>
                    <li>MSc στην Εκπαιδευτική/Παιδαγωγική Ψυχολογία – Χαροκόπειο Πανεπιστήμιο</li>
                    <li>
                      <span className="font-semibold">Διδακτορική Διατριβή στην Ψυχολογία:</span>
                      <br />
                      <span className="text-sm">«Η βιωματική διάσταση της αναπηρίας: διαχείριση άγχους, πρόσληψη εαυτού και ανάπτυξη στρατηγικών λειτουργικότητας»</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Πιστοποιήσεις & Εξειδικεύσεις:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Πιστοποιημένη Εκπαιδεύτρια Ενηλίκων (ΕΟΠΠΕΠ)</li>
                    <li>Εξειδίκευση στη Θετική Ψυχολογία – Πάντειο Πανεπιστήμιο</li>
                    <li>Εξειδίκευση στη Σχολική Ψυχολογία – Πανεπιστήμιο Αιγαίου</li>
                    <li>Εξειδίκευση στη Συμβουλευτική και στον Επαγγελματικό Προσανατολισμό για εφήβους και ενήλικες</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  Η ακαδημαϊκή μου πορεία συναντά την κλινική πράξη. Ως ψυχοθεραπεύτρια, φιλόλογος και μητέρα τριών παιδιών, συνεργάζομαι με οικογένειες, γονείς, εφήβους και παιδιά που αντιμετωπίζουν:
                </p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>σχέσεις υψηλής σύγκρουσης</li>
                  <li>γονεϊκή αποξένωση</li>
                  <li>μεταβατικές φάσεις κρίσης (όπως χωρισμός, διαζύγιο, αλλαγές ρόλων)</li>
                </ul>
                <p className="text-muted-foreground">
                  Στην προσέγγισή μου αξιοποιώ εργαλεία της Συστημικής Θεραπείας και της Θετικής Ψυχολογίας, δίνοντας έμφαση:
                </p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>στη σύνδεση και την επαναπροσέγγιση</li>
                  <li>στην ενίσχυση λειτουργικών στρατηγικών ζωής και σχέσεων</li>
                </ul>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="font-semibold">Στόχος μου:</p>
                  <p className="mt-2 text-muted-foreground">
                    Να υποστηρίζω τους ανθρώπους ώστε να μετατρέπουν τη ρήξη σε κατανόηση και τη δυσκολία σε ευκαιρία επαναπροσδιορισμού — στις σχέσεις και στον εαυτό.
                  </p>
                </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Button 
            size="lg" 
            className="max-w-[400px] w-full whitespace-normal overflow-hidden"
            asChild
          >
            <Link href="/contact" className="break-words text-center whitespace-normal min-w-0 overflow-hidden">
              Επικοινωνήστε μαζί μας
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
