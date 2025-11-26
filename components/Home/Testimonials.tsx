"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLazyLoadSection } from "@/hooks/useLazyLoadSection";
import { preloadNextImages } from "@/utils/preloadImages";

const Testimonials = () => {
  // Preload images when section is approaching
  const { sectionRef } = useLazyLoadSection({
    rootMargin: "300px",
    onVisible: () => {
      // Preload images for next 3 sections
      preloadNextImages([
        // Next sections (EventVideos)
        "/images/home/eventVideos/img1.png",
        "/bgRings/brown-ring-E.svg",
        "/bgRings/white-ring-SE.svg",
        "/icons/play.svg",
      ]);
    },
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonialData = [
    { image: "/images/home/testimonials/user1.png" },
    { image: "/images/home/testimonials/user2.png" },
    { image: "/images/home/testimonials/user3.png" },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section ref={sectionRef} className="py-16 bg-[#4C5637] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/testimonials/bg.png"
          alt="Background"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <p className="font-roboto font-normal text-[20px] text-[#FFFFFF] text-center mb-4">
          Testimonials
        </p>
        <h2 className="font-prata font-normal text-[64px] text-[#FFFFFF] text-center mb-16">
          Hearts That Speak
        </h2>

        <div
          className="overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 1 */}
            <div className="min-w-full flex flex-col 1280:flex-row justify-center items-center gap-6">
              {testimonialData.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[425px] h-[270px] rounded-[20px] border border-[#6D827463] bg-[#FFFFFF] p-8 flex flex-col justify-between"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Image
                        key={star}
                        src="/icons/star.svg"
                        alt="Star"
                        width={18}
                        height={18}
                        loading="lazy"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-roboto font-normal text-[16px] text-[#505050] text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 justify-start">
                    <Image
                      src={testimonial.image}
                      alt="User"
                      width={48}
                      height={48}
                      className="rounded-full"
                      loading="lazy"
                    />
                    <div className="flex flex-col text-left">
                      <span className="font-prata font-normal text-[18px] text-[#402502]">
                        Lily Rose
                      </span>
                      <span className="font-roboto font-normal text-[13px] text-[#505050]">
                        Our Client
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide 2 */}
            <div className="min-w-full flex flex-col 1280:flex-row justify-center items-center gap-6">
              {testimonialData.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[425px] h-[270px] rounded-[20px] border border-[#6D827463] bg-[#FFFFFF] p-8 flex flex-col justify-between"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Image
                        key={star}
                        src="/icons/star.svg"
                        alt="Star"
                        width={18}
                        height={18}
                        loading="lazy"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-roboto font-normal text-[16px] text-[#505050] text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 justify-start">
                    <Image
                      src={testimonial.image}
                      alt="User"
                      width={48}
                      height={48}
                      className="rounded-full"
                      loading="lazy"
                    />
                    <div className="flex flex-col text-left">
                      <span className="font-prata font-normal text-[18px] text-[#402502]">
                        Lily Rose
                      </span>
                      <span className="font-roboto font-normal text-[13px] text-[#505050]">
                        Our Client
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide 3 */}
            <div className="min-w-full flex flex-col 1280:flex-row justify-center items-center gap-6">
              {testimonialData.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[425px] h-[270px] rounded-[20px] border border-[#6D827463] bg-[#FFFFFF] p-8 flex flex-col justify-between"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Image
                        key={star}
                        src="/icons/star.svg"
                        alt="Star"
                        width={18}
                        height={18}
                        loading="lazy"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-roboto font-normal text-[16px] text-[#505050] text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 justify-start">
                    <Image
                      src={testimonial.image}
                      alt="User"
                      width={48}
                      height={48}
                      className="rounded-full"
                      loading="lazy"
                    />
                    <div className="flex flex-col text-left">
                      <span className="font-prata font-normal text-[18px] text-[#402502]">
                        Lily Rose
                      </span>
                      <span className="font-roboto font-normal text-[13px] text-[#505050]">
                        Our Client
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#FFFFFF]" : "bg-[#FFFFFF99]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
