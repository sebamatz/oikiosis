"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when the offcanvas menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { href: "/", label: "Αρχική" },
    { href: "/services", label: "Υπηρεσίες" },
    { href: "/about", label: "Σχετικά με εμάς" },
    { href: "/contact", label: "Επικοινωνία" },
    // { href: "/booking", label: "Κράτηση Συνεδρίας" },
  ];

  // Framer Motion Variants for the Pristine Offcanvas Menu
  const menuVariants = {
    closed: { opacity: 0, clipPath: "circle(0% at calc(100% - 3rem) 3rem)" },
    open: {
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 3rem) 3rem)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 40 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <>
      {/* The Pristine Floating White Header */}
      <header className="fixed top-0 inset-x-0 z-[60] w-full p-4 md:p-6 lg:pt-8 pointer-events-none flex justify-center font-sans transition-all duration-500">
        <nav className="pointer-events-auto w-full max-w-[1500px] h-20 md:h-28 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] md:rounded-[3rem] flex items-center justify-between px-6 md:px-12 lg:px-14">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-2 min-w-0 outline-none relative z-10"
          >
            <span className="text-2xl md:text-4xl font-black tracking-tighter text-[#050505] transition-opacity duration-300 group-hover:opacity-70 break-words">
              Οικείωσις
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10 lg:space-x-14">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-lg lg:text-xl font-bold tracking-tight text-[#4F5B66] transition-colors duration-300 hover:text-[#050505] group py-2 capitalize"
              >
                {item.label}
                {/* Sleek Minimalist Underline */}
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#050505] rounded-full transform origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden relative w-12 h-12 flex items-center justify-center bg-[#F9F7F3] rounded-full text-[#050505] hover:bg-gray-200 transition-all duration-300 focus:outline-none group z-50 shadow-sm"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
          </button>
        </nav>
      </header>

      {/* The Pristine Offcanvas Canvas (Mobile Navigation) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] w-full h-[100dvh] bg-white overflow-hidden font-sans"
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50">
              <button
                className="w-14 h-14 flex items-center justify-center bg-[#F9F7F3] rounded-full text-[#050505] hover:bg-black hover:text-white transition-all duration-300 focus:outline-none group shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-7 w-7 transition-transform duration-500 group-hover:rotate-90" />
              </button>
            </div>

            {/* Massive Staggered Links */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 sm:px-12 bg-white">
              <div className="flex flex-col space-y-10">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={linkVariants}
                  >
                    <Link
                      href={item.href}
                      className="block w-max text-4xl sm:text-6xl font-black tracking-tighter text-[#4F5B66] transition-all duration-500 hover:text-[#050505] hover:translate-x-4 capitalize"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Decorative Branding */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-12 left-8 sm:left-12"
              >
                <p className="text-[#050505] font-black tracking-widest uppercase text-sm opacity-40">
                  Οικείωσις &copy; {new Date().getFullYear()}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
