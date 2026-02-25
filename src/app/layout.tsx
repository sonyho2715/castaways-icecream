import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import FloatingPillNav from "@/components/layout/FloatingPillNav";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${jakarta.variable} font-[family-name:var(--font-jakarta)] antialiased bg-cream text-secondary`}
      >
        <AnnouncementBar />
        <Navbar />
        <FloatingPillNav />
        <MobileMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
