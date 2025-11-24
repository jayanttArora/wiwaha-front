"use client";

import React, { useState } from "react";

const CTAForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="cta"
      className="pb-16"
      style={{
        backgroundColor: "#EDE3D9",
        paddingTop: "calc(var(--navbar-height) + 60px)",
      }}
    >
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        {/* Main Heading */}
        <h1 className="text-left font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-6">
          Say Hi To Your Planner
        </h1>

        {/* Sub-heading */}
        <p className="text-left font-roboto font-normal text-[12px] leading-[150%] 480:text-[14px] 480:leading-[21px] 650:text-[16px] 650:leading-[24px] 1080:text-[18px] 1080:leading-[27px] 1440:text-[20px] 1440:leading-[30px] tracking-[1.6px] text-[#9D7336] mb-16">
          Ask whatever you need
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          {/* First Row - Email and Name */}
          <div className="flex flex-row gap-8">
            {/* Email Input */}
            <div className="flex-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                required
                className="w-full bg-transparent border-0 border-b border-[#4C5637] pb-2 font-roboto font-normal text-[20px] text-[#666F52] placeholder:text-[#666F52] focus:outline-none focus:border-[#4C5637] autofill:shadow-[0_0_0_1000px_#EDE3D9_inset] autofill:[-webkit-text-fill-color:#666F52]"
              />
            </div>

            {/* Name Input */}
            <div className="flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-transparent border-0 border-b border-[#4C5637] pb-2 font-roboto font-normal text-[20px] text-[#666F52] placeholder:text-[#666F52] focus:outline-none focus:border-[#4C5637] autofill:shadow-[0_0_0_1000px_#EDE3D9_inset] autofill:[-webkit-text-fill-color:#666F52]"
              />
            </div>
          </div>

          {/* Second Row - Message */}
          <div>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full bg-transparent border-0 border-b border-[#4C5637] pb-2 font-roboto font-normal text-[20px] text-[#666F52] placeholder:text-[#666F52] focus:outline-none focus:border-[#4C5637] autofill:shadow-[0_0_0_1000px_#EDE3D9_inset] autofill:[-webkit-text-fill-color:#666F52]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-transparent border-0 font-roboto font-medium text-[28px] text-[#4C5637] cursor-pointer hover:opacity-80 transition-opacity"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTAForm;
