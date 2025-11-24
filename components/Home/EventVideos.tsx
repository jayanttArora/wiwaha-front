"use client";

import React from "react";

const EventVideos = () => {
  return (
    <section className="bg-about-bg py-16">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-center font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-6">
          Event Videos
        </h1>

        {/* Sub-heading */}
        <p className="text-center font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#9D7336] mb-16 mx-auto max-w-[600px]">
          See all the memories on cloud
        </p>

        {/* Video content will go here */}
        <div className="flex justify-center items-center">
          {/* Placeholder for video content */}
          <p className="text-center text-[#505050] font-roboto">
            Video content coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventVideos;
