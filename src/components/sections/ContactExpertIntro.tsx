import Link from "next/link";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const EXPERT_POINTS = [
  {
    title: "Personalized guidance from experts",
    body:
      "Speak directly with formulation and quality specialists who understand documentation, stability, and regulatory expectations.",
  },
  {
    title: "Secure & confidential communication",
    body:
      "Your enquiries and shared information are handled with discretion and appropriate safeguards across every channel.",
  },
  {
    title: "Fast & friendly support",
    body:
      "Whether you need a quote or product clarification, our team aims to respond quickly with clear next steps.",
  },
];

export function ContactExpertIntro() {
  return (
    <section className="bg-[#F6F7F5] py-14 md:py-16 lg:py-20" aria-labelledby="contact-expert-heading">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          <div className="max-w-xl lg:max-w-none">
            <h1
              id="contact-expert-heading"
              className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] tracking-tight text-secondary"
            >
              Talk to an{" "}
              <span className="font-semibold italic text-primary">Expert</span> Today
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Get in touch with our team for product availability, partnership enquiries, or technical
              questions—we&apos;re here to help healthcare move forward.
            </p>
            <p className="mt-8 text-[14px] leading-relaxed text-muted">
              Looking for customer support?{" "}
              <Link
                href="mailto:enquiry@radhikapharma.com"
                className="font-semibold text-primary underline decoration-primary/40 underline-offset-2 transition hover:text-secondary hover:decoration-secondary"
              >
                Click here
              </Link>
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:gap-6">
            {EXPERT_POINTS.map((item) => (
              <div key={item.title} className="flex flex-col">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                  <CheckIcon className="h-5 w-5 stroke-[2.5]" />
                </span>
                <h2 className="font-heading mt-5 text-[17px] font-bold leading-snug text-secondary">
                  {item.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
