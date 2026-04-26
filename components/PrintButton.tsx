"use client";

export default function PrintButton({
  className = "",
  children = "Print",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={[
        "inline-flex items-center justify-center rounded-full",
        "border border-charcoal/30 px-5 py-2.5 text-[12px] tracking-wider2 uppercase",
        "text-charcoal hover:bg-charcoal hover:text-ivory transition-colors",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
