import { IceCreamCone, Cookie, Heart } from "lucide-react";

export default function ShippingBenefits() {
  const benefits = [
    {
      icon: IceCreamCone,
      title: "Freshly made daily.",
      description:
        "Every batch is churned and blast-frozen in-house for maximum creaminess.",
    },
    {
      icon: Cookie,
      title: "Waffle cones baked in-house.",
      description:
        "Warm, buttery, and crispy. Made fresh throughout the day.",
    },
    {
      icon: Heart,
      title: "Family-run, local love.",
      description:
        "Small batches, real ingredients, and genuine aloha in every scoop.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white mb-5">
                <b.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-black mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-secondary/50 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
