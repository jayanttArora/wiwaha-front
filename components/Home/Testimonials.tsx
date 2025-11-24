import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#4C5637]">
      <div className="container mx-auto px-4">
        <p className="font-roboto font-normal text-[20px] text-[#FFFFFF] text-center mb-4">
          Testimonials
        </p>
        <h2 className="font-prata font-normal text-[64px] text-[#FFFFFF] text-center mb-16">
          Hearts That Speak
        </h2>

        <div className="flex flex-col 1280:flex-row justify-center items-center gap-6">
          {[
            { image: "/images/home/testimonials/user1.png" },
            { image: "/images/home/testimonials/user2.png" },
            { image: "/images/home/testimonials/user3.png" },
          ].map((testimonial, index) => (
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
    </section>
  );
};

export default Testimonials;
