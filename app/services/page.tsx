import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "1. Ατομική Ψυχοθεραπεία",
      subtitle: "Ενήλικες",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop&q=80",
      description: [
        "Ρύθμιση συναισθηματικής έντασης",
        "Επαναπλαισίωση ιστορίας",
        "Δεξιότητες ορίων και επικοινωνίας",
      ],
    },
    {
      title: "2. Συνεδρίες Συν-Γονέων",
      subtitle: "Co-parenting",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&q=80",
      description: [
        "Απο-κλιμάκωση σύγκρουσης",
        "Συμφωνίες ελαχίστων κινδύνων",
        "Πρακτικά πρωτόκολλα για το παιδί",
      ],
    },
    {
      title: "3. Παρέμβαση Επανασύνδεσης Γονέα–Παιδιού",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=500&fit=crop&q=80",
      description: [
        "Σταδιακή αποκατάσταση δεσμού με ασφάλεια",
        "Προστασία από πισωγυρίσματα",
        "Συνεργασία με το οικογενειακό σύστημα",
      ],
    },
    {
      title: "4. Συμβουλευτική Διαζυγίου & Μεταβάσεων",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop&q=80",
      description: [
        "Πλοήγηση σε δικαστικές/νομικές συνθήκες",
        "Ψυχοεκπαίδευση για το παιδί",
        "Σταθεροποίηση ρουτίνας",
      ],
    },
    {
      title: "5. Εποπτεία & Εκπαίδευση Επαγγελματιών",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop&q=80",
      description: [
        "Κλινική εποπτεία",
        "Πρωτόκολλα διαχείρισης υψηλής σύγκρουσης",
        "Εργαστήρια για ομάδες",
      ],
    },
  ];

  return (
    <>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <div className="mb-6 text-center">
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">Τι προσφέρουμε</h1>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-5xl space-y-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    {service.subtitle && (
                      <CardDescription className="text-lg">{service.subtitle}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Πώς δουλεύουμε</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Αποτύπωση & Στόχευση</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Σύντομη κλινική χαρτογράφηση και καθορισμός άμεσων στόχων ασφάλειας.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Reverse Momentum Model</CardTitle>
                <CardDescription>Μοντέλο Αντίστροφης Ορμής</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Μετατρέπουμε την εσωτερική αντίσταση σε μικρά, εφαρμόσιμα βήματα προόδου.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Εστίαση στη σχέση</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Αποκατάσταση δεσμών, επαναφορά ορίων, ενίσχυση συναισθηματικής ασφάλειας.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Μετρήσιμα βήματα</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Σαφείς δείκτες βελτίωσης για διατήρηση της πορείας.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Μορφή συνεδριών</h2>
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="space-y-4 text-left">
                <p>
                  <span className="font-semibold">Διαδικτυακά:</span> Ασφαλής πλατφόρμα, απόρρητο.
                </p>
                <p>
                  <span className="font-semibold">Διάρκεια:</span> 50′ (παρεμβάσεις επανασύνδεσης: 50′–80′ ανά στάδιο).
                </p>
                <p>
                  <span className="font-semibold">Συχνότητα:</span> Εβδομαδιαία ή εντατική, ανάλογα με τη φάση και τον στόχο.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Επικοινωνήστε μαζί μας</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

