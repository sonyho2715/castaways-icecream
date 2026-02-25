import Image from "next/image";

export default function WhyPeopleLoveUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Why people love us
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black">
            Not your average scoop<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-5">
          {/* Card 1: Homemade (2-col) */}
          <div className="md:col-span-2 relative bg-white rounded-[32px] p-10 overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute top-6 right-6 text-8xl opacity-5 select-none">
              &#x1F366;
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2">
                  The difference
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black mb-3">
                  Homemade in-house<span className="text-accent">.</span>
                </h3>
                <p className="text-secondary/50 text-sm max-w-md leading-relaxed">
                  Every batch is made from scratch in our shop with a blast
                  freezer that locks in creaminess within 3-4 hours. Real matcha,
                  actual cookies, genuine mango.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-tl-[40px] overflow-hidden opacity-80">
              <Image
                src="/images/yelp/photo-08-food-scoops.jpg"
                alt="Close up of ice cream scoops"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>

          {/* Card 2: 30+ flavors */}
          <div className="bg-secondary text-white rounded-[32px] p-10 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-500">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
              Variety
            </p>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-black mb-2">
                30+
              </h3>
              <p className="text-white/60 text-sm">
                Rotating flavors. From classic vanilla bean to pandan coconut and
                blackberry pie. New flavors every week.
              </p>
            </div>
          </div>

          {/* Card 3: Waffle cones */}
          <div className="relative rounded-[32px] overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/images/yelp/photo-14-food-trio.jpg"
              alt="Ice cream scoops with waffle cone"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-1">
                Waffle cones &amp; bowls
              </h3>
              <p className="text-white/80 text-sm">
                Baked fresh right here. You can smell them from the street.
              </p>
            </div>
          </div>

          {/* Card 4: Family-run (2-col) */}
          <div className="md:col-span-2 bg-white rounded-[32px] p-10 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-500">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2">
              The vibe
            </p>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black mb-4">
                Friendly, family-run vibe<span className="text-accent">.</span>
              </h3>
              <blockquote className="text-secondary/50 text-base italic leading-relaxed border-l-2 border-primary pl-6 max-w-lg">
                &ldquo;Family-run with so much aloha. The owner clearly cares about
                quality. Real matcha, real mango, no artificial stuff. This is how
                ice cream should be made.&rdquo;
                <span className="block text-xs text-secondary/30 mt-2 not-italic">
                  &mdash; Malia H., Google Review
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
