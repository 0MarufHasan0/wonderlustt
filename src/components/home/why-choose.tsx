import { Headphones, Map, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

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
    <section className="bg-[#d3edf4] text-center px-4 py-12">

      <h2 className="font-serif text-4xl text-foreground md:text-5xl">
          Why Choose Wanderlust
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Your trusted partner for exceptional travel experiences
        </p>
      <div className="mx-auto max-w-5xl border  px-8 pt-2 pb-16 text-center md:px-12">
        

        <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
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
    <div className="bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="text-cyan-600">{icon}</div>
      <h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
