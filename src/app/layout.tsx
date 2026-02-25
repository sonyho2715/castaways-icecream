import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import FloatingPillNav from "@/components/layout/FloatingPillNav";
import FloatingMenuButton from "@/components/layout/FloatingMenuButton";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ChatWidget";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://castawaysicecream.vercel.app'),
  title: "Castaways Ice Cream | Homemade in Honolulu",
  description:
    "Super-premium homemade ice cream in Mo\u02BBili\u02BBili, near UH M\u0101noa. 30+ rotating flavors, fresh waffle cones, made in small batches with real ingredients. 10% student discount.",
  keywords: [
    "ice cream",
    "Honolulu",
    "Hawaii",
    "homemade",
    "Moiliili",
    "UH Manoa",
    "waffle cones",
    "student discount",
  ],
  openGraph: {
    title: "Castaways Ice Cream | Homemade in Honolulu",
    description:
      "Not store-bought. Not factory-made. Homemade. 30+ rotating flavors, fresh waffle cones, made in small batches with real ingredients.",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "IceCreamShop",
  "name": "Castaways Ice Cream",
  "description": "Super-premium homemade ice cream in Mo\u02BBili\u02BBili, Honolulu. 30+ rotating flavors, fresh waffle cones, made in small batches.",
  "url": "https://castawaysicecream.vercel.app",
  "telephone": "+18087441001",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2346 South King St",
    "addressLocality": "Honolulu",
    "addressRegion": "HI",
    "postalCode": "96826",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.2965,
    "longitude": -157.8324
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"], "opens": "14:00", "closes": "22:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday"], "opens": "14:00", "closes": "23:59" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "12:00", "closes": "23:59" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "12:00", "closes": "22:00" }
  ],
  "priceRange": "$$",
  "servesCuisine": "Ice Cream",
  "image": "https://castawaysicecream.vercel.app/images/castaways-logo.jpg",
  "sameAs": [
    "https://www.instagram.com/castawaysicecream/",
    "https://www.yelp.com/biz/castaways-ice-cream-honolulu"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${jakarta.variable} font-[family-name:var(--font-jakarta)] antialiased bg-cream text-secondary`}
      >
        <AnnouncementBar />
        <Navbar />
        <FloatingPillNav />
        <FloatingMenuButton />
        <MobileMenu />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
