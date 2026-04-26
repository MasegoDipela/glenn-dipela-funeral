import Link from "next/link";
import { programmePdfPath } from "@/data/memorial";

type Variant = "primary" | "ghost" | "soft";

type Props = {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-charcoal text-ivory hover:bg-cocoa border border-charcoal",
  ghost:
    "bg-transparent text-charcoal border border-charcoal/40 hover:bg-charcoal hover:text-ivory",
  soft:
    "bg-gold text-ivory border border-gold hover:bg-goldsoft hover:border-goldsoft",
};

export default function DownloadProgrammeButton({
  variant = "soft",
  className = "",
  children,
}: Props) {
  return (
    <Link
      href={programmePdfPath}
      download
      className={[
        "inline-flex items-center justify-center gap-3 rounded-full",
        "px-6 sm:px-7 py-3 text-[12px] tracking-wider2 uppercase",
        "transition-colors focus:outline-none",
        styles[variant],
        className,
      ].join(" ")}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-4 w-4"
      >
        <path d="M12 4v12" strokeLinecap="round" />
        <path d="M6 12l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 20h14" strokeLinecap="round" />
      </svg>
      <span>{children ?? "Download Programme"}</span>
    </Link>
  );
}
