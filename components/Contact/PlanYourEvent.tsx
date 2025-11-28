import React from "react";
import Image from "next/image";

const PlanYourEvent = () => {
  return (
    <section className="1440:py-20 1080:py-18 850:py-16 650:py-14 py-12 1440:mb-6 1080:mb-6 850:mb-5 650:mb-4 mb-4 bg-[#4C5637] relative overflow-hidden rounded-[10px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 rounded-[10px] overflow-hidden">
        <Image
          src="/images/contact/plan/bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto 1440:px-4 1080:px-4 850:px-4 650:px-3 px-3 relative z-10">
        {/* Main Heading */}
        <h2 className="max-w-[1100px] mx-auto font-prata font-normal 1440:text-[64px] 1080:text-[52px] 850:text-[40px] 650:text-[34px] text-[26px] text-[#FFFFFF] text-center 1440:mb-2 1080:mb-2 850:mb-2 650:mb-2 mb-2">
          Create Unforgettable Moments With Expert Event Planning
        </h2>

        {/* Sub-heading */}
        <p className="max-w-[900px] mx-auto font-roboto font-normal 1440:text-[20px] 1080:text-[18px] 850:text-[16px] 650:text-[15px] text-[13px] text-[#FFFFFF] text-center 1440:mb-8 1080:mb-6 850:mb-5 650:mb-4 mb-4">
          From weddings and concerts to corporate seminars and birthdays — we
          bring your vision to life with seamless planning, stunning setups, and
          hassle-free execution.
        </p>

        {/* Button */}
        <div className="flex justify-center 1440:mt-[100px] 1080:mt-[80px] 850:mt-[60px] 650:mt-[40px] mt-[30px]">
          <button
            type="button"
            className="bg-transparent border-0 font-roboto font-medium 1440:text-[28px] 1080:text-[24px] 850:text-[20px] 650:text-[17px] text-[15px] text-[#FFFFFF] cursor-pointer hover:opacity-80 transition-opacity flex items-center 1440:tracking-[2.6px] 1080:tracking-[2.4px] 850:tracking-[2.2px] 650:tracking-[2px] tracking-[1.8px]"
          >
            <Image
              src="/bgRings/brown-ring-CTA.svg"
              alt="Plan Your Event icon"
              width={120}
              height={120}
              className="1440:h-[110px] 1080:h-[90px] 850:h-[72px] 650:h-[60px] h-[50px] 1440:-m-[25px] 1080:-m-[30px] 850:-m-[36px] 650:-m-[40px] -m-[44px]"
            />
            PLAN YOUR EVENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanYourEvent;
