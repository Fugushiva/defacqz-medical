import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipNav } from "@/components/layout/SkipNav";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Toaster } from "@/components/ui/sonner";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Defacqz Medical Center 125",
    template: "%s | Defacqz Medical Center 125",
  },
  description:
    "Cabinet de neurosciences à Saint-Gilles (1060). Neurochirurgie, neurologie, neuropsychologie, psychiatrie. 4,6/5 sur Google. Prise de rendez-vous rapide.",
  robots: {
    index: false,
    follow: false,
  },
  metadataBase: new URL("https://defacqz-medical.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SchemaOrg />
        <SmoothScroll>
          <SkipNav />
          <Navbar />
          <main id="main-content" className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
          <StickyCTA />
        </SmoothScroll>
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
