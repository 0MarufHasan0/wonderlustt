import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative bg-teal-950 bg-cover bg-center">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/CTA.png)" }}
      />
      <div aria-hidden className="absolute inset-0 bg-black/30" />

      {/* Dashed-frame content */}
      <div className="relative mx-auto max-w-6xl px-4 py-6">
        <div className=" px-6 py-16 text-center md:py-20">
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Ready To Start Your Journey?
          </h2>
          <p className="mt-3 text-sm text-white/80">
            Join thousands of travelers who have discovered the world with us
          </p>

          <button className="mt-10 inline-flex items-center gap-3 bg-white px-8 py-3.5 text-xs font-semibold tracking-widest text-foreground uppercase transition-colors hover:bg-white/85">
            Book Your Trip Today
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
