"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { person, programmePdfPath } from "@/data/memorial";

const links = [
  { href: "/programme", label: "Programme" },
  { href: "#obituary", label: "Obituary" },
  { href: "#information", label: "Information" },
  { href: "#tribute", label: "Tribute" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "no-print fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-cocoa/10"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
      aria-label="Primary"
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="#top"
          className="font-serif text-lg sm:text-xl tracking-tightish text-charcoal"
          aria-label={`In loving memory of ${person.shortName}`}
        >
          <span className="text-gold">In Loving Memory</span>
          <span className="hidden sm:inline text-cocoa/70"> · Malome Glenn</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[13px] tracking-wideish uppercase text-cocoa">
          {links.map((l) => (
            <li key={l.href}>
              {l.href.startsWith("/") ? (
                <Link href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ) : (
                <a href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/programme"
            className="text-[13px] tracking-wideish uppercase text-charcoal hover:text-gold"
          >
            View Programme
          </Link>
          <a
            href={programmePdfPath}
            download
            className="rounded-full border border-gold/70 px-4 py-2 text-[12px] tracking-wider2 uppercase text-charcoal hover:bg-gold hover:text-ivory transition-colors"
          >
            Download PDF
          </a>
        </div>
      </nav>
    </header>
  );
}
