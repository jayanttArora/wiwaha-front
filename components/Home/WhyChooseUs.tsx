"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const images = [
    "/images/home/whyChooseUs/collage1.jpg",
    "/images/home/whyChooseUs/collage1.jpg",
    "/images/home/whyChooseUs/collage1.jpg",
  ];

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [images.length]);
  return (
    <section className="bg-about-bg py-20 relative overflow-hidden">
      {/* Background Image - Top Left */}
      <div className="absolute top-0 left-0 w-auto h-auto pointer-events-none z-0">
        <Image
          src="/bgRings/brown-ring-NE.svg"
          alt=""
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
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
        <div className="flex flex-row gap-20">
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

            {/* Gradient border - overlapping on the right */}
            <div
              className="w-[380px] h-[560px] rounded-[999px] relative -ml-[100px] -mt-[90px] z-20 p-px overflow-hidden"
              style={{
                background:
                  "linear-gradient(167deg, rgba(210, 192, 148, 1) 0%, rgba(210, 192, 148, 1) 10%, rgba(243, 238, 234, 1) 64%, rgba(243, 238, 234, 1) 100%)",
              }}
            >
              {/* Inner container with image */}
              <div className="w-full h-full rounded-[999px] overflow-hidden relative bg-about-bg p-[15px]">
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
          </div>

          {/* Collage box */}
          <div className="w-[320px] flex flex-col justify-end gap-2">
            {/* Text above image */}
            <p className="text-left font-roboto font-normal text-[16px] leading-[24px] text-[#505050] mb-[2px]">
              We don't just plan events, we craft unforgettable moments.
            </p>
            {/* Image container with fade animation */}
            <div
              className="w-[320px] h-[320px] rounded-[10px] overflow-hidden relative cursor-pointer"
              onMouseEnter={stopInterval}
              onMouseLeave={startInterval}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Collage ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Dots indicator */}
            <div className="flex flex-row gap-2 mt-2 justify-center">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-[8px] h-[8px] rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-[#666956]" : "bg-[#BBB7B4]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
