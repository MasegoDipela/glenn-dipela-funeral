import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dipelafamily.info"),
  title: {
    default: "In Loving Memory of Geremane Joshua Glenn Dipela",
    template: "%s · In Loving Memory of Malome Glenn",
  },
  description:
    "Funeral programme and obituary for Geremane Joshua Glenn Dipela, affectionately known as Malome Glenn. 27 July 1971 – 21 April 2026. Burial 01 May 2026, Silicon Cemetery.",
  applicationName: "In Loving Memory — Malome Glenn",
  authors: [{ name: "The Dipela Family" }],
  keywords: [
    "Geremane Joshua Glenn Dipela",
    "Malome Glenn",
    "Dipela",
    "Funeral",
    "Memorial",
    "Obituary",
    "Order of Service",
    "Seshego",
  ],
  openGraph: {
    title: "In Loving Memory of Geremane Joshua Glenn Dipela",
    description:
      "Affectionately known as Malome Glenn · 27 July 1971 – 21 April 2026. Funeral programme and obituary. Burial 01 May 2026, Silicon Cemetery.",
    type: "website",
    locale: "en_ZA",
    siteName: "In Loving Memory — Malome Glenn",
    // The OG image is generated automatically from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "In Loving Memory of Geremane Joshua Glenn Dipela",
    description:
      "Malome Glenn · 27 July 1971 – 21 April 2026. Funeral programme and obituary.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: { index: true, follow: true },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF6EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans bg-ivory text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
