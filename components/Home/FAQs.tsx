import React from "react";
import Image from "next/image";

export default function FAQs() {
  return (
    <section className="py-16" style={{ backgroundColor: "#f3eeea" }}>
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        <div className="flex flex-col 1080:flex-row gap-8 justify-between">
          {/* Left Box */}
          <div className="flex flex-col max-w-[400px]">
            {/* Heading */}
            <h2 className="font-prata font-normal text-[64px] leading-[100%] text-[#4C5637] max-w-[250px]">
              Frequently Asked Questions
            </h2>

            {/* Description Text */}
            <p className="font-dm-sans font-normal text-[16px] text-[#585858] mt-8 mb-8">
              Curious about drones or aerial photography? Our experts answer the
              most common questions to help you choose the right drone, master
              flying skills, and capture stunning shots with confidence and ease.
            </p>

            {/* Contact Button */}
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-[60px] h-[60px] rounded-full bg-[#D2C094] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icons/contact.svg"
                  alt="Contact"
                  width={18}
                  height={18}
                />
              </div>
              <span className="font-roboto font-medium text-[16px] text-[#4C5637]">
                CONTACT US
              </span>
            </div>
          </div>

          {/* Right Box (Placeholder) */}
          <div className="flex-1 bg-white/50 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
            <p className="text-[#4C5637] font-dm-sans">FAQs List will go here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
