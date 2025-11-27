import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import OurAmenities from "@/components/Amenities/OurAmenities";
import List from "@/components/Amenities/List";
import AddServices from "@/components/Amenities/AddServices";
import PlanYourEvent from "@/components/Events/PlanYourEvent";

export const metadata: Metadata = {
  title: "Wiwaha",
  description: "Discover our amenities",
};

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <OurAmenities />
      <List />
      <AddServices />
      <PlanYourEvent />
      <Footer />
    </div>
  );
}
