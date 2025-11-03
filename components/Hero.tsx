import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Όταν η σύγκρουση γίνεται καταιγίδα, η{" "}
              <span className="text-primary">Οικίωσις</span> είναι καταφύγιο και
              πυξίδα.
            </h1>
            <p className="mb-4 text-base text-muted-foreground md:text-lg lg:text-xl">
              Για σχέσεις υψηλής σύγκρουσης & γονεϊκή αποξένωση
            </p>
            <p className="mb-6 text-sm text-muted-foreground md:text-base lg:text-lg">
              Δεν χρειάζεται να εξηγήσεις πόσο πονάς, αρκεί να έρθεις.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/booking">Κλείστε Συνεδρία</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/services">Δείτε τις Υπηρεσίες μας</Link>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80"
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

