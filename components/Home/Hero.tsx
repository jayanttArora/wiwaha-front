import React from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Hero({
  title = "Welcome",
  subtitle = "Discover amazing experiences",
  className = "",
}: HeroProps) {
  return (
    <section
      className={`min-h-screen bg-about-bg bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: "url(/images/home/hero-img.png)" }}
    >
      <div
        className="text-center"
        style={{ paddingTop: "calc(var(--navbar-height) + 100px)" }}
      >
        <h1 className="font-prata font-normal text-[64px] leading-[75px] tracking-[0%] text-[#FFF]">
          WIWAHA BY PRAMAN
        </h1>
        <div className="relative mt-[40px]">
          <div className="max-w-[430px] mx-auto whitespace-normal">
            <p className="font-roboto font-normal text-[20px] leading-[36px] tracking-[0%] text-[#FFFFFF] text-left">
              Experience Balinese-themed luxury wedding venue, bespoke decor,
              and premium tailored services for weddings & exclusive events
            </p>
          </div>
          <div className="absolute top-[25px] right-[calc(50%+430px/2+20px)] w-[240px] h-[2px] bg-[#D6A663] -translate-y-1/2"></div>
        </div>
        <div className="flex justify-center mt-[40px]">
          <img
            src="/images/home/discover-hero.png"
            alt="Discover Hero"
            className="h-[140px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
