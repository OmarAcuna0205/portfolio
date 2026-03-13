import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRef } from "react";

// NOTE: component names always PascalCase
const Navbar = () => {
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full">
        <Image
          src={assets.header_bg_color}
          alt="header background"
          className="h-auto w-full"
        />
      </div>
      <nav className="fixed z-50 flex w-full items-center justify-between px-10 py-5 lg:px-8 xl:px-16">
        <a href="#top">
          <Image
            src={assets.logo}
            alt="OA Logo"
            className="w-14 cursor-pointer"
          />
        </a>

        <ul className="hidden items-center gap-6 rounded-full bg-white/50 px-12 py-3 shadow-sm md:flex">
          <li>
            <a className="font-playfair" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-playfair" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-playfair" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-playfair" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="font-playfair" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="Moon" className="w-6" />
          </button>
          <a
            href="#contact"
            className="font-playfair ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 lg:flex"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>
          <button className="ml-3 block md:hidden" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="transition-duration-500 fixed top-0 -right-64 bottom-0 z-50 flex h-screen w-48 flex-col gap-4 bg-rose-50 px-10 py-20 md:hidden"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close"
              className="w-4 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-playfair" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-playfair" onClick={closeMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-playfair" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-playfair" onClick={closeMenu} href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="font-playfair" onClick={closeMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
