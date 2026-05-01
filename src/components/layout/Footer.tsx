import Link from "next/link";
import { RadhikaLogo } from "@/components/brand/RadhikaLogo";

const FOOTER_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/#partners", label: "Distribution Opportunities" },
  { href: "/#products", label: "Product List" },
  { href: "/contact", label: "Contact Us" },
];

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H7V12h3.5V9.41c0-3.45 2.07-5.36 5.17-5.36 1.5 0 3.06.27 3.06.27v3.36h-1.73c-1.7 0-2.23 1.06-2.23 2.14V12h3.79l-.61 3.9h-3.18V22A10 10 0 0022 12z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Facebook", href: "#", Icon: IconFacebook },
  { label: "Instagram", href: "#", Icon: IconInstagram },
  { label: "X", href: "#", Icon: IconX },
  { label: "LinkedIn", href: "#", Icon: IconLinkedIn },
];

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-secondary"
      aria-labelledby="footer-contact-heading"
    >
      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:px-8 lg:py-16">
        <div>
          <RadhikaLogo variant="footer" />

          <h2 id="footer-contact-heading" className="sr-only">
            Contact Radhika Pharma
          </h2>

          <div className="mt-10">
            <p className="text-[15px] font-bold text-white">Address:</p>
            <address className="mt-2 max-w-md text-[15px] leading-relaxed not-italic text-white/75">
              No 129, Ground Floor, 2nd Main Road, Chamrajpet, Bengaluru — 560018
            </address>
          </div>

          <div className="mt-8">
            <p className="text-[15px] font-bold text-white">Contact:</p>
            <p className="mt-2 text-[15px] leading-relaxed text-white/75">
              +91-97425 03344 / +91-97425 83344 / +91-93804 51660
              <br />
              <a
                href="mailto:enquiry@radhikapharma.com"
                className="text-primary transition hover:text-accent hover:underline"
              >
                enquiry@radhikapharma.com
              </a>
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-md transition hover:scale-105 hover:bg-primary/90 hover:shadow-lg motion-reduce:transform-none"
                aria-label={label}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col gap-5 lg:items-end lg:pt-2" aria-label="Footer">
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading w-fit text-[17px] font-bold text-white transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-[13px] text-white/55">
        © {new Date().getFullYear()} Radhika Pharma. All rights reserved.
      </div>
    </footer>
  );
}
