import Image from "next/image";

function FlaskGlyph({ className }: { className?: string }) {
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

function ClipboardGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 3h6v2h4a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h4V3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 11h6M9 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ShieldCrossGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MicroscopeGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M15 15l5 5M9 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 6V3M8 4l6 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BagMedicalGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 9h8v11a1 1 0 01-1 1H9a1 1 0 01-1-1V9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M10 9V7a2 2 0 014 0v2M11 14h2v4h-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const TRIAL_TILES = [
  {
    title: "Trial Phases Explained",
    accentClass: "bg-[#7C3AED]",
    Icon: FlaskGlyph,
    featured: true,
    body:
      "Understand Phase I–III objectives—from first-in-human safety and dosing through pivotal efficacy—so stakeholders know what evidence means at each gate.",
  },
  {
    title: "Ongoing Clinical Trials",
    accentClass: "bg-[#2563EB]",
    Icon: FlaskGlyph,
    body:
      "Follow active programs across indications with transparent timelines, endpoints, and governance aligned to ethical review and patient safeguards.",
  },
  {
    title: "Eligibility & Enrollment",
    accentClass: "bg-[#EC4899]",
    Icon: ClipboardGlyph,
    body:
      "Clear inclusion and exclusion criteria, informed consent pathways, and site support designed to enroll the right participants without compromising equity.",
  },
  {
    title: "Physician Resources",
    accentClass: "bg-[#EA580C]",
    Icon: ShieldCrossGlyph,
    body:
      "Protocols, safety communications, and medication guides curated for prescribers monitoring outcomes and counseling patients on trial participation.",
  },
];

const IMPACT_ROWS = [
  {
    title: "Accelerates Medical Innovation",
    Icon: MicroscopeGlyph,
    body:
      "Structured trials compress learning cycles—linking biomarkers, dosing insights, and real-world endpoints to speed evidence generation responsibly.",
  },
  {
    title: "Ensures Safety and Efficacy",
    Icon: FlaskGlyph,
    body:
      "Independent oversight, adverse-event surveillance, and statistical stopping rules protect participants while validating therapeutic benefit.",
  },
  {
    title: "Offers Early Access to Therapies",
    Icon: BagMedicalGlyph,
    body:
      "Expanded access and compassionate-use frameworks—where appropriate—give physicians regulated routes to emerging medicines ahead of broad launch.",
  },
];

const CONSULT_IMG =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=960&q=80";

export function ClinicalTrialsHighlight() {
  return (
    <section
      id="clinical-trials"
      className="scroll-mt-[100px] bg-white py-20 md:py-24 lg:py-28"
      aria-labelledby="clinical-trials-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="clinical-trials-heading" className="font-heading text-balance">
            <span className="block text-[clamp(1.85rem,3.8vw,2.55rem)] font-bold tracking-tight text-secondary">
              Advancing Medicine Through
            </span>
            <span className="mt-2 block text-[clamp(1.65rem,3.2vw,2.2rem)] font-bold text-muted">
              Safe Human Studies
            </span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-secondary/72 md:text-[17px]">
            Clinical trials ensure treatments are tested, trusted, and effective before reaching patients
            worldwide.
          </p>
        </header>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {TRIAL_TILES.map((tile) => (
            <div
              key={tile.title}
              className={`tile-3d flex cursor-default flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-secondary/[0.06] sm:p-7 ${
                tile.featured ? "border-2 border-[#7C3AED] shadow-[0_14px_36px_rgba(124,58,237,0.12)]" : ""
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-inner ${tile.accentClass}`}
              >
                <tile.Icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading mt-5 text-lg font-bold leading-snug text-secondary">{tile.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-secondary/78">{tile.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <div className="tile-3d relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-4xl bg-secondary/[0.06] shadow-card ring-1 ring-secondary/[0.06] lg:min-h-[380px]">
            <Image
              src={CONSULT_IMG}
              alt="Clinician discussing medication with a patient during consultation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_18%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-secondary/25 via-transparent to-transparent"
            />
          </div>

          <div className="flex flex-col justify-center rounded-4xl bg-gradient-to-br from-amber-50 via-accent/50 to-hero-mint p-6 shadow-card ring-1 ring-secondary/[0.06] sm:p-8 lg:p-10">
            <ul className="flex flex-col gap-4">
              {IMPACT_ROWS.map((row) => (
                <li
                  key={row.title}
                  className="tile-3d-inner flex cursor-default gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-secondary/[0.06]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F472B6] text-white shadow-inner">
                    <row.Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-heading text-[17px] font-bold leading-snug text-secondary">{row.title}</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-secondary/76">{row.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
