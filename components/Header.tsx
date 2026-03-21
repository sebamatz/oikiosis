"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Αρχική" },
    { href: "/services", label: "Υπηρεσίες" },
    { href: "/testimonials", label: "Εμπειρίες" },
    { href: "/about", label: "Σχετικά με εμάς" },
    { href: "/faq", label: "Συχνές Ερωτήσεις" },
    { href: "/contact", label: "Επικοινωνία" },
    // { href: "/booking", label: "Κράτηση Συνεδρίας" },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 overflow-hidden">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <span className="text-xl sm:text-2xl font-bold text-primary wrap-break-word">
              Οικείωσις
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* GLOBAL SPACER: 
          This invisible box stays in the document flow and perfectly matches 
          the height of the fixed header (h-16 = 64px), pushing all pages down automatically. */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />
    </>
  );
}
