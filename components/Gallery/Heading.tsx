import React from "react";

const Heading = () => {
  return (
    <section className="bg-[#F3EEEA] pt-[calc(var(--navbar-height)+32px)] 1440:pb-20 1080:pb-16 650:pb-12 480:pb-8 pb-6">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h2 className="font-prata font-normal 1440:text-[64px] 1080:text-[48px] 650:text-[40px] 480:text-[32px] text-[28px] text-[#4C5637] text-center 1440:mb-6 1080:mb-4 650:mb-3 480:mb-2 mb-1">
          Our Gallery
        </h2>

        {/* Description Text */}
        <p className="font-roboto font-normal 1440:text-[20px] 1080:text-[16px] 650:text-[14px] 480:text-[12px] text-[12px] tracking-[1.4px] text-[#9D7336] text-center">
          A glimpse into the events we've brought to life. Every photo reflects
          our commitment to detail, design, and unforgettable experiences.
        </p>
      </div>
    </section>
  );
};

export default Heading;
