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
      id="hero"
      className={`min-h-screen bg-about-bg bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: "url(/images/home/hero/hero-img.png)" }}
    >
      <div
        className="text-center pb-16"
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
            src="/images/home/hero/discover-hero.png"
            alt="Discover Hero"
            className="h-[140px] object-contain"
          />
        </div>

        {/* White Box Section */}
        <div className="flex justify-center mt-8">
          <div className="max-w-[1300px] bg-white px-8 py-6 rounded-[20px]">
            <div className="grid grid-cols-3 gap-8 items-center relative">
              {/* Left Column */}
              <div className="text-left">
                <div className="font-prata font-normal text-[32px] leading-[100%] tracking-[0%] text-[#402502]">
                  <div>Because Every</div>
                  <div>Moment Matters</div>
                </div>
              </div>

              {/* Border between Left and Middle */}
              <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[76px] bg-[#6D827463]"></div>

              {/* Middle Column */}
              <div className="text-center">
                <div className="max-w-[400px] mx-auto">
                  <p className="font-roboto font-normal text-[16px] leading-[24px] tracking-[0%] text-[#505050]">
                    Wiwaha's Balinese charm brings romance and serenity to every
                    celebration. Thoughtful spaces and warm hospitality create
                    truly unforgettable moments all!
                  </p>
                </div>
              </div>

              {/* Border between Middle and Right */}
              <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[76px] bg-[#6D827463]"></div>

              {/* Right Column */}
              <div className="text-center">
                <div className="font-prata font-normal tracking-[0%]">
                  <span className="text-[64px] leading-[76px] text-[#666956]">
                    6.8
                  </span>
                  <span className="text-[66px] leading-[72px] text-[#E9D39F]">
                    +
                  </span>
                </div>
                <div className="font-roboto font-normal text-[16px] leading-[24px] tracking-[0%] text-[#505050] mt-2">
                  Years Of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
