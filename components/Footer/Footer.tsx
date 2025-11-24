"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <footer style={{ backgroundColor: "#666F52" }} className="py-12">
      {/* Main Content - 3 Columns */}
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px] mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 1440:gap-12 1080:gap-8">
          {/* First Column - Contact Data */}
          <div className="flex flex-col gap-6">
            {/* Location */}
            <div className="flex items-start gap-3">
              <Image
                src="/icons/location.svg"
                alt="Location"
                width={24}
                height={24}
                className="shrink-0 mt-1"
              />
              <p
                className="font-roboto font-normal text-[16px] text-white"
                style={{ maxWidth: "330px" }}
              >
                Springdales farm, survey no. 15, Bettahalsoor post, near, Sir M
                Visvesvaraya Inst Rd, Bengaluru, Karnataka 562157
              </p>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-3">
              <Image
                src="/icons/contact.svg"
                alt="Contact"
                width={24}
                height={24}
                className="shrink-0"
              />
              <p className="font-albert-sans font-normal text-[16px] text-white border-b border-white pb-1">
                9169935666
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Image
                src="/icons/msg.svg"
                alt="Email"
                width={24}
                height={24}
                className="shrink-0"
              />
              <p className="font-albert-sans font-normal text-[16px] text-white">
                wiwaha@gmail.com
              </p>
            </div>
          </div>

          {/* Second Column - Logo & Social Icons */}
          <div className="flex flex-col gap-6 items-center">
            {/* Logo */}
            <div>
              <Image
                src="/logos/wiwaha/white-logo.png"
                alt="WIWAHA Logo"
                width={150}
                height={60}
              />
            </div>

            {/* Description Text */}
            <p className="font-roboto font-medium 1440:text-[18px] text-white text-center whitespace-normal">
              Risus scelerisque a non turpis vitae malesuada sed venenatis. In
              fringilla sollicitudin euismod sed.
            </p>

            {/* Social Icons */}
            <div className="flex flex-row gap-5">
              {/* Facebook */}
              <div className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/logos/social/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-[10px]"
                />
              </div>

              {/* Twitter */}
              <div className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/logos/social/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="w-[14px]"
                />
              </div>

              {/* Instagram */}
              <div className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/logos/social/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-[14px]"
                />
              </div>

              {/* YouTube */}
              <div className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/logos/social/yt.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="w-[14px]"
                />
              </div>
            </div>
          </div>

          {/* Third Column - Working Hours */}
          <div className="flex flex-col gap-6">
            {/* Working Hours Text */}
            <div className="text-center">
              <p className="font-roboto font-medium text-[20px] text-white">
                Working hours:
              </p>
              <p className="font-roboto font-medium text-[20px] text-white">
                Monday to Friday 9am - 5pm
              </p>
            </div>

            {/* Email Form */}
            <form
              onSubmit={handleEmailSubmit}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your mail"
                required
                className="flex-1 bg-transparent border-0 border-b pb-2 font-roboto italic font-normal 1440:text-[20px] 1080:text-[16px] 650:text-[14px] text-[#FFFAF4] placeholder:text-[#FFFAF4] focus:outline-none"
                style={{
                  borderBottomColor: "#D6A663",
                  borderBottomWidth: "1px",
                }}
              />
              <button
                type="submit"
                className="w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center cursor-pointer"
                style={{ border: "0.83px solid #FFFFFF4B" }}
              >
                <ChevronRight
                  className="text-white"
                  style={{ width: "20px" }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Border - Full Width */}
      <div
        className="w-full mb-6"
        style={{ borderTop: "2px solid #FFFFFF80" }}
      ></div>

      {/* Copyright */}
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        <div className="text-center">
          <p className="font-raleway font-normal 1440:text-[18px] 1080:text-[16px] text-white">
            Copyright <span className="font-bold">WIWAHA</span>, All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
