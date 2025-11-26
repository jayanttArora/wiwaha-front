import React from "react";

const WeddingEvents = () => {
  return (
    <section className="container mx-auto w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px] flex flex-col gap-10 py-16">
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
      <div className="w-full flex flex-col gap-8">
        {/* Upper Grid: Images, Headings, and Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="w-full">
              <img
                src="/images/events/weddingEvents/corporate.jpg"
                alt="Corporate Events"
                className="w-full object-cover rounded-[10px]"
              />
            </div>

            {/* Heading and Description */}
            <div className="flex flex-col gap-4">
              <h3 className="font-prata font-normal text-[28px] text-[#4C5637] text-left">
                Corporate Events
              </h3>
              <p className="font-roboto font-normal text-[16px] tracking-[1.4px] text-[#505050] text-left">
                Host successful business events in an inspiring environment.
                From conferences to team-building retreats, our venue offers the
                perfect blend of professionalism and tranquility.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="w-full">
              <img
                src="/images/events/weddingEvents/private.jpg"
                alt="Private Celebrations"
                className="w-full object-cover rounded-[10px]"
              />
            </div>

            {/* Heading and Description */}
            <div className="flex flex-col gap-4">
              <h3 className="font-prata font-normal text-[28px] text-[#4C5637] text-left">
                Private Celebrations
              </h3>
              <p className="font-roboto font-normal text-[16px] tracking-[1.4px] text-[#505050] text-left">
                Celebrate life's milestones in style. Whether it's a birthday,
                anniversary, or any special occasion, we provide an
                unforgettable setting for your gathering.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="w-full">
              <img
                src="/images/events/weddingEvents/social.jpg"
                alt="Social Gatherings"
                className="w-full object-cover rounded-[10px]"
              />
            </div>

            {/* Heading and Description */}
            <div className="flex flex-col gap-4">
              <h3 className="font-prata font-normal text-[28px] text-[#4C5637] text-left">
                Social Gatherings
              </h3>
              <p className="font-roboto font-normal text-[16px] tracking-[1.4px] text-[#505050] text-left">
                Perfect for reunions, engagement parties, and social events. Our
                versatile spaces can accommodate intimate gatherings or larger
                celebrations.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Grid: Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-roboto font-normal text-[20px] text-[#4C5637] text-left">
              Key Features:
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Meeting facilities
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Catering services
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Breakout spaces
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Breakout spaces
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-roboto font-normal text-[20px] text-[#4C5637] text-left">
              Key Features:
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Flexible layouts
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Entertainment options
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Custom decor
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Full-service catering
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-roboto font-normal text-[20px] text-[#4C5637] text-left">
              Key Features:
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Indoor and outdoor spaces
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Ambient lighting
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Music systems
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icons/brown-tick.svg"
                  alt="tick"
                  className="w-5 h-5"
                />
                <span className="font-roboto font-normal text-[14px] tracking-[1.2px] text-[#505050] text-left">
                  Bar services
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents;
