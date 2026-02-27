"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import testimonials from "@/data/testimonials.json";

interface TestimonialCardProps {
  id: string;
  author: string;
  category: string;
  content: string;
}

function TestimonialCard({
  id,
  author,
  category,
  content,
}: TestimonialCardProps) {
  // Get first 180 characters as excerpt
  const excerpt =
    content.length > 180 ? content.slice(0, 180).trim() + "..." : content;

  return (
    <Link href={`/testimonials/${id}`} className="block outline-none group">
      <div className="relative overflow-hidden flex flex-col justify-between h-full min-h-[420px] p-8 md:p-14 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(176,38,255,0.2)] hover:border-[#B026FF]/50 transition-all duration-500">
        {/* Massive Watermark Quote */}
        <div className="absolute top-4 -left-2 text-[200px] font-serif leading-none text-[#FF007F] opacity-[0.05] group-hover:opacity-[0.1] group-hover:-translate-y-4 group-hover:rotate-[-5deg] transition-all duration-700 pointer-events-none select-none">
          "
        </div>

        <div className="flex-1 flex flex-col relative z-10">
          {/* Decorative quote icon - Upgraded to an elegant accent */}
          <div className="text-[#00FFA3]/40 text-7xl font-serif leading-none mb-2 group-hover:text-[#00FFA3] group-hover:-translate-y-2 transition-all duration-500">
            "
          </div>

          {/* Author name - prominent */}
          <h3 className="text-2xl md:text-4xl font-black text-white mb-6 group-hover:text-[#00FFA3] transition-colors duration-300">
            {author}
          </h3>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium italic mb-4 flex-1">
            {excerpt}
          </p>
        </div>

        {/* Read more link */}
        <div className="flex items-center justify-between gap-4 text-[#B026FF] font-extrabold group-hover:text-[#00FFA3] transition-all duration-300 pt-6 border-t border-white/10">
          <span className="text-[14px] uppercase tracking-widest">
            Διάβασε ολόκληρη την εμπειρία
          </span>
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00FFA3] group-hover:text-black group-hover:translate-x-2 group-hover:shadow-[0_0_30px_rgba(0,255,163,0.5)] transition-all duration-300 shrink-0">
            <ArrowRight className="h-6 w-6" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto font-sans">
      {/* Main testimonial display */}
      <div
        className="relative overflow-hidden touch-pan-y py-6 px-2 sm:px-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform w-full">
          <TestimonialCard
            id={currentTestimonial.id}
            author={currentTestimonial.author}
            category={currentTestimonial.category}
            content={currentTestimonial.content}
          />
        </div>
      </div>

      {/* High-End Navigation Control Deck */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-6 lg:gap-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full h-14 w-14 bg-transparent border-2 border-white/20 text-white hover:bg-[#00FFA3] hover:border-[#00FFA3] hover:text-black hover:shadow-[0_0_40px_rgba(0,255,163,0.5)] hover:-translate-y-1 transition-all duration-300 shrink-0"
          aria-label="Προηγούμενη εμπειρία"
        >
          <ChevronLeft className="h-7 w-7" />
        </Button>

        {/* Floating Glass Dots */}
        <div className="flex items-center gap-3 overflow-x-auto px-6 py-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-inner no-scrollbar max-w-full">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ease-out focus:outline-none ${
                index === currentIndex
                  ? "w-12 bg-[#00FFA3] shadow-[0_0_20px_rgba(0,255,163,0.8)]"
                  : "w-2.5 bg-white/20 hover:bg-[#B026FF] hover:w-6 hover:shadow-[0_0_15px_rgba(176,38,255,0.6)]"
              }`}
              aria-label={`Μετάβαση στην εμπειρία ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full h-14 w-14 bg-transparent border-2 border-white/20 text-white hover:bg-[#00FFA3] hover:border-[#00FFA3] hover:text-black hover:shadow-[0_0_40px_rgba(0,255,163,0.5)] hover:-translate-y-1 transition-all duration-300 shrink-0"
          aria-label="Επόμενη εμπειρία"
        >
          <ChevronRight className="h-7 w-7" />
        </Button>
      </div>

      {/* Minimalist Premium Counter */}
      <div className="text-center mt-8">
        <span className="inline-flex items-center justify-center px-6 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-sm">
          <span className="text-base font-black text-white">
            {currentIndex + 1}
          </span>
          <span className="text-sm font-bold text-white/30 mx-2">/</span>
          <span className="text-base font-bold text-white/60">
            {testimonials.length}
          </span>
        </span>
      </div>
    </div>
  );
}
