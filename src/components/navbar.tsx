import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";
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
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed z-50 flex w-full items-center justify-between px-8 py-5 lg:px-10 xl:px-12">
      <a href="#top">
        <Image src={assets.logo} alt="OA Logo" className="w-12" />
      </a>

      <ul className="hidden items-center gap-6 rounded-full bg-white/50 px-12 py-3 shadow-md md:flex">
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
