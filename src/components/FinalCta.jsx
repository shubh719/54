import Icon from "./Icon";
import { CTA_CONTACT } from "../data/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/20 bg-black-950 py-20 md:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[clamp(120px,38vw,480px)] font-bold leading-none tracking-[-0.04em] text-cream/[0.05]"
      >
        54
      </span>
      <div className="container-site relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[30px] font-semibold leading-[1.08] tracking-[-0.02em] text-cream text-balance sm:text-3xl md:text-[36px]">
            Ready to get your business online?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-black-300 md:text-lg">
            Most Starter sites go live in 7-10 days from content received.
          </p>
          <p className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed text-black-400">
            Share your business name, services, and contact details, and we’ll
            help you decide the right starting point.
          </p>
          <div className="mt-8">
            <a href="#contact" className="btn btn-inverse">
              {CTA_CONTACT}
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
