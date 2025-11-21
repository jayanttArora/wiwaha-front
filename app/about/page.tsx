import type { Metadata } from "next";
import { Navbar } from "@/components";
import Hero from "@/components/AboutUs/Hero";

export const metadata: Metadata = {
  title: "About Us - Our Story",
  description: "Learn about our story and journey",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <Hero />
    </div>
  );
}
