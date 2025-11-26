"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useLazyLoadSection } from "@/hooks/useLazyLoadSection";
import { preloadNextImages } from "@/utils/preloadImages";

export default function WhatWeOffer() {
  // Preload images when section is approaching
  const { sectionRef } = useLazyLoadSection({
    rootMargin: "300px",
    onVisible: () => {
      // Preload images for next 3 sections
      preloadNextImages([
        // Current section hover images
        "/images/home/whatWeOffer/event-space.jpg",
        "/images/home/whatWeOffer/plan.jpg",
        "/images/home/whatWeOffer/esential.jpg",
        "/images/home/whatWeOffer/entertainment.jpg",
        // Next sections (WhyChooseUs)
        "/images/home/whyChooseUs/bg1.png",
        "/images/home/whyChooseUs/img1.png",
        "/images/home/whyChooseUs/collage1.jpg",
        "/bgRings/brown-ring-NE.svg",
        // Next sections (Pictures)
        "/images/home/pictures/img1.jpeg",
        "/images/home/pictures/img2.jpeg",
        "/images/home/pictures/img3.jpeg",
        "/images/home/pictures/img4.jpeg",
        "/bgRings/white-upper-curve-left.svg",
        "/bgRings/brown-ring-N-small.svg",
        // Next sections (Testimonials)
        "/images/home/testimonials/bg.png",
        "/images/home/testimonials/user1.png",
        "/images/home/testimonials/user2.png",
        "/images/home/testimonials/user3.png",
      ]);
    },
  });
  const offerings = [
    {
      number: "01.",
      heading: "Event Spaces",
      text: "Beautiful venues for every celebration.",
      image: "/images/home/whatWeOffer/event-space.jpg",
    },
    {
      number: "02.",
      heading: "Wedding Planning",
      text: "Seamless support from start to finish.",
      image: "/images/home/whatWeOffer/plan.jpg",
    },
    {
      number: "03.",
      heading: "Wedding Essentials",
      text: "Everything you need for your big day.",
      image: "/images/home/whatWeOffer/esential.jpg",
    },
    {
      number: "04.",
      heading: "Entertainment Services",
      text: "Capture moments and elevate the vibe.",
      image: "/images/home/whatWeOffer/entertainment.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-about-bg py-20 relative overflow-hidden">
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
        <h1 className="text-left font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-6">
          What We Offer
        </h1>

        {/* Sub-heading */}
        <p className="text-left font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#9D7336] mb-16">
          Where every detail is crafted with care to create moments that feel
          effortless, memorable, and beautifully curated
        </p>

        {/* Flex Container with 4 boxes */}
        <div className="flex flex-col 650:flex-row 650:flex-wrap 1080:flex-nowrap justify-start gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-[#EAE0D7] w-full aspect-square 650:w-[calc(50%-16px)] 1080:w-[300px] 1440:w-[400px] flex flex-col p-6 relative rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 overflow-hidden group"
            >
              {/* Background Image - appears on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-[20px]"
                style={{
                  backgroundImage: `url(${offering.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
              </div>

              {/* Content wrapper with relative z-index */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Number in top left */}
                <div className="font-prata font-normal text-[18px] leading-[22px] 480:text-[20px] 480:leading-[24px] 650:text-[24px] 650:leading-[29px] 1080:text-[28px] 1080:leading-[33px] 1440:text-[32px] 1440:leading-[38px] text-[#402502] group-hover:text-white transition-colors duration-300">
                  {offering.number}
                </div>

                {/* Content at bottom */}
                <div className="flex flex-col justify-end flex-1 gap-2">
                  {/* Heading */}
                  <h3 className="text-left font-prata font-normal text-[16px] leading-[20px] 480:text-[18px] 480:leading-[22px] 650:text-[20px] 650:leading-[25px] 1080:text-[22px] 1080:leading-[27px] 1440:text-[24px] 1440:leading-[30px] text-[#4C5637] group-hover:text-white transition-colors duration-300">
                    {offering.heading}
                  </h3>

                  {/* Text */}
                  <p className="text-left font-roboto font-normal text-[12px] leading-[18px] 480:text-[13px] 480:leading-[19px] 650:text-[14px] 650:leading-[21px] 1080:text-[15px] 1080:leading-[22px] 1440:text-[16px] 1440:leading-[24px] text-[#505050] group-hover:text-white/90 transition-colors duration-300 max-w-[200px]">
                    {offering.text}
                  </p>
                </div>
              </div>

              {/* Circle with arrow icon at bottom right */}
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-[#D2C094] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#C5B388] z-10">
                <ArrowUp className="h-6 w-6 text-white" strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
