import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 text-center">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="h-40 w-40 rounded-full object-cover object-center"
        />
      </div>
      <h3 className="font-playfair mb-3 flex items-end gap-2 text-xl md:text-2xl">
        Hello, I am Omar Acuña
      </h3>
      <h1 className="font-playfair text-3xl sm:text-6xl lg:text-[66px]">
        Full Stack Developer
      </h1>
      <p className="font-jakarta mx-auto max-w-2xl">
        Looking for a junior opportunity to grow and contribute to real
        products.
      </p>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#contact"
          className="font-jakarta flex items-center gap-2 rounded-full border border-white bg-black px-10 py-3 text-white"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="Contact" className="w-4" />
        </a>

        <a
          href="/sample_resume.pdf"
          download
          className="font-jakarta flex items-center gap-2 rounded-full border border-gray-500 px-10 py-3"
        >
          My resume
          <Image src={assets.download_icon} alt="Resume" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
