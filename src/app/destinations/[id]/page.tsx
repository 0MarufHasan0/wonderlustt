import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
 
  CalendarDays,
  Check,
  MapPin,
 
  Star,

} from "lucide-react";


import EditDestinationDialog from "@/components/destinations/EditDestinationDialog";
import DeleteDestinationDialog from "@/components/destinations/DeleteDestinationDialog";
import BookingCard from "@/components/Booking/BookingCard";

type Destination = {
  _id?: string;
  name: string;
  country: string;
  category?: string;
  price: string | number;
  duration: string;
  departureDate?: string;
  imageUrl: string;
  description?: string;
  rating?: number;
  reviews?: number;
  highlights?: string[];
};

const DEFAULT_HIGHLIGHTS = [
  "Luxury beachfront accommodation",
  "Traditional Balinese spa treatment",
  "Sunrise trek to Mount Batur",
  "Visit Uluwatu Temple at sunset",
  "Private beach dinner experience",
  "Guided island hopping tour",
];



const DestinationDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/destinations/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();

  const destination: Destination = await res.json();

  console.log(destination)

  const rating = destination.rating ?? 4.9;
  const reviews = destination.reviews ?? 234;
  const highlights = destination.highlights ?? DEFAULT_HIGHLIGHTS;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-2">
          
            
          <EditDestinationDialog destination={destination}/>
         <DeleteDestinationDialog id={destination._id}/>
          
        </div>
      </div>

      {/* Hero image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="mt-4 aspect-[16/7] w-full rounded-lg object-cover"
      />

      {/* Content */}
      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        {/* Left column */}
        <div>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3.5" />
            {destination.country}
          </p>

          <h1 className="font-heading mt-2 text-4xl font-light tracking-wide sm:text-5xl">
            {destination.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4">
            <p className="flex items-center gap-1.5 text-sm">
              <Star className="size-4 fill-green-500 text-green-500" />
              <span className="font-semibold">{rating}</span>
              <span className="text-muted-foreground">({reviews} reviews)</span>
            </p>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <CalendarDays className="size-4" />
              {destination.duration}
            </p>
          </div>

          <h2 className="mt-8 text-lg font-semibold">Overview</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {destination.description ||
              "Discover the magic of this destination with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets."}
          </p>

          <h2 className="mt-8 text-lg font-semibold">Highlights</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Discover the magic of this destination with pristine beaches,
            ancient temples, and vibrant culture. Experience luxury resorts,
            tropical landscapes, and unforgettable sunsets.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-sm">
                <Check className="size-4 shrink-0 text-green-500" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — booking card */}
        <BookingCard destination={destination}  />
       
      </div>
    </section>
  );
};

export default DestinationDetailsPage;
