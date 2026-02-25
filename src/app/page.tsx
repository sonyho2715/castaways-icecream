import Hero from "@/components/sections/Hero";
import TodaysFlavors from "@/components/sections/TodaysFlavors";
import ReviewMarquee from "@/components/sections/ReviewMarquee";
import WhyPeopleLoveUs from "@/components/sections/WhyPeopleLoveUs";
import FlavorGrid from "@/components/sections/FlavorGrid";
import StorySection from "@/components/sections/StorySection";
import LocationCards from "@/components/sections/LocationCards";
import InstagramFeed from "@/components/sections/InstagramFeed";
import FacebookFeed from "@/components/sections/FacebookFeed";
import ShippingBenefits from "@/components/sections/ShippingBenefits";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <TodaysFlavors />
      <ReviewMarquee />
      <WhyPeopleLoveUs />
      <FlavorGrid />
      <StorySection />
      <LocationCards />
      <InstagramFeed />
      <FacebookFeed />
      <Newsletter />
      <ShippingBenefits />
    </main>
  );
}
