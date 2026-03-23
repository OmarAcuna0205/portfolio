import { serviceData } from "@/data/data";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <div
      id="services"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-10"
    >
      <h4 className="font-jakarta mb-2 text-center text-lg">What I Offer</h4>
      <h2 className="font-playfair text-center text-5xl">My services</h2>

      <p className="font-jakarta mx-auto mt-5 mb-12 max-w-2xl text-center">
        I'm early in my career, but I build real things. These are the areas
        where I'm focused:
      </p>

      <div className="my-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map(({ Icon, title, description, link }, index) => (
          <div
            key={index}
            className="rounded-lg border border-black px-8 py-8 duration-500 hover:-translate-y-1 hover:shadow-black"
          >
            <Icon className="w-20" />
            <h3 className="font-jakarta my-4 text-lg font-bold">{title}</h3>
            <p className="font-jakarta my-2 text-justify text-sm">
              {description}
            </p>
            <a
              className="mt-5 flex cursor-pointer items-center gap-2 text-gray-500 hover:text-black"
              href={link}
            >
              Read more
              <ArrowUpRight className="h-6 w-6" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
