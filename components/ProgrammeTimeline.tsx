import { programme } from "@/data/memorial";

export default function ProgrammeTimeline() {
  return (
    <ol className="relative space-y-12 sm:space-y-16">
      {programme.map((part, idx) => (
        <li
          key={part.id}
          id={part.id}
          className="programme-part relative scroll-mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            {/* Number / heading */}
            <div className="md:col-span-4">
              <div className="flex md:block items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-serif text-3xl md:text-5xl text-gold/80 leading-none"
                >
                  {part.number}.
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal mt-0 md:mt-3">
                  {part.heading}
                </h3>
              </div>
              <p className="mt-2 text-[12px] tracking-wider2 uppercase text-cocoa/70">
                {part.venue}
              </p>
            </div>

            {/* Items */}
            <div className="md:col-span-8">
              <div className="rounded-sm border border-cocoa/15 bg-ivory/70 backdrop-blur-[1px] shadow-soft">
                <ul className="divide-y divide-cocoa/10">
                  {part.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 px-5 sm:px-7 py-4 sm:py-5"
                    >
                      {item.time ? (
                        <span className="shrink-0 w-full sm:w-36 font-serif text-base sm:text-lg text-gold tracking-wide">
                          {item.time}
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="shrink-0 w-full sm:w-36 text-cocoa/40 text-[12px] tracking-wider2 uppercase hidden sm:block"
                        >
                          —
                        </span>
                      )}
                      <div className="flex-1">
                        <p className="font-serif text-lg sm:text-xl text-charcoal leading-snug">
                          {item.title}
                        </p>
                        {item.detail ? (
                          <p className="mt-1 text-sm text-cocoa/85">
                            {item.detail}
                          </p>
                        ) : null}
                        {item.children && item.children.length > 0 ? (
                          <ul className="mt-2 space-y-1">
                            {item.children.map((child, ci) => (
                              <li
                                key={ci}
                                className="flex items-baseline gap-2 text-sm text-cocoa/85"
                              >
                                <span
                                  aria-hidden="true"
                                  className="text-gold/70"
                                >
                                  ·
                                </span>
                                <span>{child}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {idx < programme.length - 1 && (
            <div aria-hidden="true" className="hairline mt-12 sm:mt-16" />
          )}
        </li>
      ))}
    </ol>
  );
}
