"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pictures() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(9);
  const [contentWidth, setContentWidth] = useState(0);
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

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);
  const showLeftArrow = startIndex > 0;
  const showRightArrow = startIndex < images.length - visibleCount;

  return (
    <section className="py-16" style={{ backgroundColor: "#666F52" }}>
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h1 className="text-left font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#FFFFFF] mb-6">
          WIWAHA IN PICTURES
        </h1>

        {/* Sub-heading */}
        <p className="text-left font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#D6A663] mb-8">
          Enjoy the moment together
        </p>

        {/* Image Box */}
        <div className="w-full max-w-[1230px] h-[620px] mx-auto rounded-[12px] overflow-hidden relative mb-8">
          <Image
            src="/images/home/pictures/img1.png"
            alt="Wiwaha in Pictures"
            fill
            className="object-cover"
          />
        </div>

        {/* Heading for first image */}
        <h2 className="font-roboto font-medium text-[24px] text-[#FFFFFF] mb-6 text-center">
          Heading 1
        </h2>

        {/* Outer Container for centering and max-width */}
        <div 
          ref={containerRef}
          className="w-full max-w-[1230px] mx-auto flex justify-center"
        >
          {/* Carousel Container with dynamic width */}
          <div
            className="relative"
            style={{ width: contentWidth ? `${contentWidth}px` : 'auto' }}
          >
            {/* Left Arrow */}
            {showLeftArrow && (
              <button
                onClick={handleLeftClick}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[60px] h-[120px] bg-[#010101]/70 hover:bg-[#010101]/80 flex items-center justify-center transition-all duration-300"
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
                  <div className="w-[120px] h-[120px] overflow-hidden relative">
                    <Image
                      src={`/images/home/pictures/img${imgNum}.png`}
                      alt={`Wiwaha Picture ${imgNum}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            {showRightArrow && (
              <button
                onClick={handleRightClick}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[60px] h-[120px] bg-[#010101]/70 hover:bg-[#010101]/80 flex items-center justify-center transition-all duration-300"
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
