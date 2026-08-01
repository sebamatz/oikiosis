"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  const openChat = () => {
    // Trigger chat opening via custom event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openSOSChat"));
    }
  };

  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById("testimonials-section");
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
            <h1 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight wrap-break-word">
              Όταν η σύγκρουση γίνεται καταιγίδα, δεν χρειάζεται να είσαι μόνος.
            </h1>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground wrap-break-word">
              Η Οικείωσις είναι ένας ήρεμος, προστατευμένος χώρος για ανθρώπους
              που ζουν:
            </p>
            <ul className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground space-y-2 list-disc list-inside lg:list-outside lg:ml-6 wrap-break-word">
              <li>
                Σχέσεις σε σύγχυση και αποδρομή (ζευγάρια, γονείς, οικογένειες)
              </li>
              <li>Διαζύγιο υψηλής σύγκρουσης, σε εξέλιξη</li>
              <li>Μακροχρόνια συγκρουσιακή σχέση διαζευγμένων</li>
              <li>Γονεϊκή αποξένωση</li>
              <li>
                Ανασύσταση οικογένειας: νέοι σύντροφοι, παιδιά, ρόλοι και όρια
              </li>
            </ul>
            <p className="mb-4 text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
              Ιδιαίτερα στη Γονεϊκή Αποξένωση, που είναι το πιο εξειδικευμένο
              πεδίο της δουλειάς μας, στεκόμαστε δίπλα σε γονείς που νιώθουν ότι
              χάνουν το παιδί τους ενώ είναι ακόμη εδώ.
            </p>
            <p className="mb-4 text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
              Παράλληλα, υποστηρίζουμε ζευγάρια και γονείς που προσπαθούν να
              δημιουργήσουν μια νέα οικογένεια μετά τον χωρισμό, χωρίς να
              διαγραφούν οι προηγούμενοι δεσμοί και χωρίς κανείς να χρειαστεί να
              χάσει τη θέση του για να βρει θέση ο άλλος.
            </p>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-foreground wrap-break-word">
              Ο πόνος σου δεν είναι «υπερβολή». Είναι βάρος που κουβαλάς μόνος
              σου εδώ και καιρό.
            </p>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground wrap-break-word">
              Εδώ, σε ακούμε, σε πιστεύουμε και σε βοηθάμε να πάρεις την πρώτη
              ανάσα.
            </p>

            {/* CTA Buttons - visible on desktop and mobile before image */}
            <div className="flex flex-col items-center lg:items-start gap-4 mt-6">
              {/* <Button 
                onClick={openChat} 
                className="w-full lg:w-auto min-w-[280px]"
                size="lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Γράψε ένα S.O.S. μήνυμα
              </Button> */}

              <button
                onClick={scrollToTestimonials}
                className="group relative text-base font-medium text-primary hover:text-primary/80 transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative">
                  Δες τις Εμπειρίες Καταιγίδας
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </span>
                <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>

                {/* Subtle glow effect on hover */}
                <span className="absolute -inset-2 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-w-0 mt-8 lg:mt-0">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/lighthouse.jpeg"
                alt="Φάρος - Πρώτο Πλάνο"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
