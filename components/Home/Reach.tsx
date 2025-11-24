import React from "react";

export default function Reach() {
  return (
    <section
      className="py-4 480:py-6 650:py-8 1080:py-8 1440:py-12"
      style={{ backgroundColor: "#666956" }}
    >
      <div className="px-4">
        {/* Flex Container with 4 boxes */}
        <div className="flex flex-row justify-center gap-4 480:gap-8 650:gap-16 1080:gap-24 1440:gap-48">
          {/* Box 1 - 86+ */}
          <div className="bg-transparent flex flex-col items-center gap-2">
            <div className="text-center leading-none">
              <span className="font-prata font-normal text-[32px] 480:text-[40px] 650:text-[48px] 1080:text-[52px] 1440:text-[68px] text-[#FFFFFF]">
                86
              </span>
              <span className="font-prata font-normal text-[30px] 480:text-[38px] 650:text-[45px] 1080:text-[50px] 1440:text-[65px] text-[#E9D39F]">
                +
              </span>
            </div>
            <p className="font-roboto font-normal text-[12px] 480:text-[13px] 650:text-[14px] 1080:text-[14px] 1440:text-[16px] text-[#FFFFFF] text-center">
              Lorem Ipsum
            </p>
          </div>

          {/* Box 2 - 120K+ */}
          <div className="bg-transparent flex flex-col items-center gap-2">
            <div className="text-center leading-none">
              <span className="font-prata font-normal text-[32px] 480:text-[40px] 650:text-[48px] 1080:text-[52px] 1440:text-[68px] text-[#FFFFFF]">
                120
              </span>
              <span className="font-prata font-normal text-[30px] 480:text-[38px] 650:text-[45px] 1080:text-[50px] 1440:text-[65px] text-[#E9D39F]">
                K+
              </span>
            </div>
            <p className="font-roboto font-normal text-[12px] 480:text-[13px] 650:text-[14px] 1080:text-[14px] 1440:text-[16px] text-[#FFFFFF] text-center">
              Happy Customers
            </p>
          </div>

          {/* Box 3 - 120K+ */}
          <div className="bg-transparent flex flex-col items-center gap-2">
            <div className="text-center leading-none">
              <span className="font-prata font-normal text-[32px] 480:text-[40px] 650:text-[48px] 1080:text-[52px] 1440:text-[68px] text-[#FFFFFF]">
                120
              </span>
              <span className="font-prata font-normal text-[30px] 480:text-[38px] 650:text-[45px] 1080:text-[50px] 1440:text-[65px] text-[#E9D39F]">
                K+
              </span>
            </div>
            <p className="font-roboto font-normal text-[12px] 480:text-[13px] 650:text-[14px] 1080:text-[14px] 1440:text-[16px] text-[#FFFFFF] text-center">
              Happy Customers
            </p>
          </div>

          {/* Box 4 - 120K+ */}
          <div className="bg-transparent flex flex-col items-center gap-2">
            <div className="text-center leading-none">
              <span className="font-prata font-normal text-[32px] 480:text-[40px] 650:text-[48px] 1080:text-[52px] 1440:text-[68px] text-[#FFFFFF]">
                120
              </span>
              <span className="font-prata font-normal text-[30px] 480:text-[38px] 650:text-[45px] 1080:text-[50px] 1440:text-[65px] text-[#E9D39F]">
                K+
              </span>
            </div>
            <p className="font-roboto font-normal text-[12px] 480:text-[13px] 650:text-[14px] 1080:text-[14px] 1440:text-[16px] text-[#FFFFFF] text-center">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
