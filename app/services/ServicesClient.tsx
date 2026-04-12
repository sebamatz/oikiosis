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

export default function ServicesClient() {
  const services = [
    {
      id: "separation-counseling",
      title:
        "Πλοήγηση Κρίσης S.O.S. / Θεραπεία Διαζυγίου & Σχέσεων Υψηλής Σύγκρουση (HCD)",
      subtitle: "",
      image: "/images/compass-2.jpg",
      description: [
        "Όταν νιώθεις ότι το «σπίτι καίγεται» και όλα συμβαίνουν ταυτόχρονα – μηνύματα, δικαστήρια, συγκρούσεις – δεν έχει νόημα να κάνουμε μακροχρόνιο πλάνο.",
        "Σε αυτή τη φάση σε βοηθάω να σταθείς όρθιος, να μειώσουμε λίγο την ένταση μέσα σου και να πάρουμε μαζί τις πρώτες πρακτικές αποφάσεις για τις επόμενες ώρες και μέρες: τι να απαντήσεις, τι να αποφύγεις, πού να δώσεις προτεραιότητα.",
        "Στόχος: να μη σε παρασύρει εντελώς η καταιγίδα, πριν, κατά τη διάρκεια ή αμέσως μετά από ένα «έκρηκτικό» γεγονός.",
      ],
      hasButton: true,
      buttonText: "Γράψε ένα S.O.S. μήνυμα",
      buttonHref: "/sos-page",
    },
    {
      id: "parental-alienation",
      title: "Παρέμβαση Επανασύνδεσης (Γονεϊκή Αποξένωση – PA)",
      subtitle: "",
      image: "/images/wall.jpg",
      description: [
        "Η Γονεϊκή Αποξένωση είναι το πιο εξειδικευμένο πεδίο της δουλειάς μας.",
        "Είναι ο «τοίχος» που μπλοκάρει τη σχέση ανάμεσα σε γονιό και παιδί.",
        "Η προσέγγισή μας είναι 100% παιδοκεντρική: δεν παίρνουμε «μέρος», στεκόμαστε δίπλα στο παιδί και στον γονιό που νιώθει ότι χάνεται.",
        "Λειτουργούμε ως πλοηγοί που βοηθούν να χτιστεί μια ασφαλής «γέφυρα» επανασύνδεσης, μέσα σε σταθερό και ρεαλιστικό πλαίσιο.",
      ],
    },
    {
      id: "reach",
      title: "Ατομική Θεραπεία R.E.A.C.H. (Αναδόμηση & PTG)",
      subtitle: "",
      image: "/images/Ατομική Ψυχοθεραπεία.jpg",
      description: [
        "Δεν χρειάζεται να έχεις χωρίσει για να ζητήσεις ατομική στήριξη.",
        "Μπορεί να βρίσκεσαι σε σχέση, σε γάμο, μέσα σε έντονη σύγκρουση ή μετά από χωρισμό και να νιώθεις ότι χάνεις τον εαυτό σου.",
        "Εδώ έχεις έναν χώρο για να δουλέψουμε όσα σε δυσκολεύουν: την ένταση στις σχέσεις, τα μπλοκαρισμένα «ναι» και «όχι», την ενοχή, τον θυμό, τον φόβο.",
        "Χρησιμοποιούμε τον χάρτη 5 φάσεων (R.E.A.C.H.) για να σε βοηθήσουμε να ρυθμιστείς, να ξεμπλέξεις από το χάος, να ξανασυνδεθείς με τις αξίες σου και να χτίσεις μια πιο σταθερή καθημερινότητα.",
      ],
    },
    {
      id: "co-parenting-design",
      title: "Σχεδιασμός Συν-Γονεϊκότητας (Co-Parenting Design)",
      subtitle: "",
      image: "/images/Συνεδρίες ΣυνΓονέων.jpg",
      description: [
        "Όταν η σχέση ως ζευγάρι έχει τελειώσει, αλλά πρέπει να συνεχίσετε να είστε γονείς, συχνά υπάρχει μόνο ένταση και παρεξηγήσεις.",
        "Εδώ δεν προσπαθούμε να σας κάνουμε «φίλους». Στόχος είναι μια λειτουργική, παιδοκεντρική συνεργασία μέσα σε σχέσεις υψηλής σύγκρουσης.",
        "Μαζί σχεδιάζουμε το νέο σας «λειτουργικό σύστημα» ως συν-γονείς: πώς επικοινωνείτε, πώς παίρνετε αποφάσεις, πώς προστατεύετε τα παιδιά από το να βρεθούν στη μέση.",
      ],
    },
    {
      id: "parent-counseling",
      title: "Συμβουλευτική Γονέων (Συστημική Υποστήριξη)",
      subtitle: "",
      image: "/images/Συμβουλευτική Γονέων.jpeg",
      description: [
        "Αν νιώθεις ότι κάτι «δεν πάει καλά» στην οικογένεια, αλλά δεν έχει γίνει ακόμη έκρηξη, μπορούμε να δουλέψουμε προληπτικά.",
        "Σκοπός εδώ είναι να δυναμώσουμε τις ρίζες, πριν η ένταση γίνει καταιγίδα, είτε η οικογένεια είναι ακόμη μαζί, είτε βρίσκεται ήδη σε φάση χωρισμού.",
        "Βλέπουμε την οικογένεια ως σύστημα: εστιάζουμε στην ασφάλεια των γονιών, στην προστασία του παιδιού και στις αναπτυξιακές προκλήσεις, ώστε να υπάρχει περισσότερη ηρεμία και σύνδεση.",
      ],
    },
    // {
    //   title: "Εποπτεία & Εκπαίδευση (R.M. Professional Track)",
    //   subtitle: "",
    //   image: "/images/Εποπτεία Εκπαίδευση Επαγγελματιών.jpg",
    //   description: [
    //     "Η Υψηλή Σύγκρουση απαιτεί εξειδικευμένο χάρτη, όχι γενική θεωρία.",
    //     "Η υπηρεσία αυτή απευθύνεται σε επαγγελματίες (ψυχολόγους, νομικούς) που πλοηγούν υποθέσεις HCD* και PA*.",
    //     "Παρέχουμε δομημένη εποπτεία και εκπαίδευση στο μοντέλο R.M., μεταφέροντας τη «Μάζα» (m) – τη στρατηγική – και τα «εργαλεία πλοήγησης» που απαιτούνται για την αποτελεσματική διαχείριση των πιο απαιτητικών περιστατικών.",
    //   ],
    // },
    // {
    //   title: "Ο Κόμβος R.E.A.C.H. (Ασύγχρονη Πλοήγηση)",
    //   subtitle: "",
    //   image: "/images/το αποτέλεσμα.jpg",
    //   description: [
    //     "Κατανοούμε ότι δεν χρειάζονται όλοι ατομική θεραπεία, αλλά όλοι αξίζουν πρόσβαση στον χάρτη.",
    //     "Ο Κόμβος R.E.A.C.H. είναι η ψηφιακή, συνδρομητική μας πλατφόρμα ψυχοεκπαίδευσης.",
    //     "Για όσους θέλουν να πλοηγηθούν με τον δικό τους ρυθμό.",
    //     "Για όσους χρειάζονται πρακτικά εργαλεία (BIFF, S.A.F.E.) και την εξειδικευμένη γνώση του R.M. με πιο προσιτό τρόπο.",
    //     "Αποκτάτε πρόσβαση σε βιβλιοθήκη workshops, σε audio–video «Νευρο-Άγκυρες» και στα μηνιαία Live Q&A.",
    //   ],
    //   hasButton: true,
    //   buttonText: "ΓΙΝΕΤΕ ΜΕΛΟΣ ΣΤΟΝ ΚΟΜΒΟ",
    //   buttonHref: "/reach-hub",
    // },
  ];

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
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">Υπηρεσίες</h1>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-5xl space-y-6">
          {services.map((service, index) => (
            <div key={index} id={service.id} className="scroll-mt-16.25">
              <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow p-4 ">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <CardHeader className="p-0 md:p-4">
                      <CardTitle className="text-xl md:text-2xl">
                        {service.title}
                      </CardTitle>
                      {service.subtitle && (
                        <CardDescription className="text-lg">
                          {service.subtitle}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3 p-0 md:p-4">
                      {service.description.map((item, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {item}
                        </p>
                      ))}
                      {service.hasButton && (
                        <div className="pt-4">
                          <Button
                            size="lg"
                            className="w-full md:w-auto"
                            asChild
                          >
                            <Link href={service.buttonHref || "#"}>
                              {service.buttonText}
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}

          {/* Προσθήκη Γλωσσαρίου */}
          <div className="mt-12 text-center bg-muted/20 p-6 rounded-xl border border-primary/10 max-w-3xl mx-auto shadow-sm">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Αν θέλεις να δεις αναλυτικά τι σημαίνουν οι όροι (S.O.S.,
              R.E.A.C.H., κ.λπ.), μπορείς να δεις το γλωσσάριο του Μοντέλου μας{" "}
              <Link
                href="/glossary"
                className="font-bold text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-colors"
              >
                εδώ
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Μορφή συνεδριών</h2>
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="space-y-4 text-left">
                <p>
                  <span className="font-semibold">Διαδικτυακά:</span> Ασφαλής
                  πλατφόρμα, απόρρητο. Διάρκεια: 60 λεπτά
                </p>
                <p>
                  <span className="font-semibold">Δια ζώσης:</span> Διάρκεια: 60
                  λεπτά
                </p>
                <p>
                  <span className="font-semibold">Συχνότητα:</span> Εβδομαδιαία
                  ή κατόπιν συνεννόησης, ανάλογα με τη φάση και τον στόχο
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8">
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
            <div className="mt-6">
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

      {/* Team Signature */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-2 text-muted-foreground">Με εκτίμηση,</div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-foreground">
                Ιωάννης Γιαννόπουλος
              </p>
              <p className="text-muted-foreground">
                Ψυχολόγος | Εξειδίκευση: Διαχείριση Σχέσεων - Διαζυγίων Υψηλής
                Σύγκρουσης & Γονικής Αποξένωσης
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Σοφία Μίαρη</p>
              <p className="text-muted-foreground">
                Ψυχολόγος – Οικογενειακή – Συστημική Ψυχοθεραπεύτρια (MSc, PhD)
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
