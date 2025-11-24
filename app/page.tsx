import { Hero, Discover, WhatWeOffer, Reach, WhyChooseUs, Pictures, Navbar, FAQs, Testimonials, EventVideos, CTAForm } from "@/components";

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
      <Testimonials />
      <EventVideos />
      <CTAForm />
    </div>
  );
}
