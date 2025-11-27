import React from "react";
import Image from "next/image";

const List = () => {
  return (
    <section className="container mx-auto w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px] flex flex-col gap-10 py-16">
      {/* Row 1: Pool & Lawn */}
      <div className="flex flex-row gap-4">
        {/* Column 1: Pool (60%) */}
        <div className="w-[60%] relative h-[280px] rounded-[10px] overflow-hidden">
          <Image
            src="/images/amenities/list/pool.jpg"
            alt="Pool Deck"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(107, 109, 112, 0.1) 10%, rgba(1, 1, 1, 0.3) 80%)",
            }}
          />
          <div className="absolute inset-0 flex flex-row justify-start items-end p-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-prata font-normal text-[28px] text-[#FFFFFF] text-left">
                Pool Deck
              </h3>
              <p className="font-roboto font-normal text-[16px] tracking-[1.2px] text-[#FFFFFF] text-left">
                Beautiful infinity pool surrounded by tropical gardens, perfect
                for outdoor ceremonies and receptions.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Lawn (40%) */}
        <div className="w-[40%] relative h-[280px] rounded-[10px] overflow-hidden">
          <Image
            src="/images/amenities/list/lawn.jpg"
            alt="Open Lawn"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(107, 109, 112, 0.1) 10%, rgba(1, 1, 1, 0.3) 80%)",
            }}
          />
          <div className="absolute inset-0 flex flex-row justify-start items-end p-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-prata font-normal text-[28px] text-[#FFFFFF] text-left">
                Open Lawn
              </h3>
              <p className="font-roboto font-normal text-[16px] tracking-[1.2px] text-[#FFFFFF] text-left">
                Lush landscaped gardens with traditional Balinese features,
                providing stunning photo opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Catering & Amphitheatre */}
      <div className="flex flex-row gap-4">
        {/* Column 1: Catering (40%) */}
        <div className="w-[40%] relative h-[280px] rounded-[10px] overflow-hidden">
          <Image
            src="/images/amenities/list/catering.jpg"
            alt="Premium Catering"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(107, 109, 112, 0.1) 10%, rgba(1, 1, 1, 0.3) 80%)",
            }}
          />
          <div className="absolute inset-0 flex flex-row justify-start items-end p-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-prata font-normal text-[28px] text-[#FFFFFF] text-left">
                Premium Catering
              </h3>
              <p className="font-roboto font-normal text-[16px] tracking-[1.2px] text-[#FFFFFF] text-left">
                World-class catering services with customizable menus featuring
                local and international cuisine.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Amphitheatre (60%) */}
        <div className="w-[60%] relative h-[280px] rounded-[10px] overflow-hidden">
          <Image
            src="/images/amenities/list/amphitheatre.jpg"
            alt="Amphitheatre"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(107, 109, 112, 0.1) 10%, rgba(1, 1, 1, 0.3) 80%)",
            }}
          />
          <div className="absolute inset-0 flex flex-row justify-start items-end p-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-prata font-normal text-[28px] text-[#FFFFFF] text-left">
                Amphitheatre
              </h3>
              <p className="font-roboto font-normal text-[16px] tracking-[1.2px] text-[#FFFFFF] text-left">
                An enchanting open-air arena that brings rituals, music, and
                moments to life with stunning ambiance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Photo & Accommodation */}
      <div className="flex flex-row gap-4">
        {/* Column 1: Photo (60%) */}
        <div className="w-[60%] relative h-[280px] rounded-[10px] overflow-hidden">
          <Image
            src="/images/amenities/list/photo.jpg"
            alt="Photo Spots"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(107, 109, 112, 0.1) 10%, rgba(1, 1, 1, 0.3) 80%)",
            }}
          />
          <div className="absolute inset-0 flex flex-row justify-start items-end p-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-prata font-normal text-[28px] text-[#FFFFFF] text-left">
                Photo Spots
              </h3>
              <p className="font-roboto font-normal text-[16px] tracking-[1.2px] text-[#FFFFFF] text-left">
                Multiple picturesque locations throughout the venue for
                memorable photography.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Accommodation (40%) */}
        <div className="w-[40%] relative h-[280px] rounded-[10px] overflow-hidden">
          <Image
            src="/images/amenities/list/accommodation.png"
            alt="Accommodation"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(107, 109, 112, 0.1) 10%, rgba(1, 1, 1, 0.3) 80%)",
            }}
          />
          <div className="absolute inset-0 flex flex-row justify-start items-end p-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-prata font-normal text-[28px] text-[#FFFFFF] text-left">
                Accommodation
              </h3>
              <p className="font-roboto font-normal text-[16px] tracking-[1.2px] text-[#FFFFFF] text-left">
                Thoughtfully designed 3 Star category rooms managed by hotel
                group.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
