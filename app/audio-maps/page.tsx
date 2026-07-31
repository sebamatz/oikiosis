import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_ALT =
  "Αφηρημένη ηχητική κυματομορφή που μεταβαίνει από τη σύγχυση σε τρία σταθερά σημεία.";

export const metadata: Metadata = {
  title:
    "Ηχητικοί Χάρτες | Ψυχολογική Πλοήγηση σε Γονεϊκή Αποξένωση & Ανασύσταση Οικογένειας | Οικείωσις",
  description:
    "Ψηφιακές ηχητικές σειρές που φωτίζουν ερωτήματα και βοηθούν να χαράξεις πιο καθαρά και σταθερά βήματα. 3 Ηχητικοί Χάρτες × περίπου 20 λεπτά, 29€ με ΦΠΑ.",
  alternates: {
    canonical: "/audio-maps",
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "/audio-maps",
    siteName: "Οικείωσις",
    title: "Ηχητικοί Χάρτες | Οικείωσις",
    description:
      "Ψηφιακές ηχητικές σειρές που φωτίζουν ερωτήματα και βοηθούν να χαράξεις πιο καθαρά και σταθερά βήματα.",
    images: [
      {
        url: "/images/audio-maps-hero.png",
        width: 1536,
        height: 1024,
        alt: HERO_ALT,
      },
    ],
  },
};

const authors = [
  {
    name: "Γιάννης Γιαννόπουλος — Ψυχολόγος",
    role: "Σύνταξη · Επιστημονική επιμέλεια · Οργάνωση",
    bio: "Δημιουργός του Reverse Momentum Model, με εξειδίκευση στη Γονεϊκή Αποξένωση και στις σχέσεις υψηλής σύγκρουσης. Περισσότερες από 1.500 ώρες κλινικής εμπειρίας.",
  },
  {
    name: "Σοφία Μίαρη — Ψυχολόγος",
    role: "Σύνταξη · Επιστημονική επιμέλεια",
    bio: "Οικογενειακή–Συστημική Ψυχοθεραπεύτρια (MSc, PhD), με βαθιά γνώση και εμπειρία στη δυναμική και στις προκλήσεις των επανασυσταμένων οικογενειών.",
  },
];

const benefits = [
  {
    label: "Επικύρωση",
    title: "Αυτό που νιώθεις έχει νόημα",
    description:
      "Βρίσκεις λέξεις για την εμπειρία σου και αναγνωρίζεις ότι δεν είσαι «υπερβολικός».",
  },
  {
    label: "Κατανόηση",
    title: "Βρίσκεις απαντήσεις στο «γιατί»",
    description:
      "Φωτίζεις μοτίβα και μηχανισμούς πίσω από όσα μέχρι τώρα έμοιαζαν ανεξήγητα.",
  },
  {
    label: "Πλοήγηση",
    title: "Χαράζεις πιο καθαρά και σταθερά βήματα",
    description:
      "Μετατρέπεις την κατανόηση σε πιο καθαρή και λειτουργική κατεύθυνση στην πορεία.",
  },
];

const included = [
  {
    title: "Ψηφιακή ηχητική σειρά",
    description: "Αυτοτελές θεματικό προϊόν — όχι συνεδρία.",
  },
  {
    title: "3 Χάρτες × περίπου 20 λεπτά",
    description: "Περίπου 60 λεπτά οργανωμένης ηχητικής πλοήγησης.",
  },
  {
    title: "29€ τελική τιμή με ΦΠΑ",
    description:
      "Απεριόριστη ακρόαση μέσω LearnWorlds — streaming only, χωρίς λήψη αρχείων.",
  },
];

