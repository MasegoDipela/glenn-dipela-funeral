import Link from "next/link";
import DownloadProgrammeButton from "./DownloadProgrammeButton";
import ProgrammeTimeline from "./ProgrammeTimeline";
import { burial, programmeDirector } from "@/data/memorial";

export default function ProgrammeSection() {
  return (
    <section
      id="programme"
      aria-labelledby="programme-heading"
      className="relative scroll-mt-20 py-20 sm:py-28 bg-parchment/60"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Quick access card */}
        <div className="mb-14 sm:mb-20 mx-auto max-w-3xl rounded-sm border border-cocoa/15 bg-ivory shadow-soft px-6 sm:px-10 py-8 sm:py-10 text-center">
          <p className="ornament justify-center mb-5">
            <span>Order of Service</span>
          </p>
          <h2
            id="programme-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight"
          >
            Programme for the Day
          </h2>
          <p className="mt-4 text-cocoa/85 max-w-xl mx-auto">
            <span className="font-serif text-lg text-charcoal">
              {burial.date}
            </span>
            <span className="mx-3 text-gold">·</span>
            From the family home to {burial.churchVenue}.
          </p>
          <p className="mt-3 text-sm text-cocoa/80">
            Programme Director: {programmeDirector}
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <DownloadProgrammeButton variant="soft" />
          </div>
          <p className="mt-5 text-xs text-cocoa/70">
            If the download does not start, please ask a family
            representative for the printed programme.
          </p>
        </div>

        <ProgrammeTimeline />

        {/* Bottom actions */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <DownloadProgrammeButton variant="primary" />
          <a
            href="#top"
            className="text-[12px] tracking-wider2 uppercase text-cocoa hover:text-gold"
          >
            Return to Top
          </a>
        </div>
      </div>
    </section>
  );
}
