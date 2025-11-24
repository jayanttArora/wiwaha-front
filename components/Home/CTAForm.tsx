"use client";

import React from "react";

const CTAForm = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#EDE3D9" }}>
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h1 className="text-left font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-6">
          Say Hi To Your Planner
        </h1>

        {/* Sub-heading */}
        <p className="text-left font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#9D7336] mb-16">
          Ask whatever you need
        </p>

        {/* Form content will go here */}
        <div className="flex justify-start items-center">
          <p className="text-left text-[#505050] font-roboto">
            Form content coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
