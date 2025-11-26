"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLazyLoadSection } from "@/hooks/useLazyLoadSection";
import { preloadNextImages } from "@/utils/preloadImages";

export default function Pictures() {
  // Preload images when section is approaching
  const { sectionRef } = useLazyLoadSection({
    rootMargin: "300px",
    onVisible: () => {
      // Preload remaining pictures and next 3 sections
      const allPictureImages = Array.from({ length: 10 }, (_, i) => 
        `/images/home/pictures/img${i + 1}.jpeg`
      );
      preloadNextImages([
        ...allPictureImages,
        // Next sections (Testimonials)
        "/images/home/testimonials/bg.png",
        "/images/home/testimonials/user1.png",
        "/images/home/testimonials/user2.png",
        "/images/home/testimonials/user3.png",
        "/icons/star.svg",
        // Next sections (EventVideos)
        "/images/home/eventVideos/img1.png",
        "/bgRings/brown-ring-E.svg",
        "/bgRings/white-ring-SE.svg",
        "/icons/play.svg",
      ]);
    },
  });
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(9);
  const [contentWidth, setContentWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const images = Array.from({ length: 10 }, (_, i) => i + 1);

  const BOX_WIDTH = 120;
  const GAP = 16;

  // Calculate how many boxes can fit based on container width
  useEffect(() => {
    const calculateVisibleCount = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;

      // Calculate: n boxes = n * boxWidth + (n-1) * gap
      // Solving for n: containerWidth >= n * boxWidth + (n-1) * gap
      // containerWidth >= n * (boxWidth + gap) - gap
      // containerWidth + gap >= n * (boxWidth + gap)
      // n <= (containerWidth + gap) / (boxWidth + gap)
      const maxBoxes = Math.floor((containerWidth + GAP) / (BOX_WIDTH + GAP));
      const count = Math.min(maxBoxes, images.length);

      setVisibleCount(count);

      // Calculate exact width needed for the content
      // width = count * BOX_WIDTH + (count - 1) * GAP
      const exactWidth = count * BOX_WIDTH + (count - 1) * GAP;
      setContentWidth(exactWidth > 0 ? exactWidth : 0);
    };

    calculateVisibleCount();
    window.addEventListener("resize", calculateVisibleCount);
    return () => window.removeEventListener("resize", calculateVisibleCount);
  }, [images.length]);

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (startIndex < images.length - visibleCount) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevMainImage = () => {
    if (selectedImage > 1) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNextMainImage = () => {
    if (selectedImage < images.length) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);
  const showLeftArrow = startIndex > 0;
  const showRightArrow = startIndex < images.length - visibleCount;

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#666F52" }}
    >
      {/* Background Image - Top Right */}
      <div className="absolute top-0 right-0 w-auto h-auto pointer-events-none z-0">
        <Image
          src="/bgRings/white-upper-curve-left.svg"
          alt=""
          width={420}
          height={400}
          className="object-contain"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Headings Wrapper */}
        <div className="w-full max-w-[1230px] mx-auto relative mb-8">
          {/* Background Image - Left Center */}
          <div className="absolute top-[40%] left-[-80px] -translate-y-1/2 w-auto h-auto pointer-events-none z-0">
            <Image
              src="/bgRings/brown-ring-N-small.svg"
              alt=""
              width={600}
              height={600}
              className="object-contain w-[260px] h-[260px]"
              loading="lazy"
            />
          </div>

          {/* Main Heading */}
          <h1 className="relative z-10 text-left font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#FFFFFF] mb-6">
            WIWAHA IN PICTURES
          </h1>

          {/* Sub-heading */}
          <p className="relative z-10 text-left font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#D6A663]">
            Enjoy the moment together
          </p>
        </div>

        {/* Image Box Wrapper */}
        <div className="relative w-full max-w-[1230px] mx-auto mb-8">
          {/* Previous Main Image Arrow */}
          <button
            onClick={handlePrevMainImage}
            disabled={selectedImage === 1}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-[60px] h-[60px] rounded-full flex items-center justify-center transition-colors duration-300 ${
              selectedImage === 1
                ? "bg-[#FFFFFF80] cursor-not-allowed"
                : "bg-[#D2C094] hover:bg-[#c4b083] cursor-pointer"
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Main Image Container */}
          <div className="w-full h-[620px] rounded-[12px] overflow-hidden relative">
            <Image
              src={`/images/home/pictures/img${selectedImage}.jpeg`}
              alt="Wiwaha in Pictures"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Next Main Image Arrow */}
          <button
            onClick={handleNextMainImage}
            disabled={selectedImage === images.length}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-[60px] h-[60px] rounded-full flex items-center justify-center transition-colors duration-300 ${
              selectedImage === images.length
                ? "bg-[#FFFFFF80] cursor-not-allowed"
                : "bg-[#D2C094] hover:bg-[#c4b083] cursor-pointer"
            }`}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Heading for first image */}
        <h2 className="font-roboto font-medium text-[24px] text-[#FFFFFF] mb-6 text-center">
          Heading {selectedImage}
        </h2>

        {/* Outer Container for centering and max-width */}
        <div
          ref={containerRef}
          className="w-full max-w-[1230px] mx-auto flex justify-center"
        >
          {/* Carousel Container with dynamic width */}
          <div
            className="relative"
            style={{ width: contentWidth ? `${contentWidth}px` : "auto" }}
          >
            {/* Left Arrow */}
            {showLeftArrow && (
              <button
                onClick={handleLeftClick}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[60px] h-[120px] bg-[#010101]/70 hover:bg-[#010101]/80 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous images"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Images Grid */}
            <div className="flex flex-row gap-4 overflow-hidden justify-center">
              {visibleImages.map((imgNum, index) => (
                <div key={imgNum} className="shrink-0">
                  {/* Square Image Box */}
                  <div
                    className="w-[120px] h-[120px] overflow-hidden relative cursor-pointer active:scale-95 transition-transform duration-200"
                    onClick={() => setSelectedImage(imgNum)}
                  >
                    <Image
                      src={`/images/home/pictures/img${imgNum}.jpeg`}
                      alt={`Wiwaha Picture ${imgNum}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            {showRightArrow && (
              <button
                onClick={handleRightClick}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[60px] h-[120px] bg-[#010101]/70 hover:bg-[#010101]/80 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next images"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
