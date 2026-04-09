import { workData } from "@/data/data";
import { motion } from "motion/react";

export const Work = () => {
  return (
    <motion.div
      id="work"
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
        My portfolio
      </motion.h4>
      <motion.h2
        className="font-playfair text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest work
      </motion.h2>

      <motion.p
        className="font-jakarta mx-auto mt-5 mb-12 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Explore a collection of projects showcasing my expertise in full stack
        development.
      </motion.p>

      <motion.div
        className="my-10 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {workData.map((project, index) => (
          <motion.div
            className="group relative aspect-square rounded-lg bg-cover bg-center bg-no-repeat"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute bottom-5 left-1/2 flex w-10/12 -translate-x-1/2 cursor-pointer items-center justify-between rounded-md bg-white px-5 py-3 duration-500 group-hover:bottom-7 dark:bg-black dark:text-white">
              <div>
                <h2 className="font-jakarta text-lg font-semibold">
                  {project.title}
                </h2>
                <p className="font-jakarta text-md font-medium">
                  {project.description}
                </p>
                <p className="font-jakarta text-sm font-light">
                  {project.release}
                </p>
              </div>
              <div>
                <project.icon />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
