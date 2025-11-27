"use client";

import React from "react";
import Image from "next/image";

export default function AddServices() {
  const offerings = [
    {
      image: "/images/amenities/addServices/coordination.svg",
      heading: "Event Coordination",
      text: "Professional event planners to manage every detail of your celebration",
    },
    {
      image: "/images/amenities/addServices/bridal.svg",
      heading: "Bridal Suites",
      text: "Elegant preparation rooms for the wedding party",
    },
    {
      image: "/images/amenities/addServices/climate.svg",
      heading: "Climate Control",
      text: "Air-conditioned indoor spaces for guest comfort",
    },
    {
      image: "/images/amenities/addServices/decor.svg",
      heading: "Decor Customization",
      text: "Flexible spaces that can be tailored to your theme and vision",
    },
  ];

  return (
    <section className="bg-about-bg py-20 pb-24 relative overflow-hidden">
      {/* Background Image - Top Right */}
      <div className="absolute top-0 right-0 w-auto h-auto pointer-events-none z-0">
        <Image
          src="/bgRings/brown-ring-W.svg"
          alt=""
          width={200}
          height={200}
          className="object-contain"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h1 className="text-center font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-6">
          Additional Services
        </h1>

        {/* Sub-heading */}
        <p className="text-center font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#9D7336] mb-16">
          Beyond event planning, we offer extra services designed to make your
          experience seamless and stress-free. From creative setups to full
          technical support, we've got you covered.
        </p>

        {/* Flex Container with 4 boxes */}
        <div className="flex flex-col 650:flex-row 650:flex-wrap 1080:flex-nowrap justify-start gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-[#EAE0D7] w-full aspect-square 650:w-[calc(50%-16px)] 1080:w-[300px] 1440:w-[400px] flex flex-col p-6 relative rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 overflow-hidden"
            >
              {/* Content wrapper with relative z-index */}
              <div className="relative z-10 flex flex-col h-full items-center justify-center gap-4">
                {/* Image above heading - horizontally centered */}
                <div className="flex justify-center">
                  <Image
                    src={offering.image}
                    alt={offering.heading}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Heading - centered */}
                <h3 className="text-center font-prata font-normal text-[20px] text-[#4C5637]">
                  {offering.heading}
                </h3>

                {/* Text - centered */}
                <p className="text-center font-roboto font-normal text-[14px] text-[#505050]">
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
