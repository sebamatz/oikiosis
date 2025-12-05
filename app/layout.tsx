import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SOSChat from "@/components/SOSChat";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "greek"],
});

export const metadata: Metadata = {
  title: "Οικείωσις | Ψυχοθεραπεία για Σχέσεις Υψηλής Σύγκρουσης",
  description:
    "Όταν η σύγκρουση γίνεται καταιγίδα, η Οικείωσις είναι καταφύγιο και πυξίδα. Εξειδικευμένη ψυχοθεραπεία για γονεϊκή αποξένωση και σχέσεις υψηλής σύγκρουσης.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SOSChat />
      </body>
    </html>
  );
}