const series = [
  {
    eyebrow: "Πλοήγηση στην Καταιγίδα",
    title: "Όταν το Παιδί Απομακρύνεται",
    description:
      "Για προβλήματα ή ρήξη επαφής γονέα-παιδιού, πιθανή Γονεϊκή Αποξένωση και διαζύγια υψηλής σύγκρουσης.",
    image: "/images/audio-maps-split-left-side.jpg",
    imageAlt:
      "Πατέρας δίπλα σε άδεια παιδική κούνια, σε σκηνή συναισθηματικής απουσίας.",
    includes: [
      "3 Ηχητικοί Χάρτες × περίπου 20 λεπτά",
      "Επιστημονική ενημέρωση και πρακτική πλοήγηση",
      "Πρόσβαση μέσω LearnWorlds",
    ],
    author: "Σύνταξη, επιμέλεια & αφήγηση: Γιάννης Γιαννόπουλος",
    price: "29€ με ΦΠΑ",
  },
  {
    eyebrow: "Οικογένεια σε Ανασύσταση",
    title: "Νέοι Δεσμοί, Νέοι Ρόλοι, Νέος Χάρτης",
    description:
      "Για ζευγάρια, βιολογικούς γονείς και νέους συντρόφους που δημιουργούν ένα νέο οικογενειακό σύστημα μετά από χωρισμό, διαζύγιο ή απώλεια.",
    image: "/images/audio-maps-split-right-side.png",
    imageAlt:
      "Ενήλικες και παιδιά σε κοινό οικογενειακό χώρο, συμβολίζοντας νέους δεσμούς και ρόλους.",
    includes: [
      "3 Ηχητικοί Χάρτες × περίπου 20 λεπτά",
      "Ρόλοι, όρια, δεσμοί και συγκρούσεις πίστης",
      "Πρόσβαση μέσω LearnWorlds",
    ],
    author: "Σύνταξη, επιμέλεια & αφήγηση: Σοφία Μίαρη",
    price: "29€ με ΦΠΑ",
  },
];

const audiences = [
  {
    label: "Όταν το Παιδί Απομακρύνεται",
    description:
      "Για γονείς που βιώνουν αλλαγή ή ρήξη στην επικοινωνία, νιώθουν απόρριψη, σύγχυση ή απώλεια της θέσης τους και αναζητούν απαντήσεις και σταθερότερη κατεύθυνση.",
  },
  {
    label: "Οικογένεια σε Ανασύσταση",
    description:
      "Για ζευγάρια, βιολογικούς γονείς και νέους συντρόφους που προσπαθούν να κατανοήσουν ρόλους, όρια και δεσμούς και να χτίσουν ασφαλέστερη κοινή καθημερινότητα.",
  },
];

const canHelp = [
  "να κατανοήσεις καλύτερα τη δυναμική,",
  "να μειώσεις παρορμητικές αντιδράσεις,",
  "να οργανώσεις τα επόμενα βήματά σου,",
  "να επιστρέφεις σε σταθερά σημεία αναφοράς.",
];

const isNot = [
  "ψυχοθεραπεία ή εξατομικευμένη αξιολόγηση,",
  "υπηρεσία άμεσης παρέμβασης σε κρίση,",
  "νομική συμβουλή ή πραγματογνωμοσύνη,",
  "υποκατάστατο επαγγελματικής υποστήριξης.",
];

const practicalInfo = [
  {
    question: "Πώς θα ακούσω;",
    answer:
      "Από κινητό, tablet ή υπολογιστή, μόνο μέσα από το LearnWorlds. Δεν προβλέπεται λήψη.",
  },
  {
    question: "Για πόσο έχω πρόσβαση;",
    answer:
      "Απεριόριστα. Ο ακροατής μπορεί να επιστρέφει και να ακούει ξανά τη σειρά.",
  },
  {
    question: "Ποιον θα ακούσω;",
    answer:
      "Τον δημιουργό κάθε σειράς: τον Γιάννη Γιαννόπουλο στις δικές του σειρές και τη Σοφία Μίαρη στις δικές της.",
  },
];

/** Small caps label used above headings throughout the page. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
      {children}
    </p>
  );
}

/** The placeholder call to action, until the LearnWorlds URLs exist. */
function ComingSoonButton({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Button
      size="lg"
      variant="outline"
      disabled
      aria-disabled="true"
      className={cn(
        // 44px minimum touch target, and full opacity so the label keeps real
        // contrast instead of the default 50% disabled wash.
        "min-h-11 border-primary/30 bg-muted/40 text-foreground/80 disabled:opacity-100",
        className,
      )}
    >
      {label ? <span>{label}</span> : null}
      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
        Προσεχώς
      </span>
    </Button>
  );
}

