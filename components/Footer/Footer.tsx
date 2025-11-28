"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // If not on home page, Link will handle navigation automatically
  };

  return (
    <footer
      id="footer"
      style={{ backgroundColor: "#666F52" }}
      className="1440:py-12 1080:py-10 850:py-8 650:py-6 py-6"
    >
      {/* Main Content - 3 Columns */}
      <div className="container mx-auto 1440:px-4 1080:px-4 850:px-4 650:px-3 px-3 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px] 1440:mb-8 1080:mb-6 850:mb-5 650:mb-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 1440:gap-12 1080:gap-8 850:gap-6 650:gap-5 gap-4">
          {/* First Column - Contact Data */}
          <div className="flex flex-col 1440:gap-6 1080:gap-5 850:gap-4 650:gap-3 gap-3">
            {/* Location */}
            <div className="flex items-start 1440:gap-3 1080:gap-3 850:gap-2 650:gap-2 gap-2">
              <Image
                src="/icons/location.svg"
                alt="Location"
                width={24}
                height={24}
                className="shrink-0 1440:mt-1 1080:mt-1 850:mt-0.5 650:mt-0.5 mt-0.5 1440:w-[24px] 1080:w-[22px] 850:w-[20px] 650:w-[18px] w-[16px]"
              />
              <p
                className="font-roboto font-normal 1440:text-[16px] 1080:text-[15px] 850:text-[14px] 650:text-[13px] text-[12px] text-white"
                style={{ maxWidth: "330px" }}
              >
                Springdales farm, survey no. 15, Bettahalsoor post, near, Sir M
                Visvesvaraya Inst Rd, Bengaluru, Karnataka 562157
              </p>
            </div>

            {/* Contact */}
            <div className="flex items-start 1440:gap-3 1080:gap-3 850:gap-2 650:gap-2 gap-2">
              <Image
                src="/icons/contact.svg"
                alt="Contact"
                width={24}
                height={24}
                className="shrink-0 1440:w-[24px] 1080:w-[22px] 850:w-[20px] 650:w-[18px] w-[16px]"
              />
              <a
                href="tel:9169935666"
                className="font-albert-sans font-normal 1440:text-[16px] 1080:text-[15px] 850:text-[14px] 650:text-[13px] text-[12px] text-white border-b border-white 1440:pb-1 1080:pb-1 850:pb-0.5 650:pb-0.5 pb-0.5 hover:opacity-80 transition-opacity"
              >
                9169935666
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start 1440:gap-3 1080:gap-3 850:gap-2 650:gap-2 gap-2">
              <Image
                src="/icons/msg.svg"
                alt="Email"
                width={24}
                height={24}
                className="shrink-0 1440:w-[24px] 1080:w-[22px] 850:w-[20px] 650:w-[18px] w-[16px]"
              />
              <a
                href="mailto:wiwaha@gmail.com"
                className="font-albert-sans font-normal 1440:text-[16px] 1080:text-[15px] 850:text-[14px] 650:text-[13px] text-[12px] text-white hover:opacity-80 transition-opacity"
              >
                wiwaha@gmail.com
              </a>
            </div>
          </div>

          {/* Second Column - Logo & Social Icons */}
          <div className="flex flex-col 1440:gap-6 1080:gap-5 850:gap-4 650:gap-3 gap-3 items-center">
            {/* Logo */}
            <Link href="/" onClick={handleLogoClick} className="cursor-pointer">
              <Image
                src="/logos/wiwaha/white-logo.png"
                alt="WIWAHA Logo"
                width={150}
                height={100}
                className="1280:h-[75px] 850:h-[70px] 650:h-[65px] h-[56px] w-auto"
              />
            </Link>

            {/* Description Text */}
            <p className="font-roboto font-medium 1440:text-[18px] 1080:text-[16px] 850:text-[15px] 650:text-[14px] text-[13px] text-white text-center whitespace-normal">
              Risus scelerisque a non turpis vitae malesuada sed venenatis. In
              fringilla sollicitudin euismod sed.
            </p>

            {/* Social Icons */}
            <div className="flex flex-row 1440:gap-5 1080:gap-4 850:gap-3 650:gap-3 gap-3">
              {/* Facebook */}
              <div className="1440:w-[40px] 1080:w-[36px] 850:w-[32px] 650:w-[30px] w-[28px] 1440:h-[40px] 1080:h-[36px] 850:h-[32px] 650:h-[30px] h-[28px] rounded-full border border-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/logos/social/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="1440:w-[10px] 1080:w-[9px] 850:w-[8px] 650:w-[7px] w-[6px]"
                />
              </div>

              {/* Twitter */}
              <div className="1440:w-[40px] 1080:w-[36px] 850:w-[32px] 650:w-[30px] w-[28px] 1440:h-[40px] 1080:h-[36px] 850:h-[32px] 650:h-[30px] h-[28px] rounded-full border border-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/logos/social/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="1440:w-[14px] 1080:w-[12px] 850:w-[11px] 650:w-[10px] w-[9px]"
                />
              </div>

              {/* Instagram */}
              <div className="1440:w-[40px] 1080:w-[36px] 850:w-[32px] 650:w-[30px] w-[28px] 1440:h-[40px] 1080:h-[36px] 850:h-[32px] 650:h-[30px] h-[28px] rounded-full border border-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/logos/social/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="1440:w-[14px] 1080:w-[12px] 850:w-[11px] 650:w-[10px] w-[9px]"
                />
              </div>

              {/* YouTube */}
              <div className="1440:w-[40px] 1080:w-[36px] 850:w-[32px] 650:w-[30px] w-[28px] 1440:h-[40px] 1080:h-[36px] 850:h-[32px] 650:h-[30px] h-[28px] rounded-full border border-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/logos/social/yt.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="1440:w-[14px] 1080:w-[12px] 850:w-[11px] 650:w-[10px] w-[9px]"
                />
              </div>
            </div>
          </div>

          {/* Third Column - Working Hours */}
          <div className="flex flex-col 1440:gap-6 1080:gap-5 850:gap-4 650:gap-3 gap-3">
            {/* Working Hours Text */}
            <div className="text-center">
              <p className="font-roboto font-medium 1440:text-[20px] 1080:text-[18px] 850:text-[16px] 650:text-[15px] text-[14px] text-white">
                Working hours:
              </p>
              <p className="font-roboto font-medium 1440:text-[20px] 1080:text-[18px] 850:text-[16px] 650:text-[15px] text-[14px] text-white">
                Monday to Friday 9am - 5pm
              </p>
            </div>

            {/* Email Form */}
            <form
              onSubmit={handleEmailSubmit}
              className="flex items-center 1440:gap-2 1080:gap-2 850:gap-1.5 650:gap-1.5 gap-1.5"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your mail"
                required
                className="flex-1 bg-transparent border-0 border-b 1440:pb-2 1080:pb-2 850:pb-1.5 650:pb-1.5 pb-1.5 font-roboto italic font-normal 1440:text-[20px] 1080:text-[16px] 850:text-[15px] 650:text-[14px] text-[13px] text-[#FFFAF4] placeholder:text-[#FFFAF4] focus:outline-none"
                style={{
                  borderBottomColor: "#D6A663",
                  borderBottomWidth: "1px",
                }}
              />
              <button
                type="submit"
                className="1440:w-[40px] 1080:w-[36px] 850:w-[32px] 650:w-[30px] w-[28px] 1440:h-[40px] 1080:h-[36px] 850:h-[32px] 650:h-[30px] h-[28px] rounded-full bg-transparent flex items-center justify-center cursor-pointer"
                style={{ border: "0.83px solid #FFFFFF4B" }}
              >
                <ChevronRight
                  className="text-white 1440:w-[20px] 1080:w-[18px] 850:w-[16px] 650:w-[14px] w-[12px]"
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Border - Full Width */}
      <div
        className="w-full 1440:mb-6 1080:mb-5 850:mb-4 650:mb-3 mb-3"
        style={{ borderTop: "2px solid #FFFFFF80" }}
      ></div>

      {/* Copyright */}
      <div className="container mx-auto 1440:px-4 1080:px-4 850:px-4 650:px-3 px-3 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        <div className="text-center">
          <p className="font-raleway font-normal 1440:text-[18px] 1080:text-[16px] 850:text-[15px] 650:text-[14px] text-[13px] text-white">
            Copyright <span className="font-bold">WIWAHA</span>, All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
