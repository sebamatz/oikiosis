import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/10 font-sans">
      {/* Neon ambient glow effect for deep atmospheric depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#B026FF]/15 via-[#FF007F]/5 to-transparent opacity-80 pointer-events-none blur-[120px] rounded-full" />

      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Brand Section (Takes up more space for impact) */}
          <div className="md:col-span-5 space-y-6 md:pr-8">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-[#00FFA3] via-[#FF007F] to-[#B026FF] bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,127,0.2)] inline-block">
              Οικείωσις
            </h3>
            <p className="text-lg font-bold text-white/60 leading-relaxed max-w-sm">
              Όταν η σύγκρουση γίνεται καταιγίδα, η Οικείωσις είναι καταφύγιο
              και πυξίδα.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-black text-[#00FFA3] uppercase tracking-widest drop-shadow-[0_0_15px_rgba(0,255,163,0.3)]">
              Πλοήγηση
            </h4>
            <nav className="flex flex-col space-y-4">
              {[
                { href: "/", label: "Αρχική" },
                { href: "/services", label: "Υπηρεσίες" },
                { href: "/about", label: "Σχετικά" },
                { href: "/contact", label: "Επικοινωνία" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center text-lg font-bold text-white/60 transition-all duration-300 hover:text-white w-fit"
                >
                  {/* Neon animated indicator dot */}
                  <span className="w-2 h-2 rounded-full bg-[#FF007F] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-0 group-hover:mr-4 shadow-[0_0_15px_rgba(255,0,127,0.8)]" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-black text-[#FF007F] uppercase tracking-widest drop-shadow-[0_0_15px_rgba(255,0,127,0.3)]">
              Επικοινωνία
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:ikoisis@ikoisis.com"
                className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-[#00FFA3]/50 hover:shadow-[0_10px_40px_rgba(0,255,163,0.15)] hover:bg-white/10"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white/40 group-hover:bg-[#00FFA3]/20 group-hover:text-[#00FFA3] transition-colors duration-500 shadow-inner">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold text-white/70 group-hover:text-white transition-colors">
                  ikoisis@ikoisis.com
                </span>
              </a>

              <a
                href="tel:+306989940588"
                className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-[#B026FF]/50 hover:shadow-[0_10px_40px_rgba(176,38,255,0.15)] hover:bg-white/10"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white/40 group-hover:bg-[#B026FF]/20 group-hover:text-[#B026FF] transition-colors duration-500 shadow-inner">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold text-white/70 group-hover:text-white transition-colors">
                  6989940588
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Sign-off Area */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          {/* Founders Block */}
          <div className="flex flex-col space-y-8 w-full lg:w-auto">
            <div className="text-xl font-black text-[#00FFA3] italic opacity-90 drop-shadow-sm">
              Με εκτίμηση,
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
              <div className="space-y-2 group">
                <p className="font-black text-xl text-white transition-colors duration-300 group-hover:text-[#00FFA3]">
                  Γιαννόπουλος Ιωάννης
                </p>
                <p className="text-base font-bold text-white/50">
                  Ψυχολόγος - Ψυχοθεραπευτής
                </p>
                <p className="text-[13px] font-black tracking-wide text-[#FF007F] pt-2 uppercase">
                  Founder, Reverse Momentum Model (RMM) Therapy
                </p>
              </div>

              <div className="space-y-2 group">
                <p className="font-black text-xl text-white transition-colors duration-300 group-hover:text-[#FF007F]">
                  Σοφία Μίαρη
                </p>
                <p className="text-base font-bold text-white/50">
                  Ψυχολόγος – Ψυχοθεραπεύτρια (MSc, PhD)
                </p>
              </div>
            </div>
          </div>

          {/* Copyright translated per your instructions */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <p className="text-sm font-black tracking-widest text-white/30 uppercase">
              © {new Date().getFullYear()} Οικείωσις. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