export default function AudioMapsPage() {
  return (
    <>
      {/* 1. Hero */}
      <Section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Eyebrow>Ηχητικοί Χάρτες Οικείωσις</Eyebrow>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Αυτό που νιώθεις
              <br className="hidden sm:block" /> έχει νόημα.
            </h1>
            <p className="max-w-prose leading-relaxed text-muted-foreground">
              Οι Ηχητικοί Χάρτες φωτίζουν ερωτήματα που μέχρι τώρα έμεναν
              αναπάντητα και σε βοηθούν να χαράξεις πιο καθαρά και σταθερά
              βήματα στην πορεία.
            </p>
            <ComingSoonButton
              label="Δες τις διαθέσιμες σειρές"
              className="h-auto w-full flex-wrap gap-3 whitespace-normal py-3 sm:w-auto"
            />
          </div>

          {/* The full composition (chaos, waveform and the three points) must
              stay visible at every width, so the image scales instead of being
              cropped to a fixed frame. */}
          <div className="overflow-hidden rounded-xl border border-primary/10 shadow-lg">
            <Image
              src="/images/audio-maps-hero.png"
              alt={HERO_ALT}
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </Section>

      {/* 2. Who is behind the Audio Maps */}
      <Section className="bg-primary/5 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Ποιοι βρίσκονται πίσω από τους Ηχητικούς Χάρτες
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {authors.map((author) => (
              <Card key={author.name} className="border-primary/20 shadow-sm">
                <CardContent className="space-y-3 pt-6">
                  <Eyebrow>{author.role}</Eyebrow>
                  <h3 className="text-xl font-bold">{author.name}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {author.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. What a series can offer you */}
      <Section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">
            Τι μπορεί να σου προσφέρει μια σειρά
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            Από την επικύρωση του βιώματος, στην κατανόηση και από εκεί σε μια
            σταθερότερη πορεία.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="space-y-3">
                <Eyebrow>{benefit.label}</Eyebrow>
                <h3 className="text-lg font-bold">{benefit.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. What every series includes */}
      <Section className="bg-muted/30 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Τι περιλαμβάνει κάθε σειρά
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {included.map((item, index) => (
              <div key={item.title} className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden h-px grow bg-primary/20 md:block"
                  />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. The first thematic series */}
      <Section className="bg-primary/5 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Οι πρώτες θεματικές σειρές
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {series.map((item) => (
              <Card
                key={item.title}
                className="flex flex-col overflow-hidden border-primary/20 p-0 shadow-lg"
              >
                {/* Both source images are ~1.94:1, so a 16:9 frame crops the
                    least while keeping the two cards the same height. */}
                <div className="relative aspect-video w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex grow flex-col gap-4 p-6">
                  <div className="space-y-2">
                    <Eyebrow>{item.eyebrow}</Eyebrow>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-primary/10 pt-4">
                    <h4 className="text-sm font-semibold">
                      Η σειρά περιλαμβάνει
                    </h4>
                    <ul className="space-y-1.5">
                      {item.includes.map((line) => (
                        <li
                          key={line}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span aria-hidden="true" className="text-primary">
                            •
                          </span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="pt-1 text-sm font-semibold text-primary">
                      {item.author}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                    <span className="text-lg font-bold">{item.price}</span>
                    <ComingSoonButton />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. Who each series is for */}
      <Section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Για ποιον είναι κάθε σειρά
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience.label} className="space-y-3">
                <Eyebrow>{audience.label}</Eyebrow>
                <p className="leading-relaxed text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. What they offer — and what they do not replace */}
      <Section className="bg-muted/30 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Τι προσφέρουν — και τι δεν αντικαθιστούν
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">
                Οι Χάρτες μπορούν να βοηθήσουν
              </h3>
              <ul className="space-y-2">
                {canHelp.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden="true" className="text-primary">
                      •
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">Δεν αποτελούν</h3>
              <ul className="space-y-2">
                {isNot.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden="true" className="text-primary">
                      •
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Useful information before you start */}
      <Section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Χρήσιμες πληροφορίες πριν ξεκινήσεις
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {practicalInfo.map((info) => (
              <div key={info.question} className="space-y-3">
                <Eyebrow>{info.question}</Eyebrow>
                <p className="leading-relaxed text-muted-foreground">
                  {info.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
