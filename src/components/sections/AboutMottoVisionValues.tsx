function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function UserPlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M20 8v6M23 11h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const PILLARS = [
  {
    title: "Our Motto",
    Icon: TargetIcon,
    body:
      "The right medication should reach the right patient. We provide high-quality medicines at fair, transparent pricing—so care stays accessible without compromising standards.",
  },
  {
    title: "Our Vision",
    Icon: EyeIcon,
    body:
      "To become a quality- and technology-led pharmaceutical partner recognised across India and globally—for dependable manufacturing, rigorous compliance, and enduring trust.",
  },
  {
    title: "Our Values",
    Icon: UserPlusIcon,
    body:
      "We are customer-oriented at our core. Delivering wholesome satisfaction to healthcare providers, partners, and patients remains our guiding motive in every batch we release.",
  },
];

export function AboutMottoVisionValues() {
  return (
    <section
      className="bg-surface py-16 md:py-20 lg:py-24"
      aria-labelledby="about-pillars-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <h2
          id="about-pillars-heading"
          className="font-heading mx-auto max-w-4xl text-balance text-center text-[clamp(1.65rem,3.6vw,2.35rem)] font-bold leading-snug tracking-tight text-secondary"
        >
          Transforming Healthcare by Empowering Entrepreneurs with{" "}
          <span className="text-primary">Quality Pharmaceuticals</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3 lg:mt-16 lg:gap-10">
          {PILLARS.map((item) => (
            <article
              key={item.title}
              className="tile-3d flex cursor-default flex-col rounded-3xl bg-white p-8 shadow-card ring-1 ring-secondary/[0.06] sm:p-9"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                <item.Icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading mt-7 text-xl font-bold text-secondary">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-secondary/78">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
