"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, ArrowDownCircle } from "lucide-react";

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

  // Sorcerer's Animation Variants
  const textReveal = {
    hidden: { opacity: 0, y: 100, rotateX: 20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const badgeReveal = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-[140px] pb-20 md:pt-[180px] lg:pt-[220px] lg:pb-32 overflow-hidden bg-[#050505] selection:bg-[#FF007F]/40 font-sans">
      {/* 1. The Abyss - Ambient Lighting & Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Film grain noise overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-20" />

        {/* Breathing Neon Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-[#B026FF] opacity-30 blur-[150px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], x: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] -left-[20%] w-[60vw] h-[60vw] bg-[#00FFA3] opacity-20 blur-[200px] rounded-full mix-blend-screen"
        />
        <div className="absolute bottom-0 right-[20%] w-[80vw] h-[40vw] bg-[#FF007F] opacity-10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* 2. The Monolith Image (Abstracted & Floating in Background) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1, rotateY: 15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-[-10%] md:right-0 top-[10%] bottom-[10%] w-full md:w-[60%] lg:w-[50%] z-0 rounded-l-[5rem] lg:rounded-l-[10rem] overflow-hidden shadow-[0_0_100px_rgba(255,0,127,0.2)] border-l border-t border-white/10 hidden sm:block"
      >
        <Image
          src="/images/lighthouse.jpeg"
          alt="Φάρος - Πρώτο Πλάνο"
          fill
          className="object-cover opacity-40 grayscale mix-blend-luminosity"
          priority
        />
        {/* Duotone neon wash over the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#B026FF]/20 to-[#00FFA3]/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
      </motion.div>

      {/* 3. The Foreground - Content Architecture */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1400px] relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl flex flex-col items-start"
        >
          {/* Main Headline - Shattered constraints */}
          <motion.h1
            variants={textReveal}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.95] tracking-tighter text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] mb-8"
          >
            Όταν η σύγκρουση γίνεται{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFA3] to-[#FF007F] animate-pulse">
              καταιγίδα,
            </span>
            <br className="hidden sm:block" /> δεν χρειάζεται να είσαι μόνος.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={textReveal}
            className="text-xl md:text-3xl font-extrabold text-[#00FFA3] mb-8 max-w-3xl leading-snug"
          >
            Η Οικείωσις είναι ένας ήρεμος, προστατευμένος χώρος για ανθρώπους
            που ζουν:
          </motion.p>

          {/* Upgraded List: Floating Neon Badges */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-3 md:gap-4 mb-12 max-w-3xl"
          >
            {[
              "Σχέσεις σε σύγχυση και αποδρομή (ζευγάρια, γονείς, οικογένειες)",
              "Διαζύγιο υψηλής σύγκρουσης, σε εξέλιξη",
              "Μακροχρόνια συγκρουσιακή σχέση διαζευγμένων",
              "Γονεϊκή αποξένωση",
            ].map((text, i) => (
              <motion.div key={i} variants={badgeReveal}>
                <div className="px-4 py-3 md:px-6 md:py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/90 font-bold text-sm md:text-lg shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-[#FF007F]/50 hover:bg-[#FF007F]/10 transition-colors duration-300">
                  {text}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* The Context Box - Glassmorphic Intensity */}
          <motion.div
            variants={textReveal}
            className="relative mb-12 max-w-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#B026FF] to-transparent opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative p-6 md:p-8 bg-black/40 backdrop-blur-2xl rounded-3xl border-l-4 border-[#B026FF] border-y border-r border-white/5 space-y-4">
              <p className="text-lg md:text-2xl font-black text-white leading-relaxed">
                Ο πόνος σου δεν είναι «υπερβολή». Είναι βάρος που κουβαλάς μόνος
                σου εδώ και καιρό.
              </p>
              <p className="text-base md:text-xl font-medium text-white/60 leading-relaxed">
                Εδώ, σε ακούμε, σε πιστεύουμε και σε βοηθάμε να πάρεις την πρώτη
                ανάσα.
              </p>
            </div>
          </motion.div>

          {/* CTA Area */}
          <motion.div
            variants={textReveal}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full sm:w-auto"
          >
            {/* Kept exactly as requested, hidden but preserved */}
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
              className="group relative inline-flex items-center justify-center gap-4 text-lg md:text-2xl font-black text-[#050505] py-4 px-8 md:px-10 rounded-full bg-[#00FFA3] hover:bg-white hover:shadow-[0_0_40px_rgba(0,255,163,0.6)] transition-all duration-500 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 transition-colors duration-300">
                Δες τις Εμπειρίες Καταιγίδας
              </span>
              <ArrowDownCircle className="relative z-10 h-6 w-6 md:h-8 md:w-8 group-hover:translate-y-1 transition-transform duration-300" />

              {/* Sweeping neon gloss on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
