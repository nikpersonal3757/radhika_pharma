import Image from "next/image";
import Link from "next/link";
import { HeroSubscribe } from "@/components/sections/HeroSubscribe";

function ShieldBadgeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 8.5v7l5.25-3.5L10 8.5z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14m-4 4l4-4-4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BeakerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 3h4v3l4 12a2 2 0 01-2 2H8a2 2 0 01-2-2l4-12V3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArcTrustGraphic() {
  return (
    <div className="relative h-[140px] w-[180px] shrink-0 sm:h-[160px] sm:w-[200px]" aria-hidden>
      <svg className="absolute bottom-0 right-0 h-full w-full text-secondary/[0.08]" viewBox="0 0 200 160" fill="none">
        <path d="M200 160 A140 140 0 00 60 20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M200 160 A105 105 0 00 95 35" stroke="currentColor" strokeWidth="1.5" />
        <path d="M200 160 A70 70 0 00130 50" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="absolute bottom-[52px] right-[118px] flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-md ring-4 ring-white">
        <BeakerIcon />
      </span>
      <span className="absolute bottom-[28px] right-[72px] flex h-9 w-9 items-center justify-center rounded-full bg-accent text-secondary shadow-md ring-4 ring-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span className="absolute bottom-[12px] right-[132px] flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white shadow-md ring-4 ring-white">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M10 3h4v5l3 9H7l3-9V3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="12" cy="19" r="2" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}

const LAB_IMAGE =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=960&q=80";

export function Hero() {
  return (
    <section
      className="bg-white pb-12 pt-[88px] md:pb-16 md:pt-[96px] lg:pb-20 lg:pt-[104px]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-6">
          {/* Left hero panel */}
          <div className="flex lg:col-span-7">
            <div
              className="relative flex min-h-[560px] w-full flex-1 flex-col overflow-hidden rounded-4xl bg-hero-mint p-8 shadow-card ring-1 ring-secondary/[0.06] sm:p-10 lg:min-h-full lg:p-12"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(31, 42, 68, 0.034) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(31, 42, 68, 0.034) 1px, transparent 1px)
                `,
                backgroundSize: "44px 44px",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(95,191,143,0.14),transparent_55%)]"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-white shadow-sm">
                  <ShieldBadgeIcon />
                  API manufacturing · Est. 2024
                </span>

                <h1
                  id="hero-heading"
                  className="font-heading mt-8 max-w-[26ch] text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.12] tracking-tight"
                >
                  <span className="text-muted">Antibiotics and</span>
                  <br />
                  <span className="text-secondary">APIs built on quality</span>
                </h1>

                <p className="relative mt-6 max-w-xl text-[17px] leading-relaxed text-secondary/85">
                  Radhika Pharmaceutical Private Limited manufactures active pharmaceutical ingredients and
                  high-quality finished antibiotic products—with a focus on reliability for healthcare
                  partners in India and worldwide.
                </p>

                <div className="relative mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="#products"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-secondary/90"
                  >
                    Get Started
                    <ArrowRight />
                  </Link>
                  <Link
                    href="#research"
                    className="inline-flex items-center gap-2 rounded-full border border-secondary/[0.14] bg-white px-7 py-3.5 text-[15px] font-semibold text-secondary shadow-sm transition hover:bg-white/90"
                  >
                    <PlayIcon />
                    Watch Demo
                  </Link>
                </div>
              </div>

              <HeroSubscribe />
            </div>
          </div>

          {/* Right column */}
          <div className="grid gap-5 lg:col-span-5 lg:grid-rows-[1fr_auto] lg:gap-6">
            <div className="relative min-h-[280px] overflow-hidden rounded-4xl bg-secondary/[0.06] shadow-card ring-1 ring-secondary/[0.06] sm:min-h-[320px] lg:min-h-[300px] lg:flex-1">
              <Image
                src={LAB_IMAGE}
                alt="Clinical researcher reviewing pharmaceutical quality"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_22%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-secondary/35 via-transparent to-transparent"
              />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[270px]">
                <div className="relative rounded-3xl border border-white/50 bg-white/85 p-5 shadow-[0_16px_48px_rgba(31,42,68,0.12)] backdrop-blur-md">
                  <span className="absolute -right-2 -top-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-white">
                    <BeakerIcon />
                  </span>
                  <p className="text-[13px] font-medium uppercase tracking-wide text-muted">
                    Our trusted collaborators
                  </p>
                  <p className="font-heading mt-2 text-4xl font-bold tracking-tight text-secondary">
                    500+
                  </p>
                  <p className="mt-1 text-[14px] leading-snug text-secondary/80">
                    Healthcare & distribution partnerships worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-4xl bg-surface p-8 shadow-card ring-1 ring-secondary/[0.06] sm:flex-row sm:items-center sm:p-10">
              <div className="max-w-sm">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Smart. Secure. Scientific. Scalable.
                </p>
                <p className="font-heading mt-3 text-2xl font-bold leading-snug text-secondary sm:text-[26px]">
                  Trusted platform for progress.
                </p>
              </div>
              <ArcTrustGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
