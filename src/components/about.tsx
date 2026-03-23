import { assets } from "@/assets/assets";
import { infoList, toolsData } from "@/data/data";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-10"
    >
      <h4 className="font-jakarta mb-2 text-center text-lg">Introduction</h4>
      <h2 className="font-playfair text-center text-5xl">About me</h2>

      <div className="my-20 flex w-full flex-col items-center gap-20 lg:flex-row">
        <div className="w-64 max-w-none rounded-3xl sm:w-80">
          <Image
            src={assets.profile_img}
            alt="user"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <p className="font-jakarta mb-10 text-center">
            Full-stack developer specializing in PERN stack and Next.js with
            Supabase. One year of enterprise internship experience in production
            environments.
          </p>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {infoList.map(({ Icon, title, items }, index) => (
              <li
                className="cursor-pointer rounded-xl border-[0.5px] border-gray-500 p-6 duration-500 hover:-translate-y-1 hover:shadow-black"
                key={index}
              >
                <Icon className="h-8 w-8 text-black" />
                <h3 className="font-jakarta my-4 text-gray-700">{title}</h3>
                <div className="flex flex-col gap-1 text-sm text-gray-600">
                  {items.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <h4 className="font-jakarta my-6">Tools I use:</h4>

          <ul className="flex w-full items-center justify-between sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex aspect-square w-12 cursor-pointer items-center justify-center rounded-lg border border-gray-400 duration-500 hover:-translate-y-1 sm:w-14"
                key={index}
              >
                <Image src={tool} alt="tools" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
