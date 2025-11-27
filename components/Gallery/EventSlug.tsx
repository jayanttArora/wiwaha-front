"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventSlug = () => {
  const totalEvents = 6;
  const visibleEvents = 4;
  const [startIndex, setStartIndex] = useState(0);

  const [buttonSize, setButtonSize] = useState("60");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setButtonSize("40");
      } else if (window.innerWidth < 1080) {
        setButtonSize("40");
      } else if (window.innerWidth < 1440) {
        setButtonSize("50");
      } else {
        setButtonSize("60");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = Array.from({ length: totalEvents }, (_, i) => ({
    id: i + 1,
    name: `Event Name ${String(i + 1).padStart(2, "0")}`,
    image: "/images/about/ourStory/imgC1R1.png",
  }));

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (startIndex < totalEvents - visibleEvents) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleEventsList = events.slice(
    startIndex,
    startIndex + visibleEvents
  );
  const showLeftArrow = startIndex > 0;
  const showRightArrow = startIndex < totalEvents - visibleEvents;

  return (
    <section className="flex flex-col py-8">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* All Events Section */}
        <div className="flex flex-col">
          {/* Buttons Row */}
          <div className="flex flex-row justify-between items-center 1440:mb-8 1080:mb-6">
            {/* Heading */}
            <h2 className="font-prata font-normal text-[40px] text-[#4C5637]">
              All Events
            </h2>

            {/* Navigation Buttons */}
            <div className="flex flex-row gap-4">
              {/* Left Arrow Button */}
              <button
                onClick={handleLeftClick}
                disabled={!showLeftArrow}
                className={`w-[${buttonSize}px] h-[${buttonSize}px] rounded-full bg-[#F3EEEA] border border-[#EDE3D9] flex items-center justify-center transition-colors cursor-pointer group ${
                  !showLeftArrow
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#4C5637] hover:border-[#4C5637] active:bg-[#4C5637] active:border-[#4C5637]"
                }`}
                aria-label="Previous events"
              >
                <ChevronLeft
                  className={`w-6 h-6 text-[#505050] transition-colors ${
                    !showLeftArrow
                      ? ""
                      : "group-hover:text-white group-active:text-white"
                  }`}
                />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleRightClick}
                disabled={!showRightArrow}
                className={`w-[${buttonSize}px] h-[${buttonSize}px] rounded-full bg-[#F3EEEA] border border-[#EDE3D9] flex items-center justify-center transition-colors cursor-pointer group ${
                  !showRightArrow
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#4C5637] hover:border-[#4C5637] active:bg-[#4C5637] active:border-[#4C5637]"
                }`}
                aria-label="Next events"
              >
                <ChevronRight
                  className={`w-6 h-6 text-[#505050] transition-colors ${
                    !showRightArrow
                      ? ""
                      : "group-hover:text-white group-active:text-white"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Images Row */}
          <div className="flex flex-row justify-between items-center gap-4">
            {visibleEventsList.map((event) => (
              <div key={event.id} className="flex flex-col flex-1">
                {/* Image Box */}
                <div className="w-full aspect-square rounded-[10px] overflow-hidden mb-4">
                  <Image
                    src={event.image}
                    alt={event.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Event Name */}
                <h3 className="text-center font-prata font-normal text-[20px] text-[#4C5637]">
                  {event.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSlug;
