"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // <-- Added Variants here
import { MessageCircle, Calendar } from "lucide-react";
import TestimonialsSlider from "@/components/TestimonialsSlider";

// Sorcerer's Animation Variants
const revealUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const staggerGrid: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const floatAnimation: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const pulseGradient: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 15, repeat: Infinity, ease: "linear" },
  },
};

export default function Home() {
  const openChat = () => {
    // Trigger chat opening via custom event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openSOSChat"));
    }
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-[#FF007F]/40 overflow-hidden font-sans">
      <Hero />

      {/* Global Ambient Orbs (Unbounded) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#B026FF] opacity-20 blur-[150px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#00FFA3] opacity-10 blur-[200px] rounded-full mix-blend-screen"
        />
      </div>

      {/* Three Ways Section - Shattered Max-Width */}
      <Section className="relative z-10 py-20 md:py-32 w-full max-w-none px-4 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealUp}
        >
          <h2
            className="mb-12 md:mb-24 text-center text-4xl md:text-[5rem] lg:text-[7rem] font-black leading-tight md:leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#00FFA3] via-[#FF007F] to-[#B026FF]"
            style={{ backgroundSize: "200% auto" }}
          >
            Πώς μπορείς να έχεις
            <br />
            στήριξη από εμάς
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGrid}
          className="grid gap-8 md:gap-12 lg:grid-cols-2 w-full"
        >
          {/* Way 1 - Glassmorphic Hologram Card */}
          <motion.div
            variants={revealUp}
            whileHover={{ scale: 1.02 }}
            className="w-full"
          >
            <Card className="h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-[0_0_50px_rgba(255,0,127,0.1)] overflow-hidden group relative flex flex-col">
              {/* Added pointer-events-none so it doesn't block button clicks */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF007F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

              <CardHeader className="p-8 md:p-14 pb-0 relative z-10">
                <CardTitle className="text-2xl md:text-5xl font-black text-white">
                  1. Γρήγορο S.O.S. μήνυμα
                </CardTitle>
              </CardHeader>

              {/* Added relative z-10 to ensure content stays above the background gradient */}
              <CardContent className="p-8 md:p-14 space-y-8 flex flex-col justify-between h-full relative z-10">
                <div className="space-y-6">
                  <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-medium">
                    Όταν νιώθεις ότι είσαι στο όριό σου και χρειάζεσαι απλώς να
                    πεις «βοήθεια» σε έναν άνθρωπο.
                  </p>
                  <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-medium">
                    Γράφεις με απλά λόγια τι σε δυσκολεύει, χωρίς να χρειάζεται
                    να βρεις τις «σωστές» λέξεις, και σου απαντώ μέσα από το
                    S.O.S. chat.
                  </p>
                </div>
                <Button
                  onClick={openChat}
                  className="w-full h-auto min-h-[5.5rem] md:min-h-[6.5rem] cursor-pointer text-xl md:text-3xl font-black rounded-[2rem] bg-gradient-to-r from-[#FF007F] to-[#B026FF] hover:opacity-90 text-white border-none shadow-[0_0_40px_rgba(255,0,127,0.4)] hover:shadow-[0_0_80px_rgba(176,38,255,0.6)] transition-all duration-500 mt-8 whitespace-normal leading-tight p-4 md:p-6 flex items-center justify-center gap-3 md:gap-4"
                >
                  <span>Γράψε ένα S.O.S. μήνυμα</span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Way 2 - Individual Session */}
          {/* Way 2 - Individual Session */}
          <motion.div
            variants={revealUp}
            whileHover={{ scale: 1.02 }}
            className="w-full mt-4 lg:mt-32"
          >
            <Card className="h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,255,163,0.1)] overflow-hidden group relative flex flex-col">
              {/* Added pointer-events-none here as well */}
              <div className="absolute inset-0 bg-gradient-to-bl from-[#00FFA3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

              <CardHeader className="p-6 sm:p-8 md:p-14 pb-0 relative z-10">
                <CardTitle className="text-3xl md:text-5xl font-black text-white">
                  2. Ατομική συνεδρία μαζί μας
                </CardTitle>
              </CardHeader>

              {/* Changed height constraints to flex-1 so it grows naturally without cutting the bottom off */}
              <CardContent className="p-6 sm:p-8 md:p-14 space-y-8 flex flex-col justify-between flex-1 relative z-10">
                <div className="space-y-6">
                  <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-medium">
                    Αν νιώθεις ότι χρειάζεσαι έναν σταθερό χώρο για να σε ακούσω
                    σε βάθος και χωρίς βιασύνη, μπορείς να κλείσεις συνεδρία
                    μαζί μου.
                  </p>
                  <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-medium">
                    Στην πρώτη συνάντηση γνωριζόμαστε, βλέπουμε τι σε δυσκολεύει
                    αυτή την περίοδο και αν ταιριάζει να συνεχίσουμε τη διαδρομή
                    μαζί.
                  </p>
                </div>

                {/* Fixed button padding, removed min-h constraints, and reduced border radius to rounded-2xl */}
                <Button
                  asChild
                  className="relative z-20 w-full h-auto py-5 md:py-6 px-4 text-lg md:text-2xl font-black rounded-2xl bg-transparent border-4 border-[#00FFA3] text-[#00FFA3] hover:bg-[#00FFA3] hover:text-black shadow-[0_0_30px_rgba(0,255,163,0.2)] hover:shadow-[0_0_60px_rgba(0,255,163,0.5)] transition-all duration-500 mt-6 md:mt-8 cursor-pointer"
                >
                  <Link
                    href="/booking"
                    className="flex flex-row items-center justify-center gap-3 md:gap-4 w-full"
                  >
                    <Calendar
                      className="w-7 h-7 md:w-10 md:h-10 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="whitespace-normal text-center leading-snug">
                      Κλείσε μια συνεδρία
                    </span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* How We Help You - Sprawling Asymmetrical Bento */}
      <Section className="relative z-10 py-24 md:py-32 w-full max-w-none px-4 md:px-12 lg:px-24 bg-black/40 backdrop-blur-md border-y border-white/5">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealUp}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-tight">
              Πώς σε
              <br />
              βοηθάμε
            </h2>
            <p className="text-xl md:text-3xl font-bold text-[#FF007F]">
              Στην Οικείωσις, δεν ξεκινάμε με το «τι κάνεις λάθος».
            </p>
            <p className="text-xl md:text-4xl font-extrabold text-[#00FFA3] leading-snug">
              Ξεκινάμε από το: «Πώς είναι να είσαι εσύ μέσα σε αυτή τη
              σύγκρουση;»
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerGrid}
            className="lg:col-span-7 grid gap-6 sm:grid-cols-2"
          >
            {[
              {
                text: "Σε βοηθάμε να μειωθεί η ένταση μέσα σου, ώστε να μπορείς να σκεφτείς πιο καθαρά.",
                color: "from-[#B026FF] to-[#FF007F]",
              },
              {
                text: "Σε στηρίζουμε να προστατεύσεις όσο γίνεται τη σχέση με τα παιδιά σου, μέσα σε διαζύγιο ή γονεϊκή αποξένωση.",
                color: "from-[#00FFA3] to-[#00B8FF]",
              },
              {
                text: "Σε καθοδηγούμε βήμα–βήμα σε δύσκολες επικοινωνίες, συζητήσεις με τον/την πρώην και κρίσιμες αποφάσεις.",
                color: "from-[#FF007F] to-[#FF8C00]",
              },
              {
                text: "Σε υποστηρίζουμε στην δημιουργία υγιών σχέσεων με τους δικούς σου ανθρώπους.",
                color: "from-[#B026FF] to-[#00FFA3]",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={revealUp} whileHover={{ y: -10 }}>
                <Card
                  className={`h-full bg-gradient-to-br ${item.color} p-1 rounded-[2.5rem] border-none shadow-2xl relative`}
                >
                  <CardContent className="h-full bg-[#050505] rounded-[2.3rem] p-6 md:p-10 flex items-center relative z-10">
                    <p className="text-lg md:text-2xl text-white font-bold leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 w-full flex justify-center"
        >
          <div className="bg-[#B026FF]/10 border border-[#B026FF]/30 backdrop-blur-2xl rounded-[2.5rem] px-6 py-6 md:px-16 md:py-8 inline-block shadow-[0_0_50px_rgba(176,38,255,0.2)] text-center w-full md:w-auto">
            <p className="text-lg md:text-3xl font-black text-white italic">
              Είναι ένας χώρος όπου δεν χρειάζεται να είσαι «δυνατός».
              <br className="hidden md:block" /> Αρκεί να είσαι ειλικρινής με
              αυτό που περνάς.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Testimonials - Unbounded Light Explosion */}
      <Section
        id="testimonials-section"
        className="relative z-10 py-24 md:py-32 w-full max-w-none px-4 md:px-12 lg:px-24"
      >
        <motion.div
          variants={floatAnimation}
          animate="animate"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-r from-[#FF007F]/20 to-[#00FFA3]/20 blur-[150px] rounded-full z-0"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealUp}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="mb-6 md:mb-8 text-4xl md:text-7xl lg:text-[6rem] font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] leading-tight">
              Εμπειρίες Καταιγίδας
            </h2>
            <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
              <p className="text-2xl md:text-4xl text-[#00FFA3] font-black italic tracking-wide">
                Διαφορετικές ιστορίες, στην ίδια θαλασσοταραχή.
              </p>
              <div className="space-y-4 md:space-y-6 text-lg md:text-2xl text-white/80 font-semibold leading-relaxed">
                <p>
                  Άνθρωποι που ένιωσαν ότι χάνουν τον προσανατολισμό τους στα
                  κύματα και αναζήτησαν έναν φάρο.
                </p>
                <p>
                  Μοιραζόμαστε τις εμπειρίες τους, με τη δική τους άδεια, για να
                  γνωρίζεις ότι δεν υπερβάλλεις και δεν χάνεις τα λογικά σου.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Slider */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealUp}
            className="rounded-[3rem] p-4 md:p-12 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_0_80px_rgba(255,0,127,0.15)]"
          >
            <TestimonialsSlider />
          </motion.div>
        </div>
      </Section>

      {/* Who We Are - Bio Overlap Grid */}
      <Section className="relative z-10 py-24 md:py-32 w-full max-w-none px-4 md:px-12 lg:px-24 bg-[#09090E] border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealUp}
          className="mb-16 md:mb-24 space-y-6 md:space-y-8 text-center"
        >
          <h2 className="text-4xl md:text-7xl lg:text-[6rem] font-black text-[#B026FF] drop-shadow-[0_0_40px_rgba(176,38,255,0.4)]">
            Ποιοι είμαστε
          </h2>
          <p className="text-xl md:text-3xl font-bold text-white">
            Είμαστε δύο ψυχολόγοι με κοινό στόχο:
          </p>
          <p className="text-2xl md:text-5xl font-black text-[#00FFA3] max-w-6xl mx-auto leading-tight">
            Να σε βοηθήσουμε να βγεις από την εξουθενωτική σύγκρουση, με σεβασμό
            σε εσένα και στα παιδιά και να δημιουργήσεις υγιείς σχέσεις.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGrid}
          className="grid md:grid-cols-2 gap-10 lg:gap-20 max-w-7xl mx-auto"
        >
          {/* Bio 1 */}
          <motion.div variants={revealUp}>
            <Card className="h-full bg-transparent border-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[3rem] overflow-hidden group flex flex-col relative transform-gpu">
              <div className="bg-[#B026FF] relative overflow-hidden flex-shrink-0 z-10 w-full m-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="p-8 md:p-10 relative z-10 flex flex-col items-start">
                  <h3 className="text-3xl md:text-5xl font-black text-white m-0">
                    Ιωάννης Γιαννόπουλος
                  </h3>
                  <span className="inline-block text-lg md:text-3xl text-black mt-4 font-extrabold bg-[#00FFA3] max-w-full px-4 py-2 rounded-2xl whitespace-normal break-words leading-snug">
                    Ψυχολόγος
                  </span>
                </div>
              </div>
              <CardContent className="p-8 md:p-10 space-y-6 text-lg md:text-2xl text-white/80 font-medium flex-1 relative z-10">
                <p>
                  Εξειδικεύεται σε σχέσεις υψηλής σύγκρουσης, διαζύγιο και
                  γονεϊκή αποξένωση.
                </p>
                <div className="h-px w-full bg-white/20" />
                <p>
                  Είναι ο εμπνευστής και δημιουργός του θεραπευτικού μοντέλου
                  «Αντίστροφη Ορμή» (Reverse Momentum Model), που σχεδιάστηκε
                  ειδικά για αυτές τις περιπτώσεις.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bio 2 */}
          <motion.div variants={revealUp}>
            <Card className="h-full bg-transparent border-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[3rem] overflow-hidden group flex flex-col relative transform-gpu">
              <div className="bg-[#FF007F] relative overflow-hidden flex-shrink-0 z-10 w-full m-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="p-8 md:p-10 relative z-10 flex flex-col items-start">
                  <h3 className="text-3xl md:text-5xl font-black text-white m-0">
                    Σοφία Μίαρη
                  </h3>
                  <span className="inline-block text-lg md:text-3xl text-black mt-4 font-extrabold bg-[#00FFA3] max-w-full px-4 py-2 rounded-2xl whitespace-normal break-words leading-snug">
                    Ψυχολόγος PhD, MSc
                  </span>
                </div>
              </div>
              <CardContent className="p-8 md:p-10 space-y-6 text-lg md:text-2xl text-white/80 font-medium flex-1 relative z-10">
                <p>
                  Εξειδικεύεται στη θεραπεία ζεύγους, οικογενειακή θεραπεία και
                  υποστήριξη νέων.
                </p>
                <div className="h-px w-full bg-white/20" />
                <p>
                  Δουλεύει με ζευγάρια και οικογένειες που θέλουν να σταματήσουν
                  την κλιμάκωση και να χτίσουν πιο ασφαλείς σχέσεις.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <p className="mt-16 md:mt-24 text-center text-xl md:text-4xl leading-relaxed text-white font-black max-w-5xl mx-auto border-t border-white/10 pt-12 md:pt-16">
          Δουλεύουμε σε συνεργασία, ώστε να καλύπτουμε όλο το φάσμα: από την
          κρίση και το διαζύγιο, μέχρι τη θεραπεία ζεύγους και τη στήριξη των
          παιδιών.
        </p>
      </Section>

      {/* Our Model - Massive Typography */}
      <Section className="relative z-10 py-24 md:py-32 w-full max-w-none px-4 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealUp}
          className="bg-[#111] rounded-[3rem] p-6 sm:p-10 md:p-24 border border-white/10 shadow-[0_0_100px_rgba(0,255,163,0.05)] relative overflow-hidden max-w-[1400px] mx-auto"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#00FFA3]/10 via-transparent to-[#FF007F]/10 pointer-events-none" />

          <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter text-white relative z-10">
            Το Μοντέλο μας <br className="hidden lg:block" />
            <span className="text-[#00FFA3]">«Αντίστροφη Ορμή»</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 text-lg md:text-2xl leading-relaxed relative z-10">
            <div className="space-y-8 md:space-y-12">
              <p className="text-white/70 font-medium text-xl md:text-3xl">
                Στις σχέσεις υψηλής σύγκρουσης, η κρίση μοιάζει σαν να σε
                σπρώχνει με δύναμη προς έναν τοίχο, δίχως να μπορείς να το
                αποφύγεις.
              </p>
              <div>
                <p className="font-black text-[#FF007F] text-2xl md:text-4xl mb-6 md:mb-8">
                  Το μοντέλο Αντίστροφης Ορμής (Reverse Momentum Model):
                </p>
                <ul className="space-y-4 md:space-y-6 text-white font-bold ml-2 md:ml-4 border-l-4 border-[#FF007F] pl-4 md:pl-6">
                  <li>δεν σε κατηγορεί για την πρόσκρουση</li>
                  <li>
                    χρησιμοποιεί τη δύναμη της κρίσης, αντί να την αγνοεί.
                  </li>
                  <li>τη μετατρέπει σε σταδιακά, πρακτικά βήματα αλλαγής.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 md:space-y-12">
              <div>
                <p className="text-white/70 font-medium text-xl md:text-3xl mb-6 md:mb-8">
                  Είναι ένα απλό, εξειδικευμένο και δοκιμασμένο μοντέλο,
                  φτιαγμένο ειδικά για:
                </p>
                <ul className="space-y-4 md:space-y-6 text-white font-bold ml-2 md:ml-4 border-l-4 border-[#00FFA3] pl-4 md:pl-6">
                  <li>σχέσεις υψηλής σύγκρουσης</li>
                  <li>διαζύγια με ένταση</li>
                  <li>γονεϊκή αποξένωση</li>
                  <li>Οικογένειες ή ζευγάρια σε σύγχυση και αποδρομή</li>
                </ul>
              </div>
              <div className="p-6 md:p-10 bg-[#FF007F] rounded-[2rem] text-black transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-[0_20px_50px_rgba(255,0,127,0.3)]">
                <p className="font-black text-xl md:text-3xl uppercase tracking-widest mb-2 md:mb-4 opacity-80">
                  Κεντρικός στόχος:
                </p>
                <p className="text-xl md:text-3xl font-bold leading-snug">
                  να νιώσεις πρώτα πιο ασφαλής και πιο σταθερός, και μετά, με
                  καθαρό μυαλό, να πάρεις τις αποφάσεις που χρειάζεται.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Extreme Final Call to Action */}
      <Section className="relative z-10 py-24 md:py-40 w-full max-w-none flex flex-col items-center justify-center border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealUp}
          className="w-full px-4 text-center flex flex-col items-center"
        >
          <Button
            size="lg"
            className="w-full max-w-[1200px] h-auto min-h-[8rem] md:h-48 rounded-[3rem] text-2xl md:text-5xl lg:text-[3rem] font-black tracking-tighter text-black border-none overflow-hidden relative group shadow-[0_0_100px_rgba(0,255,163,0.3)] p-0"
            asChild
          >
            <Link
              href="/services"
              className="flex items-center justify-center w-full h-full p-6 md:p-8 relative z-10"
            >
              <motion.div
                variants={pulseGradient}
                animate="animate"
                className="absolute inset-0 bg-gradient-to-r from-[#00FFA3] via-[#FF007F] to-[#B026FF] z-0"
                style={{ backgroundSize: "300% 300%" }}
              />
              <span className="relative z-10 text-center leading-tight whitespace-normal break-words">
                Δείτε πώς μπορούμε να σας βοηθήσουμε
              </span>
            </Link>
          </Button>
          <p className="mt-8 md:mt-12 text-lg md:text-4xl font-bold text-white/50 tracking-wide px-4">
            Υπηρεσίες για άτομα, ζευγάρια, γονείς και επαγγελματίες.
          </p>
        </motion.div>
      </Section>
    </div>
  );
}
