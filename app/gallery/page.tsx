import type { Metadata } from "next";
import { Navbar } from "@/components";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Wiwaha - Gallery",
  description: "View our gallery",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <ComingSoon />
    </div>
  );
}
