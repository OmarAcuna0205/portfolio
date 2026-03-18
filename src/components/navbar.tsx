import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
// NOTE: component names always PascalCase
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed z-50 flex w-full items-center justify-between px-10 py-5 lg:px-8 xl:px-16">
      {/* logo */}
      <a href="#top">
        <Image src={assets.logo} alt="OA Logo" className="w-12" />
      </a>

      {/* Desktop menu */}
      <ul className="hidden items-center gap-6 rounded-full bg-white/50 px-12 py-3 shadow-md md:flex">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a className="font-playfair" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="flex items-center gap-4">
        <button aria-label="Toggle Theme">
          <Image src={assets.moon_icon} alt="Moon" className="w-8" />
        </button>
        <a
          href="#contact"
          className="font-jakarta hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 lg:flex"
        >
          Contact
          <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
        </a>

        {/* Mobile menu */}
        <button
          className="ml-3 block md:hidden"
          onClick={openMenu}
          aria-label="Open Menu"
        >
          <Image src={assets.menu_black} alt="Menu" className="w-8" />
        </button>
      </div>

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
          <Image src={assets.close_white} alt="Close" className="w-4" />
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
