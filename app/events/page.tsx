import React from "react";
import EventsWeHost from "@/components/Events/EventsWeHost";
import { Navbar, WeddingEvents } from "@/components";

const EventsPage = () => {
  return (
    <main>
      <Navbar />
      <EventsWeHost />
      <WeddingEvents />
    </main>
  );
};

export default EventsPage;
