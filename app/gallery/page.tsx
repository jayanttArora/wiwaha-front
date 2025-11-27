import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import Heading from "@/components/Gallery/Heading";
import GalleryContent from "@/components/Gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Wiwaha",
  description: "View our gallery",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <Heading />
      <GalleryContent />
      <Footer />
    </div>
  );
}
