"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import testimonials from "@/data/testimonials.json";
import { Button } from "@/components/ui/button"; // Added Button import for the CTA

// Map the single-letter codes from JSON to their display names
const CATEGORY_MAP: Record<string, string> = {
  α: "Γονεϊκή Αποξένωση",
  β: "Διαζύγιο με Ένταση",
  γ: "Σχέση Ζεύγους",
  δ: "Τραύμα",
};

// Define the filter tabs
const FILTER_TABS = [
  { id: "all", label: "Όλες οι Εμπειρίες" },
  { id: "α", label: "Γονεϊκή Αποξένωση" },
  { id: "β", label: "Διαζύγιο με Ένταση" },
  { id: "γ", label: "Σχέση Ζεύγους" },
  { id: "δ", label: "Τραύμα" },
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Filter the testimonials based on the selected tab
  const filteredTestimonials = testimonials.filter((testimonial) => {
    if (activeCategory === "all") return true;

    // TypeScript-safe check: convert to array if it's a string, or use the array
    const cats = Array.isArray(testimonial.category)
      ? testimonial.category
      : typeof testimonial.category === "string"
        ? [testimonial.category]
        : [];

    return cats.includes(activeCategory);
  });

  return (
    <main className="min-h-screen py-12 md:py-20 bg-linear-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Εμπειρίες Καταιγίδας
          </h1>
          <div className="space-y-5 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 italic font-light">
              Διαφορετικές ιστορίες, στην ίδια θαλασσοταραχή.
            </p>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
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
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 border",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-muted-foreground border-primary/20 hover:border-primary/50 hover:text-primary",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">
              Δεν βρέθηκαν εμπειρίες σε αυτή την κατηγορία.
            </p>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial) => {
            const excerpt =
              testimonial.content.length > 150
                ? testimonial.content.slice(0, 150).trim() + "..."
                : testimonial.content;

            // TypeScript-safe extraction of categories for rendering
            const cats = Array.isArray(testimonial.category)
              ? testimonial.category
              : typeof testimonial.category === "string"
                ? [testimonial.category]
                : [];

            return (
              <Link
                key={testimonial.id}
                href={`/testimonials/${testimonial.id}`}
              >
                <div className="flex flex-col justify-between h-full min-h-80 p-6 md:p-7 bg-linear-to-br from-primary/5 via-background to-accent/5 border-2 border-primary/20 rounded-2xl shadow-xl hover:shadow-2xl hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                  <div className="flex-1 flex flex-col">
                    {/* Decorative quote */}
                    <div className="text-primary/20 text-5xl font-serif leading-none mb-3 group-hover:text-primary/30 transition-colors">
                      "
                    </div>

                    {/* Author name */}
                    <h3 className="text-lg md:text-xl font-bold text-foreground text-center mb-2 group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </h3>

                    {/* Category badges: Loops through the array and generates a badge for each! */}
                    {cats.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-2 mb-3">
                        {cats.map((catCode) => (
                          <span
                            key={catCode}
                            className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full text-center"
                          >
                            {CATEGORY_MAP[catCode] || `Κατηγορία ${catCode}`}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Excerpt */}
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-center italic mb-3 flex-1">
                      {excerpt}
                    </p>
                  </div>

                  {/* Read more */}
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all pt-3 border-t border-primary/10">
                    <span>Διάβασε</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 md:mt-24 text-center">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl text-foreground">
            Αν νιώθεις ότι βρίσκεσαι στην ίδια καταιγίδα, είμαστε εδώ.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => window.dispatchEvent(new Event("openSOSChat"))}
              className="w-full sm:w-auto"
            >
              Γράψε ένα S.O.S. μήνυμα
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto border-primary/20 hover:bg-primary/5 hover:text-black"
            >
              <Link href="/booking">Κλείσε μια πρώτη συνεδρία γνωριμίας</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
