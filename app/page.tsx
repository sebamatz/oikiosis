import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SOSButton from "@/components/SOSButton";

export default function Home() {
  return (
    <>
      <Hero />

      {/* S.O.S. Button Section */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <SOSButton 
            align="center"
            className="mb-4"
            showDescription={false}
          />
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-2">
            Δωρεάν, σύντομη κλήση 10 λεπτών με τον Ιωάννη Γιαννόπουλο.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Λέμε σε ασφαλές πλαίσιο τι συμβαίνει, βάζουμε σε τάξη το χάος και ξεκαθαρίζουμε ποιο είναι το αμέσως επόμενο βήμα.
          </p>
        </div>
      </Section>

      {/* How We Help You */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Πώς σε βοηθάμε</h2>
          <p className="mb-6 text-center text-lg leading-relaxed text-muted-foreground">
            Στην Οικείωση, δεν ξεκινάμε με το «τι κάνεις λάθος».
          </p>
          <p className="mb-8 text-center text-lg font-semibold text-foreground">
            Ξεκινάμε από το: «Πώς είναι να είσαι εσύ μέσα σε αυτή τη σύγκρουση;»
          </p>
          <div className="space-y-6">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Σε βοηθάμε να μειωθεί η ένταση μέσα σου, ώστε να μπορείς να σκεφτείς πιο καθαρά.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Σε στηρίζουμε να προστατεύσεις όσο γίνεται τη σχέση με τα παιδιά σου, μέσα σε διαζύγιο ή γονεϊκή αποξένωση.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Σε καθοδηγούμε βήμα–βήμα σε δύσκολες επικοινωνίες, συζητήσεις με τον/την πρώην και κρίσιμες αποφάσεις.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Σε υποστηρίζουμε στην δημιουργία υγιών σχέσεων με τους δικούς σου ανθρώπους.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-lg leading-relaxed text-muted-foreground">
            Είναι ένας χώρος όπου δεν χρειάζεται να είσαι «δυνατός». Αρκεί να είσαι ειλικρινής με αυτό που περνάς.
          </p>
        </div>
      </Section>

      {/* Who We Are */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Ποιοι είμαστε</h2>
          <p className="mb-8 text-center text-lg leading-relaxed text-muted-foreground">
            Είμαστε δύο ψυχολόγοι με κοινό στόχο:
          </p>
          <p className="mb-8 text-center text-lg leading-relaxed text-foreground font-semibold">
            Να σε βοηθήσουμε να βγεις από την εξουθενωτική σύγκρουση, με σεβασμό σε εσένα και στα παιδιά και να δημιουργήσεις υγιείς σχέσεις.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Ιωάννης Γιαννόπουλος, Ψυχολόγος</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Εξειδικεύεται σε σχέσεις υψηλής σύγκρουσης, διαζύγιο και γονεϊκή αποξένωση.
                </p>
                <p>
                  Είναι ο εμπνευστής και δημιουργός του θεραπευτικού μοντέλου «Αντίστροφη Ορμή» (Reverse Momentum Model), που σχεδιάστηκε ειδικά για αυτές τις περιπτώσεις.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Σοφία Μίαρη, Ψυχολόγος PhD, MSc</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Εξειδικεύεται στη θεραπεία ζεύγους, οικογενειακή θεραπεία και υποστήριξη νέων.
                </p>
                <p>
                  Δουλεύει με ζευγάρια και οικογένειες που θέλουν να σταματήσουν την κλιμάκωση και να χτίσουν πιο ασφαλείς σχέσεις.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-lg leading-relaxed text-muted-foreground">
            Δουλεύουμε σε συνεργασία, ώστε να καλύπτουμε όλο το φάσμα: από την κρίση και το διαζύγιο, μέχρι τη θεραπεία ζεύγους και τη στήριξη των παιδιών.
          </p>
        </div>
      </Section>

      {/* Our Model - Reverse Momentum */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">Το Μοντέλο μας «Αντίστροφη Ορμή»</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              Στις σχέσεις υψηλής σύγκρουσης, η κρίση μοιάζει σαν να σε σπρώχνει με δύναμη προς έναν τοίχο, δίχως να μπορείς να το αποφύγεις.
            </p>
            <p className="font-semibold text-foreground">
              Το μοντέλο Αντίστροφης Ορμής (Reverse Momentum Model):
            </p>
            <ul className="space-y-3 ml-6 list-disc text-muted-foreground">
              <li>δεν σε κατηγορεί για την πρόσκρουση</li>
              <li>χρησιμοποιεί τη δύναμη της κρίσης, αντί να την αγνοεί.</li>
              <li>τη μετατρέπει σε σταδιακά, πρακτικά βήματα αλλαγής.</li>
            </ul>
            <p className="text-muted-foreground">
              Είναι ένα απλό, εξειδικευμένο και δοκιμασμένο μοντέλο, φτιαγμένο ειδικά για:
            </p>
            <ul className="space-y-2 ml-6 list-disc text-muted-foreground">
              <li>σχέσεις υψηλής σύγκρουσης</li>
              <li>διαζύγια με ένταση</li>
              <li>γονεϊκή αποξένωση</li>
              <li>Οικογένειες ή ζευγάρια σε σύγχυση και αποδρομή</li>
            </ul>
            <div className="mt-6 p-4 bg-background rounded-lg border border-primary/20">
              <p className="font-semibold text-foreground mb-2">Κεντρικός στόχος:</p>
              <p className="text-muted-foreground">
                να νιώσεις πρώτα πιο ασφαλής και πιο σταθερός, και μετά, με καθαρό μυαλό, να πάρεις τις αποφάσεις που χρειάζεται.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Second Call to Action */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <Button 
            size="lg" 
            className="mb-3 max-w-[400px] w-full whitespace-normal overflow-hidden"
            asChild
          >
            <Link href="/services" className="break-words text-center whitespace-normal min-w-0 overflow-hidden">
              Δείτε πώς μπορούμε να σας βοηθήσουμε
            </Link>
          </Button>
          <p className="text-sm sm:text-base text-muted-foreground">
            Υπηρεσίες για άτομα, ζευγάρια, γονείς και επαγγελματίες.
          </p>
        </div>
      </Section>
    </>
  );
}
