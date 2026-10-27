"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image: "/assets/person1.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/assets/person2.png",
  },
  {
    quote:
      '"The Patagonia Trek Was An Epic Journey Through Untouched Wilderness. Every Campsite Felt Like A Private Paradise."',
    name: "Sofia Reyes",
    location: "Madrid, Spain",
    // PLACEHOLDER: reuses person2.png until a third portrait photo is added to /public/assets
    image: "/assets/person2.png",
  },
  {
    quote:
      '"Our Japanese Countryside Tour Was Peaceful And Eye-Opening. The Cherry Blossom Season Timing Was Flawless."',
    name: "Marco Rossi",
    location: "Milan, Italy",
    // PLACEHOLDER: reuses person1.png until a fourth portrait photo is added to /public/assets
    image: "/assets/person1.png",
  },
];

export function Testimonials() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="relative mx-auto max-w-6xl px-6 py-16 md:px-10">
      {/* Heading + carousel controls (controls live inside <Carousel> for context) */}
      <div className="flex items-center justify-between gap-6">
        <div>
          <h2 className="font-serif text-4xl text-foreground md:text-5xl">
            What Travelers Say
          </h2>
          <p className="mt-2 text-xs text-muted-foreground">
            Real experiences from our happy travelers
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <CarouselPrevious className="static left-auto top-auto bottom-auto right-auto my-0" />
          <CarouselNext className="static left-auto top-auto bottom-auto right-auto my-0" />
        </div>
      </div>

      {/* Testimonial cards */}
      <CarouselContent className="mt-10">
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.name} className="basis-full md:basis-1/2">
            <article className="flex h-full border border-border bg-white">
              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {testimonial.quote}
                </p>
                <div className="mt-6">
                  <p className="text-sm text-cyan-600">
                    <span aria-hidden>— </span>
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="relative hidden w-32 shrink-0 sm:block md:w-36">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
