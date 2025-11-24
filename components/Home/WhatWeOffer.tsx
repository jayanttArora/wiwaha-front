import React from "react";

export default function WhatWeOffer() {
  const offerings = [
    {
      number: "01.",
      heading: "Event Spaces",
      text: "Beautiful venues for every celebration.",
    },
    {
      number: "02.",
      heading: "Wedding Planning",
      text: "Seamless support from start to finish.",
    },
    {
      number: "03.",
      heading: "Wedding Essentials",
      text: "Everything you need for your big day.",
    },
    {
      number: "04.",
      heading: "Entertainment Services",
      text: "Capture moments and elevate the vibe.",
    },
  ];

  return (
    <section className="bg-about-bg py-16">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h1 className="text-left font-prata font-normal text-[64px] leading-[100%] tracking-[0%] text-[#4C5637] mb-6">
          What We Offer
        </h1>

        {/* Sub-heading */}
        <p className="text-left font-roboto font-normal text-[20px] leading-[150%] tracking-[1.6px] text-[#9D7336] mb-16">
          Where every detail is crafted with care to create moments that feel
          effortless, memorable, and beautifully curated
        </p>

        {/* Flex Container with 4 boxes */}
        <div className="flex flex-row justify-start gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-[#EAE0D7] w-[300px] h-[300px] flex flex-col p-6 relative rounded-[20px]"
            >
              {/* Number in top left */}
              <div className="font-prata font-normal text-[32px] leading-[38px] text-[#402502]">
                {offering.number}
              </div>

              {/* Content at bottom */}
              <div className="flex flex-col justify-end flex-1 gap-2">
                {/* Heading */}
                <h3 className="text-left font-prata font-normal text-[24px] leading-[30px] text-[#4C5637]">
                  {offering.heading}
                </h3>

                {/* Text */}
                <p className="text-left font-roboto font-normal text-[16px] leading-[24px] text-[#505050]">
                  {offering.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
