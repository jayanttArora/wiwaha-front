import React from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-about-bg py-16">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h1 className="text-center font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-6">
          Why Choose Wiwaha
        </h1>

        {/* Sub-heading */}
        <p className="text-center font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#9D7336] mb-[124px] mx-auto max-w-[600px]">
          Balinese-inspired charm paired with expert planning for a stress-free,
          stunning celebration
        </p>

        {/* Flex-row container */}
        <div className="flex flex-row gap-8">
          {/* Left: flex-row container */}
          <div className="flex flex-row">
            {/* Box with Essence of Wiwaha */}
            <div className="w-[500px] h-[500px] rounded-[20px] bg-[#EDE5DE] flex flex-col justify-start p-8 relative overflow-hidden">
              {/* Background image positioned at bottom-right */}
              <div className="absolute bottom-0 right-0 w-[350px] h-[350px]">
                <Image
                  src="/images/home/whyChooseUs/bg1.png"
                  alt="Background"
                  fill
                  className="object-cover object-bottom-right"
                  style={{ objectPosition: "bottom right" }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Heading */}
                <h2 className="text-left font-prata font-normal text-[48px] text-[#4C5637] mb-4">
                  Essence of Wiwaha
                </h2>

                {/* Text */}
                <p className="max-w-[325px] text-left font-roboto font-normal text-[16px] leading-[24px] text-[#505050]">
                  The essence of Wiwaha lies in its thoughtful harmony of
                  elegant spaces, tranquil surroundings, and heartfelt
                  hospitality. It is a venue where moments slow down, emotions
                  take center stage, and every celebration becomes a beautiful
                  memory.
                </p>
              </div>
            </div>

            {/* Red box overlapping on the right */}
            <div className="w-[380px] h-[560px] bg-about-bg border border-red-500 rounded-[999px] relative -ml-[100px] -mt-[90px] z-20 p-[15px] overflow-hidden">
              {/* Inner container with image */}
              <div className="w-full h-full rounded-[999px] overflow-hidden relative">
                <Image
                  src="/images/home/whyChooseUs/img1.png"
                  alt="Why Choose Us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right box */}
          <div className="w-[320px]">
            {/* Right box content can be added here */}
          </div>
        </div>
      </div>
    </section>
  );
}
