import React from "react";
import EventsWeHost from "@/components/Events/EventsWeHost";
import { Navbar, WeddingEvents, Footer } from "@/components";

const EventsPage = () => {
  return (
    <main className="bg-about-bg">
      <Navbar />
      <EventsWeHost />
      <WeddingEvents />
      <Footer />
    </main>
  );
};

export default EventsPage;
