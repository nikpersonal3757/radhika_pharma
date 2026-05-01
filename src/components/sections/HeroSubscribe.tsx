"use client";

import { FormEvent, useState } from "react";

function SubmitChevrons({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M11 7l5 5-5 5M6 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSubscribe() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2800);
  }

  return (
    <div className="mt-auto w-full pt-8 lg:pt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:bg-white sm:p-1.5 sm:pl-6 sm:shadow-[0_12px_40px_rgba(31,42,68,0.08)] sm:ring-1 sm:ring-secondary/[0.06]"
      >
        <label htmlFor="hero-email" className="sr-only">
          Email address
        </label>
        <input
          id="hero-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email and subscribe"
          autoComplete="email"
          className="min-h-[52px] flex-1 rounded-full border border-secondary/[0.08] bg-white px-5 py-3 text-[15px] text-secondary placeholder:text-muted/80 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/25 sm:border-0 sm:bg-transparent sm:px-0 sm:shadow-none sm:ring-0"
        />
        <button
          type="submit"
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-secondary text-white transition hover:bg-secondary/90 sm:self-auto max-sm:mx-auto"
          aria-label="Subscribe"
        >
          <SubmitChevrons />
        </button>
      </form>
      <p className="mt-3 text-[13px] leading-snug text-muted">
        {sent ? "Thank you — we’ll share updates and formulation insights soon." : "Stay informed with product updates and regulatory bulletins."}
      </p>
    </div>
  );
}
