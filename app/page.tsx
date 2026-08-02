import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

import WhatWeDo from "@/components/what-we-do";
import RealResults from "@/components/real-results";

import StudioImages from "@/components/studio-iamges";

import StudioPricing from "@/components/studio-pricing";
import StudioShop from "@/components/studio-shop";
import Reviews from "@/components/reviews";
import LocationContact from "@/components/location-contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <RealResults />
      <StudioImages />
      <StudioPricing />
      <StudioShop />
      <Reviews />
      <LocationContact />
      <Footer />
    </main>
  );
}
