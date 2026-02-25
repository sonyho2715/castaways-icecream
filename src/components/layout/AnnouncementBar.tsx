import { socialLinks } from "@/data/social";

export default function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-50 bg-secondary text-white py-2.5 text-center">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase">
        Handcrafted in Moiliili &amp; Waikiki.{" "}
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          Follow us on Instagram
        </a>{" "}
        for today&apos;s flavors
      </p>
    </div>
  );
}
