"use client";

import React from "react";

const Events = () => {
  const buttons = ["View All", "2025", "2024", "2023", "2022", "2021"];

  return (
    <section className="flex flex-col 1440:py-8 1080:py-6 650:py-4 480:py-4 py-4">
      <div className="w-full overflow-x-auto scrollbar-hide px-4">
        <div className="flex flex-row 1080:gap-4 gap-3 justify-center min-w-max">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-[#F3EEEA] border border-[#E1E1E1] rounded-[40px] text-center font-roboto font-normal 1440:text-base 1080:text-base 650:text-[15px] 480:text-[14px] text-[13px] text-[#4C5637] hover:bg-[#4C5637] hover:border-[#4C5637] hover:text-white active:bg-[#4C5637] active:border-[#4C5637] active:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
