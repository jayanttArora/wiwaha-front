import React from "react";
import Image from "next/image";

export default function Discover() {
  return (
    <section className="bg-about-bg py-16">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h1 className="text-center font-prata font-normal text-[64px] leading-[100%] tracking-[0%] text-[#4C5637] mb-6">
          Discover Wiwaha
        </h1>

        {/* Sub-heading */}
        <p className="text-center font-roboto font-normal text-[20px] leading-[150%] tracking-[1.6px] text-[#9D7336] mb-16 mx-auto max-w-[600px]">
          A perfect blend of traditional Balinese elegance and modern luxury
        </p>

        {/* Flex Container with 3 boxes */}
        <div className="flex flex-row justify-center gap-8">
          {/* Left Box - HISTORY */}
          <div className="w-[420px] h-[660px] flex flex-col mt-[50px]">
            {/* Image Container */}
            <div
              className="h-[350px] w-full bg-gray-200 overflow-hidden relative"
              style={{
                borderTopLeftRadius: "300px",
                borderTopRightRadius: "300px",
              }}
            >
              <Image
                src="/images/home/discover/img1.png"
                alt="History"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Container */}
            <div className="flex-1 bg-[#ede3d9] p-8 flex flex-col justify-center">
              <h3 className="text-center font-prata font-normal text-[32px] leading-[100%] tracking-[0%] text-[#4C5637] mb-6">
                HISTORY
              </h3>
              <p className="font-roboto font-normal text-[20px] leading-[150%] tracking-[0%] text-[#7C836C] text-center">
                Praman Group established in 2002 has been hosting countless
                weddings and events in Bangalore. Our newest Balinese-themed
                luxury venue Wiwaha provides a unique and unforgettable
                experience for all occasions.
              </p>
            </div>
          </div>

          {/* Middle Box - SPACES */}
          <div className="w-[420px] h-[830px] flex flex-col">
            {/* Image Container */}
            <div
              className="h-[550px] w-full bg-gray-200 overflow-hidden relative"
              style={{
                borderTopLeftRadius: "300px",
                borderTopRightRadius: "300px",
              }}
            >
              <Image
                src="/images/home/discover/img2.png"
                alt="Spaces"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Container */}
            <div className="flex-1 bg-[#ede3d9] p-8 flex flex-col justify-center">
              <h3 className="text-center font-prata font-normal text-[32px] leading-[100%] tracking-[0%] text-[#4C5637] mb-6">
                SPACES
              </h3>
              <p className="font-roboto font-normal text-[20px] leading-[150%] tracking-[0%] text-[#7C836C] text-center">
                We offer a variety of indoor and outdoor spaces for your
                ceremony and reception, including a beautiful garden, pool area,
                deck area, enclosed roof area, amphitheatre and two kitchens.
              </p>
            </div>
          </div>

          {/* Right Box - SERVICES */}
          <div className="w-[420px] h-[660px] flex flex-col mt-[50px]">
            {/* Image Container */}
            <div
              className="h-[350px] w-full bg-gray-200 overflow-hidden relative"
              style={{
                borderTopLeftRadius: "300px",
                borderTopRightRadius: "300px",
              }}
            >
              <Image
                src="/images/home/discover/img3.png"
                alt="Services"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Container */}
            <div className="flex-1 bg-[#ede3d9] p-8 flex flex-col justify-center">
              <h3 className="text-center font-prata font-normal text-[32px] leading-[100%] tracking-[0%] text-[#4C5637] mb-6">
                SERVICES
              </h3>
              <p className="font-roboto font-normal text-[20px] leading-[150%] tracking-[0%] text-[#7C836C] text-center">
                We provide end-to-end services for all types of events from
                intimate to lavish affairs. We offer luxury services with the
                option of fully tailoring your events to meet your every
                requirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
