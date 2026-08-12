import Icon from "./Icon";
import Reveal from "./Reveal";
import { steps } from "../data/process";

export default function Process() {
  return (
    <section id="process" className="section-pad scroll-mt-20 bg-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="section-label">Process</span>
          <h2 className="h2">From hello to launch, in four steps.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-black-600">
            A short, transparent process. You always know what's happening and
            what's coming next.
          </p>
        </div>

        {/*

          Mobile — two-column grid: 64px circle (rail passes through its
          center at 32px) + content column; the rail never touches text.
          Desktop — a single horizontal ol::before rail between the first
          and last circle centers, hidden beneath the filled circles.
        */}
        <ol className="relative mt-16 lg:mt-20 lg:grid lg:grid-cols-4 lg:gap-8 lg:before:absolute lg:before:top-[31px] lg:before:left-[11%] lg:before:right-[11%] lg:before:h-[2px] lg:before:bg-black-950">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 130}
              className="process-line relative grid grid-cols-[64px_minmax(0,1fr)] items-start gap-x-5 pb-14 last:pb-0 lg:flex lg:flex-col lg:items-center lg:gap-x-0 lg:gap-y-6 lg:pb-0"
            >
              <span className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black-950 font-display text-lg font-medium text-cream">
                {step.number}
              </span>
              <div className="flex min-w-0 flex-col lg:items-center lg:gap-0">
                <Icon
                  name={step.icon}
                  className="shrink-0 text-[40px] leading-none text-black-950"
                />
                <div className="mt-6 lg:mt-0 lg:text-center">
                  <h3 className="text-lg font-medium tracking-[-0.01em] text-black-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-black-600 lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
