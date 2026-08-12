import { reasons } from "../data/why";

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-black-950">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="h2 text-cream">Why small businesses pick FiveFour.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-black-400">
            The way agencies usually work (quotes, retainers, ticket queues)
            doesn't fit a small business. Ours does.
          </p>
        </div>

        <ol className="mt-14 border-t border-white/20 lg:mt-20">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
              className="grid gap-3 border-b border-white/20 py-10 md:grid-cols-[220px_1fr] md:gap-10 md:py-12"
            >
              <span className="font-display text-[56px] font-medium leading-none tracking-[-0.02em] text-cream md:text-[72px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.01em] text-cream md:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black-300 md:text-base">
                  {reason.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
