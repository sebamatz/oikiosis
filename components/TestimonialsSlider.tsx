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
    <Link href={`/testimonials/${id}`}>
      <div className="flex flex-col justify-between h-full min-h-100 p-8 md:p-10 bg-linear-to-br from-primary/5 via-background to-accent/5 border-2 border-primary/20 rounded-2xl shadow-xl hover:shadow-2xl hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
        <div className="flex-1 flex flex-col">
          {/* Decorative quote icon */}
          <div className="text-primary/20 text-6xl font-serif leading-none mb-4 group-hover:text-primary/30 transition-colors">
            "
          </div>

          {/* Author name - prominent */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6 group-hover:text-primary transition-colors">
            {author}
          </h3>

          {/* Excerpt */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center italic mb-4 flex-1">
            {excerpt}
          </p>
        </div>

        {/* Read more link */}
        <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all pt-4 border-t border-primary/10">
          <span>Διάβασε ολόκληρη την εμπειρία</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main testimonial display */}
      <div
        className="relative overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="transition-all duration-700 ease-in-out transform">
          <TestimonialCard
            id={currentTestimonial.id}
            author={currentTestimonial.author}
            category={currentTestimonial.category}
            content={currentTestimonial.content}
          />
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between mt-8 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full h-12 w-12 border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110"
          aria-label="Προηγούμενη εμπειρία"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Dots navigation */}
        <div className="flex gap-2 overflow-x-auto px-2 py-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-10 bg-primary shadow-lg"
                  : "w-2.5 bg-primary/30 hover:bg-primary/60 hover:w-6"
              }`}
              aria-label={`Μετάβαση στην εμπειρία ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full h-12 w-12 border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110"
          aria-label="Επόμενη εμπειρία"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Counter */}
      <div className="text-center mt-6">
        <span className="inline-block px-4 py-2 bg-primary/10 rounded-full">
          <span className="text-sm font-semibold text-primary">
            {currentIndex + 1}
          </span>
          <span className="text-sm text-muted-foreground mx-1">/</span>
          <span className="text-sm text-muted-foreground">
            {testimonials.length}
          </span>
        </span>
      </div>
    </div>
  );
}
