import { closing, person } from "@/data/memorial";
import DownloadProgrammeButton from "./DownloadProgrammeButton";

export default function FooterTribute() {
  return (
    <section
      id="tribute"
      aria-labelledby="tribute-heading"
      className="relative scroll-mt-20 py-24 sm:py-32 bg-charcoal text-ivory"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(199,168,107,0.4) 0%, rgba(42,36,31,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <p className="ornament justify-center mb-7 text-goldsoft/90">
          <span>Final Tribute</span>
        </p>

        <h2
          id="tribute-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight"
        >
          {closing.line1}
        </h2>
        <p className="mt-5 font-serif italic text-xl sm:text-2xl text-ivory/85">
          {closing.line2}
        </p>

        <div className="mt-10 mx-auto max-w-xs">
          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-transparent via-goldsoft/60 to-transparent"
          />
        </div>

        <p className="mt-10 text-[12px] tracking-wider2 uppercase text-ivory/70">
          {person.fullName}
        </p>
        <p className="mt-1 font-serif italic text-ivory/80">
          {person.yearsRange}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <DownloadProgrammeButton variant="soft">
            Download Programme
          </DownloadProgrammeButton>
          <a
            href="#top"
            className="inline-flex items-center justify-center rounded-full border border-ivory/30 px-7 py-3 text-[12px] tracking-wider2 uppercase text-ivory hover:bg-ivory hover:text-charcoal transition-colors"
          >
            Return to Top
          </a>
        </div>

        <p className="mt-16 text-xs text-ivory/50">
          With love from the Dipela and Duba families.
        </p>
      </div>
    </section>
  );
}
