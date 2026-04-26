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
  metadataBase: new URL("https://malome-glenn.memorial"),
  title: "In Loving Memory of Geremane Joshua Glenn Dipela",
  description:
    "Funeral programme and obituary for Geremane Joshua Glenn Dipela, affectionately known as Malome Glenn.",
  applicationName: "In Loving Memory — Malome Glenn",
  authors: [{ name: "The Dipela Family" }],
  openGraph: {
    title: "In Loving Memory of Geremane Joshua Glenn Dipela",
    description:
      "Funeral programme and obituary for Geremane Joshua Glenn Dipela, affectionately known as Malome Glenn. 27 July 1971 – 21 April 2026.",
    type: "website",
    locale: "en_ZA",
    siteName: "In Loving Memory — Malome Glenn",
    images: [
      {
        url: "/images/malome-glenn-primary.jpg",
        width: 1200,
        height: 1200,
        alt: "Portrait of Geremane Joshua Glenn Dipela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In Loving Memory of Geremane Joshua Glenn Dipela",
    description:
      "Funeral programme and obituary for Malome Glenn. 27 July 1971 – 21 April 2026.",
    images: ["/images/malome-glenn-primary.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: true, follow: true },
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
