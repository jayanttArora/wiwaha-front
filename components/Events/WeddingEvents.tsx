import React from "react";

const WeddingEvents = () => {
  return (
    <section className="container mx-auto w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px] flex flex-col gap-10 py-10">
      {/* Intro */}
      <div className="w-full flex flex-col lg:flex-row gap-8 items-center justify-between">
        {/* Column 1: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/events/weddingEvents/intro.jpg"
            alt="Wedding Events Intro"
            className="w-full h-[340px] object-cover rounded-[10px] opacity-95"
          />
        </div>

        {/* Column 2: Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 pr-4">
          {/* Row 1: Heading */}
          <h2 className="font-prata font-normal text-[40px] text-[#4C5637] text-left">
            Wedding Events
          </h2>

          {/* Row 2: Description */}
          <p className="font-roboto font-normal text-[16px] tracking-[1.4px] text-[#505050] text-left">
            Create your dream wedding with our bespoke services, from intimate
            ceremonies to grand celebrations. Our Balinese-inspired venue
            provides the perfect backdrop for your special day.
          </p>

          {/* Row 3: 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#EDE3D9]">
            {/* Col 1 Row 1 */}
            <div className="flex items-center gap-3">
              <img src="/icons/brown-tick.svg" alt="tick" className="w-5 h-5" />
              <span className="font-roboto font-normal text-[16px] tracking-[1.4px] text-[#505050] text-left">
                Customizable ceremony spaces
              </span>
            </div>

            {/* Col 2 Row 1 */}
            <div className="flex items-center gap-3">
              <img src="/icons/brown-tick.svg" alt="tick" className="w-5 h-5" />
              <span className="font-roboto font-normal text-[16px] tracking-[1.4px] text-[#505050] text-left">
                Bridal suites
              </span>
            </div>

            {/* Col 1 Row 2 */}
            <div className="flex items-center gap-3">
              <img src="/icons/brown-tick.svg" alt="tick" className="w-5 h-5" />
              <span className="font-roboto font-normal text-[16px] tracking-[1.4px] text-[#505050] text-left">
                Professional coordination
              </span>
            </div>

            {/* Col 2 Row 2 */}
            <div className="flex items-center gap-3">
              <img src="/icons/brown-tick.svg" alt="tick" className="w-5 h-5" />
              <span className="font-roboto font-normal text-[16px] tracking-[1.4px] text-[#505050] text-left">
                Reception areas
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="w-full">{/* Placeholder for Events List */}</div>
    </section>
  );
};

export default WeddingEvents;
