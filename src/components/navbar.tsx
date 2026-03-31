"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useState } from "react";
import { Moon, ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 flex w-full items-center justify-between px-8 py-3 transition-all duration-300 ease-in-out lg:px-10 xl:px-12 ${isScrolled ? "bg-white/90 shadow-sm backdrop-blur-lg" : ""}`}
    >
      <a href="#top">
        <Image src={assets.logo} alt="OA Logo" className="w-12" />
      </a>

      <ul
        className={`hidden items-center gap-6 rounded-full px-12 py-3 transition-all duration-300 ease-in-out md:flex ${isScrolled ? "" : "bg-white/50 shadow-md"}`}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a className="font-playfair" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle Theme"
          className="cursor-pointer duration-500 hover:-translate-y-1"
        >
          <Moon className="h-8 w-8 text-black" />
        </button>
        <a
          href="#contact"
          className="font-jakarta hidden items-center gap-3 rounded-full border px-10 py-2.5 lg:flex"
        >
          Contact
          <ArrowRight className="h-6 w-6 text-black" />
        </a>

        <button
          className="block cursor-pointer duration-500 hover:-translate-y-1 md:hidden"
          onClick={openMenu}
          aria-label="Open Menu"
        >
          <Menu className="h-8 w-8 text-black" />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 -z-10 bg-black/50 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 flex h-screen w-56 flex-col gap-4 bg-black px-10 py-20 text-white transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        {...(!isMenuOpen && { inert: true })}
      >
        <button
          className="absolute top-6 right-6"
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <X className="h-8 w-8" />
        </button>

        <ul className="flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a className="font-playfair" onClick={closeMenu} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
