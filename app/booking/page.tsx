"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { format } from "date-fns";

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedPsychologist, setSelectedPsychologist] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const psychologists = [
    { id: "ioannis", name: "Γιαννόπουλος Ιωάννης", phone: "+30 694 730 2694" },
    { id: "sofia", name: "Σοφία Μίαρη", phone: "+30 698 994 0588" },
  ];

  const topics = [
    { id: "parental-alienation", name: "Γονεϊκή αποξένωση" },
    { id: "divorce-high-conflict", name: "Διαζύγιο / σχέση υψηλής σύγκρουσης" },
    { id: "crisis-emotional", name: "Κρίση / συναισθηματική κατάρρευση" },
    { id: "individual-therapy", name: "Ατομική θεραπεία" },
    { id: "co-parenting", name: "Σχεδιασμός Συν-Γονεϊκότητας" },
    { id: "parent-counseling", name: "Συμβουλευτική Γονέων" },
    { id: "other", name: "Άλλο" },
  ];

  const handleBooking = () => {
    if (!date || !selectedTime || !selectedPsychologist || !selectedTopic) {
      alert("Παρακαλώ επιλέξτε ημερομηνία, ώρα, ψυχολόγο και θέμα.");
      return;
    }

    const selectedPsych = psychologists.find(
      (p) => p.id === selectedPsychologist
    );
    const selectedTopicName = topics.find((t) => t.id === selectedTopic)?.name;
    const formattedDate = format(date, "dd/MM/yyyy");

    // In a real application, this would send the booking to a backend
    alert(
      `Κράτηση συνεδρίας:\n\nΨυχολόγος: ${selectedPsych?.name}\nΘέμα: ${selectedTopicName}\nΗμερομηνία: ${formattedDate}\nΏρα: ${selectedTime}\n\nΘα επικοινωνήσουμε μαζί σας για επιβεβαίωση.`
    );
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
            <p className="text-muted-foreground">
              Επιλέξτε ημερομηνία, ώρα, ψυχολόγο και θέμα για τη συνεδρία σας
            </p>
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
          {/* Topic Selection */}
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

          {/* Selected Details */}
          {(date || selectedTime || selectedTopic) && (
            <Card className="mt-6 border-primary/20 bg-muted/30">
              <CardHeader>
                <CardTitle>Σύνοψη Κράτησης</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
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
                {selectedPsychologist && (
                  <p>
                    <span className="font-semibold">Ψυχολόγος:</span>{" "}
                    {
                      psychologists.find((p) => p.id === selectedPsychologist)
                        ?.name
                    }
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
                !selectedPsychologist ||
                !selectedTopic
              }
              className="w-full md:w-auto max-w-[400px] whitespace-normal overflow-hidden"
            >
              <span className="break-words whitespace-normal min-w-0">
                Κλείστε Συνεδρία
              </span>
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
