import { CtaBanner } from "@/components/cta-banner";
import {
  DestinationCard,
  type Destination,
} from "@/components/destination-card";
import { shuffle } from "@/lib/shuffle";
import { HeroBanner } from "@/components/hero-banner";

import { Testimonials } from "@/components/testimonials";
import { WhyChoose } from "@/components/why-choose";

async function FeaturedDestinations() {
  const res = await fetch("http://localhost:8000/destinations");
  const destinations: Destination[] = await res.json();

  const featured = shuffle(destinations).slice(0, 4);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-light tracking-wide text-center sm:text-4xl">
          Featured Destinations
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          A rotating pick of our favourite travel packages — four destinations
          refreshed every time you visit.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((destination) => (
            <DestinationCard
              key={destination._id ?? destination.name}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      
      <HeroBanner />
      <FeaturedDestinations />
      <WhyChoose />
      <CtaBanner />
      <Testimonials />
    </>
  );
}
