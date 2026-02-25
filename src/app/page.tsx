import Hero from "@/components/sections/Hero";
import ReviewMarquee from "@/components/sections/ReviewMarquee";
import WhyPeopleLoveUs from "@/components/sections/WhyPeopleLoveUs";
import FlavorGrid from "@/components/sections/FlavorGrid";
import StorySection from "@/components/sections/StorySection";
import LocationCards from "@/components/sections/LocationCards";
import InstagramFeed from "@/components/sections/InstagramFeed";
import FacebookFeed from "@/components/sections/FacebookFeed";
import ShippingBenefits from "@/components/sections/ShippingBenefits";

export default function Home() {
  return (
    <main>
      <Hero />
      <ReviewMarquee />
      <WhyPeopleLoveUs />
      <FlavorGrid />
      <StorySection />
      <LocationCards />
      <InstagramFeed />
      <FacebookFeed />
      <ShippingBenefits />
    </main>
  );
}
