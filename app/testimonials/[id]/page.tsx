import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonials from "@/data/testimonials.json";

export async function generateStaticParams() {
  return testimonials.map((testimonial) => ({
    id: testimonial.id,
  }));
}

export default async function TestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const currentIndex = testimonials.findIndex((t) => t.id === id);

  if (currentIndex === -1) {
    notFound();
  }

  const testimonial = testimonials[currentIndex];
  const prevTestimonial =
    currentIndex > 0 ? testimonials[currentIndex - 1] : null;
  const nextTestimonial =
    currentIndex < testimonials.length - 1
      ? testimonials[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <Link href="/#testimonials-section">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Επιστροφή στις Εμπειρίες
          </Button>
        </Link>

        {/* Testimonial content */}
        <article className="bg-linear-to-br from-primary/5 via-background to-accent/5 border-2 border-primary/20 rounded-2xl shadow-xl p-8 md:p-12">
          {/* Author header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {testimonial.author}
            </h1>
          </div>

          {/* Decorative quote */}
          <div className="text-primary/30 text-6xl font-serif leading-none mb-6">
            "
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed whitespace-pre-line font-light">
              {testimonial.content}
            </p>
          </div>
        </article>

        {/* Navigation between testimonials */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            {prevTestimonial ? (
              <Link
                href={`/testimonials/${prevTestimonial.id}`}
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full group">
                  <ChevronLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Προηγούμενη εμπειρία
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline"
                disabled
                className="w-full sm:w-auto opacity-50"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Προηγούμενη εμπειρία
              </Button>
            )}

            {nextTestimonial ? (
              <Link
                href={`/testimonials/${nextTestimonial.id}`}
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full group">
                  Επόμενη εμπειρία
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline"
                disabled
                className="w-full sm:w-auto opacity-50"
              >
                Επόμενη εμπειρία
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
