import { obituary, pullQuotes, person } from "@/data/memorial";

export default function ObituarySection() {
  // Insert pull quotes at gentle intervals between paragraphs.
  const quoteIndices = new Set<number>([2, 5]); // after paragraph 3 and 6

  return (
    <section
      id="obituary"
      aria-labelledby="obituary-heading"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <header className="text-center mb-14 sm:mb-16">
          <p className="ornament justify-center mb-5">
            <span>Obituary</span>
          </p>
          <h2
            id="obituary-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight"
          >
            A Life Remembered
          </h2>
          <p className="mt-5 font-serif text-lg text-cocoa">
            {person.fullName}
          </p>
          <p className="mt-1 text-[12px] tracking-wider2 uppercase text-cocoa/70">
            {person.yearsRange}
          </p>
        </header>

        <article className="font-serif text-[1.125rem] sm:text-[1.2rem] leading-[1.85] text-charcoal/90 space-y-7">
          {obituary.map((para, i) => {
            const isClosing = i === obituary.length - 1;
            return (
              <div key={i}>
                {i === 0 && (
                  <span className="float-left mr-3 mt-1 font-serif text-6xl leading-none text-gold/80 select-none">
                    {para.charAt(0)}
                  </span>
                )}
                <p
                  className={[
                    isClosing
                      ? "text-center italic text-cocoa"
                      : "",
                    i === 0 ? "first-letter:hidden" : "",
                  ].join(" ")}
                >
                  {i === 0 ? para.slice(1) : para}
                </p>

                {quoteIndices.has(i) && pullQuotes[i === 2 ? 0 : 1] ? (
                  <figure className="my-10 sm:my-12 px-2 sm:px-6">
                    <div aria-hidden="true" className="hairline mb-8" />
                    <blockquote className="text-center font-serif italic text-2xl sm:text-3xl leading-snug text-cocoa">
                      “{pullQuotes[i === 2 ? 0 : 1]}”
                    </blockquote>
                    <div aria-hidden="true" className="hairline mt-8" />
                  </figure>
                ) : null}
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}
