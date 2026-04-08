"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useState } from "react";
import { Moon, ArrowRight, Menu, X, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 flex w-full items-center justify-between px-8 py-3 transition-all duration-300 ease-in-out lg:px-10 xl:px-12 ${
        isScrolled
          ? "bg-white/90 shadow-sm backdrop-blur-lg dark:bg-black/50 dark:shadow-white/90"
          : ""
      } ${!mounted ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <a href="#top">
        {!mounted ? (
          <div className="h-12 w-12 opacity-0" />
        ) : resolvedTheme === "dark" ? (
          <Image src={assets.logo_white} alt="OA Logo" className="w-12" />
        ) : (
          <Image src={assets.logo} alt="OA Logo" className="w-12" />
        )}
      </a>

      <ul
        className={`hidden items-center gap-6 rounded-full border border-transparent px-12 py-3 transition-all duration-300 ease-in-out md:flex ${isScrolled ? "" : "bg-white/50 shadow-md dark:border-white/50 dark:bg-transparent"}`}
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
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          aria-label="Toggle Theme"
          className="flex h-8 w-8 cursor-pointer items-center justify-center duration-500 hover:-translate-y-1"
        >
          {!mounted ? null : resolvedTheme === "dark" ? (
            <Sun className="h-8 w-8" />
          ) : (
            <Moon className="h-8 w-8" />
          )}
        </button>
        <a
          href="#contact"
          className="font-jakarta hidden items-center gap-3 rounded-full border px-10 py-2.5 lg:flex"
        >
          Contact
          <ArrowRight className="h-6 w-6" />
        </a>

        <button
          className="block cursor-pointer duration-500 hover:-translate-y-1 md:hidden"
          onClick={openMenu}
          aria-label="Open Menu"
        >
          <Menu className="h-8 w-8" />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 h-screen w-screen bg-black/50 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 flex h-screen w-56 flex-col gap-4 bg-black px-10 py-20 text-white transition-transform duration-500 ease-in-out md:hidden dark:bg-white dark:text-black ${
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
