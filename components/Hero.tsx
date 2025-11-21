import Image from "next/image";
import SOSButton from "@/components/SOSButton";

export default function Hero() {
  return (
    <section className="relative py-6 sm:py-8 md:py-14 lg:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left min-w-0 w-full max-w-full">
            <h1 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight break-words">
              Όταν η σύγκρουση γίνεται καταιγίδα, δεν χρειάζεται να είσαι μόνος.
            </h1>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground break-words">
              Η Οικείωσις είναι ένας ήρεμος, προστατευμένος χώρος για ανθρώπους που ζουν:
            </p>
            <ul className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground space-y-2 list-disc list-inside lg:list-outside lg:ml-6 break-words">
              <li>Σχέσεις σε σύγχυση και αποδρομή (ζευγάρια, γονείς, οικογένειες)</li>
              <li>Διαζύγιο υψηλής σύγκρουσης, σε εξέλιξη</li>
              <li>Μακροχρόνια συγκρουσιακή σχέση διαζευγμένων</li>
              <li>Γονεϊκή αποξένωση</li>
            </ul>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-foreground break-words">
              Ο πόνος σου δεν είναι «υπερβολή». Είναι βάρος που κουβαλάς μόνος σου εδώ και καιρό.
            </p>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground break-words">
              Εδώ, σε ακούμε, σε πιστεύουμε και σε βοηθάμε να πάρεις την πρώτη ανάσα.
            </p>
          </div>
          
          {/* Image */}
          <div className="relative hidden lg:block min-w-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/compass.jpg"
                alt="Φάρος - Πρώτο Πλάνο"
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

