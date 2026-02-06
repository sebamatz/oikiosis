import Link from "next/link";
import { ArrowRight } from "lucide-react";
import testimonials from "@/data/testimonials.json";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Εμπειρίες Καταιγίδας
          </h1>
          <div className="space-y-5 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 italic font-light">
              Διαφορετικές ιστορίες, στην ίδια θαλασσοταραχή.
            </p>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                Άνθρωποι που ένιωσαν ότι χάνουν τον προσανατολισμό τους στα κύματα
                και αναζήτησαν έναν φάρο.
              </p>
              <p>
                Μοιραζόμαστε τις εμπειρίες τους, με τη δική τους άδεια,
                για να γνωρίζεις ότι δεν υπερβάλλεις και δεν χάνεις τα λογικά σου.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const excerpt = testimonial.content.length > 150 
              ? testimonial.content.slice(0, 150).trim() + "..." 
              : testimonial.content;
            
            return (
              <Link key={testimonial.id} href={`/testimonials/${testimonial.id}`}>
                <div className="flex flex-col justify-between h-full min-h-[320px] p-6 md:p-7 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-2 border-primary/20 rounded-2xl shadow-xl hover:shadow-2xl hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                  <div className="flex-1 flex flex-col">
                    {/* Decorative quote */}
                    <div className="text-primary/20 text-5xl font-serif leading-none mb-3 group-hover:text-primary/30 transition-colors">"</div>
                    
                    {/* Author name */}
                    <h3 className="text-lg md:text-xl font-bold text-foreground text-center mb-2 group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </h3>

                    {/* Category badge */}
                    {testimonial.category && (
                      <span className="inline-block mx-auto px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                        Κατηγορία {testimonial.category}
                      </span>
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

        {/* Footer text */}
        <p className="mt-16 text-center text-base md:text-lg leading-relaxed text-muted-foreground italic font-light">
          Ο φίλος μας, προτείνει πως και που θα μπει, εσύ αποφασίζεις.
        </p>
      </div>
    </main>
  );
}
