import { Headphones, Map, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <ShieldCheck className="size-7" />,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: <Map className="size-7" />,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: <Headphones className="size-7" />,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-[#d3edf4] px-4 py-12 text-center sm:py-16 dark:bg-primary/10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
          Why Choose Wanderlust
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          Your trusted partner for exceptional travel experiences
        </p>

        {/* Feature cards */}
        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 sm:mt-12 md:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <Card className="group/card gap-0 rounded-xl border-none py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex flex-col gap-4">
        {/* Icon */}
        <div className="flex size-12 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-colors duration-300 group-hover/card:bg-teal-600 group-hover/card:text-white dark:bg-teal-500/15 dark:text-teal-400 dark:group-hover/card:bg-teal-500 dark:group-hover/card:text-white">
          <span className="[&_svg]:size-6">{icon}</span>
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-lg font-medium text-foreground sm:text-xl">
            {title}
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
