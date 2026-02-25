import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { locations } from "@/data/locations";
import Image from "next/image";

export default function LocationCards() {
  return (
    <section id="visit" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Visit Us
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-black mb-4">
            Come say aloha<span className="text-accent">.</span>
          </h2>
          <p className="text-secondary/50 max-w-md mx-auto">
            Walk in, try unlimited free samples, and find your new favorite
            flavor. Near UH M&#x0101;noa campus.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-2xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-[40px] p-8 md:p-12 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500 group"
            >
              {/* Store photo */}
              <div className="relative aspect-video rounded-[24px] overflow-hidden mb-8">
                <Image
                  src="/images/yelp/photo-05-interior-2.jpg"
                  alt="Inside Castaways Ice Cream"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: loc.accentColor + "15" }}
                >
                  <MapPin
                    size={18}
                    style={{ color: loc.accentColor }}
                  />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black">
                  {loc.name}
                </h3>
              </div>

              {/* Address */}
              <div className="space-y-3 mb-6 text-sm text-secondary/60">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="shrink-0 mt-0.5 text-secondary/30" />
                  <span>
                    {loc.address}
                    <br />
                    {loc.city}, {loc.state} {loc.zip}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="shrink-0 text-secondary/30" />
                  <a
                    href={`tel:${loc.phone.replace(/[^\d]/g, "")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={14} className="shrink-0 mt-0.5 text-secondary/30" />
                  <div>
                    <p>Mon-Thu: {loc.hours.monday}</p>
                    <p>Fri: {loc.hours.friday}</p>
                    <p>Sat: {loc.hours.saturday}</p>
                    <p>Sun: {loc.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Student Discount */}
              {loc.studentDiscount && (
                <div className="mb-8 p-4 rounded-2xl bg-slate100 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">&#x1F393;</span>
                    <div>
                      <p className="font-bold text-secondary text-sm">
                        {loc.studentDiscount.school}
                      </p>
                      <p className="text-primary font-black text-lg">
                        {loc.studentDiscount.offer}
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        {loc.studentDiscount.requirement}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Map */}
              <div className="rounded-[24px] overflow-hidden mb-6 aspect-video bg-slate200">
                <iframe
                  src={loc.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of Castaways Ice Cream ${loc.name}`}
                />
              </div>

              {/* Directions button */}
              <a
                href={loc.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center py-4 rounded-full font-bold text-sm tracking-wide text-white transition-all hover:shadow-lg bg-primary hover:bg-primary/90"
              >
                Get Directions
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
