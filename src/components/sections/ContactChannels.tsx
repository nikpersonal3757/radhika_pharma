function IconPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.33 1.77.63 2.6a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.48-1.2a2 2 0 012.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CHANNELS = [
  {
    label: "Our Location",
    detail: "No 129, Ground Floor, 2nd Main Road, Chamrajpet, Bengaluru — 560018",
    Icon: IconPin,
  },
  {
    label: "Email Us",
    detail: "enquiry@radhikapharma.com",
    href: "mailto:enquiry@radhikapharma.com",
    Icon: IconMail,
  },
  {
    label: "Call Us",
    detail: "+91-97425 03344 / +91-97425 83344 / +91-93804 51660",
    href: "tel:+919742503344",
    Icon: IconPhone,
  },
];

export function ContactChannels() {
  return (
    <section className="bg-[#EBEFF5] py-14 md:py-16 lg:py-20" aria-labelledby="contact-channels-heading">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-channels-heading"
          className="font-heading text-[clamp(1.85rem,3vw,2.35rem)] font-bold tracking-tight text-secondary"
        >
          Get In Touch
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
          Have questions about our products? Need a quote? We&apos;re here to help—reach us through any of
          the channels below.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-14 lg:gap-10">
          {CHANNELS.map((ch) => (
            <div key={ch.label} className="flex gap-5 md:flex-col md:gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EDE8DC] text-[#B8860B] shadow-sm ring-1 ring-[#D4C9B0]/60">
                <ch.Icon className="h-7 w-7" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-lg font-bold text-secondary">{ch.label}</p>
                {ch.href ? (
                  <a
                    href={ch.href}
                    className="mt-3 block text-[15px] leading-relaxed text-muted underline-offset-2 transition hover:text-primary hover:underline"
                  >
                    {ch.detail}
                  </a>
                ) : (
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{ch.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <a
            href="tel:+919742503344"
            className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-primary px-10 py-4 text-[16px] font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-primary/90 hover:shadow-xl md:w-auto md:min-w-[280px]"
          >
            <IconPhone className="h-5 w-5 text-white" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
