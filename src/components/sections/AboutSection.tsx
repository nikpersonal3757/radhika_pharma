import Image from "next/image";

const IMG_LAB =
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80";
const IMG_SUPPLIES =
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-[100px] pt-[72px] lg:pt-[84px]"
      aria-labelledby="about-banner-heading"
    >
      {/* Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#EFF8F3] via-accent/55 to-primary/30">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[12%] top-1/2 h-[140%] w-[55%] -translate-y-1/2 rounded-full bg-primary/[0.14] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 bottom-0 top-0 w-[42%] rounded-l-[100%] border border-white/40 bg-white/25 backdrop-blur-[2px]"
        />
        <div className="relative mx-auto max-w-[1320px] px-4 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <h2
            id="about-banner-heading"
            className="font-heading max-w-3xl text-[clamp(1.75rem,3.5vw,2.35rem)] font-bold tracking-tight text-secondary"
          >
            Leading pharmaceutical partner
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-secondary/78 md:text-lg">
            Radhika Pharma is a trusted name in pharmaceutical distribution and manufacturing—known for
            quality-assured formulations and dependable supply across healthcare networks.
          </p>
        </div>
      </div>

      {/* Two-column body */}
      <div className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:px-8">
          <div className="max-w-xl lg:max-w-none">
            <span className="inline-flex rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-white shadow-sm">
              About Radhika Pharma
            </span>
            <h3 className="font-heading mt-8 text-balance text-[clamp(1.85rem,3.4vw,2.65rem)] font-bold leading-[1.15] tracking-tight text-secondary">
              Empowering healthcare with{" "}
              <span className="text-primary">high-quality pharma products</span> across India
            </h3>
            <p className="mt-6 text-[17px] leading-relaxed text-secondary/78">
              At Radhika Pharma, our mission is to ensure individuals and institutions have access to
              dependable medicines—from tablets and capsules to syrups and injections—supported by
              rigorous quality systems and transparent partnerships. We work alongside clinicians,
              distributors, and entrepreneurs to strengthen community health with innovation grounded in
              science.
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-[540px] lg:mx-0 lg:max-w-none lg:aspect-auto lg:min-h-[440px]">
            {/* Rear tile — supplies / products */}
            <div className="tile-3d absolute bottom-[2%] right-0 z-[1] w-[72%] overflow-hidden rounded-3xl bg-white shadow-card ring-4 ring-white hover:z-[25] lg:bottom-[4%] lg:w-[68%]">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src={IMG_SUPPLIES}
                  alt="Pharmaceutical products including capsules and medicine packaging"
                  fill
                  sizes="(max-width: 1024px) 72vw, 35vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Front tile — laboratory */}
            <div className="tile-3d absolute left-0 top-0 z-[2] w-[70%] overflow-hidden rounded-3xl bg-white shadow-card ring-4 ring-white hover:z-[30] lg:left-[2%] lg:w-[62%]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={IMG_LAB}
                  alt="Scientist conducting laboratory analysis with precision instruments"
                  fill
                  sizes="(max-width: 1024px) 70vw, 32vw"
                  className="object-cover object-[center_28%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
