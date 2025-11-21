import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Phone, Clock, Video } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <div className="mb-4 text-center">
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">Επικοινωνία</h1>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Contact Information */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Τηλεφωνική Επικοινωνία
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-semibold text-muted-foreground">Ιωάννης Γιαννόπουλος</p>
                  <a
                    href="tel:+306989940588"
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    698 994 0588
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Session Format */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  Μορφή Συνεδριών
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 font-semibold">Διαδικτυακά</p>
                  <p className="text-sm text-muted-foreground">
                    Ασφαλής πλατφόρμα, απόρρητο.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="mb-2 font-semibold">Διάρκεια</p>
                  <p className="text-sm text-muted-foreground">
                    60 λεπτά
                  </p>
                </div>
                <div className="mt-4">
                  <p className="mb-2 font-semibold">Συχνότητα</p>
                  <p className="text-sm text-muted-foreground">
                    Εβδομαδιαία ή εντατική, ανάλογα με τη φάση και τον στόχο.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center">
            <h2 className="mb-3 text-3xl font-bold">Τι να περιμένεις</h2>
          </div>
          <div className="space-y-3">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Ήρεμο πλαίσιο,</span> καθαρή διαδικασία, ρεαλιστικοί στόχοι.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Σεβασμός</span> σε κάθε μέλος της οικογένειας.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Πρακτικά εργαλεία</span> για δύσκολες στιγμές και κρίσεις.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Message */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl text-center">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <p className="mb-4 text-lg font-semibold">
                Δεν χρειάζεται να εξηγήσεις πόσο πονάς, αρκεί να έρθεις.
              </p>
              <p className="text-muted-foreground">
                Η Οικείωσις είναι ένας ασφαλής χώρος, όπου ο ψυχικός πόνος συναντά άμεση και ουσιαστική ανταπόκριση με κατανόηση, επιστημονική τεκμηρίωση και ανθρώπινη παρουσία.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Signature */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Με εκτίμηση,</p>
            <p className="text-lg font-semibold">Γιαννόπουλος Ιωάννης</p>
            <p className="text-sm text-muted-foreground">
              Ψυχολόγος - Ψυχοθεραπευτής
            </p>
            <p className="text-sm text-muted-foreground">
              Founder, Reverse Momentum Model (RMM) Therapy
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

