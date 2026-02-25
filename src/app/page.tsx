import Hero from "@/components/sections/Hero";
import TodaysFlavors from "@/components/sections/TodaysFlavors";
import ReviewMarquee from "@/components/sections/ReviewMarquee";
import PressStrip from "@/components/sections/PressStrip";
import WhyPeopleLoveUs from "@/components/sections/WhyPeopleLoveUs";
import FlavorGrid from "@/components/sections/FlavorGrid";
import StorySection from "@/components/sections/StorySection";
import LocationCards from "@/components/sections/LocationCards";
import SocialFeed from "@/components/sections/SocialFeed";
import Newsletter from "@/components/sections/Newsletter";
import ShippingBenefits from "@/components/sections/ShippingBenefits";

export default function Home() {
  return (
    <main>
      <Hero />
      <TodaysFlavors />
      <ReviewMarquee />
      <PressStrip />
      <WhyPeopleLoveUs />
      <FlavorGrid />
      <StorySection />
      <LocationCards />
      <SocialFeed />
      <Newsletter />
      <ShippingBenefits />
    </main>
  );
}
