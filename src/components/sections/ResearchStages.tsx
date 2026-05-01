function PillMini({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="6" y="8" width="12" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8V6M12 18v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DnaMini({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 4c2 2 4 2 8 0M8 20c2-2 4-2 8 0M8 4c2 4 4 8 4 16M16 4c-2 4-4 8-4 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlaskMini({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 3h4v4l5 12a2 2 0 01-2 2H7a2 2 0 01-2-2l5-12V3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LeafMini({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M18 6C12 6 6 12 6 18c4-2 8-6 10-10 2-4 2-6 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DiscoveryVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/80 via-white to-hero-mint p-4 ring-1 ring-secondary/[0.06]">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="tile-3d-inner flex aspect-square cursor-default items-center justify-center rounded-2xl bg-[#6E62CE] text-white shadow-sm">
          <PillMini className="h-9 w-9 sm:h-10 sm:w-10" />
        </div>
        <div className="tile-3d-inner flex aspect-square cursor-default items-center justify-center rounded-2xl bg-[#E07C3E] text-white shadow-sm">
          <DnaMini className="h-9 w-9 sm:h-10 sm:w-10" />
        </div>
        <div className="tile-3d-inner relative flex aspect-square cursor-default items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/15 to-primary/25 shadow-sm">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(31,42,68,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(31,42,68,0.06) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />
          <FlaskMini className="relative h-8 w-8 text-secondary sm:h-9 sm:w-9" />
        </div>
        <div className="tile-3d-inner col-span-2 flex aspect-[2/1] cursor-default items-center justify-center rounded-2xl bg-gradient-to-r from-primary/90 to-accent text-white shadow-sm">
          <div className="flex items-center gap-3 px-2">
            <FlaskMini className="h-8 w-8 shrink-0 opacity-95 sm:h-9 sm:w-9" />
            <span className="font-heading text-left text-[13px] font-semibold leading-snug sm:text-sm">
              Lab synthesis &amp; analytical characterization
            </span>
          </div>
        </div>
        <div className="tile-3d-inner flex aspect-square cursor-default items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-accent/60 text-secondary shadow-sm">
          <LeafMini className="h-9 w-9 sm:h-10 sm:w-10" />
        </div>
      </div>
    </div>
  );
}

function RegulatoryVisual() {
  const agencies = [
    {
      name: "World Health Organization",
      tone: "bg-[#F472B6]",
    },
    {
      name: "European Medicines Agency",
      tone: "bg-[#3B82F6]",
    },
    {
      name: "Food and Drug Administration",
      tone: "bg-[#8B5CF6]",
    },
  ];

  return (
    <div className="rounded-3xl bg-gradient-to-br from-accent/70 via-white to-hero-mint p-4 ring-1 ring-secondary/[0.06] sm:p-5">
      <ul className="flex flex-col gap-3">
        {agencies.map((a) => (
          <li
            key={a.name}
            className="tile-3d-inner flex cursor-default items-center gap-3 rounded-full border border-secondary/[0.06] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm"
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${a.tone} text-white shadow-inner`}
            >
              <PillMini className="h-5 w-5" />
            </span>
            <span className="text-[14px] font-medium leading-snug text-secondary">{a.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClinicalVisual() {
  return (
    <div className="relative mx-auto min-h-[240px] w-full max-w-[300px] rounded-3xl bg-gradient-to-br from-amber-50 via-accent/40 to-hero-mint p-6 ring-1 ring-secondary/[0.06] sm:min-h-[260px]">
      <svg className="pointer-events-none absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] text-secondary/22" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <line x1="50" y1="50" x2="50" y2="14" stroke="currentColor" strokeWidth="0.8" />
        <line x1="50" y1="50" x2="86" y2="50" stroke="currentColor" strokeWidth="0.8" />
        <line x1="50" y1="50" x2="50" y2="86" stroke="currentColor" strokeWidth="0.8" />
        <line x1="50" y1="50" x2="14" y2="50" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      <div className="absolute left-1/2 top-[10%] z-[1] -translate-x-1/2">
        <div className="tile-3d-inner flex h-[52px] w-[52px] cursor-default items-center justify-center rounded-xl bg-white text-secondary/70 shadow-sm ring-1 ring-secondary/[0.08]">
          <FlaskMini className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute bottom-[10%] left-1/2 z-[1] -translate-x-1/2">
        <div className="tile-3d-inner flex h-[52px] w-[52px] cursor-default items-center justify-center rounded-xl bg-white text-secondary/70 shadow-sm ring-1 ring-secondary/[0.08]">
          <FlaskMini className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute left-[8%] top-1/2 z-[1] -translate-y-1/2">
        <div className="tile-3d-inner flex h-[52px] w-[52px] cursor-default items-center justify-center rounded-xl bg-white text-secondary/70 shadow-sm ring-1 ring-secondary/[0.08]">
          <FlaskMini className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute right-[8%] top-1/2 z-[1] -translate-y-1/2">
        <div className="tile-3d-inner flex h-[52px] w-[52px] cursor-default items-center justify-center rounded-xl bg-white text-secondary/70 shadow-sm ring-1 ring-secondary/[0.08]">
          <FlaskMini className="h-6 w-6" />
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="tile-3d-inner flex h-14 w-14 cursor-default items-center justify-center rounded-[14px] bg-[#E8935E] text-white shadow-lg ring-4 ring-white sm:h-[56px] sm:w-[56px]">
          <DnaMini className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}

export function ResearchStages() {
  return (
    <section
      id="research"
      className="scroll-mt-[100px] bg-[#F7F8FA] py-20 md:py-24 lg:py-28"
      aria-labelledby="research-stages-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="research-stages-heading" className="font-heading text-balance">
            <span className="block text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-secondary">
              Every Stage Matters
            </span>
            <span className="mt-2 block text-[clamp(1.35rem,3vw,1.85rem)] font-semibold text-muted">
              in Saving Lives
            </span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-secondary/75">
            Understand each development phase that transforms scientific discovery into safe,
            effective, and approved medical treatments.
          </p>
        </header>

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:items-stretch lg:gap-8">
          <article className="tile-3d flex h-full flex-col rounded-4xl bg-white p-7 shadow-card ring-1 ring-secondary/[0.06] sm:p-8">
            <DiscoveryVisual />
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Discovery &amp; preclinical
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-secondary/85">
              Establishing proof-of-principle through target validation, medicinal chemistry,
              pharmacology, and GLP-directed safety studies before human exposure.
            </p>
          </article>

          <article className="tile-3d flex h-full flex-col rounded-4xl bg-white p-7 shadow-card ring-1 ring-secondary/[0.06] sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Regulatory overview
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-secondary/85">
              Translating CMC, nonclinical, and clinical evidence into dossiers aligned with global
              agencies—ensuring submission-ready quality, labeling, and lifecycle compliance.
            </p>
            <div className="mt-8 flex flex-1 flex-col justify-end">
              <RegulatoryVisual />
            </div>
          </article>

          <article className="tile-3d flex h-full flex-col rounded-4xl bg-white p-7 shadow-card ring-1 ring-secondary/[0.06] sm:p-8">
            <ClinicalVisual />
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Clinical trials (phase 1 – 3)
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-secondary/85">
              Generating robust human data across dose escalation, pivotal efficacy endpoints, and
              population safety—powering evidence-based approval and physician confidence.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
