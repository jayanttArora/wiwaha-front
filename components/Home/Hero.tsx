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
      <div className="pt-[50px] text-center">
        <h1 className="font-prata font-normal text-[64px] leading-[100%] tracking-[0%] text-[#FFF]">
          WIWAHA BY PRAMAN
        </h1>
      </div>
    </section>
  );
}
