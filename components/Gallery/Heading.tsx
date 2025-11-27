import React from "react";

const Heading = () => {
  return (
    <section className="bg-[#F3EEEA] pt-[calc(var(--navbar-height)+32px)] pb-20">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h2 className="font-prata font-normal text-[64px] text-[#4C5637] text-center mb-6">
          Our Gallery
        </h2>

        {/* Description Text */}
        <p className="font-roboto font-normal text-[20px] tracking-[1.4px] text-[#9D7336] text-center">
          A glimpse into the events we've brought to life. Every photo reflects our commitment to detail, design, and unforgettable experiences.
        </p>
      </div>
    </section>
  );
};

export default Heading;

