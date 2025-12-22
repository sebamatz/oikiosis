import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Phone, Video, Mail, MessageCircle } from "lucide-react";
import SOSButton from "@/components/SOSButton";
import Image from "next/image";

export default function ContactPage() {
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
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">Επικοινωνία</h1>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          {/* Communication Methods */}
          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-bold text-center">
              Τρόποι Επικοινωνίας
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Email */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:ikiosis@ikiosis.com"
                    className="text-lg font-medium text-primary hover:underline break-all"
                  >
                    ikiosis@ikiosis.com
                  </a>
                </CardContent>
              </Card>

              {/* S.O.S. Message */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    S.O.S. Μήνυμα
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Το δωρεάν S.O.S. μήνυμά σου για άμεσο Προσανατολισμό &
                    Σταθεροποίηση.
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

            {/* Viber & WhatsApp */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Viber */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg
                      className="h-6 w-6 text-primary flex-shrink-0"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M95 232c0-91 17-147 161-147s161 56 161 147-17 147-161 147l-26-1-53 63c-4 4-8 1-8-3v-69c-6 0-31-12-38-19-22-23-36-40-36-118zm-30 0c0-126 55-177 191-177s191 51 191 177-55 177-191 177c-10 0-18 0-32-2l-38 43c-7 8-28 11-28-13v-42c-6 0-20-6-39-18-19-13-54-44-54-145zm223 42q10-13 24-4l36 27q8 10-7 28t-28 15q-53-12-102-60t-61-104q0-20 25-34 13-9 22 5l25 35q6 12-7 22c-39 15 51 112 73 70z"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="10"
                        d="M269 186a30 30 0 0 1 31 31m-38-58a64 64 0 0 1 64 67m-73-93a97 97 0 0 1 99 104"
                      />
                    </svg>
                    Viber
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="viber://chat?number=%2B306989940588"
                    className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Άνοιγμα Viber
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    698 994 0588
                  </p>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg
                      className="h-6 w-6 text-primary flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://wa.me/306989940588"
                    className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Άνοιγμα WhatsApp
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    698 994 0588
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
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
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D4D03AQGrIDl4WJqKcA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680286523298?e=1763596800&v=beta&t=Ki0yT6zZ6XQ1J3sVxcJxsyFhvu9BNO5fPIkyyKvn-CI"
                      alt="Ιωάννης Γιαννόπουλος"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-muted-foreground">
                      Ιωάννης Γιαννόπουλος
                    </p>
                    <a
                      href="tel:+306989940588"
                      className="text-lg font-medium text-primary hover:underline"
                    >
                      698 994 0588
                    </a>
                  </div>
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
                    Ασφαλής πλατφόρμα, απόρρητο. Διάρκεια: 80 λεπτά
                  </p>
                </div>
                <div className="mt-4">
                  <p className="mb-2 font-semibold">Δια ζώσης</p>
                  <p className="text-sm text-muted-foreground">
                    Διάρκεια: 80 λεπτά
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
                  <span className="font-semibold text-foreground">
                    Ήρεμο πλαίσιο,
                  </span>{" "}
                  καθαρή διαδικασία, ρεαλιστικοί στόχοι.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Σεβασμός
                  </span>{" "}
                  σε κάθε μέλος της οικογένειας.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Πρακτικά εργαλεία
                  </span>{" "}
                  για δύσκολες στιγμές και κρίσεις.
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
                Η Οικείωσις είναι ένας ασφαλής χώρος, όπου ο ψυχικός πόνος
                συναντά άμεση και ουσιαστική ανταπόκριση με κατανόηση,
                επιστημονική τεκμηρίωση και ανθρώπινη παρουσία.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Signature */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Με εκτίμηση,</p>
            <div>
              <p className="text-lg font-semibold">Γιαννόπουλος Ιωάννης</p>
              <p className="text-sm text-muted-foreground">
                Ψυχολόγος - Ψυχοθεραπευτής
              </p>
              <p className="text-sm text-muted-foreground">
                Founder, Reverse Momentum Model (RMM) Therapy
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">Σοφία Μίαρη</p>
              <p className="text-sm text-muted-foreground">
                Ψυχολόγος – Ψυχοθεραπεύτρια (MSc, PhD)
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
