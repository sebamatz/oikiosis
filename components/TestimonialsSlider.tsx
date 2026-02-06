"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonials from "@/data/testimonials.json";

interface TestimonialCardProps {
  author: string;
  content: string;
}

function TestimonialCard({ author, content }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 300;
  const shouldTruncate = content.length > maxLength;
  const displayContent = isExpanded || !shouldTruncate 
    ? content 
    : content.slice(0, maxLength) + "...";

  return (
    <div className="flex flex-col h-full min-h-[400px] p-8 md:p-10 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-2 border-primary/20 rounded-2xl shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
      {/* Decorative quote icon */}
      <div className="text-primary/30 text-6xl font-serif leading-none mb-4">"</div>
      
      <blockquote className="flex-1 text-foreground/90 leading-relaxed text-base md:text-lg mb-6 whitespace-pre-line font-light">
        {displayContent}
      </blockquote>
      
      <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-primary/10">
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-medium text-primary hover:text-primary/80 hover:translate-x-1 transition-all self-start group flex items-center gap-1"
          >
            {isExpanded ? "Δείξε λιγότερα" : "Διάβασε περισσότερα"}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        )}
        <p className="text-base font-semibold text-foreground tracking-wide">— {author}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main testimonial display */}
      <div className="relative overflow-hidden">
        <div className="transition-all duration-700 ease-in-out transform">
          <TestimonialCard
            author={currentTestimonial.author}
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
