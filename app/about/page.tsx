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
          <Link href="/" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <div className="mb-6 text-center">
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">Σχετικά με εμάς</h1>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Η φιλοσοφία μας</h2>
          </div>
          <Card className="overflow-hidden border-primary/20 shadow-lg">
            {/* <div className="relative h-64 w-full">
              <Image
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=400&fit=crop&q=80"
                alt="Reverse Momentum Model - Μοντέλο Αντίστροφης Ορμής"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
            </div> */}
            <CardHeader>
              <CardTitle className="text-2xl">Reverse Momentum Model</CardTitle>
              <CardDescription className="text-lg">Μοντέλο Αντίστροφης Ορμής</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                Το θεραπευτικό μας πλαίσιο, <span className="font-semibold">Reverse Momentum Model (Μοντέλο Αντίστροφης Ορμής)</span>, στηρίζεται στην ιδέα ότι κάθε πτώση και κάθε εσωτερική αντίσταση μπορούν να μετατραπούν σε ώθηση για επανεκκίνηση, νόημα και ζωή.
              </p>
              <p>
                Δεν σε βλέπουμε ως «πρόβλημα προς επίλυση», αλλά ως άνθρωπο σε διαδικασία επαναφοράς.
              </p>
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="font-semibold">Στόχος μας:</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>Ο πόνος σου ακούγεται.</li>
                  <li>Η ιστορία σου κατανοείται.</li>
                  <li>Η ψυχή σου ξαναβρίσκει κατεύθυνση.</li>
                </ul>
              </div>
              <p>
                Εργαζόμαστε για να αποκατασταθούν οι δεσμοί, να αποσυμφορηθεί ο ψυχικός πόνος και να χτιστεί ξανά η συναισθηματική ασφάλεια, ακόμη και σε σχέσεις που μοιάζουν διαλυμένες.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* How We Work */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Πώς δουλεύουμε</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>1. Άμεση αποτύπωση</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ακούμε σε βάθος την ιστορία και χαρτογραφούμε τα μοτίβα σύγκρουσης.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>2. Στόχοι ασφαλείας</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Βάζουμε όρια, μειώνουμε την ένταση, προστατεύουμε τον δεσμό γονέα–παιδιού.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>3. Αντίστροφη Ορμή</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Μετατρέπουμε την εσωτερική αντίσταση σε μικρά, εφαρμόσιμα βήματα αλλαγής.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>4. Σταθεροποίηση</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Καλλιεργούμε δεξιότητες σχέσης, ανθεκτικότητα και βιώσιμη πορεία.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Team Members */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Η Ομάδα μας</h2>
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

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-2xl text-center">
          <Button size="lg" asChild>
            <Link href="/contact">Επικοινωνήστε μαζί μας</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

