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

export default function ServicesPage() {
  const services = [
    {
      title: "Πλοήγηση Κρίσης S.O.S. (Διαζύγιο HCD & Σχέσεις)",
      subtitle: "",
      image: "/images/compass.jpg",
      description: [
        "Όταν το «σπίτι καίγεται», δεν αναλύουμε. Παρεμβαίνουμε.",
        "Αυτή είναι η επείγουσα υπηρεσία First Responder του μοντέλου R.M.",
        "Εφαρμόζουμε άμεσα το πρωτόκολλο S.O.S.* (Ασφάλεια, Προσανατολισμός, Σταθεροποίηση) για να μειώσουμε την Ταχύτητα (v) της κρίσης, να διαχειριστούμε το χάος του HCD* και να σχεδιάσουμε την «Πυξίδα των 72 Ωρών» σας.",
        "Στόχος: άμεση Σταθεροποίηση.",
      ],
      hasButton: true,
      buttonText: "ΕΝΕΡΓΟΠΟΙΗΣΗ S.O.S. ΜΗΝΥΜΑΤΟΣ",
      buttonHref: "/sos-page",
    },
    {
      title: "Παρέμβαση Επανασύνδεσης (Γονεϊκή Αποξένωση – PA)",
      subtitle: "",
      image: "/images/wall.jpg",
      description: [
        "Η Γονεϊκή Αποξένωση (PA)* είναι ο «τοίχος» που μπλοκάρει τη σχέση.",
        "Η προσέγγισή μας είναι 100% Παιδοκεντρική (Child-Centric). Δεν παίρνουμε «μέρος».",
        "Λειτουργούμε ως Πλοηγοί που χτίζουν μια ασφαλή «γέφυρα» επανασύνδεσης, εφαρμόζοντας το δομημένο πρωτόκολλο R.E.A.C.H.* για να ξαναχτιστεί η εμπιστοσύνη σε ένα σταθερό, ρυθμισμένο περιβάλλον.",
      ],
    },
    {
      title: "Ατομική Θεραπεία R.E.A.C.H. (Αναδόμηση & PTG)",
      subtitle: "",
      image: "/images/Ατομική Ψυχοθεραπεία.jpg",
      description: [
        "Αφού η «φωτιά» (S.O.S.) σταθεροποιηθεί, ξεκινά η Αναδόμηση.",
        "Εδώ εφαρμόζουμε πλήρως τον Χάρτη 5 Φάσεων (R.E.A.C.H.).",
        "Πλοηγούμαστε μαζί σε κάθε βήμα (Ρύθμιση, Απο-σύμπλεξη, Ανασύνδεση, Συνεπίλυση) με τελικό στόχο την Αναδόμηση (Harvest).",
        "Όπως στο Kintsugi, οι ρωγμές της κρίσης γίνονται έδαφος για Μετατραυματική Ανάπτυξη (PTG).",
      ],
    },
    {
      title: "Σχεδιασμός Συν-Γονεϊκότητας (Co-Parenting Design)",
      subtitle: "",
      image: "/images/Συνεδρίες ΣυνΓονέων.jpg",
      description: [
        "Στην Υψηλή Σύγκρουση, ο στόχος δεν είναι η «φιλία», αλλά η Λειτουργική Συνεργασία.",
        "Αυτή η υπηρεσία είναι ο σχεδιασμός του νέου σας «λειτουργικού συστήματος».",
        "Σας εκπαιδεύουμε στα «εργαλεία πλοήγησης» (BIFF*, S.A.F.E.) και χτίζουμε ένα παιδοκεντρικό πλάνο που λειτουργεί με ακρίβεια, σαν γρανάζια, προστατεύοντας τα παιδιά από την τριβή.",
      ],
    },
    {
      title: "Συμβουλευτική Γονέων (Συστημική Υποστήριξη)",
      subtitle: "",
      image: "/images/Συμβουλευτική Γονέων.jpeg",
      description: [
        "Πριν η τριβή γίνει καταιγίδα.",
        "Αυτή η υπηρεσία είναι η Συστημική Υποστήριξη.",
        "Βλέπουμε την οικογένεια ως δέντρο: εστιάζουμε στις ρίζες (ασφάλεια γονέων) και στην κόμη (προστασία παιδιού), πλοηγώντας τις αναπτυξιακές προκλήσεις με ηρεμία και σύνδεση.",
      ],
    },
    {
      title: "Εποπτεία & Εκπαίδευση (R.M. Professional Track)",
      subtitle: "",
      image: "/images/Εποπτεία Εκπαίδευση Επαγγελματιών.jpg",
      description: [
        "Η Υψηλή Σύγκρουση απαιτεί εξειδικευμένο χάρτη, όχι γενική θεωρία.",
        "Η υπηρεσία αυτή απευθύνεται σε επαγγελματίες (ψυχολόγους, νομικούς) που πλοηγούν υποθέσεις HCD* και PA*.",
        "Παρέχουμε δομημένη εποπτεία και εκπαίδευση στο μοντέλο R.M., μεταφέροντας τη «Μάζα» (m) – τη στρατηγική – και τα «εργαλεία πλοήγησης» που απαιτούνται για την αποτελεσματική διαχείριση των πιο απαιτητικών περιστατικών.",
      ],
    },
    {
      title: "Ο Κόμβος R.E.A.C.H. (Ασύγχρονη Πλοήγηση)",
      subtitle: "",
      image: "/images/το αποτέλεσμα.jpg",
      description: [
        "Κατανοούμε ότι δεν χρειάζονται όλοι ατομική θεραπεία, αλλά όλοι αξίζουν πρόσβαση στον χάρτη.",
        "Ο Κόμβος R.E.A.C.H. είναι η ψηφιακή, συνδρομητική μας πλατφόρμα ψυχοεκπαίδευσης.",
        "Για όσους θέλουν να πλοηγηθούν με τον δικό τους ρυθμό.",
        "Για όσους χρειάζονται πρακτικά εργαλεία (BIFF, S.A.F.E.) και την εξειδικευμένη γνώση του R.M. με πιο προσιτό τρόπο.",
        "Αποκτάτε πρόσβαση σε βιβλιοθήκη workshops, σε audio–video «Νευρο-Άγκυρες» και στα μηνιαία Live Q&A.",
      ],
      hasButton: true,
      buttonText: "ΓΙΝΕΤΕ ΜΕΛΟΣ ΣΤΟΝ ΚΟΜΒΟ",
      buttonHref: "/reach-hub",
    },
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
            <Card
              key={index}
              className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow p-4 "
            >
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
                        <Button size="lg" className="w-full md:w-auto" asChild>
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
          ))}
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
                  πλατφόρμα, απόρρητο. Διάρκεια: 80 λεπτά
                </p>
                <p>
                  <span className="font-semibold">Δια ζώσης:</span> Διάρκεια: 80
                  λεπτά
                </p>
                <p>
                  <span className="font-semibold">Συχνότητα:</span> Εβδομαδιαία
                  ή εντατική, ανάλογα με τη φάση και τον στόχο.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8">
            <Button
              size="lg"
              className="max-w-[400px] w-full whitespace-normal overflow-hidden"
              asChild
            >
              <Link
                href="/contact"
                className="break-words text-center whitespace-normal min-w-0 overflow-hidden"
              >
                Επικοινωνήστε μαζί μας
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Glossary */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
            ΓΛΩΣΣΑΡΙΟ ΑΚΡΩΝΥΜΙΩΝ R.M.
          </h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="space-y-4 text-left">
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      S.O.S.:
                    </p>
                    <p className="text-muted-foreground">
                      Safety (Ασφάλεια), Orientation (Προσανατολισμός),
                      Stabilization (Σταθεροποίηση) – Πρωτόκολλο επείγουσας
                      παρέμβασης.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">HCD:</p>
                    <p className="text-muted-foreground">
                      High-Conflict Divorce (Διαζύγιο Υψηλής Σύγκρουσης).
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">PA:</p>
                    <p className="text-muted-foreground">
                      Parental Alienation (Γονεϊκή Αποξένωση).
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      R.E.A.C.H.:
                    </p>
                    <p className="text-muted-foreground">
                      Regulate (Ρύθμιση), Extract (Απο-σύμπλεξη), Align
                      (Ανασύνδεση), Co-resolve (Συνεπίλυση), Harvest (Αναδόμηση)
                      – Χάρτης 5 φάσεων του μοντέλου.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">BIFF:</p>
                    <p className="text-muted-foreground">
                      Brief (Σύντομο), Informative (Πληροφοριακό), Friendly
                      (Φιλικό), Firm (Σταθερό) – Εργαλείο επικοινωνίας σε HCD.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">PTG:</p>
                    <p className="text-muted-foreground">
                      Posttraumatic Growth (Μετατραυματική Ανάπτυξη).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                Γιαννόπουλος Ιωάννης
              </p>
              <p className="text-muted-foreground">
                Ψυχολόγος - Ψυχοθεραπευτής
              </p>
              <p className="text-sm text-muted-foreground">
                Founder, Reverse Momentum Model (RMM) Therapy
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Σοφία Μίαρη</p>
              <p className="text-muted-foreground">
                Ψυχολόγος – Ψυχοθεραπεύτρια (MSc, PhD)
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
