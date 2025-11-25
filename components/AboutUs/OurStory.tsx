import Image from "next/image";

export default function OurStory() {
  return (
    <div className="py-28">
      {/* Headings Section with max-width */}
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px] text-center mb-16">
        <div className="relative">
          {/* Background Image - Centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto pointer-events-none z-0">
            <Image
              src="/bgRings/brown-ring-N-big.svg"
              alt=""
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* Main Heading */}
          <h1 className="relative z-10 font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-6">
            Our Story
          </h1>

          {/* Sub-heading */}
          <p className="relative z-10 font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#9D7336] mx-auto max-w-[600px]">
            Wiwaha by Praman is more than just a venue
          </p>
        </div>
      </div>

      {/* Full-width Content Box */}
      <div className="w-full bg-[#EDE3D9] py-16">
        <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
          <div className="flex flex-row">
            {/* First Column - Text Content */}
            <div className="max-w-[540px]">
              <p className="text-left font-roboto font-normal text-[20px] text-[#505050] mb-6">
                Wiwaha by Praman is more than just a venue – it's a celebration
                of Balinese heritage and contemporary elegance. Nestled in the
                heart of Bali, our venue was created with a vision to provide
                couples and event organizers with a space that seamlessly blends
                traditional architecture with modern luxury.
              </p>

              <p className="text-left font-roboto font-normal text-[20px] text-[#505050] mb-6">
                The name "Wiwaha" itself signifies sacred union and celebration,
                reflecting our commitment to making every event hosted at our
                venue a memorable and meaningful experience. From intimate
                ceremonies to grand celebrations, we provide a canvas for your
                dreams to come to life.
              </p>

              <p className="text-left font-roboto font-normal text-[20px] text-[#505050]">
                Our team of dedicated professionals brings years of expertise in
                event management, combining meticulous attention to detail with
                warm Balinese hospitality to ensure that every moment at Wiwaha
                is nothing short of extraordinary.
              </p>
            </div>

            {/* Second Column - Placeholder for now */}
            <div className="flex-1">
              {/* Second column content will go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
