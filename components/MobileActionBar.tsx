import { programmePdfPath } from "@/data/memorial";

export default function MobileActionBar() {
  return (
    <div
      className="no-print md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-cocoa/15 bg-ivory/95 backdrop-blur-md"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-2">
        <a
          href="#programme"
          className="py-4 text-center text-[12px] tracking-wider2 uppercase text-charcoal active:bg-parchment"
        >
          View Programme
        </a>
        <a
          href={programmePdfPath}
          download
          className="py-4 text-center text-[12px] tracking-wider2 uppercase bg-charcoal text-ivory active:bg-cocoa"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
