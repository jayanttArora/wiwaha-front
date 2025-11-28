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
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
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
        <div className="hidden max-[850px]:hidden 850:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-item font-dm-sans text-base leading-none tracking-normal transition-colors duration-200 ${
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
            className="w-[160px] h-[60px] bg-[#D2C094] rounded-[100px] flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#C5B388] cursor-pointer"
          >
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
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
            <div className="flex flex-col items-center space-y-6 w-full max-w-md">
              {/* Navigation Links */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavLinkClick}
                  className="nav-item font-dm-sans text-xl leading-none tracking-normal transition-colors duration-200 text-[#D6A663] hover:text-[#4C5637] py-3 text-center w-full"
                  data-text={item.name}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact Us Button - Below all links */}
              <div className="pt-4 w-full">
                <button
                  onClick={handleContactClick}
                  className="w-full h-[60px] bg-[#D2C094] rounded-[100px] flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#C5B388] cursor-pointer"
                >
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
