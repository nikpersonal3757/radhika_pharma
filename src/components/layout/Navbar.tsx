"use client";

import { RadhikaLogo } from "@/components/brand/RadhikaLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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

function getNavLinkClass(href: string, pathname: string | null) {
  if (href === "/" && pathname === "/") {
    return "text-primary font-semibold";
  }
  if (href.startsWith("/") && href !== "/" && pathname === href) {
    return "text-primary font-semibold";
  }
  return "font-medium text-secondary/70 hover:text-secondary";
}

function isRouteActive(href: string, pathname: string | null) {
  if (href === "/" && pathname === "/") return true;
  if (href.startsWith("/") && href !== "/" && pathname === href) return true;
  return false;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  {
    href: "/#products",
    label: "Products",
    chevron: true,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-secondary/[0.06] bg-white/95 shadow-[0_1px_0_rgba(31,42,68,0.04)] backdrop-blur-md">
      <div className="relative mx-auto flex h-[72px] max-w-[1320px] items-center px-4 sm:px-6 lg:h-[84px] lg:px-8">
        <RadhikaLogo variant="header" className="relative z-10" />

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex"
          aria-label="Main"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`inline-flex items-center gap-1 text-[15px] transition-colors ${getNavLinkClass(item.href, pathname)}`}
            >
              {item.label}
              {item.chevron ? <ChevronDown className="opacity-50" /> : null}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 ml-auto flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-secondary px-6 py-2.5 text-[14px] font-semibold text-white transition hover:bg-secondary/90 lg:inline-flex"
          >
            Contact us
            <ArrowRight className="opacity-90" />
          </Link>

          <button
            type="button"
            className="relative h-11 w-11 rounded-full border border-secondary/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 rounded-full bg-secondary transition-all duration-200 ${
                open ? "-translate-y-1/2 rotate-45" : "-translate-y-[7px]"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 rounded-full bg-secondary transition-all duration-200 ${
                open ? "-translate-y-1/2 -rotate-45" : "translate-y-[7px]"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-secondary/[0.06] bg-white lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-5 sm:px-6" aria-label="Mobile">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-secondary hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              <span className={isRouteActive(item.href, pathname) ? "text-primary font-semibold" : ""}>
                {item.label}
              </span>
              {item.chevron ? <ChevronDown className="opacity-40" /> : null}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-center text-[15px] font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contact us
            <ArrowRight className="opacity-90" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
