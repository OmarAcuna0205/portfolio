import { assets } from "@/assets/assets";
import { infoList, toolsData } from "@/data/data";
import { motion } from "motion/react";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="font-jakarta mb-2 text-center text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="font-playfair text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="my-20 flex w-full flex-col items-center gap-20 lg:flex-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 rounded-3xl sm:w-80"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.profile_img}
            alt="user"
            className="w-full rounded-2xl"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.p
            className="font-jakarta mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Full-stack developer specializing in PERN stack and Next.js with
            Supabase. One year of enterprise internship experience in production
            environments.
          </motion.p>

          <motion.ul
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {infoList.map(({ Icon, title, items }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer rounded-xl border-[0.5px] border-black p-4 duration-500 hover:-translate-y-1 hover:shadow-black dark:border-white dark:hover:shadow-white"
                key={index}
              >
                <Icon className="h-8 w-8 text-black dark:text-white" />
                <h3 className="font-jakarta my-4 text-black dark:text-white">
                  {title}
                </h3>
                <div className="flex flex-col gap-1 text-sm text-black dark:text-white">
                  {items.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            className="font-jakarta my-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Tools I use:
          </motion.h4>

          <motion.ul
            className="flex w-full items-center justify-between sm:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                className="flex aspect-square w-12 cursor-pointer items-center justify-center rounded-lg border border-black duration-500 hover:-translate-y-1 sm:w-14 dark:border-white"
                key={index}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={tool.light}
                  alt="tools"
                  className={
                    tool.dark ? "w-5 sm:w-7 dark:hidden" : "w-5 sm:w-7"
                  }
                />
                {tool.dark && (
                  <Image
                    src={tool.dark}
                    alt="tools"
                    className="hidden w-5 sm:w-7 dark:block"
                  />
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
