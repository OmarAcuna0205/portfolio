import { serviceData } from "@/data/data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4
        className="font-jakarta mb-2 text-center text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className="font-playfair text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My services
      </motion.h2>

      <motion.p
        className="font-jakarta mx-auto mt-5 mb-12 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        I&apos;m early in my career, but I build real things. These are the
        areas where I&apos;m focused:
      </motion.p>

      <motion.div
        className="my-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {serviceData.map(({ Icon, title, items, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="rounded-lg border border-black px-8 py-8 duration-500 hover:-translate-y-1 hover:shadow-black dark:border-white dark:hover:shadow-white"
          >
            <Icon className="w-20" />
            <h3 className="font-jakarta my-4 text-lg font-bold">{title}</h3>

            <div className="font-jakarta my-2 flex flex-col gap-1 text-justify text-sm text-black dark:text-white">
              {items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <a
              className="mt-5 flex cursor-pointer items-center gap-2 text-black underline hover:text-black dark:text-white dark:hover:text-white"
              href={link}
            >
              Read more
              <ArrowUpRight className="h-6 w-6" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
