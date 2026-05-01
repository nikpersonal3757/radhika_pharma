import Image from "next/image";

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M2 12h20M12 2a15 15 0 000 20M12 2a15 15 0 010 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const TEAM = [
  {
    name: "Gajendra Kumar Chandawat",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=640&q=80",
    bio:
      "A visionary leader and the driving force behind Radhika Pharma, Gajendra brings deep industry insight and strategic direction. His focus on innovation and quality has shaped Radhika into a trusted name in healthcare solutions.",
    linkedin: "#",
    x: "#",
    web: "#",
  },
  {
    name: "Jeet",
    role: "COO",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=640&q=80",
    bio:
      "Jeet ensures smooth operations and flawless execution at Radhika Pharma. With a sharp eye for process optimization, he plays a key role in delivering timely, reliable, and scalable solutions.",
    linkedin: "#",
    x: "#",
    web: "#",
  },
  {
    name: "Yash Pal",
    role: "CMO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=80",
    bio:
      "Yash leads marketing strategy with creativity and precision. His understanding of market dynamics helps position Radhika Pharma effectively, building strong relationships with clients and partners.",
    linkedin: "#",
    x: "#",
    web: "#",
  },
  {
    name: "Vinay P",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80",
    bio:
      "As the technology leader behind Radhika Pharma, Vinay drives product innovation and digital capability. His expertise helps the company deliver smart, compliant, and future-ready healthcare solutions.",
    linkedin: "#",
    x: "#",
    web: "#",
  },
];

export function TeamSection() {
  return (
    <section
      className="bg-white pb-16 pt-[72px] md:pb-20 md:pt-[84px] lg:pb-24 lg:pt-[92px]"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl text-left">
          <h1
            id="team-heading"
            className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-secondary"
          >
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-secondary/75">
            Leaders united by science, quality, and the commitment to bring dependable pharmaceuticals to
            every community we serve.
          </p>
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="tile-3d flex cursor-default flex-col overflow-hidden rounded-3xl bg-[#F9FBF7] p-6 shadow-card ring-1 ring-secondary/[0.06]"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-secondary/5 ring-1 ring-secondary/[0.06]">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <h2 className="font-heading mt-6 text-lg font-bold leading-snug text-secondary">{member.name}</h2>
              <p className="mt-1 text-[13px] font-semibold uppercase tracking-wide text-primary">{member.role}</p>
              <p className="mt-4 flex-1 text-[14px] leading-relaxed text-secondary/76">{member.bio}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-secondary/[0.08] pt-5">
                <a
                  href={member.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-secondary/70 shadow-sm ring-1 ring-secondary/[0.08] transition hover:bg-primary hover:text-white hover:ring-primary"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <IconLinkedIn className="h-4 w-4" />
                </a>
                <a
                  href={member.x}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-secondary/70 shadow-sm ring-1 ring-secondary/[0.08] transition hover:bg-secondary hover:text-white hover:ring-secondary"
                  aria-label={`${member.name} on X`}
                >
                  <IconX className="h-4 w-4" />
                </a>
                <a
                  href={member.web}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-secondary/70 shadow-sm ring-1 ring-secondary/[0.08] transition hover:bg-primary hover:text-white hover:ring-primary"
                  aria-label={`${member.name} website`}
                >
                  <IconGlobe className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
