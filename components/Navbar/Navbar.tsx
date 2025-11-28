"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Only check scroll on home page
      if (isHomePage) {
        // Get the Hero section element to check its actual height
        const heroSection = document.getElementById("hero");
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight;
          // Change navbar when user scrolls past the Hero section
          setIsScrolled(window.scrollY > heroHeight - 140); // -140px for smooth transition before fully leaving Hero
        }
      }
    };

    // For non-home pages, always show solid navbar
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      // For home page, check initial scroll position
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Sync checkbox with state
  useEffect(() => {
    if (hamburgerInputRef.current) {
      hamburgerInputRef.current.checked = isMobileMenuOpen;
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Amenities", href: "/amenities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // If not on home page, Link will handle navigation automatically
  };

  const handleContactClick = () => {
    router.push("/contact");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCheckboxChange = () => {
    if (hamburgerInputRef.current) {
      setIsMobileMenuOpen(hamburgerInputRef.current.checked);
    }
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-about-bg" : "bg-[#010101]/60"
      }`}
      style={{ height: "var(--navbar-height)" }}
    >
      <div className="h-full max-w-7xl mx-auto 1440:px-4 1080:px-4 850:px-4 650:px-3 px-3 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="shrink-0">
          <Link href="/" className="cursor-pointer" onClick={handleLogoClick}>
            <Image
              src={
                isScrolled
                  ? "/logos/wiwaha/green-logo.png"
                  : "/logos/wiwaha/white-logo.png"
              }
              alt="WIWAHA Logo"
              width={150}
              height={100}
              className="1280:h-[75px] 850:h-[70px] 650:h-[65px] h-[56px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className="hidden max-[850px]:hidden 850:flex items-center 1440:space-x-8 1080:space-x-7 850:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-item font-dm-sans 1440:text-[16px] 1080:text-[15px] 850:text-[15px] leading-none tracking-normal transition-colors duration-200 ${
                isScrolled
                  ? "text-[#D6A663] hover:text-[#4C5637]"
                  : "text-[#D9D9D9] hover:text-white"
              }`}
              data-text={item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Us Button - Right (Desktop only) */}
        <div className="shrink-0 hidden max-[850px]:hidden 850:block">
          <button
            onClick={handleContactClick}
            className="1440:w-[160px] 1080:w-[150px] 850:w-[140px] 1440:h-[60px] 1080:h-[56px] 850:h-[52px] bg-[#D2C094] rounded-[100px] flex items-center justify-center 1440:gap-2 1080:gap-2 850:gap-1.5 transition-all duration-200 hover:bg-[#C5B388] cursor-pointer 1440:px-4 1080:px-3 850:px-3"
          >
            <Image
              src="/icons/contact-us.svg"
              alt="Contact Us"
              width={20}
              height={20}
              className="1440:w-5 1080:w-[18px] 850:w-4 1440:h-5 1080:h-[18px] 850:h-4"
            />
            <span className="font-dm-sans font-semibold 1440:text-[16px] 1080:text-[15px] 850:text-[14px] leading-none tracking-normal text-white">
              Contact Us
            </span>
          </button>
        </div>

        {/* Animated Hamburger Menu Button (shows below 850px) */}
        <div className="hidden max-[850px]:block">
          <label
            className="hamburger-menu-nav"
            style={
              {
                "--hamburger-foreground": isScrolled ? "#D6A663" : "#d9d9d9",
              } as React.CSSProperties
            }
          >
            <input
              id="sidebar_hamburger_icon"
              type="checkbox"
              ref={hamburgerInputRef}
              onChange={handleCheckboxChange}
              checked={isMobileMenuOpen}
              aria-label="Toggle menu"
            />
          </label>
        </div>
      </div>

      {/* Full Screen Mobile Menu Sidebar (shows below 850px) */}
      <div
        className={`max-[850px]:block 850:hidden fixed inset-0 z-60 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />

        {/* Sidebar Content */}
        <div className="absolute inset-0 bg-about-bg flex flex-col">
          {/* Centered Content */}
          <div className="flex-1 flex flex-col items-center justify-center 1440:px-4 1080:px-4 850:px-4 650:px-3 px-3 1440:py-8 1080:py-8 850:py-6 650:py-5 py-4">
            <div className="flex flex-col items-center 1440:space-y-6 1080:space-y-5 850:space-y-4 650:space-y-3 space-y-3 w-full max-w-md">
              {/* Navigation Links */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavLinkClick}
                  className="nav-item font-dm-sans 1440:text-[20px] 1080:text-[19px] 850:text-[18px] 650:text-[17px] text-[16px] leading-none tracking-normal transition-colors duration-200 text-[#D6A663] hover:text-[#4C5637] 1440:py-3 1080:py-2.5 850:py-2.5 650:py-2 py-2 text-center w-full"
                  data-text={item.name}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact Us Button - Below all links */}
              <div className="1440:pt-4 1080:pt-3 850:pt-3 650:pt-2 pt-2 w-full">
                <button
                  onClick={handleContactClick}
                  className="mx-auto 850:w-full 650:w-[175px] w-[145px] 1440:h-[60px] 1080:h-[56px] 850:h-[52px] 650:h-[42px] h-[40px] bg-[#D2C094] rounded-[100px] flex items-center justify-center 1440:gap-2 1080:gap-2 850:gap-1.5 650:gap-1.5 gap-1.5 transition-all duration-200 hover:bg-[#C5B388] cursor-pointer"
                >
                  <Image
                    src="/icons/contact-us.svg"
                    alt="Contact Us"
                    width={20}
                    height={20}
                    className="1440:w-5 1080:w-[18px] 850:w-4 650:w-[16px] w-[14px] 1440:h-5 1080:h-[18px] 850:h-4 650:h-[17px] h-[14px]"
                  />
                  <span className="font-dm-sans font-semibold 1440:text-[16px] 1080:text-[16px] 850:text-[15px] 650:text-[15px] text-[14px] leading-none tracking-normal text-white">
                    Contact Us
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
