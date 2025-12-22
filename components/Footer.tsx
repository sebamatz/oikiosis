import Link from "next/link";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Οικείωσις</h3>
            <p className="text-sm text-muted-foreground">
              Όταν η σύγκρουση γίνεται καταιγίδα, η Οικείωσις είναι καταφύγιο
              και πυξίδα.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Πλοήγηση</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Αρχική
              </Link>
              <Link
                href="/services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Υπηρεσίες
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Σχετικά
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Επικοινωνία
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Επικοινωνία</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="tel:+306989940588"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                6989940588
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-row justify-between items-start gap-4">
          <div className="flex w-full">
            <div className="flex justify-between  items-start  gap-4 text-sm text-muted-foreground">
              <div className="flex flex-col justify-between  items-start  gap-4 text-sm text-muted-foreground flex-grow">
                <div className="mb-2">Με εκτίμηση,</div>
                <div>
                  <p>
                    <span className="font-semibold text-foreground">
                      Γιαννόπουλος Ιωάννης
                    </span>
                    <br />
                    Ψυχολόγος - Ψυχοθεραπευτής
                    <br />
                    <span className="text-sm">
                      Founder, Reverse Momentum Model (RMM) Therapy
                    </span>
                  </p>
                  <p className="pt-0 md:pt-4">
                    <span className="font-semibold text-foreground ">
                      Σοφία Μίαρη
                    </span>
                    <br />
                    Ψυχολόγος – Ψυχοθεραπεύτρια (MSc, PhD)
                  </p>
                </div>
              </div>

              <p className="flex text-xs self-end">
                © {new Date().getFullYear()} Οικείωσις. Όλα τα δικαιώματα
                διατηρούνται.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
