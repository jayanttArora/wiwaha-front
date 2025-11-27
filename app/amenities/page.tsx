import type { Metadata } from "next";
import { Navbar } from "@/components";
import OurAmenities from "@/components/Amenities/OurAmenities";

export const metadata: Metadata = {
  title: "Wiwaha",
  description: "Discover our amenities",
};

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <OurAmenities />
    </div>
  );
}
