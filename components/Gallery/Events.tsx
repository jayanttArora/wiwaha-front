import React from "react";

const Events = () => {
  const buttons = ["View All", "2025", "2024", "2023", "2022", "2021"];

  return (
    <section className="flex justify-center py-8">
      <div className="flex flex-row gap-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-[#F3EEEA] border border-[#E1E1E1] rounded-[40px] text-center font-roboto font-normal text-base text-[#4C5637] hover:bg-[#4C5637] hover:border-[#4C5637] hover:text-white active:bg-[#4C5637] active:border-[#4C5637] active:text-white transition-colors cursor-pointer"
          >
            {button}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Events;

