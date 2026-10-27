"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

const quickLinks: FooterColumn = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "My Bookings", href: "/bookings" },
    { label: "My Profile", href: "/profile" },
  ],
};

const supportLinks: FooterColumn = {
  title: "Support",
  links: [
    { label: "Help Center", href: "/help" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

function FooterSection({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h3 className="text-xs font-medium tracking-wide text-white/70 uppercase">
        {column.title}
      </h3>
      <ul className="mt-4 space-y-3">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-xs text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Brand icons (lucide no longer ships brand glyphs) */
function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z" />
    </svg>
  );
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0 1.802c-3.15 0-3.503.012-4.74.068-1.04.047-1.79.217-2.355.493a3.03 3.03 0 0 0-1.433 1.433c-.276.566-.446 1.316-.493 2.355-.056 1.237-.068 1.59-.068 4.74s.012 3.503.068 4.74c.047 1.04.217 1.79.493 2.355a3.03 3.03 0 0 0 1.433 1.433c.566.276 1.316.446 2.355.493 1.237.056 1.59.068 4.74.068s3.503-.012 4.74-.068c1.04-.047 1.79-.217 2.355-.493a3.03 3.03 0 0 0 1.433-1.433c.276-.566.446-1.316.493-2.355.056-1.237.068-1.59.068-4.74s-.012-3.503-.068-4.74c-.047-1.04-.217-1.79-.493-2.355a3.03 3.03 0 0 0-1.433-1.433c-.566-.276-1.316-.446-2.355-.493-1.237-.056-1.59-.068-4.74-.068zm0 3.066a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Brand */}
        <p className="font-serif text-5xl tracking-wide md:text-6xl">
          Wanderlast
        </p>
        <p className="mt-3 max-w-md text-xs text-white/60">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        {/* Columns */}
        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-xs font-medium tracking-wide text-white/70 uppercase">
              Newsletter
            </h3>
            <p className="mt-4 max-w-[240px] text-xs text-white/60">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (email.trim()) {
                  setSubscribed(true);
                  setEmail("");
                }
              }}
              className="mt-4 flex max-w-[255px] items-center bg-[#1d1d1d] pl-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
                aria-label="Email address"
                className="w-full bg-transparent py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-4 py-2.5 text-white/70 transition-colors hover:text-white"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-cyan-400">
                Thanks for subscribing!
              </p>
            )}
          </div>

          <FooterSection column={quickLinks} />
          <FooterSection column={supportLinks} />

          <div>
            <h3 className="text-xs font-medium tracking-wide text-white/70 uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+7369011622"
                  className="text-xs text-white/85 transition-colors hover:text-white"
                >
                  736 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wanderlart.com"
                  className="text-xs text-white/85 transition-colors hover:text-white"
                >
                  info@wanderlart.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © 2026 Wanderlast. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-white/70">
            <a href="https://x.com" aria-label="X (Twitter)" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              <XIcon className="size-4" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              <LinkedInIcon className="size-4.5" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              <InstagramIcon className="size-4.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
