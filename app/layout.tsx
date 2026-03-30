import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Living Family Archive — Proposal | Kenctures Inc",
  description:
    "Documentary proposal for Ceola: archive-quality family narrative, Ken Williams Jr · Kenctures Inc.",
  openGraph: {
    title: "A Living Family Archive — Documentary Proposal",
    description: "Prepared by Ken Williams Jr · Kenctures Inc",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-umber focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to main content
        </a>
        <header className="border-b border-paper-dark bg-paper-dark/40">
          <div className="mx-auto flex max-w-doc flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
            <div>
              <p className="font-serif text-lg font-semibold text-ink">
                Ken Williams Jr
              </p>
              <p className="text-sm text-ink/70">Kenctures Inc · Documentary proposal</p>
            </div>
            <p className="text-right text-sm text-ink/60">March 2026</p>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-paper-dark bg-paper-dark/30 px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-doc text-center text-sm text-ink/65">
            <p>
              <a href="mailto:info@kenctures.com" className="text-umber hover:underline">
                info@kenctures.com
              </a>
              {" · "}
              <a href="tel:7083591464" className="text-umber hover:underline">
                708.359.1464
              </a>
            </p>
            <p className="mt-2">© 2026 Kenctures Inc. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
