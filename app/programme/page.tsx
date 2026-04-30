import type { Metadata } from "next";
import Link from "next/link";
import {
  programme,
  person,
  burial,
  announcement,
  closing,
  programmeDirector,
} from "@/data/memorial";
import DownloadProgrammeButton from "@/components/DownloadProgrammeButton";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Order of Service · Geremane Joshua Glenn Dipela",
  description:
    `Printable order of service for the funeral of Geremane Joshua Glenn Dipela. Burial ${burial.date}, ${burial.cemetery}.`,
  openGraph: {
    title: "Order of Service · Geremane Joshua Glenn Dipela",
    description:
      `Printable order of service for the funeral of ${person.alsoKnownAs}. Burial ${burial.date}, ${burial.cemetery}.`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order of Service · Geremane Joshua Glenn Dipela",
    description:
      `Printable order of service for the funeral of ${person.alsoKnownAs}.`,
  },
};

export default function ProgrammePage() {
  return (
    <main className="print-page bg-ivory text-charcoal min-h-screen">
      <div className="no-print border-b border-cocoa/15 bg-ivory/90 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-[12px] tracking-wider2 uppercase text-cocoa hover:text-gold"
          >
            ← Back to Memorial
          </Link>
          <div className="flex items-center gap-3">
            <PrintButton>Print</PrintButton>
            <DownloadProgrammeButton variant="soft">PDF</DownloadProgrammeButton>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16">
        <header className="text-center">
          <p className="text-[11px] tracking-wider2 uppercase text-cocoa/70">
            Order of Service
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl leading-tight">
            In Loving Memory of
            <br />
            <span className="italic">{person.fullName}</span>
          </h1>
          <p className="mt-3 font-serif text-lg text-cocoa">
            {person.sunrise} — {person.sunset}
          </p>
          <p className="mt-1 text-sm text-cocoa/80">
            Affectionately known as “{person.alsoKnownAs}”
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-relaxed text-charcoal/85">
            {announcement}
          </p>
          <p className="mt-4 text-sm text-cocoa/80">
            Programme Director: {programmeDirector}
          </p>

          <div className="mt-8 mx-auto max-w-md grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div className="text-right text-cocoa/70 uppercase tracking-wideish text-[11px]">Burial</div>
            <div className="text-left">{burial.date}</div>
            <div className="text-right text-cocoa/70 uppercase tracking-wideish text-[11px]">Home</div>
            <div className="text-left">{burial.homeVenue}</div>
            <div className="text-right text-cocoa/70 uppercase tracking-wideish text-[11px]">Service</div>
            <div className="text-left">{burial.churchVenue}</div>
            <div className="text-right text-cocoa/70 uppercase tracking-wideish text-[11px]">Cemetery</div>
            <div className="text-left">{burial.cemetery}</div>
          </div>
        </header>

        <div aria-hidden="true" className="hairline my-10 sm:my-14" />

        <ol className="space-y-10">
          {programme.map((part) => (
            <li key={part.id} className="programme-part">
              <h2 className="font-serif text-2xl sm:text-3xl">
                <span className="text-gold mr-2">{part.number}.</span>
                {part.heading}
              </h2>
              <p className="mt-1 text-[12px] tracking-wider2 uppercase text-cocoa/70">
                {part.venue}
              </p>
              <ul className="mt-5 divide-y divide-cocoa/15 border-t border-b border-cocoa/15">
                {part.items.map((item, i) => (
                  <li key={i} className="flex items-baseline gap-6 px-1 py-3">
                    {item.time ? (
                      <span className="w-32 shrink-0 font-serif text-[15px] text-gold">
                        {item.time}
                      </span>
                    ) : (
                      <span aria-hidden="true" className="w-32 shrink-0 text-cocoa/30">·</span>
                    )}
                    <span className="flex-1">
                      <span className="font-serif text-lg">{item.title}</span>
                      {item.detail ? (
                        <span className="block text-sm text-cocoa/85">
                          {item.detail}
                        </span>
                      ) : null}
                      {item.children && item.children.length > 0 ? (
                        <ul className="mt-1.5 space-y-0.5">
                          {item.children.map((child, ci) => (
                            <li
                              key={ci}
                              className="flex items-baseline gap-2 text-sm text-cocoa/85"
                            >
                              <span aria-hidden="true" className="text-gold/70">·</span>
                              <span>{child}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div aria-hidden="true" className="hairline my-12" />

        <footer className="text-center">
          <p className="font-serif text-xl sm:text-2xl">{closing.line1}</p>
          <p className="mt-2 font-serif italic text-cocoa">{closing.line2}</p>
          <p className="mt-8 text-xs text-cocoa/70 no-print">
            If the download does not start, please ask a family representative
            for the printed programme.
          </p>
          <div className="mt-8 no-print flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-charcoal text-ivory border border-charcoal px-7 py-3 text-[12px] tracking-wider2 uppercase hover:bg-cocoa transition-colors"
            >
              Back to Memorial
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
