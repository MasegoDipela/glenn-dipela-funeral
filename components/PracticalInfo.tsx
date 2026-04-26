import { burial } from "@/data/memorial";

const items = [
  {
    label: "Burial Date",
    value: burial.date,
    sub: "Friday",
  },
  {
    label: "Home",
    value: burial.homeVenue,
    sub: "Family residence",
  },
  {
    label: "Church Service",
    value: burial.churchVenue,
    sub: "Main service venue",
  },
  {
    label: "Cemetery",
    value: burial.cemetery,
    sub: "Place of burial",
  },
];

export default function PracticalInfo() {
  return (
    <section
      id="information"
      aria-labelledby="info-heading"
      className="relative scroll-mt-20 py-20 sm:py-28 bg-parchment/60"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <p className="ornament justify-center mb-5">
            <span>For Attendees</span>
          </p>
          <h2
            id="info-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight"
          >
            Practical Information
          </h2>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cocoa/15 border border-cocoa/15 rounded-sm overflow-hidden">
          {items.map((item) => (
            <li
              key={item.label}
              className="bg-ivory px-6 sm:px-8 py-7 sm:py-8"
            >
              <p className="text-[11px] tracking-wider2 uppercase text-cocoa/70">
                {item.label}
              </p>
              <p className="mt-2 font-serif text-xl sm:text-2xl text-charcoal leading-snug">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-cocoa/80">{item.sub}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-cocoa/75 max-w-xl mx-auto">
          For directions or any assistance on the day, please speak to a family
          representative or refer to the printed programme.
        </p>
      </div>
    </section>
  );
}
