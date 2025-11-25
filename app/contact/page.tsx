import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import ContactUs from "@/components/Contact/ContactUs";

export const metadata: Metadata = {
  title: "Wiwaha",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-about-bg">
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
}
