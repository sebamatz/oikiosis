import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SOSChat from "@/components/SOSChat";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "greek"],
});

export const metadata: Metadata = {
  title:
    "Γονεϊκή Αποξένωση | Υποστήριξη σε Σχέσεις Υψηλής Σύγκρουσης | Οικείωσις",
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
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          strategy="lazyOnload"
          data-cbid="9b0d6a3b-d693-4dc6-8dbb-7bcf5de41084"
          data-blockingmode="auto"
          type="text/javascript"
        />
        {/* Google Analytics GA4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-4N9G5VR4R9`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4N9G5VR4R9');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SOSChat />
      </body>
    </html>
  );
}
