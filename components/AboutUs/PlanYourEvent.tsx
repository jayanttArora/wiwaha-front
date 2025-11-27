import React from "react";
import Image from "next/image";

const PlanYourEvent = () => {
  return (
    <section className="py-20 mb-6 bg-[#4C5637] relative overflow-hidden rounded-[10px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 rounded-[10px] overflow-hidden">
        <Image
          src="/images/about/plan/plan.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <h2 className="max-w-[1100px] mx-auto font-prata font-normal text-[64px] text-[#FFFFFF] text-center mb-2">
          Create Unforgettable Moments With Expert Event Planning
        </h2>

        {/* Sub-heading */}
        <p className="max-w-[900px] mx-auto font-roboto font-normal text-[20px] text-[#FFFFFF] text-center mb-8">
          From weddings and concerts to corporate seminars and birthdays — we
          bring your vision to life with seamless planning, stunning setups, and
          hassle-free execution.
        </p>

        {/* Button */}
        <div className="flex justify-center mt-[100px]">
          <button
            type="button"
            className="bg-transparent border-0 font-roboto font-medium 1440:text-[28px] 1080:text-[24px] text-[#FFFFFF] cursor-pointer hover:opacity-80 transition-opacity flex items-center tracking-[2.6px]"
          >
            <Image
              src="/bgRings/brown-ring-CTA.svg"
              alt="Plan Your Event icon"
              width={120}
              height={120}
              className="1440:h-[110px] 1080:h-[90px] 1440:-m-[25px] 1080:-m-[30px]"
            />
            PLAN YOUR EVENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanYourEvent;
