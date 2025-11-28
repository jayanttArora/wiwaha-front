"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");

  const [formFontSize, setFormFontSize] = useState("16px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setFormFontSize("14px");
      } else if (window.innerWidth < 850) {
        setFormFontSize("14px");
      } else if (window.innerWidth < 1080) {
        setFormFontSize("14px");
      } else if (window.innerWidth < 1440) {
        setFormFontSize("16px");
      } else {
        setFormFontSize("16px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      eventType,
      message,
    };
    console.log("Form Data:", formData);
  };

  const fieldBaseClasses = `w-full rounded-[10px] bg-white font-roboto text-[${formFontSize}] font-normal text-[#4C5637] placeholder:font-roboto placeholder:text-[${formFontSize}] placeholder:font-normal placeholder:text-[#878787] placeholder:tracking-[1.1px] focus:outline-none`;
  const inputWithIconClasses = `${fieldBaseClasses} 850:py-3 py-2 1440:pl-12 1080:pl-10 850:pl-8 650:pl-6 pl-10 1440:pr-4 1080:pr-3 850:pr-2 650:pr-1 pr-4`;
  const textareaClasses = `${fieldBaseClasses} resize-none 850:py-3 py-2 1440:pl-4 1080:pl-3 850:pl-2 650:pl-1 pl-4 1440:pr-4 1080:pr-3 850:pr-2 650:pr-1 pr-4`;
  const selectClasses = `${fieldBaseClasses} appearance-none 850:py-3 py-2 1440:pl-4 1080:pl-3 850:pl-2 650:pl-1 pl-4 1440:pr-12 1080:pr-10 850:pr-8 650:pr-6 pr-12`;

  return (
    <div
      className="w-full pb-20"
      style={{ paddingTop: "calc(var(--navbar-height) + 48px)" }}
    >
      {/* Flex-row container with 2 columns */}
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        <div className="flex w-full flex-col gap-10 850:flex-row 850:items-stretch">
          {/* 1st column - 40% width */}
          <div className="flex w-full flex-col 850:w-[40%]">
            {/* Flex-column container with 3 rows */}
            <div className="flex flex-1 flex-col 1440:gap-8 1080:gap-6 850:gap-4 650:gap-3 gap-2">
              {/* 1st row - Heading */}
              <div className="text-left">
                <h1
                  className="font-prata font-normal 1440:text-[64px] 1080:text-[56px] 850:text-[48px] 650:text-[40px] text-[32px]"
                  style={{ color: "#4C5637" }}
                >
                  Contact Us
                </h1>
              </div>

              {/* 2nd row - Text */}
              <div className="text-left">
                <p className="font-roboto font-normal 1440:text-[20px] 1080:text-[18px] 850:text-[16px] 650:text-[14px] text-[13px] text-[#9D7336] tracking-[1.2px]">
                  We'd love to hear from you. Get in touch to discuss your event
                  and discover how we can make it extraordinary
                </p>
              </div>

              {/* 3rd row - Contact form */}
              <form
                className="flex flex-1 flex-col rounded-[10px] bg-[#EDE3D9] 1440:p-6 1080:p-5 850:p-4 650:p-3 p-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-1 flex-col gap-6">
                  {/* Contact form heading */}
                  <div className="text-left">
                    <h2 className="font-prata 1440:text-[28px] 1080:text-[24px] 850:text-[20px] 650:text-[18px] text-[18px] text-[#4C5637] font-normal">
                      Get in Touch with Us
                    </h2>
                  </div>

                  {/* Inputs container */}
                  <div className="flex flex-1 flex-col gap-4">
                    {/* Name & Email */}
                    <div className="flex flex-col gap-4 650:flex-row">
                      <div className="relative w-full 650:w-1/2">
                        <Image
                          src="/icons/user-gray.svg"
                          alt="User icon"
                          width={20}
                          height={20}
                          className="1440:w-[20px] 1080:w-[18px] 850:w-[16px] 650:w-[14px] w-[12px] pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                        />
                        <input
                          type="text"
                          placeholder="Your Name"
                          className={inputWithIconClasses}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="relative w-full 650:w-1/2">
                        <Image
                          src="/icons/msg-gray.png"
                          alt="Email icon"
                          width={20}
                          height={20}
                          className="1440:w-[20px] 1080:w-[18px] 850:w-[16px] 650:w-[14px] w-[12px] pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          className={inputWithIconClasses}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone & Event Type */}
                    <div className="flex flex-col gap-4 650:flex-row">
                      <div className="relative w-full 650:w-1/2">
                        <Image
                          src="/icons/contact-gray.svg"
                          alt="Phone icon"
                          width={20}
                          height={20}
                          className="1440:w-[20px] 1080:w-[18px] 850:w-[16px] 650:w-[14px] w-[12px] pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                        />
                        <input
                          type="tel"
                          placeholder="Your Phone No."
                          className={inputWithIconClasses}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="relative w-full 650:w-1/2">
                        <select
                          value={eventType}
                          onChange={(event) => setEventType(event.target.value)}
                          className={`${selectClasses} ${
                            eventType ? "text-[#4C5637]" : "text-[#878787]"
                          }`}
                          style={{ letterSpacing: "1.1px" }}
                          required
                        >
                          <option value="" disabled>
                            Event Type
                          </option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate</option>
                          <option value="social">Social Gathering</option>
                          <option value="other">Other</option>
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="#878787"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-1 min-h-[120px]">
                      <textarea
                        rows={4}
                        placeholder="Type your message here..."
                        className={`${textareaClasses} h-full min-h-[120px]`}
                        style={{ letterSpacing: "1.1px" }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full rounded-[100px] bg-[#D2C094] py-4 text-center font-roboto text-[16px] font-semibold tracking-[1px] text-white cursor-pointer hover:bg-[#C5B388] active:bg-[#B8A67C] transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* 2nd column - 60% width */}
          <div className="flex w-full flex-col 850:w-[60%]">
            {/* Flex-column container with 2 rows */}
            <div className="flex flex-1 flex-col gap-10">
              {/* Grid boxes */}
              <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-4">
                {/* Box 1 - Location (col 1, row 1) */}
                <div className="flex h-full flex-col gap-4 rounded-[10px] bg-white p-4 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="text-left">
                    <Image
                      src="/icons/location-brown.svg"
                      alt="Location icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-left">
                    <h3
                      className="font-prata text-[20px] font-normal"
                      style={{ color: "#4C5637" }}
                    >
                      Location
                    </h3>
                  </div>
                  <div className="text-left">
                    <p
                      className="font-roboto text-[16px] font-normal"
                      style={{ color: "#505050" }}
                    >
                      Springdales farm, survey no. 15, Bettahalsoor post, near,
                      Sir M Visvesvaraya Inst Rd, Bengaluru, Karnataka 562157
                    </p>
                  </div>
                </div>

                {/* Box 2 - Phone (col 2, row 1) */}
                <div className="flex h-full flex-col gap-4 rounded-[10px] bg-white p-4 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="text-left">
                    <Image
                      src="/icons/phone.svg"
                      alt="Phone icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-left">
                    <h3
                      className="font-prata text-[20px] font-normal"
                      style={{ color: "#4C5637" }}
                    >
                      Phone
                    </h3>
                  </div>
                  <div className="text-left">
                    <p
                      className="font-roboto text-[16px] font-normal"
                      style={{ color: "#505050" }}
                    >
                      +91 9169935666
                    </p>
                  </div>
                </div>

                {/* Box 3 - Email (col 1, row 2) */}
                <div className="flex h-full flex-col gap-4 rounded-[10px] bg-white p-4 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="text-left">
                    <Image
                      src="/icons/email.svg"
                      alt="Email icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-left">
                    <h3
                      className="font-prata text-[20px] font-normal"
                      style={{ color: "#4C5637" }}
                    >
                      Email
                    </h3>
                  </div>
                  <div className="text-left">
                    <p
                      className="font-roboto text-[16px] font-normal"
                      style={{ color: "#505050" }}
                    >
                      info@wiwahabypraman.com
                    </p>
                  </div>
                </div>

                {/* Box 4 - Business Hours (col 2, row 2) */}
                <div className="flex h-full flex-col gap-4 rounded-[10px] bg-white p-4 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="text-left">
                    <Image
                      src="/icons/business.svg"
                      alt="Business icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-left">
                    <h3
                      className="font-prata text-[20px] font-normal"
                      style={{ color: "#4C5637" }}
                    >
                      Business Hours
                    </h3>
                  </div>
                  <div className="text-left">
                    <p
                      className="font-roboto text-[16px] font-normal"
                      style={{ color: "#505050" }}
                    >
                      Monday - Sunday, 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full overflow-hidden rounded-[10px]">
                <Image
                  src="/images/contact/contactUs/img1.jpg"
                  alt="Contact us"
                  width={800}
                  height={600}
                  className="aspect-[2.7/1] w-full rounded-[10px] object-cover transition-transform duration-500 scale-110 hover:scale-100 cursor-pointer"
                  style={{ opacity: "90%", objectPosition: "center 95%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
