import Image from "next/image";

export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden">
              <Image
                src="/images/store-interior.jpg"
                alt="Inside Castaways Ice Cream shop with signature blue walls"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-[44px] -z-10" />
          </div>

          {/* Right: Story */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3">
              The Process
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-black mb-8 leading-tight">
              Made in
              <br />
              Hawai&#x02BB;i<span className="text-accent">.</span>
            </h2>

            <div className="space-y-6 text-secondary/60 leading-relaxed">
              <p>
                Castaways Ice Cream was born from a simple passion. Owner Robert
                Duong, a medical doctor by profession, had always dreamed of
                creating the perfect scoop. &ldquo;We&apos;ve been wanting to do this
                forever,&rdquo; he says. When the opportunity came to open a shop in
                the Mo&#x02BB;ili&#x02BB;ili neighborhood on South King Street, he took the leap.
              </p>
              <p>
                Every batch starts with premium, real ingredients. Real
                ceremonial-grade matcha. Actual cookies, not cookie-flavored
                paste. Genuine fresh mango when it&apos;s in season. The ice cream is
                churned and then frozen in a blast freezer within three to four
                hours, locking in a creamy texture that you can taste in every
                single scoop.
              </p>
              <p>
                The waffle cones are baked fresh in-house daily, filling the shop
                with that warm, buttery aroma that customers say they can smell
                from the street. With 30+ rotating flavors, from classic vanilla
                bean to unique creations like pandan coconut and blackberry pie,
                there&apos;s always something new to discover. And yes, unlimited
                complimentary samples before you decide.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="w-12 h-0.5 bg-primary" />
              <p className="text-sm font-bold text-secondary/40 tracking-wide uppercase">
                Est. 2025 &middot; Honolulu, HI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
