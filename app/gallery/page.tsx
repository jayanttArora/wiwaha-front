import type { Metadata } from "next";
import { Navbar } from "@/components";
import Heading from "@/components/Gallery/Heading";
import Events from "@/components/Gallery/Events";

export const metadata: Metadata = {
  title: "Wiwaha",
  description: "View our gallery",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <Heading />
      <Events />
    </div>
  );
}
