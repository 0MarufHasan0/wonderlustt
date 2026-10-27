"use client"
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const searchFields = [
  { label: "Location", placeholder: "Address, City Or Zip", type: "text" },
  { label: "Date / Duration", placeholder: "Anytime / 3 Days", type: "text" },
  { label: "Budget", placeholder: "$0 - $3000", type: "text" },
  { label: "People", placeholder: "5 - 10", type: "number" },
];

export function HeroBanner() {
  return (
    <section className="relative flex min-h-screen flex-col">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/Banner.png')",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-black/25" />

      {/* Hero content */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl font-serif text-5xl font-medium text-white md:text-7xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-4 max-w-md text-sm text-white/85 md:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <button className="flex items-center gap-2 bg-cyan-600 px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-cyan-700">
            Explore Now
            <ArrowRight className="size-4" />
          </button>
          <Link
            href="/destinations"
            className="border border-white/60 bg-white/10 px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* Search bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative grid grid-cols-2 bg-black/40 backdrop-blur-sm md:grid-cols-[1fr_1fr_1fr_1fr_auto]"
      >
        {searchFields.map((field) => (
          <label
            key={field.label}
            className="flex flex-col gap-1 border-r border-white/15 px-6 py-3"
          >
            <span className="text-sm font-semibold text-white">
              {field.label}
            </span>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="bg-transparent text-xs text-white placeholder:text-white/55 focus:outline-none"
            />
          </label>
        ))}
        <button
          type="submit"
          className="col-span-2 flex items-center justify-center gap-2 bg-cyan-600 px-16 text-sm font-medium text-white transition-colors hover:bg-cyan-700 md:col-span-1"
        >
          <Search className="size-4 md:hidden" />
          Search
        </button>
      </form>
    </section>
  );
}
