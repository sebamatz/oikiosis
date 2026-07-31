"use client";

import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, Calendar, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

interface WaysToSupportProps {
  /** Heading shown above the three cards. */
  title: string;
  /** Extra classes for the wrapping Section (overrides the default tint/spacing). */
  className?: string;
}

export default function WaysToSupport({
  title,
  className,
}: WaysToSupportProps) {
  const openChat = () => {
    // Trigger chat opening via custom event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openSOSChat"));
    }
  };

  return (
    <Section
      className={cn("bg-primary/5 py-12 md:py-16 lg:py-20", className)}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Way 1 - S.O.S. Message */}
          <Card className="shadow-md border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">
                1. Γρήγορο S.O.S. μήνυμα
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Όταν νιώθεις ότι είσαι στο όριό σου και χρειάζεσαι απλώς να πεις
                «βοήθεια» σε έναν άνθρωπο.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Γράφεις με απλά λόγια τι σε δυσκολεύει, χωρίς να χρειάζεται να
                βρεις τις «σωστές» λέξεις, και σου απαντώ μέσα από το S.O.S.
                chat.
              </p>
              <Button onClick={openChat} className="w-full" variant="default">
                <MessageCircle className="h-4 w-4 mr-2" />
                Γράψε ένα S.O.S. μήνυμα
              </Button>
            </CardContent>
          </Card>

          {/* Way 2 - Individual Session */}
          <Card className="shadow-md border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">
                2. Πρώτη ατομική συνάντηση
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Αν νιώθεις ότι χρειάζεσαι έναν σταθερό χώρο για να σε ακούσω σε
                βάθος και χωρίς βιασύνη, μπορείς να κλείσεις συνεδρία μαζί μου.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Στην πρώτη συνάντηση γνωριζόμαστε, βλέπουμε τι σε δυσκολεύει
                αυτή την περίοδο και αν ταιριάζει να συνεχίσουμε τη διαδρομή
                μαζί.
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link href="/booking">
                  <Calendar className="h-4 w-4 mr-2" />
                  Ζήτησε μια πρώτη συνάντηση
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Way 3 - Audio Maps */}
          <Card className="shadow-md border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">3. Ηχητικοί Χάρτες</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Μια πλοήγηση στον δικό σου χώρο και χρόνο.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Σειρές ηχητικής ψυχολογικής καθοδήγησης που σε βοηθούν να
                αναγνωρίσεις αυτό που ζεις, να βρεις απαντήσεις και να χαράξεις
                πιο καθαρά και σταθερά βήματα.
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link href="/audio-maps">
                  <Headphones className="h-4 w-4 mr-2" />
                  Γνώρισε τους Ηχητικούς Χάρτες
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
