"use client";

import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  Clock,
  ArrowLeft,
  Loader2,
  User,
  Phone,
  Info,
} from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { format } from "date-fns";

export default function BookingClient() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  // Added state for Name and Phone
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [isLoadingTimes, setIsLoadingTimes] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state

  useEffect(() => {
    if (!date) return;

    const fetchTimes = async () => {
      setIsLoadingTimes(true);
      setSelectedTime("");

      try {
        const dateString = format(date, "yyyy-MM-dd");
        const res = await fetch(`/api/calendar/available?date=${dateString}`);
        if (res.ok) {
          const data = await res.json();
          setAvailableTimes(data.availableTimes || []);
        } else {
          console.error("Failed to fetch times");
          setAvailableTimes([]);
        }
      } catch (error) {
        console.error("Error:", error);
        setAvailableTimes([]);
      } finally {
        setIsLoadingTimes(false);
      }
    };

    fetchTimes();
  }, [date]);

  const topics = [
    { id: "parental-alienation", name: "Γονεϊκή αποξένωση" },
    { id: "divorce-high-conflict", name: "Διαζύγιο / σχέση υψηλής σύγκρουσης" },
    { id: "crisis-emotional", name: "Κρίση / συναισθηματική κατάρρευση" },
    { id: "individual-therapy", name: "Ατομική θεραπεία" },
    { id: "co-parenting", name: "Σχεδιασμός Συν-Γονεϊκότητας" },
    { id: "parent-counseling", name: "Συμβουλευτική Γονέων" },
    { id: "other", name: "Άλλο" },
  ];

  // The actual engine that talks to the server
  const handleBooking = async () => {
    if (
      !date ||
      !selectedTime ||
      !selectedTopic ||
      !name.trim() ||
      !phone.trim()
    ) {
      alert("Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία.");
      return;
    }

    setIsSubmitting(true);

    const selectedTopicName = topics.find((t) => t.id === selectedTopic)?.name;
    const backendDate = format(date, "yyyy-MM-dd");

    try {
      const res = await fetch("/api/calendar/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          date: backendDate,
          time: selectedTime,
          topicName: selectedTopicName,
        }),
      });

      if (res.ok) {
        alert("Η κράτηση ολοκληρώθηκε με επιτυχία! Το ραντεβού καταχωρήθηκε.");
        // Clear the form
        setDate(undefined);
        setSelectedTime("");
        setSelectedTopic("");
        setName("");
        setPhone("");
      } else {
        alert(
          "Υπήρξε ένα σφάλμα κατά την αποθήκευση. Παρακαλώ δοκιμάστε ξανά.",
        );
      }
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("Υπήρξε ένα σφάλμα. Παρακαλώ ελέγξτε τη σύνδεσή σας.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <div className="mb-4 text-center">
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">
              Κράτηση Συνεδρίας
            </h1>
            <p className="text-muted-foreground mb-6">
              Επιλέξτε ημερομηνία, ώρα, και θέμα για τη συνεδρία σας
            </p>
            {/* Added First Session Button Here */}
            <Button
              variant="outline"
              asChild
              className="rounded-full border-primary/20 text-primary hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <Link href="/first-session">
                Πρώτη φορά μαζί μας; Δείτε τι να περιμένετε στην πρώτη συνάντηση
              </Link>
            </Button>
          </div>

          <Card className="mt-8 border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Βρίσκεστε σε κατάσταση κρίσης;
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Αν δεν μπορείτε να περιμένετε για ραντεβού ή χρειάζεστε άμεση
                υποστήριξη, μπορείτε να στείλετε ένα S.O.S. μήνυμα.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ενεργοποιήστε το πρωτόκολλο S.O.S. (Safety - Ασφάλεια,
                Orientation - Προσανατολισμός, Stabilization - Σταθεροποίηση)
                για άμεση υποστήριξη.
              </p>
              <Button asChild variant="default" size="lg" className="w-full">
                <Link href="/sos-page">Γράψε ένα S.O.S. μήνυμα</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          {/* New Intro Block: What to expect */}
          <Card className="mb-6 border-primary/20 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Τι να περιμένεις
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Η πρώτη μας συνάντηση είναι διερευνητική και προσανατολιστική:
                ακούμε τι σε φέρνει εδώ, σου εξηγούμε πώς δουλεύουμε και
                βλέπουμε μαζί αν αυτό το πλαίσιο σου ταιριάζει. Οι συνεδρίες
                γίνονται μόνο κατόπιν ραντεβού, δια ζώσης ή διαδικτυακά, και
                διαρκούν 60 λεπτά.
              </p>
              <p className="text-muted-foreground font-medium">
                Κόστος συνεδρίας: Ατομική 50€ &middot; Ζεύγους 100€ &middot;
                Οικογένειας 150€.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Αν το οικονομικό σε προβληματίζει, πες μας ανοιχτά, δεν θέλουμε
                κανένα εμπόδιο ανάμεσα σε σένα και τη στήριξη που χρειάζεσαι.
              </p>
            </CardContent>
          </Card>

          {/* ADDED: Link to /first-session right above the form */}
          <div className="mb-6 flex justify-center">
            <Button
              variant="outline"
              asChild
              className="rounded-full border-primary/20 text-primary hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <Link href="/first-session">
                Μάθε τι να περιμένεις στην πρώτη συνάντηση
              </Link>
            </Button>
          </div>

          {/* Contact Details moved to the top */}
          <Card>
            <CardHeader>
              <CardTitle>Στοιχεία Επικοινωνίας</CardTitle>
              <CardDescription>
                Συμπληρώστε τα στοιχεία σας για να επιβεβαιώσουμε το ραντεβού
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Ονοματεπώνυμο
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="π.χ. Μαρία Παπαδοπούλου"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Τηλέφωνο
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="π.χ. 6900000000"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Topic Selection moved right below Contact Details */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Επιλογές</CardTitle>
              <CardDescription>
                Επιλέξτε το θέμα/υπηρεσία που σας απασχολεί
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {topics.map((topic) => (
                  <Button
                    key={topic.id}
                    variant={selectedTopic === topic.id ? "default" : "outline"}
                    onClick={() => setSelectedTopic(topic.id)}
                    className="h-auto flex-col py-4"
                  >
                    <span className="font-semibold">{topic.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Calendar and Time Selection moved below Topic Selection */}
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Επιλέξτε Ημερομηνία
                </CardTitle>
                <CardDescription>
                  Επιλέξτε την ημερομηνία που σας βολεύει
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return date < today;
                  }}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Time Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Επιλέξτε Ώρα
                </CardTitle>
                <CardDescription>Διαθέσιμες ώρες για συνεδρίες</CardDescription>
              </CardHeader>
              <CardContent>
                {!date ? (
                  <div className="text-center text-sm text-muted-foreground py-10">
                    Επιλέξτε πρώτα ημερομηνία.
                  </div>
                ) : isLoadingTimes ? (
                  <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin mb-2 text-primary" />
                    <p className="text-sm">Έλεγχος διαθεσιμότητας...</p>
                  </div>
                ) : availableTimes.length === 0 ? (
                  <div className="text-center text-sm text-muted-foreground py-10">
                    Δεν υπάρχουν διαθέσιμες ώρες για αυτή την ημερομηνία.
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className="w-full"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Selected Details */}
          {(date || selectedTime || selectedTopic || name || phone) && (
            <Card className="mt-6 border-primary/20 bg-muted/30">
              <CardHeader>
                <CardTitle>Σύνοψη Κράτησης</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {name && (
                  <p>
                    <span className="font-semibold">Όνομα:</span> {name}
                  </p>
                )}
                {phone && (
                  <p>
                    <span className="font-semibold">Τηλέφωνο:</span> {phone}
                  </p>
                )}
                {date && (
                  <p>
                    <span className="font-semibold">Ημερομηνία:</span>{" "}
                    {format(date, "dd/MM/yyyy")}
                  </p>
                )}
                {selectedTime && (
                  <p>
                    <span className="font-semibold">Ώρα:</span> {selectedTime}
                  </p>
                )}
                {selectedTopic && (
                  <p>
                    <span className="font-semibold">Θέμα:</span>{" "}
                    {topics.find((t) => t.id === selectedTopic)?.name}
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <Button
              size="lg"
              onClick={handleBooking}
              disabled={
                !date ||
                !selectedTime ||
                !selectedTopic ||
                !name.trim() ||
                !phone.trim() ||
                isSubmitting
              }
              className="w-full md:w-auto max-w-100 whitespace-normal overflow-hidden"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Αποθήκευση...
                </span>
              ) : (
                <span className="wrap-break-word whitespace-normal min-w-0">
                  Κάνε το πρώτο βήμα
                </span>
              )}
            </Button>
          </div>

          {/* Info */}
          <Card className="mt-6">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                Μετά την υποβολή της κράτησης, θα επικοινωνήσουμε μαζί σας για
                επιβεβαίωση μέσω τηλεφώνου ή email.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
