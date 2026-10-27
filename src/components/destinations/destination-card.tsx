import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Destination = {
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

function PriceTag({ price }: { price: string | number }) {
  const amount = Number(price).toLocaleString("en-US");
  return (
    <p className="text-sm font-semibold sm:text-base">
      ${amount}
      <span className="text-[10px] font-normal text-muted-foreground">
        /Person
      </span>
    </p>
  );
}

export function DestinationCard({ destination }: { destination: Destination }) {
  const rating = destination.rating ?? 4.5;

  return (
    <Card className="gap-0 pt-0">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="aspect-[16/10] w-full object-cover"
        />
        <Badge
          className="absolute top-3 right-3 h-6 bg-white px-2.5 text-xs font-semibold text-foreground shadow-sm"
          variant="outline"
        >
          {rating}
          <Star data-icon="inline-end" className="fill-current" />
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-[10px] font-normal text-muted-foreground">
          <MapPin data-icon="inline-start" className="mt-0.5" />
          {destination.country}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base leading-snug font-semibold">
            {destination.name}
          </h3>
          <PriceTag price={destination.price} />
        </div>

        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="size-4" />
          {destination.duration}
        </p>
      </CardContent>

      <CardFooter className="bg-background">
        <Link
          href={`/destinations/${destination._id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-cyan-600 uppercase hover:text-cyan-700"
        >
          Book Now
          <ArrowUpRight className="size-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
