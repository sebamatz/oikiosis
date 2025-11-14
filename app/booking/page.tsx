"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { format } from "date-fns";

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedPsychologist, setSelectedPsychologist] = useState<string>("");

  const availableTimes = [
    "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const psychologists = [
    { id: "ioannis", name: "Γιαννόπουλος Ιωάννης", phone: "+30 694 730 2694" },
    { id: "sofia", name: "Σοφία Μίαρη", phone: "+30 698 994 0588" }
  ];

  const handleBooking = () => {
    if (!date || !selectedTime || !selectedPsychologist) {
      alert("Παρακαλώ επιλέξτε ημερομηνία, ώρα και ψυχολόγο.");
      return;
    }

    const selectedPsych = psychologists.find(p => p.id === selectedPsychologist);
    const formattedDate = format(date, "dd/MM/yyyy");
    
    // In a real application, this would send the booking to a backend
    alert(`Κράτηση συνεδρίας:\n\nΨυχολόγος: ${selectedPsych?.name}\nΗμερομηνία: ${formattedDate}\nΏρα: ${selectedTime}\n\nΘα επικοινωνήσουμε μαζί σας για επιβεβαίωση.`);
  };

  return (
    <>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στην Αρχική
          </Link>
          <div className="mb-4 text-center">
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">Κράτηση Συνεδρίας</h1>
            <p className="text-muted-foreground">Επιλέξτε ημερομηνία, ώρα και ψυχολόγο για τη συνεδρία σας</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Επιλέξτε Ημερομηνία
                </CardTitle>
                <CardDescription>Επιλέξτε την ημερομηνία που σας βολεύει</CardDescription>
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
              </CardContent>
            </Card>
          </div>

          {/* Psychologist Selection */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Επιλέξτε Ψυχολόγο</CardTitle>
              <CardDescription>Επιλέξτε τον ψυχολόγο με τον οποίο θέλετε να κλείσετε συνεδρία</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {psychologists.map((psych) => (
                  <Button
                    key={psych.id}
                    variant={selectedPsychologist === psych.id ? "default" : "outline"}
                    onClick={() => setSelectedPsychologist(psych.id)}
                    className="h-auto flex-col py-4"
                  >
                    <span className="font-semibold">{psych.name}</span>
                    <span className="text-xs text-muted-foreground mt-1">{psych.phone}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Selected Details */}
          {(date || selectedTime || selectedPsychologist) && (
            <Card className="mt-6 border-primary/20 bg-muted/30">
              <CardHeader>
                <CardTitle>Σύνοψη Κράτησης</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {date && (
                  <p>
                    <span className="font-semibold">Ημερομηνία:</span> {format(date, "dd/MM/yyyy")}
                  </p>
                )}
                {selectedTime && (
                  <p>
                    <span className="font-semibold">Ώρα:</span> {selectedTime}
                  </p>
                )}
                {selectedPsychologist && (
                  <p>
                    <span className="font-semibold">Ψυχολόγος:</span> {psychologists.find(p => p.id === selectedPsychologist)?.name}
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
              disabled={!date || !selectedTime || !selectedPsychologist}
              className="w-full md:w-auto"
            >
              Κλείστε Συνεδρία
            </Button>
          </div>

          {/* Info */}
          <Card className="mt-6">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                Μετά την υποβολή της κράτησης, θα επικοινωνήσουμε μαζί σας για επιβεβαίωση μέσω τηλεφώνου ή email.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

