import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Phone, Video, MessageCircle } from "lucide-react";
import SOSButton from "@/components/SOSButton";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
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
                        className="object-cover"
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
                        Εβδομαδιαία ή εντατική, ανάλογα με τη φάση και τον
                        στόχο.
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
                    Γιαννόπουλος Ιωάννης
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Ψυχολόγος - Ψυχοθεραπευτής
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Founder, Reverse Momentum Model (RMM) Therapy
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="px-6 py-10">
                  <p className="mb-3 text-xl font-semibold text-foreground">
                    Σοφία Μίαρη
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Ψυχολόγος – Ψυχοθεραπεύτρια
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    MSc, PhD
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
