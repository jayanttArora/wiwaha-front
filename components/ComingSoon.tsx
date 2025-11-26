import React from "react";

const ComingSoon = () => {
  return (
    <section className="bg-[#F3EEEA] h-[calc(100vh-var(--navbar-height))] flex items-center justify-center">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        <h2 className="font-prata font-normal 1080:text-[64px] 650:text-[48px] text-[32px] text-[#4C5637] text-center whitespace-normal">
          Coming Soon
        </h2>
      </div>
    </section>
  );
};

export default ComingSoon;
