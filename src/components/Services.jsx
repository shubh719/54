import Icon from "./Icon";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="h2">Everything your business needs online.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-black-600">
            No bloated packages, no features you'll never use. Just the six
            things that actually get small businesses found and contacted.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {services.map((service) => (
            <li
              key={service.title}
              className={
                service.featured
                  ? "sm:col-span-2 lg:col-span-4 lg:row-span-2"
                  : "lg:col-span-2"
              }
            >
              {service.featured ? (
                <article className="flex h-full flex-col rounded-[14px] bg-black-950 p-8 text-white transition-[transform,background-color] duration-200 ease-out hover:-translate-y-1 hover:bg-black-900 md:p-10">
                  <Icon name={service.icon} className="text-[40px] leading-none text-cream" />
                  <div className="mt-auto pt-14">
                    <h3 className="font-display text-[26px] font-semibold leading-tight tracking-[-0.01em] text-white md:text-[30px]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-black-300 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </article>
              ) : (
                <article className="flex h-full flex-col rounded-[14px] border border-black-200 bg-white p-6 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-black-950">
                  <Icon name={service.icon} className="text-[32px] leading-none text-black-950" />
                  <h3 className="mt-6 text-[17px] font-medium tracking-[-0.01em] text-black-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-black-600">
                    {service.description}
                  </p>
                </article>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
