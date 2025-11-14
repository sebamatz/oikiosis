import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-10 md:py-14 lg:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl">
              Όταν η σύγκρουση γίνεται καταιγίδα, δεν χρειάζεται να είσαι μόνος.
            </h1>
            <p className="mb-4 text-base text-muted-foreground md:text-lg lg:text-xl">
              Η <span className="font-semibold text-foreground">Οικείωσις</span> είναι ένας ήρεμος, προστατευμένος χώρος για ανθρώπους που ζουν:
            </p>
            <ul className="mb-6 space-y-2 text-left text-base text-muted-foreground md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>σχέσεις σε υψηλή σύγκρουση</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>δύσκολο ή επώδυνο διαζύγιο</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>γονεϊκή αποξένωση</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Οικογένειες ή ζευγάρια σε σύγχυση και αποδρομή</span>
              </li>
            </ul>
            <p className="mb-4 text-base font-medium text-foreground md:text-lg lg:text-xl">
              Ο πόνος σου δεν είναι «υπερβολή». Είναι βάρος που κουβαλάς μόνος σου εδώ και καιρό.
            </p>
            <p className="mb-6 text-base text-muted-foreground md:text-lg lg:text-xl">
              Εδώ, σε ακούμε, σε πιστεύουμε και σε βοηθάμε να πάρεις την πρώτη ανάσα.
            </p>
            <div className="flex flex-col items-center lg:items-start">
              <Button 
                size="lg"
                className="mb-4 text-lg font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <Link href="/sos-page" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>10λεπτη Κλήση S.O.S. – Χρειάζομαι άμεση βοήθεια</span>
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mb-2 text-center lg:text-left">
                Δωρεάν, σύντομη κλήση 10 λεπτών με τον Ιωάννη Γιαννόπουλο.
              </p>
              <p className="text-sm text-center lg:text-left leading-relaxed">
                Μιλάμε για αυτό που περνάς, βρίσκουμε σαφήνεια και καθορίζουμε μαζί το επόμενο βήμα.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Θεραπευτική συνεδρία - Ψυχολόγος και ασθενής με χαμόγελο"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

