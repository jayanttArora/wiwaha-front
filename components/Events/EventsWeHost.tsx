import React from "react";
import Image from "next/image";

const EventsWeHost = () => {
  return (
    <section className="mb-6 bg-[#F3EEEA] mt-(--navbar-height)">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px] relative overflow-hidden rounded-[10px] py-20 group">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/events/eventsWeHost/bg.png"
            alt="Background"
            fill
            className="object-cover transition-transform duration-500 scale-110 group-hover:scale-100 cursor-pointer"
          />
        </div>

        <div className="relative z-10">
          {/* Main Heading */}
          <h2 className="max-w-[1100px] mx-auto font-prata font-normal text-[64px] text-[#FFFFFF] text-center mb-2">
            Events We Host
          </h2>

          {/* Sub-heading */}
          <p className="max-w-[900px] mx-auto font-roboto font-normal text-[20px] text-[#FFFFFF] text-center mb-8">
            From intimate ceremonies to grand celebrations, Wiwaha by Praman is
            the perfect venue for all your special occasions
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventsWeHost;
