import type { Metadata } from "next";
import { Navbar } from "@/components";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Wiwaha - Amenities",
  description: "Discover our amenities",
};

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <ComingSoon />
    </div>
  );
}
