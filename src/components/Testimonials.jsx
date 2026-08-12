import { testimonials } from "../data/testimonials";

const initialsOf = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="h2">What clients say.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-black-600">
            What it's like to work with FiveFour.
          </p>
          <p className="mt-3 text-[13px] text-black-500">
            Sample quotes. Real client reviews replace these once we have them.
          </p>
        </div>

        <ul
          aria-label="Client testimonials, scrollable"
          tabIndex={0}
          className="-mx-6 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 outline-none md:-mx-16 md:mt-16 md:gap-6 md:px-16"
        >
          {testimonials.map((testimonial) => (
            <li key={testimonial.name} className="h-full w-[85%] shrink-0 snap-start sm:w-[62%] lg:w-[440px]">
              <figure className="flex h-full flex-col rounded-[14px] border border-black-200 bg-white p-8 md:p-10">
                <blockquote className="flex-1 text-[18px] leading-relaxed text-black-800 md:text-[19px]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3.5 border-t border-black-200 pt-6">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black-950 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-cream"
                  >
                    {initialsOf(testimonial.name)}
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[15px] font-medium text-black-900">
                      {testimonial.name}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-black-600">
                      {testimonial.business}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}