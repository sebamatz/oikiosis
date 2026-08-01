import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import AudioMapCta from "@/components/AudioMapCta";
import AudioMapsViewTracker from "@/components/AudioMapsViewTracker";
import { audioMapProducts } from "@/lib/audio-maps";

const HERO_ALT =
  "Αφηρημένη ηχητική κυματομορφή που μεταβαίνει από τη σύγχυση σε τρία σταθερά σημεία.";

const SEO_DESCRIPTION =
  "Σύντομες ηχητικές ψυχοεκπαιδευτικές σειρές που σε βοηθούν να καταλάβεις καλύτερα αυτό που ζεις, να μειώσεις τις βιαστικές αντιδράσεις και να επιλέξεις ένα ασφαλέστερο επόμενο βήμα.";

export const metadata: Metadata = {
  title: "Ηχητικοί Χάρτες για Ρήξη Επαφής Γονέα–Παιδιού | Οικείωσις",
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: "/audio-maps",
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "/audio-maps",
    siteName: "Οικείωσις",
    title: "Ηχητικοί Χάρτες | Οικείωσις",
    description: SEO_DESCRIPTION,
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

const AUTHOR_ROLE = "Σύνταξη, επιστημονική επιμέλεια και αφήγηση";

const authors = [
  {
    name: "Γιάννης Γιαννόπουλος — Ψυχολόγος",
    role: AUTHOR_ROLE,
    bio: "Είναι ο δημιουργός του Reverse Momentum Model℠ και εργάζεται κυρίως με γονείς που φοβούνται ότι χάνουν τη σχέση με το παιδί τους, καθώς και με ανθρώπους που ζουν μέσα σε σχέσεις και διαζύγια υψηλής σύγκρουσης. Έχει περισσότερες από 1.500 ώρες κλινικής εμπειρίας σε αυτές τις δύσκολες συνθήκες.",
  },
  {
    name: "Σοφία Μίαρη — Ψυχολόγος",
    role: AUTHOR_ROLE,
    bio: "Είναι Οικογενειακή–Συστημική Ψυχοθεραπεύτρια και εργάζεται με ζευγάρια, γονείς και παιδιά. Γνωρίζει τις δυσκολίες που εμφανίζονται όταν δημιουργείται μια νέα οικογένεια μετά από έναν χωρισμό και όλοι προσπαθούν να βρουν ξανά τη θέση τους.",
  },
];

const benefits = [
  {
    label: "Επικύρωση",
    title: "Βάζεις σε λέξεις αυτό που νιώθεις",
    description:
      "Καταλαβαίνεις ότι ο πόνος και η σύγχυσή σου δεν είναι υπερβολή. Αυτό που ζεις σε επηρεάζει πραγματικά και αξίζει να το πάρεις στα σοβαρά.",
  },
  {
    label: "Κατανόηση",
    title: "Βλέπεις πιο καθαρά",
    description:
      "Ξεχωρίζεις αυτό που έχει πραγματικά συμβεί από αυτό που φοβάσαι ή υποθέτεις ότι σημαίνει. Βλέπεις περισσότερες από μία πιθανές εξηγήσεις, χωρίς να βιάζεσαι να αποφασίσεις ποιος φταίει.",
  },
  {
    label: "Πλοήγηση",
    title: "Σταματάς πριν βιαστείς",
    description:
      "Δημιουργείς λίγο χώρο ανάμεσα στον φόβο και στην πράξη. Έτσι μπορείς να επιλέξεις ένα μικρότερο, ασφαλέστερο βήμα που δεν θα προσθέσει νέα ένταση.",
  },
];

const included: {
  title: string;
  description: string;
  /** Optional second paragraph, rendered under the description. */
  detail?: string;
}[] = [
  {
    title: "Μία ολοκληρωμένη ηχητική σειρά",
    description:
      "Είναι ένα ξεχωριστό ψηφιακό προϊόν που ακούς στον δικό σου χώρο και χρόνο. Δεν είναι συνεδρία και δεν χρειάζεται να το ακούσεις όλο μαζί.",
  },
  {
    title: "3 Ηχητικοί Χάρτες",
    description:
      "Κάθε Χάρτης διαρκεί περίπου 20 λεπτά. Ολόκληρη η σειρά διαρκεί περίπου μία ώρα.",
  },
  {
    title: "29€ τελική τιμή με ΦΠΑ",
    description: "Ακρόαση μέσω LearnWorlds.",
    detail:
      "Μπορείς να ακούς τη σειρά από κινητό, tablet ή υπολογιστή. Η ακρόαση γίνεται online και δεν προβλέπεται λήψη των αρχείων.",
  },
];

const series = [
  {
    product: audioMapProducts.childDistancing,
    eyebrow: "Πλοήγηση στην Καταιγίδα",
    title: "Όταν το Παιδί Απομακρύνεται",
    description: [
      "Για γονείς που φοβούνται ότι χάνουν το παιδί τους. Και που φοβούνται ότι ένα μήνυμα, μια πίεση ή μια βιαστική κίνηση μπορεί να μεγαλώσει ακόμη περισσότερο την απόσταση.",
      "Η σειρά δεν σου λέει ποιος φταίει και δεν σου υπόσχεται ότι όλα θα λυθούν. Σε βοηθά να σταματήσεις, να καταλάβεις καλύτερα τι μπορεί να συμβαίνει και να επιλέξεις την πρώτη ασφαλή κίνηση.",
      "Για προβλήματα ή ρήξη επαφής γονέα-παιδιού, πιθανή Γονεϊκή Αποξένωση και διαζύγια υψηλής σύγκρουσης.",
    ],
    image: "/images/audio-maps-split-left-side.jpg",
    imageAlt:
      "Πατέρας δίπλα σε άδεια παιδική κούνια, σε σκηνή συναισθηματικής απουσίας.",
    includes: [
      "Τι συμβαίνει μέσα σου όταν νιώθεις ότι το παιδί σε απορρίπτει.",
      "Τι μπορεί να συμβαίνει στον κόσμο του παιδιού.",
      "Πώς να περάσεις από τον φόβο στην πρώτη ασφαλή πράξη.",
      "3 Ηχητικούς Χάρτες, περίπου 20 λεπτά ο καθένας.",
      "Online ακρόαση μέσω LearnWorlds.",
    ],
    author:
      "Σύνταξη, επιστημονική επιμέλεια και αφήγηση: Γιάννης Γιαννόπουλος",
    price: "29€ με ΦΠΑ",
  },
  {
    product: audioMapProducts.familyReconstitution,
    eyebrow: "Οικογένεια σε Ανασύσταση",
    title: "Νέοι Δεσμοί, Νέοι Ρόλοι, Νέος Χάρτης",
    description: [
      "Για ζευγάρια, γονείς και νέους συντρόφους που προσπαθούν να δημιουργήσουν μια νέα οικογένεια μετά από χωρισμό, διαζύγιο ή απώλεια.",
      "Όταν μια νέα οικογένεια δημιουργείται, κανείς δεν ξέρει από την αρχή ποια είναι η θέση του. Η σειρά βοηθά τα μέλη της οικογένειας να καταλάβουν καλύτερα τους νέους ρόλους, τα όρια, τους παλιούς δεσμούς και τις δυσκολίες της καθημερινότητας.",
    ],
    image: "/images/audio-maps-split-right-side.png",
    imageAlt:
      "Ενήλικες και παιδιά σε κοινό οικογενειακό χώρο, συμβολίζοντας νέους δεσμούς και ρόλους.",
    includes: [
      "Τους νέους ρόλους μέσα στην οικογένεια.",
      "Τα όρια ανάμεσα σε γονείς, παιδιά και νέους συντρόφους.",
      "Τις δυσκολίες που νιώθει ένα παιδί όταν αγαπά ανθρώπους από δύο οικογένειες.",
      "3 Ηχητικούς Χάρτες, περίπου 20 λεπτά ο καθένας.",
      "Online ακρόαση μέσω LearnWorlds.",
    ],
    author: "Σύνταξη, επιστημονική επιμέλεια και αφήγηση: Σοφία Μίαρη",
    price: "29€ με ΦΠΑ",
  },
];

const audiences = [
  {
    label: "Όταν το Παιδί Απομακρύνεται",
    description:
      "Για σένα που νιώθεις ότι το παιδί σου αλλάζει, κλείνεται, σε αποφεύγει ή σε απορρίπτει. Για σένα που φοβάσαι ότι το χάνεις και δεν ξέρεις αν πρέπει να μιλήσεις, να περιμένεις, να πιέσεις ή να κάνεις πίσω.",
  },
  {
    label: "Οικογένεια σε Ανασύσταση",
    description:
      "Για σένα που έχεις δημιουργήσει ή προσπαθείς να δημιουργήσεις μια νέα οικογένεια μετά από έναν χωρισμό. Για σένα που δυσκολεύεσαι να καταλάβεις ποιος είναι ο ρόλος σου, ποια όρια χρειάζονται και πώς μπορούν όλοι να βρουν θέση χωρίς να σβήσουν οι παλιοί δεσμοί.",
  },
];

const canHelp = [
  "βάλεις σε σειρά τις σκέψεις και τα συναισθήματά σου,",
  "καταλάβεις καλύτερα τι μπορεί να συμβαίνει,",
  "ξεχωρίσεις τα γεγονότα από τους φόβους και τις υποθέσεις,",
  "μειώσεις τις βιαστικές αντιδράσεις,",
  "επιλέξεις ένα μικρότερο και ασφαλέστερο επόμενο βήμα,",
  "επιστρέψεις σε σταθερά σημεία όταν η ένταση ανεβαίνει ξανά.",
];

const isNot = [
  "σου πουν με βεβαιότητα γιατί απομακρύνθηκε το παιδί,",
  "επιβεβαιώσουν ότι υπάρχει Γονεϊκή Αποξένωση,",
  "σου δώσουν προσωπικές οδηγίες για τη δική σου υπόθεση,",
  "αντικαταστήσουν την ψυχοθεραπεία ή την επαγγελματική αξιολόγηση,",
  "δώσουν νομικές συμβουλές,",
  "χρησιμοποιηθούν ως έκθεση ή πραγματογνωμοσύνη για δικαστήριο,",
  "προσφέρουν άμεση βοήθεια σε κατάσταση κινδύνου.",
];

const practicalInfo = [
  {
    question: "Πώς θα ακούσω;",
    answer:
      "Από κινητό, tablet ή υπολογιστή, μέσα από τον προσωπικό σου λογαριασμό στο LearnWorlds.",
  },
  {
    question: "Μπορώ να κατεβάσω τα αρχεία;",
    answer: "Όχι. Η ακρόαση γίνεται μόνο online μέσα από το LearnWorlds.",
  },
  {
    question: "Πρέπει να ακούσω και τους τρεις Χάρτες μαζί;",
    answer:
      "Όχι. Μπορείς να κάνεις παύση και να συνεχίσεις όταν αισθανθείς έτοιμος. Καλό είναι να ακούσεις τους Χάρτες με τη σειρά.",
  },
  {
    question: "Θα μου πει αν υπάρχει Γονεϊκή Αποξένωση;",
    answer:
      "Όχι. Μια ηχητική σειρά δεν μπορεί να αξιολογήσει τη δική σου οικογένεια. Μπορεί όμως να σε βοηθήσει να καταλάβεις καλύτερα τη ρήξη της επαφής και να αποφύγεις βιαστικά συμπεράσματα.",
  },
  {
    question: "Θα μου πει ακριβώς τι να κάνω;",
    answer:
      "Όχι, γιατί κάθε οικογένεια είναι διαφορετική. Θα σε βοηθήσει όμως να σταματήσεις, να σκεφτείς καθαρότερα και να επιλέξεις μια ασφαλέστερη επόμενη κίνηση.",
  },
  {
    question: "Είναι ψυχοθεραπεία;",
    answer:
      "Όχι. Δεν είναι συνεδρία και δεν δημιουργεί σχέση ψυχολόγου και θεραπευομένου.",
  },
  {
    question: "Για πόσο έχω πρόσβαση;",
    answer:
      "Η διάρκεια της πρόσβασης θα αναγράφεται καθαρά πριν από την αγορά.",
  },
  {
    question: "Ποιον θα ακούσω;",
    answer:
      "Θα ακούσεις τον δημιουργό της κάθε σειράς: τον Γιάννη Γιαννόπουλο στις δικές του σειρές και τη Σοφία Μίαρη στις δικές της.",
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

export default function AudioMapsPage() {
  return (
    <>
      <AudioMapsViewTracker />

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
              Μερικές φορές κάτι σε πονά, αλλά δεν ξέρεις πώς να το πεις. Οι
              Ηχητικοί Χάρτες σε βοηθούν να βάλεις σε σειρά όσα νιώθεις, να
              καταλάβεις τι μπορεί να συμβαίνει και να κάνεις μια παύση πριν από
              την επόμενη κίνησή σου.
            </p>
            <p className="max-w-prose leading-relaxed text-muted-foreground">
              Δεν σου δίνουν μια μαγική λύση. Σου προσφέρουν έναν πρώτο χάρτη
              μέσα στη σύγχυση.
            </p>
            <AudioMapCta
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
            Ποιοι δημιούργησαν τους Ηχητικούς Χάρτες
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
            Τι μπορεί να σου προσφέρει ένας Ηχητικός Χάρτης
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            Πρώτα βρίσκεις λέξεις για αυτό που ζεις. Μετά βλέπεις πιο καθαρά.
            Και ύστερα αποφασίζεις πιο προσεκτικά το επόμενο βήμα.
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
                {item.detail ? (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                ) : null}
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
                    {item.description.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
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
                    <AudioMapCta product={item.product} />
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
            Ποια σειρά ταιριάζει σε αυτό που ζεις;
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
            Τι μπορούν να κάνουν οι Χάρτες — και τι δεν μπορούν
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">
                Μπορούν να σε βοηθήσουν να:
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
              <h3 className="text-lg font-bold text-primary">
                Δεν μπορούν να:
              </h3>
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
          <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-muted-foreground">
            Οι Ηχητικοί Χάρτες είναι ένα πρώτο σταθερό σημείο. Δεν είναι
            ολόκληρη η διαδρομή.
          </p>
        </div>
      </Section>

      {/* 8. Useful information before you start */}
      <Section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Απλές απαντήσεις πριν ξεκινήσεις
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
