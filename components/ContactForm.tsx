"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    wantsResponse: false,
    noResponseNeeded: false,
    gdprAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // TODO: Implement actual form submission to backend/email service
      // For now, just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus({
        type: "success",
        message: "Το μήνυμά σας στάλθηκε επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        wantsResponse: false,
        noResponseNeeded: false,
        gdprAccepted: false,
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Παρουσιάστηκε σφάλμα. Παρακαλώ δοκιμάστε ξανά.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Φόρμα Επικοινωνίας
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          Αν επιθυμείτε να μοιραστείτε μια σκέψη, να κάνετε μια ερώτηση ή να
          εκφράσετε μια ανάγκη, μπορείτε να συμπληρώσετε τη φόρμα επικοινωνίας.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Όνομα <span className="text-xs text-muted-foreground">(προαιρετικό)</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Μπορείτε να χρησιμοποιήσετε μόνο το μικρό σας όνομα ή ψευδώνυμο"
              className="w-full"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Χρησιμοποιείται μόνο για την απάντηση"
              required
              className="w-full"
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">
              Θέμα Επικοινωνίας <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.subject}
              onValueChange={(value) =>
                setFormData({ ...formData, subject: value })
              }
              required
            >
              <SelectTrigger id="subject" className="w-full">
                <SelectValue placeholder="Επιλέξτε θέμα" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="question">Ερώτηση</SelectItem>
                <SelectItem value="concern">Προβληματισμός</SelectItem>
                <SelectItem value="update">Ενημέρωση</SelectItem>
                <SelectItem value="appointment">Κλείσιμο Ραντεβού</SelectItem>
                <SelectItem value="other">Άλλο</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Μήνυμα <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Γράψτε όσο νιώθετε. Δεν υπάρχει σωστό ή λάθος."
              required
              rows={6}
              className="w-full resize-y"
            />
          </div>

          {/* Contact Preference Checkboxes */}
          <div className="space-y-4 rounded-lg border border-primary/20 bg-muted/30 p-5">
            <Label className="text-sm font-semibold mb-2">
              Επιλογή Επικοινωνίας
            </Label>
            <div className="flex items-center gap-3 mt-2">
              <Checkbox
                id="wantsResponse"
                checked={formData.wantsResponse}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    wantsResponse: checked as boolean,
                    noResponseNeeded: false,
                  })
                }
                className="mt-0.5"
              />
              <Label
                htmlFor="wantsResponse"
                className="cursor-pointer text-sm font-normal leading-relaxed"
              >
                Επιθυμώ να επικοινωνήσετε μαζί μου
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="noResponseNeeded"
                checked={formData.noResponseNeeded}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    noResponseNeeded: checked as boolean,
                    wantsResponse: false,
                  })
                }
                className="mt-0.5"
              />
              <Label
                htmlFor="noResponseNeeded"
                className="cursor-pointer text-sm font-normal leading-relaxed"
              >
                Προς το παρόν, δεν ζητώ απάντηση
              </Label>
            </div>
          </div>

          {/* GDPR Checkbox */}
          <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-muted/30 p-4">
            <Checkbox
              id="gdpr"
              checked={formData.gdprAccepted}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, gdprAccepted: checked as boolean })
              }
              required
              className="mt-0.5"
            />
            <Label
              htmlFor="gdpr"
              className="cursor-pointer text-sm font-normal leading-relaxed"
            >
              Αποδέχομαι την πολιτική απορρήτου της σελίδας{" "}
              <span className="text-destructive">*</span>
            </Label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              className="w-full py-6 text-base font-medium"
              disabled={
                isSubmitting ||
                !formData.email ||
                !formData.subject ||
                !formData.message ||
                !formData.gdprAccepted
              }
            >
              {isSubmitting ? (
                <>Αποστολή...</>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Αποστολή Μηνύματος
                </>
              )}
            </Button>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`rounded-lg p-4 text-sm font-medium ${submitStatus.type === "success"
                ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
