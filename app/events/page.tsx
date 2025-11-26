import React from "react";
import EventsWeHost from "@/components/Events/EventsWeHost";
import PlanYourEvent from "@/components/Events/PlanYourEvent";
import { Navbar, WeddingEvents, Footer } from "@/components";

const EventsPage = () => {
  return (
    <main className="bg-about-bg">
      <Navbar />
      <EventsWeHost />
      <WeddingEvents />
      <PlanYourEvent />
      <Footer />
    </main>
  );
};

export default EventsPage;
