"use client";

import React from "react";
import Image from "next/image";
import { useLazyLoadSection } from "@/hooks/useLazyLoadSection";
import { preloadNextImages } from "@/utils/preloadImages";

export default function Discover() {
  // Preload images when section is approaching
  const { sectionRef } = useLazyLoadSection({
    rootMargin: "300px",
    onVisible: () => {
      // Preload images for this section and next 3 sections
      preloadNextImages([
        "/images/home/discover/img1.png",
        "/images/home/discover/img2.png",
        "/images/home/discover/img3.png",
        "/bgRings/brown-ring-N-big.svg",
        // Next sections (WhatWeOffer)
        "/bgRings/brown-ring-W.svg",
        // Next sections (WhyChooseUs)
        "/images/home/whyChooseUs/bg1.png",
        "/images/home/whyChooseUs/img1.png",
        "/images/home/whyChooseUs/collage1.jpg",
        // Next sections (Pictures - first few)
        "/images/home/pictures/img1.jpeg",
        "/images/home/pictures/img2.jpeg",
        "/images/home/pictures/img3.jpeg",
      ]);
    },
  });

  return (
    <section ref={sectionRef} className="bg-about-bg py-20">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Headings with Background Image */}
        <div className="relative mb-16">
          {/* Background Image - Centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto pointer-events-none z-0">
            <Image
              src="/bgRings/brown-ring-N-big.svg"
              alt=""
              width={180}
              height={180}
              className="object-contain"
              loading="lazy"
            />
          </div>

          {/* Main Heading */}
          <h1 className="relative z-10 text-center font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-6">
            Discover Wiwaha
          </h1>

          {/* Sub-heading */}
          <p className="relative z-10 text-center font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#9D7336] mx-auto max-w-[600px]">
            A perfect blend of traditional Balinese elegance and modern luxury
          </p>
        </div>

        {/* Flex Container with 3 boxes */}
        <div className="flex flex-row justify-center gap-8">
          {/* Left Box - HISTORY */}
          <div
            className="w-[420px] h-[660px] flex flex-col mt-[50px] transition-shadow duration-300 hover:shadow-md cursor-pointer"
            style={{
              borderTopLeftRadius: "300px",
              borderTopRightRadius: "300px",
            }}
          >
            {/* Image Container */}
            <div
              className="h-[350px] w-full bg-gray-200 overflow-hidden relative"
              style={{
                borderTopLeftRadius: "300px",
                borderTopRightRadius: "300px",
              }}
            >
              <Image
                src="/images/home/discover/img1.png"
                alt="History"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Text Container */}
            <div className="flex-1 bg-[#ede3d9] p-8 flex flex-col justify-center">
              <h3 className="text-center font-prata font-normal text-[18px] leading-[100%] 480:text-[20px] 650:text-[24px] 1080:text-[28px] 1440:text-[32px] tracking-[0%] text-[#4C5637] mb-6">
                HISTORY
              </h3>
              <p className="font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[0%] text-[#7C836C] text-center">
                Praman Group established in 2002 has been hosting countless
                weddings and events in Bangalore. Our newest Balinese-themed
                luxury venue Wiwaha provides a unique and unforgettable
                experience for all occasions.
              </p>
            </div>
          </div>

          {/* Middle Box - SPACES */}
          <div
            className="w-[420px] h-[830px] flex flex-col transition-shadow duration-300 hover:shadow-md cursor-pointer"
            style={{
              borderTopLeftRadius: "300px",
              borderTopRightRadius: "300px",
            }}
          >
            {/* Image Container */}
            <div
              className="h-[550px] w-full bg-gray-200 overflow-hidden relative"
              style={{
                borderTopLeftRadius: "300px",
                borderTopRightRadius: "300px",
              }}
            >
              <Image
                src="/images/home/discover/img2.png"
                alt="Spaces"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Text Container */}
            <div className="flex-1 bg-[#ede3d9] p-8 flex flex-col justify-center">
              <h3 className="text-center font-prata font-normal text-[18px] leading-[100%] 480:text-[20px] 650:text-[24px] 1080:text-[28px] 1440:text-[32px] tracking-[0%] text-[#4C5637] mb-6">
                SPACES
              </h3>
              <p className="font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[0%] text-[#7C836C] text-center">
                We offer a variety of indoor and outdoor spaces for your
                ceremony and reception, including a beautiful garden, pool area,
                deck area, enclosed roof area, amphitheatre and two kitchens.
              </p>
            </div>
          </div>

          {/* Right Box - SERVICES */}
          <div
            className="w-[420px] h-[660px] flex flex-col mt-[50px] transition-shadow duration-300 hover:shadow-md cursor-pointer"
            style={{
              borderTopLeftRadius: "300px",
              borderTopRightRadius: "300px",
            }}
          >
            {/* Image Container */}
            <div
              className="h-[350px] w-full bg-gray-200 overflow-hidden relative"
              style={{
                borderTopLeftRadius: "300px",
                borderTopRightRadius: "300px",
              }}
            >
              <Image
                src="/images/home/discover/img3.png"
                alt="Services"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Text Container */}
            <div className="flex-1 bg-[#ede3d9] p-8 flex flex-col justify-center">
              <h3 className="text-center font-prata font-normal text-[18px] leading-[100%] 480:text-[20px] 650:text-[24px] 1080:text-[28px] 1440:text-[32px] tracking-[0%] text-[#4C5637] mb-6">
                SERVICES
              </h3>
              <p className="font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[0%] text-[#7C836C] text-center">
                We provide end-to-end services for all types of events from
                intimate to lavish affairs. We offer luxury services with the
                option of fully tailoring your events to meet your every
                requirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
