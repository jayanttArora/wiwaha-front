"use client";

import React from "react";
import Image from "next/image";
import { useLazyLoadSection } from "@/hooks/useLazyLoadSection";

const EventVideos = () => {
  // This is one of the last sections, so we just enable lazy loading
  const { sectionRef } = useLazyLoadSection({
    rootMargin: "300px",
  });

  return (
    <section ref={sectionRef} className="bg-about-bg pt-16 relative overflow-hidden">
      {/* Background Image - Top Left */}
      <div className="absolute top-0 left-0 w-auto h-auto pointer-events-none z-0">
        <Image
          src="/bgRings/brown-ring-E.svg"
          alt=""
          width={200}
          height={200}
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Headings Container with max-width */}
      <div className="relative z-10 container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h1 className="text-center font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-6">
          Event Videos
        </h1>

        {/* Sub-heading */}
        <p className="text-center font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#9D7336] mb-16 mx-auto max-w-[600px]">
          See all the memories on cloud
        </p>
      </div>

      {/* Event Video Image - Full Width */}
      <div className="w-full">
        <div className="relative w-full h-[600px] rounded-tl-[210px] rounded-tr-[210px] overflow-hidden">
          <Image
            src="/images/home/eventVideos/img1.png"
            alt="Event Video"
            fill
            className="object-cover"
            loading="lazy"
          />
          {/* Play Icon - Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/bgRings/white-ring-SE.svg"
              alt="Ring"
              width={320}
              height={320}
              className="absolute cursor-pointer"
              loading="lazy"
            />
            <Image
              src="/icons/play.svg"
              alt="Play"
              width={30}
              height={30}
              className="cursor-pointer"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventVideos;
