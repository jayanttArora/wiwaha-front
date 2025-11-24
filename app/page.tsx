import { Hero, Discover, WhatWeOffer, Reach, WhyChooseUs, Pictures, Navbar, FAQs } from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Discover />
      <WhatWeOffer />
      <Reach />
      <WhyChooseUs />
      <Pictures />
      <FAQs />
    </div>
  );
}
