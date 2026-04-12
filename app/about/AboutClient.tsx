"use client";

import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function AboutClient() {
  return (
    <>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <div className="mb-4 text-center">
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">
              Σχετικά με εμάς
            </h1>
          </div>
        </div>
      </Section>

      {/* Your Navigator */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/About Page.jpg"
              alt="Ο Πλοηγός σας"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent"></div>
          </div>
        </div>
      </Section>

      {/* NEW: Intro Philosophy */}
      <Section>
        <div className="mx-auto max-w-3xl text-center space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
          <p className="font-semibold text-foreground">
            Η Οικείωσις δεν είναι απλώς ένα «γραφείο ψυχολόγων».
          </p>
          <p>
            Θέλουμε να λειτουργεί σαν καταφύγιο και πυξίδα για ανθρώπους που
            ζουν μέσα σε έντονη σύγκρουση, διαζύγιο ή γονεϊκή αποξένωση και
            έχουν κουραστεί να τους λένε «κάνε υπομονή» ή «μην υπερβάλλεις».
          </p>
          <p>
            Πριν από τα εργαλεία και τις τεχνικές, αυτό που προσφέρουμε είναι
            ένας ασφαλής, ανθρώπινος χώρος όπου ο πόνος σου ακούγεται χωρίς
            κριτική και δουλεύουμε μαζί με ρεαλιστικά βήματα.
          </p>
          {/* ADDED: Link to first session */}
          <div className="pt-4 flex justify-center">
            <Button
              variant="outline"
              asChild
              className="rounded-full border-primary/20 text-primary hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <Link href="/first-session">
                Μάθε τι να περιμένεις στην πρώτη συνάντηση
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* The Model */}
      <Section className="bg-muted/30 scroll-mt-16.25" id="model">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Το Μοντέλο</h2>
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Μοντέλο Αντίστροφης Ορμής (Reverse Momentum Model)
            </h3>
          </div>
          <Card className="overflow-hidden border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                Η κρίση δεν είναι «πρόβλημα». Είναι δύναμη – Ορμή.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                Δεν προσπαθούμε να την ακυρώσουμε, αλλά να τη στρέψουμε προς
                όφελός σου. Σχεδιάζουμε μαζί πώς αυτή η δύναμη μπορεί να γίνει
                κίνηση προς τα εκεί που χρειάζεσαι.
              </p>
              <ul className="space-y-3 ml-6 list-disc text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">
                    Ο πόνος σου ακούγεται και μπαίνει σε πλαίσιο ασφάλειας.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Η ιστορία σου αποκτά νόημα, χωρίς να χρειάζεται να ξέρεις
                    εσύ τα «εργαλεία».
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Η πορεία σου βρίσκει πυξίδα, με συγκεκριμένα, ρεαλιστικά
                    βήματα.
                  </span>
                </li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Δεν χρειάζεται να θυμάσαι ακρωνύμια και ορολογίες. Δουλειά μας
                είναι να χτίσουμε ασφάλεια μέσα στην καταιγίδα και να
                πλοηγηθούμε μαζί προς την αναδόμηση.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* The Process */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Η Διαδικασία
            </h2>
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Πώς δουλεύουμε
            </h3>
            <p className="mb-8 text-lg text-muted-foreground">
              Έτσι μετατρέπουμε την κρίση σε Ορμή:
            </p>
          </div>
          <div className="space-y-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  1. Ασφάλεια & Σταθεροποίηση
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Στην αρχή φροντίζουμε να πέσουν λίγο οι «στροφές». Βλέπουμε τι
                  συμβαίνει τώρα στη ζωή σου, τι σε πιέζει περισσότερο και αν
                  υπάρχει άμεσος κίνδυνος για σένα ή τα παιδιά.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Βάζουμε βασικά όρια, μειώνουμε όσο γίνεται την ένταση και
                  δημιουργούμε έναν χώρο όπου μπορείς να ανασάνεις.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">2. Προσανατολισμός</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Χαρτογραφούμε ήρεμα την ιστορία σου: τα βασικά γεγονότα, τα
                  μοτίβα σύγκρουσης, τι είναι στο χέρι σου και τι όχι.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Βάζουμε σε σειρά τις προτεραιότητες, ώστε να ξέρεις πού
                  βρισκόμαστε και ποιο είναι το αμέσως επόμενο βήμα.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  3. Ανασύνδεση & Συν-επίλυση
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Δουλεύουμε πάνω στις σχέσεις που σε νοιάζουν: με τα παιδιά, με
                  τον/την σύντροφο ή πρώην, με την οικογένεια γύρω σου.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Ψάχνουμε πιο λειτουργικούς τρόπους επικοινωνίας και ορίων ώστε
                  να μειωθούν οι συγκρούσεις, ειδικά σε σχέσεις υψηλής
                  σύγκρουσης και σε πλαίσιο συν-γονεϊκότητας.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  4. Αναδόμηση & Ανθεκτικότητα
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Σταδιακά περνάμε από την «επιβίωση» στην αναδόμηση της ζωής
                  σου.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Δουλεύουμε την ταυτότητά σου πριν, κατά και μετά τη σύγκρουση
                  ή τον χωρισμό, τις σχέσεις που θέλεις να κρατήσεις και τις
                  δεξιότητες ανθεκτικότητας που χρειάζεσαι για τη «νέα
                  κανονικότητα».
                </p>
              </CardContent>
            </Card>
          </div>
          {/* ADDED: Link to services */}
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              asChild
              className="rounded-full border-primary/20 text-primary hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <Link href="/services">Δείτε αναλυτικά τις Υπηρεσίες μας</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Team Members */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Η Ομάδα μας</h2>
            <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
                Είμαστε εδώ όχι για να σε κρίνουμε, αλλά για να περπατήσουμε
                δίπλα σου στην καταιγίδα.
              </p>
              <p>
                Ειδικευόμαστε στις σχέσεις υψηλής σύγκρουσης και ιδιαίτερα στη
                Γονεϊκή Αποξένωση.
              </p>
              <p>
                Όλη μας η εκπαίδευση και τα θεραπευτικά εργαλεία είναι στην
                υπηρεσία αυτού του στόχου: να έχεις πρακτικά, σταθερά πατήματα
                όταν νιώθεις ότι χάνεις το έδαφος.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {/* Ioannis */}
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              {/* FIXED: Added md:items-start to prevent vertical stretching */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 md:items-start">
                {/* FIXED: Constrained height on desktop and made it sticky */}
                <div className="relative h-64 md:h-100 lg:h-112.5 w-full rounded-lg overflow-hidden md:sticky md:top-32">
                  <Image
                    src="/images/John-Giannopoulos-profie.png"
                    alt="Γιαννόπουλος Ιωάννης - Ψυχολόγος Ψυχοθεραπευτής"
                    fill
                    className="object-contain md:object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <CardHeader className="p-0 md:p-6 pb-4 md:pb-6">
                    <CardTitle className="text-xl md:text-2xl">
                      Ιωάννης Γιαννόπουλος
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg">
                      Ψυχολόγος
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 p-0 md:p-6 pt-0">
                    <p className="font-semibold">
                      Εξειδίκευση στη Διαχείριση Σχέσεων - Διαζυγίων Υψηλής
                      Σύγκρουσης & Γονικής Αποξένωσης
                    </p>
                    <p className="text-muted-foreground">
                      Σπούδασα Ψυχολογία (BSc Hons) στο University of East
                      London και εξειδικεύτηκα στη Διαχείριση Χωρισμού και
                      Διαζυγίου (ΕΚΠΑ). Ως ψυχολόγος, δραστηριοποιούμαι σε πεδία
                      οξείας ψυχικής και συναισθηματικής κρίσης, με βασικούς
                      άξονες την απώλεια, τη ρήξη και την αποξένωση στις
                      διαπροσωπικές σχέσεις.
                    </p>
                    <div>
                      <p className="mb-2 font-semibold">Εστιάζω ειδικά:</p>
                      <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                        <li>στη γονεϊκή αποξένωση</li>
                        <li>στη δυναμική σχέσεων υψηλής σύγκρουσης</li>
                        <li>
                          στην υποστήριξη παιδιών σε περιόδους χωρισμού ή
                          διαζυγίου
                        </li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      Η προσέγγισή μου συνδυάζει επιστημονική τεκμηρίωση με
                      βιωματικές, στοχευμένες παρεμβάσεις. Εφαρμόζω το{" "}
                      <span className="font-semibold">
                        Μοντέλο Αντίστροφης Ορμής (Reverse Momentum Model)
                      </span>{" "}
                      – μια θεραπευτική μεθοδολογία που μετατρέπει την ένταση,
                      την απώλεια και την εσωτερική αντίσταση σε κινητήρια
                      δύναμη αλλαγής και επαναπροσδιορισμού.
                    </p>
                    <div>
                      <p className="mb-2 font-semibold">Στην πράξη:</p>
                      <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                        <li>
                          Υποστηρίζω γονείς και παιδιά στην αποκατάσταση της
                          σύνδεσης, της σταθερότητας και του αισθήματος
                          ασφάλειας κατά τη διάρκεια οικογενειακών μεταβάσεων
                        </li>
                        <li>
                          Βοηθώ άτομα να επαναπροσδιορίσουν την ταυτότητά τους
                          μετά από χωρισμό ή διαζύγιο
                        </li>
                        <li>
                          Ενισχύω τη συνεργατική γονεϊκότητα και τη θέσπιση
                          υγιών, λειτουργικών ορίων
                        </li>
                        <li>
                          Συμβάλλω στη διαχείριση έντονων συγκρούσεων κατά τη
                          διάρκεια δικαστικών ή άλλων διενέξεων, μέσα από
                          πρακτικά πρωτόκολλα αποκλιμάκωσης
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="font-semibold">Αρχή μου:</p>
                      <p className="mt-2 italic text-muted-foreground">
                        Κάθε ρήξη μπορεί να γίνει αφετηρία. Τίποτα δεν είναι
                        οριστικά χαμένο — ούτε ο δεσμός, ούτε ο εαυτός, ούτε η
                        σχέση.
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold">
                        Founder, Reverse Momentum Model (RMM)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        - Διαχείριση Κρίσεων & Σχέσεων Υψηλής Σύγκρουσης
                        (Διαζύγιο - Χωρισμός, Γονική Αποξένωση, Πένθος, Ρήξη
                        Ταυτότητας).
                      </p>
                      <p className="text-sm text-muted-foreground">
                        - Εξέλιξη της προσωπικότητας και των σχέσεων μέσα από
                        την κρίση.
                      </p>
                      <p className="mt-2 italic text-sm text-muted-foreground">
                        «Αν δεν μπορείς να αποφύγεις την πρόσκρουση, μάθε να
                        χρησιμοποιείς τη δύναμή της.»
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Sofia */}
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              {/* FIXED: Added md:items-start to prevent vertical stretching */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 md:items-start">
                {/* FIXED: Constrained height on desktop and made it sticky */}
                <div className="relative h-64 md:h-100 lg:h-112.5 w-full rounded-lg overflow-hidden md:sticky md:top-32">
                  <Image
                    src="/images/sofia.jpg"
                    alt="Σοφία Μίαρη - Ψυχολόγος Ψυχοθεραπεύτρια"
                    fill
                    className="object-contain md:object-cover md:object-right"
                  />
                </div>
                <div className="md:col-span-2">
                  <CardHeader className="p-0 md:p-6 pb-4 md:pb-6">
                    <CardTitle className="text-xl md:text-2xl">
                      Σοφία Μίαρη
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg">
                      Ψυχολόγος – Οικογενειακή – Συστημική Ψυχοθεραπεύτρια (MSc,
                      PhD)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 p-0 md:p-6 pt-0">
                    <p className="text-muted-foreground">
                      Σπούδασα Ψυχολογία στο University of Central Lancashire
                      (Preston, Ηνωμένο Βασίλειο).
                    </p>
                    <div>
                      <p className="mb-2 font-semibold">
                        Η ψυχοθεραπευτική μου ιδιότητα βασίζεται σε:
                      </p>
                      <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                        <li>
                          <span className="font-semibold">
                            Τετραετή εκπαίδευση στη Συστημική/Οικογενειακή
                            Θεραπεία
                          </span>
                          <br />
                          <span className="text-sm">
                            – Μονάδα Οικογενειακής Θεραπείας, Ψυχιατρικό
                            Νοσοκομείο Αττικής (Δαφνί)
                          </span>
                        </li>
                        <li>
                          <span className="font-semibold">
                            Διεθνές Μετεκπαιδευτικό Πρόγραμμα στη Συμβουλευτική
                            και Ψυχοθεραπεία
                          </span>
                          <br />
                          <span className="text-sm">
                            – Συστημική, Αφηγηματική και Συνεργατική–Διαλογική
                            προσέγγιση (Εθνικό και Καποδιστριακό Πανεπιστήμιο
                            Αθηνών)
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold">Ακαδημαϊκοί Τίτλοι:</p>
                      <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                        <li>
                          MSc στις Επιστήμες της Αγωγής – Ελληνικό Ανοικτό
                          Πανεπιστήμιο
                        </li>
                        <li>
                          MSc στην Εκπαιδευτική/Παιδαγωγική Ψυχολογία –
                          Χαροκόπειο Πανεπιστήμιο
                        </li>
                        <li>
                          <span className="font-semibold">
                            Διδακτορική Διατριβή στην Ψυχολογία:
                          </span>
                          <br />
                          <span className="text-sm">
                            «Η βιωματική διάσταση της αναπηρίας: διαχείριση
                            άγχους, πρόσληψη εαυτού και ανάπτυξη στρατηγικών
                            λειτουργικότητας»
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold">
                        Πιστοποιήσεις & Εξειδικεύσεις:
                      </p>
                      <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                        <li>Πιστοποιημένη Εκπαιδεύτρια Ενηλίκων (ΕΟΠΠΕΠ)</li>
                        <li>
                          Εξειδίκευση στη Θετική Ψυχολογία – Πάντειο
                          Πανεπιστήμιο
                        </li>
                        <li>
                          Εξειδίκευση στη Σχολική Ψυχολογία – Πανεπιστήμιο
                          Αιγαίου
                        </li>
                        <li>
                          Εξειδίκευση στη Συμβουλευτική και στον Επαγγελματικό
                          Προσανατολισμό για εφήβους και ενήλικες
                        </li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      Η ακαδημαϊκή μου πορεία συναντά την κλινική πράξη. Ως
                      ψυχοθεραπεύτρια, φιλόλογος και μητέρα τριών παιδιών,
                      συνεργάζομαι με οικογένειες, γονείς, εφήβους και παιδιά
                      που έχουν ανάγκη για:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      <li>Συμβουλευτική νέων και εφήβων</li>
                      <li>Θεραπεία Ζεύγους</li>
                      <li>Θεραπεία οικογένειας (Συστημική)</li>
                      <li>Ατομική Θεραπεία & Θεραπεία Τραύματος</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Στην προσέγγισή μου αξιοποιώ εργαλεία της Συστημικής
                      Θεραπείας και της Θετικής Ψυχολογίας, δίνοντας έμφαση:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      <li>στη σύνδεση και την επαναπροσέγγιση</li>
                      <li>
                        στην ενίσχυση λειτουργικών στρατηγικών ζωής και σχέσεων
                      </li>
                    </ul>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="font-semibold">Στόχος μου:</p>
                      <p className="mt-2 text-muted-foreground">
                        Να υποστηρίζω τους ανθρώπους ώστε να μετατρέπουν τη ρήξη
                        σε κατανόηση και τη δυσκολία σε ευκαιρία
                        επαναπροσδιορισμού — στις σχέσεις και στον εαυτό.
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
            className="max-w-100 w-full whitespace-normal overflow-hidden"
            asChild
          >
            <Link
              href="/booking"
              className="wrap-break-word text-center whitespace-normal min-w-0 overflow-hidden"
            >
              Ζήτησε μια πρώτη συνάντηση
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
