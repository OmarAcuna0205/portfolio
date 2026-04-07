import Image from "next/image";
import { assets } from "@/assets/assets";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Footer = ({ isDarkMode }: NavbarProps) => {
  return (
    <div className="mt-20">
      <div className="mt-12 items-center justify-between border-t px-8 py-6 text-center sm:flex">
        <p>@2026 Omar Acuña. All rights reserved.</p>
        <ul className="mt-4 flex items-center justify-center gap-4 sm:mt-0">
          <li className="cursor-pointer duration-500 hover:-translate-y-1">
            <a
              href="https://github.com/OmarAcuna0205"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isDarkMode ? (
                <Image src={assets.github_white} alt="GitHub" className="w-8" />
              ) : (
                <Image src={assets.github} alt="GitHub" className="w-8" />
              )}
            </a>
          </li>
          <li className="cursor-pointer duration-500 hover:-translate-y-1">
            <a
              href="https://www.linkedin.com/in/omar-acu%C3%B1a-34abab349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={assets.linkedin} alt="LinkedIn" className="w-8" />
            </a>
          </li>
          <li className="cursor-pointer duration-500 hover:-translate-y-1">
            <a href="mailto:omaracuna0205@gmail.com">
              <Image src={assets.gmail} alt="Gmail" className="w-8" />
            </a>
          </li>
          <li className="cursor-pointer duration-500 hover:-translate-y-1">
            <a
              href="https://wa.me/526144050784"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={assets.whatsapp} alt="WhatsApp" className="w-8" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
