"use client";

import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Clock, CreditCard, ShieldCheck } from "lucide-react";

export default function FirstSessionClient() {
  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header Section */}
      <Section className="bg-linear-to-b from-muted/30 to-background pt-12 md:pt-16 pb-10">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <h1 className="mb-6 md:text-3xl font-semibold tracking-tight text-2xl text-foreground">
            Τι να περιμένεις στην πρώτη συνάντηση
          </h1>
        </div>
      </Section>

      {/* Main Content Section */}
      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Main Text */}
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light space-y-6">
            <p>
              Θα ακούσουμε με προσοχή τι σε φέρνει εδώ και θα δούμε μαζί πώς
              μπορούμε να ανταποκριθούμε με τρόπο που ταιριάζει στη δική σου
              ανάγκη. Αν βρίσκεσαι σε περίοδο έντονης συναισθηματικής φόρτισης,
              σύγχυσης ή ψυχικής επιβάρυνσης, θα δώσουμε χώρο σε αυτό που
              βιώνεις με προσοχή, επικύρωση και επαγγελματική ευθύνη. Θα
              πλοηγηθούμε μαζί στην «καταιγίδα», ώστε να κατανοήσουμε όσο
              γίνεται καλύτερα την παρούσα κατάστασή σου και να διαμορφώσουμε
              ένα πρώτο, ουσιαστικό και πρακτικό βήμα για το εδώ και τώρα.
              Στόχος μας είναι, φεύγοντας από την πρώτη συνάντηση, να έχεις
              μεγαλύτερη σαφήνεια για αυτό που σου συμβαίνει και να κρατάς μαζί
              σου ένα πρώτο πρακτικό σημείο στήριξης. Οι συνεδρίες γίνονται μόνο
              κατόπιν ραντεβού, δια ζώσης ή διαδικτυακά, και διαρκούν 60 λεπτά.
              Κόστος συνεδρίας: Ατομική 50€ · Ζεύγους 100€ · Οικογένειας 150€ Αν
              το οικονομικό σε προβληματίζει, πες μας ανοιχτά. Δεν θέλουμε να
              σταθεί κανένα εμπόδιο ανάμεσα σε σένα και στη στήριξη που
              χρειάζεσαι.
            </p>
          </div>

          {/* Practical Block */}
          <Card className="border-primary/20 shadow-lg overflow-hidden">
            <CardContent className="p-8 md:p-10 bg-muted/10">
              <h3 className="text-2xl font-medium text-foreground mb-6 border-b border-primary/10 pb-4">
                Πρακτικές Πληροφορίες
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg">
                      Μορφή & Διάρκεια
                    </h4>
                    <p className="text-muted-foreground">
                      Η συνάντηση έχει τη μορφή συνεδρίας, διαρκεί 60 λεπτά,
                      online ή δια ζώσης.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg">
                      Αμοιβή
                    </h4>
                    <p className="text-muted-foreground">
                      Ατομική 50€ &middot; Ζεύγους 100€ &middot; Οικογένειας
                      150€
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg">
                      Ασφάλεια
                    </h4>
                    <p className="text-muted-foreground">
                      Απόλυτη τήρηση του απορρήτου από το πρώτο λεπτό.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-base shadow-lg"
              asChild
            >
              <Link href="/booking">Ζήτησε μια πρώτη συνάντηση</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-base text-primary hover:text-primary border-primary/20 hover:bg-primary/5"
              asChild
            >
              <Link href="/contact">Επικοινώνησε μαζί μας</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
