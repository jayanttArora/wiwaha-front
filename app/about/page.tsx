import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import Hero from "@/components/AboutUs/Hero";
import OurStory from "@/components/AboutUs/OurStory";
import Values from "@/components/AboutUs/Values";
import PlanYourEvent from "@/components/AboutUs/PlanYourEvent";

export const metadata: Metadata = {
  title: "Wiwaha",
  description: "Learn about our story and journey",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <Hero />
      <OurStory />
      <Values />
      <PlanYourEvent />
      <Footer />
    </div>
  );
}
