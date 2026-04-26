import Link from "next/link";
import { person, heroSubtitle, announcement } from "@/data/memorial";
import DownloadProgrammeButton from "./DownloadProgrammeButton";
import PortraitImage from "./PortraitImage";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Memorial introduction"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-28"
    >
      {/* Soft background wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(199,168,107,0.12) 0%, rgba(250,246,239,0) 60%), linear-gradient(180deg, #FAF6EF 0%, #F3ECDF 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(199,168,107,0.35), rgba(250,246,239,0))",
                }}
              />
              <div className="portrait-fade aspect-[4/5] relative rounded-sm overflow-hidden">
                {/*
                  Place the actual portrait at:
                  public/images/malome-glenn-primary.jpg
                  Until then a tasteful placeholder is shown.
                */}
                <PortraitImage
                  src="/images/malome-glenn-primary.jpg"
                  fallback="/images/placeholder.svg"
                  alt={`Portrait of ${person.fullName}`}
                  priority
                  sizes="(min-width: 1024px) 36vw, 80vw"
                />
              </div>
              <p className="mt-6 text-center text-[11px] tracking-wider2 uppercase text-cocoa/70">
                {person.yearsRange}
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left animate-fade-up">
            <p className="ornament justify-center lg:justify-start mb-8">
              <span>In Loving Memory of</span>
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tightish text-charcoal">
              Geremane Joshua
              <br className="hidden sm:block" />{" "}
              <span className="italic text-cocoa">Glenn Dipela</span>
            </h1>

            <p className="mt-6 font-serif text-xl sm:text-2xl text-cocoa">
              27 July 1971 <span className="text-gold mx-2">—</span> 21 April 2026
            </p>

            <p className="mt-3 text-sm sm:text-base tracking-wideish uppercase text-cocoa/80">
              Affectionately known as “{person.alsoKnownAs}”
            </p>

            <div className="mt-8 mx-auto lg:mx-0 max-w-prose2">
              <p className="font-serif text-lg sm:text-xl leading-relaxed text-charcoal/85">
                {announcement}
              </p>
              <p className="mt-4 text-[15px] sm:text-base text-cocoa italic">
                {heroSubtitle}
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center lg:justify-start">
              <Link
                href="/programme"
                className="inline-flex items-center justify-center rounded-full bg-charcoal text-ivory border border-charcoal px-7 py-3 text-[12px] tracking-wider2 uppercase hover:bg-cocoa transition-colors"
              >
                View Programme
              </Link>
              <DownloadProgrammeButton variant="soft">
                Download Programme
              </DownloadProgrammeButton>
              <a
                href="#obituary"
                className="inline-flex items-center justify-center rounded-full bg-transparent text-charcoal border border-charcoal/30 px-7 py-3 text-[12px] tracking-wider2 uppercase hover:border-charcoal hover:bg-parchment transition-colors"
              >
                Read Obituary
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
