"use client";

import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Phone, Video, MessageCircle, MapPin } from "lucide-react";
import SOSButton from "@/components/SOSButton";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

export default function ContactClient() {
  return (
    <>
      <Section className="bg-linear-to-br from-primary/5 via-muted/30 to-primary/10 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Επικοινωνία
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Επικοινωνήστε μαζί μας για να κλείσετε ραντεβού ή για οποιαδήποτε
              απορία
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Δεν χρειάζεται να έχεις έτοιμες «σωστές» λέξεις ή να τα έχεις
              σκεφτεί όλα. Μπορείς απλά να περιγράψεις με απλά λόγια τι σε
              δυσκολεύει περισσότερο αυτή την περίοδο.
            </p>
            {/* Added Link Here */}
            <div className="pt-4">
              <Link
                href="/first-session"
                className="inline-flex items-center text-sm md:text-base font-medium text-primary hover:text-primary/80 bg-primary/5 px-4 py-2 rounded-full transition-colors border border-primary/10 hover:border-primary/30"
              >
                Μάθε τι να περιμένεις στην πρώτη συνάντηση &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Contact Form */}
            <div className="flex flex-col gap-6">
              <ContactForm />

              {/* S.O.S. Message */}
              <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    S.O.S. Μήνυμα
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Το δωρεάν S.O.S. μήνυμά σου για έναν πρώτο προσανατολισμό
                    και λίγη σταθεροποίηση.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Δεν είναι γραμμή άμεσης επέμβασης ή 24/7, αλλά μια πρώτη
                    ανθρώπινη ανταπόκριση για να μην μείνεις εντελώς μόνος με
                    ό,τι ζεις.
                  </p>
                  <SOSButton
                    href="/sos-page"
                    variant="outline"
                    fullWidth={false}
                    showDescription={false}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Information */}
            <div className="flex flex-col gap-6">
              {/* Contact Information */}
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Τηλεφωνική Επικοινωνία
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-5">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                      <Image
                        src="/images/John-Giannopoulos-profie.jpg"
                        alt="Ιωάννης Γιαννόπουλος"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-foreground">
                        Ιωάννης Γιαννόπουλος
                      </p>
                      <a
                        href="tel:+306989940588"
                        className="text-xl font-medium text-primary transition-colors hover:underline"
                      >
                        698 994 0588
                      </a>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Το τηλέφωνο χρησιμοποιείται για συνεννόηση ραντεβού και
                        πρακτικά θέματα. Δεν είναι γραμμή άμεσης επέμβασης ή
                        επείγουσας κρίσης.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Information */}
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Τοποθεσία Γραφείου
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Αγησιλάου 68 & Θερμοπυλών, Αθήνα
                    </span>{" "}
                    (δεχόμαστε μόνο με ραντεβού)
                  </p>
                </CardContent>
              </Card>

              {/* Session Format */}
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    Μορφή Συνεδριών
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <p className="font-semibold text-foreground">
                        Διαδικτυακά
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Μέσω ασφαλούς πλατφόρμας, με σεβασμό στο απόρρητο.
                        Διάρκεια: 60 λεπτά.
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="font-semibold text-foreground">Δια ζώσης</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Στο γραφείο, σε ήρεμο και ασφαλές περιβάλλον. Διάρκεια:
                        60 λεπτά.
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="font-semibold text-foreground">Συχνότητα</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Εβδομαδιαία ή κατόπιν συνεννόησης, ανάλογα με τη φάση
                        και τον στόχο
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect - Moved Here */}
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle>Τι να περιμένεις</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Ήρεμο πλαίσιο,
                      </span>{" "}
                      καθαρή διαδικασία, ρεαλιστικοί στόχοι.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Σεβασμός
                      </span>{" "}
                      σε κάθε μέλος της οικογένειας.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Πρακτικά εργαλεία
                      </span>{" "}
                      για δύσκολες στιγμές και κρίσεις.
                    </p>
                  </div>
                  {/* Added Button Here */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-6 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary transition-colors whitespace-normal h-auto py-2 text-center"
                  >
                    <Link href="/first-session">
                      Δείτε αναλυτικά τι να περιμένετε στην πρώτη συνάντηση
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
      {/* Message */}
      <Section className="bg-linear-to-b from-muted/30 to-muted/50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Card className="border-primary/20 shadow-xl">
            <CardContent className="px-6 py-10 md:px-10 md:py-14">
              <p className="mb-6 text-xl font-semibold leading-relaxed text-foreground md:mb-8 md:text-2xl">
                Δεν χρειάζεται να εξηγήσεις πόσο πονάς, αρκεί να έρθεις.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Η Οικείωσις είναι ένας ασφαλής χώρος, όπου ο ψυχικός πόνος
                συναντά άμεση και ουσιαστική ανταπόκριση με κατανόηση,
                επιστημονική τεκμηρίωση και κυρίως ανθρώπινη παρουσία.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Signature */}
      <Section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-10 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Με εκτίμηση,
            </p>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <Card className="border-primary/10 shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="px-6 py-10">
                  <p className="mb-3 text-xl font-semibold text-foreground">
                    Ιωάννης Γιαννόπουλος
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Ψυχολόγος | Εξειδίκευση: Διαχείριση Σχέσεων - Διαζυγίων
                    Υψηλής Σύγκρουσης & Γονικής Αποξένωσης
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="px-6 py-10">
                  <p className="mb-3 text-xl font-semibold text-foreground">
                    Σοφία Μίαρη
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Ψυχολόγος – Οικογενειακή – Συστημική Ψυχοθεραπεύτρια
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    MSc, PhD
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* Added FAQ Teaser Here */}
            <div className="pt-8">
              <p className="text-muted-foreground">
                Έχεις απορίες;{" "}
                <Link
                  href="/faq"
                  className="text-primary hover:underline font-medium transition-colors"
                >
                  Δες τις Συχνές Ερωτήσεις
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
