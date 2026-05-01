import Image from "next/image";
import { assets } from "@/assets/assets";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="h-40 w-40 rounded-full object-cover object-center"
        />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-playfair mb-3 flex items-end gap-2 text-xl md:text-2xl"
      >
        Hello, I am Omar Acuña
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-playfair text-3xl sm:text-6xl lg:text-[66px]"
      >
        Full Stack Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-jakarta mx-auto max-w-2xl"
      >
        Looking for a junior opportunity to grow and contribute to real
        products.
      </motion.p>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="#contact"
          className="font-jakarta flex items-center gap-2 rounded-full border border-white bg-black px-10 py-3 text-white dark:bg-white dark:text-black"
        >
          Contact me
          <ArrowRight className="h-4 w-4" />
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="/my-resume.pdf"
          download
          className="font-jakarta flex items-center gap-2 rounded-full border border-black px-10 py-3 dark:border-white"
        >
          My resume
          <Download className="h-4 w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
