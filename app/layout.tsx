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
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>

        {/* Header */}
        <header className="border-b border-border">
          <div className="mx-auto flex max-w-doc flex-wrap items-center justify-between gap-3 px-6 py-5 sm:px-10">
            <div>
              <p className="font-serif text-base font-semibold tracking-wide text-foreground">
                Ken Williams Jr
              </p>
              <p className="mt-0.5 text-xs uppercase tracking-widest text-foreground-subtle">
                Kenctures Inc &mdash; Documentary Proposal
              </p>
            </div>
            <p className="text-xs uppercase tracking-widest text-foreground-subtle">
              March 2026
            </p>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="mt-20 border-t border-border px-6 py-10 sm:px-10">
          <div className="mx-auto max-w-doc flex flex-col items-center gap-3 text-center">
            <p className="font-serif text-sm text-foreground-muted">
              <a
                href="mailto:info@kenctures.com"
                className="text-accent transition-opacity hover:opacity-70"
              >
                info@kenctures.com
              </a>
              <span className="mx-3 text-border">&middot;</span>
              <a
                href="tel:7083591464"
                className="text-accent transition-opacity hover:opacity-70"
              >
                708.359.1464
              </a>
            </p>
            <p className="text-xs uppercase tracking-widest text-foreground-subtle">
              &copy; 2026 Kenctures Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

