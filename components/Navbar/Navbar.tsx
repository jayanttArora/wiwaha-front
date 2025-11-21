"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past Hero section (assuming Hero is full viewport height)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Amenities", href: "/amenities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-about-bg" : "bg-[#010101]/60"
      }`}
      style={{ height: "var(--navbar-height)" }}
    >
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="shrink-0">
          <a href="/" className="cursor-pointer">
            <Image
              src={
                isScrolled
                  ? "/logos/wiwaha/green-logo.png"
                  : "/logos/wiwaha/white-logo.png"
              }
              alt="WIWAHA Logo"
              width={150}
              height={100}
              className="h-[80px] w-auto"
              priority
            />
          </a>
        </div>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-item font-dm-sans text-base leading-none tracking-normal transition-colors duration-200 ${
                isScrolled
                  ? "text-[#D6A663] font-normal hover:text-[#4C5637]"
                  : "text-[#D9D9D9] font-normal hover:text-white"
              }`}
              data-text={item.name}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Contact Us Button - Right */}
        <div className="shrink-0">
          <button className="w-[160px] h-[60px] bg-[#D2C094] rounded-[100px] flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#C5B388] cursor-pointer">
            <Image
              src="/icons/contact-us.svg"
              alt="Contact Us"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="font-dm-sans font-semibold text-base leading-none tracking-normal text-white">
              Contact Us
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className={`p-2 ${
              isScrolled ? "text-[#D6A663]" : "text-[#d9d9d9]"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
