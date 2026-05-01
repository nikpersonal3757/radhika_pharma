import Link from "next/link";

type RadhikaLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function RadhikaLogo({ variant = "header", className }: RadhikaLogoProps) {
  const footer = variant === "footer";

  return (
    <Link href="/" className={`flex items-center gap-3 ${className ?? ""}`}>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-pharma shadow-sm ring-2 ${footer ? "ring-white/30" : "ring-white"}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white">
          <rect x="7" y="5" width="10" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M12 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span
        className={`font-heading text-lg font-bold tracking-tight md:text-[1.125rem] ${footer ? "text-white" : "text-secondary"}`}
      >
        Radhika{" "}
        <span className="bg-gradient-pharma bg-clip-text text-transparent">Pharma</span>
      </span>
    </Link>
  );
}
