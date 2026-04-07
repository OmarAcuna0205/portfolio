import { workData } from "@/data/data";

export const Work = () => {
  return (
    <div id="work" className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-10">
      <h4 className="font-jakarta mb-2 text-center text-lg">My portfolio</h4>
      <h2 className="font-playfair text-center text-5xl">My latest work</h2>

      <p className="font-jakarta mx-auto mt-5 mb-12 max-w-2xl text-center">
        Explore a collection of projects showcasing my expertise in full stack
        development.
      </p>

      <div className="my-10 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {workData.map((project, index) => (
          <div
            className="group relative aspect-square rounded-lg bg-cover bg-center bg-no-repeat"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
