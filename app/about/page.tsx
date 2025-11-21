import type { Metadata } from "next";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "About Us - Our Story",
  description: "Learn about our story and journey",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <div 
        className="text-center"
        style={{ paddingTop: "calc(var(--navbar-height) + 100px)" }}
      >
        <h1 className="font-prata font-normal text-[64px] leading-[100%] tracking-[0%] text-[#4C5637]">
          Our Story
        </h1>
      </div>
    </div>
  );
}
