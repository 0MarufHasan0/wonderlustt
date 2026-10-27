import React from "react";

import { DestinationCard, type Destination } from "@/components/destination-card";

const AllDestinationPage = async () => {
  const res = await fetch("http://localhost:8000/destinations");
  const destinations: Destination[] = await res.json();

  return (
    <section className="min-h-screen bg-background px-4 py-10">
      <div>
        <h1 className="font-heading text-center text-4xl font-light tracking-wide sm:text-5xl">
          Our Destinations
        </h1>
        <p className="mt-4 text-center text-muted-foreground">
          Handpicked travel packages to the world&apos;s most breathtaking
          places — beaches, peaks and hidden gems, all in one place.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Showing {destinations.length} destinations
        </p>

        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination._id ?? destination.name}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllDestinationPage;
