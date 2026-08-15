import Icon from "./Icon";
import { CTA_CONTACT } from "../data/site";

const marqueeItems = ["Web Design", "Development", "SEO", "Launch"];

export default function Hero() {
  return (
    // min-height = 100dvh minus the sticky header (h-16 / lg:h-[72px]),
    // so the marquee lands exactly on the fold with no bleed into the
    // next section on mobile.
    <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-black-950 lg:min-h-[calc(100dvh-4.5rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[620px] bg-[radial-gradient(60%_55%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]"
      />

      <div className="container-site hero-pad relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <p
          className="hero-label hero-rise font-display text-[12px] font-medium uppercase tracking-[0.22em] text-white/50"
          style={{ animationDelay: "60ms" }}
        >
          Web design &amp; development
        </p>

        <h1
          className="hero-title hero-rise mt-3 max-w-[14ch] font-display text-[clamp(48px,12vw,88px)] font-bold leading-[1.02] tracking-[-0.03em] text-cream text-balance"
          style={{ animationDelay: "140ms" }}
        >
          Websites that work for your business.
        </h1>

        <p
          className="hero-sub hero-rise mt-3 max-w-[46ch] text-lg leading-snug text-black-300 md:text-xl"
          style={{ animationDelay: "240ms" }}
        >
          FiveFour is a small web design agency building fast,
          mobile-first websites.
          <br />
          Honest one-time pricing. No hidden costs.
        </p>

        <ul
          className="hero-rise mt-6 hidden max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-black-300 sm:flex"
          style={{ animationDelay: "290ms" }}
          aria-label="Key benefits"
        >
          <li className="rounded-[4px] border border-white/15 px-3 py-1.5">
            Starter starts at ₹4,999
          </li>
          <li className="rounded-[4px] border border-white/15 px-3 py-1.5">
            Launch in 7-10 days
          </li>
          <li className="rounded-[4px] border border-white/15 px-3 py-1.5">
            WhatsApp-first communication
          </li>
        </ul>

        <div
          className="hero-cta-margin hero-rise flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "360ms" }}
        >
          <a href="#contact" className="btn btn-inverse btn-lg">
            {CTA_CONTACT}
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
          <a href="#work" className="btn btn-inverse-outline btn-lg">
            See our work
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-auto border-t border-white/20">
        <p className="sr-only">
          Web design. Development. SEO. Launch.
        </p>
        <div className="overflow-hidden" aria-hidden="true">
          <div className="marquee-track py-4">
            {[0, 1, 2, 3].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {marqueeItems.map((item) => (
                  <span key={item} className="flex items-center whitespace-nowrap">
                    <span className="px-6 font-display text-[12px] font-medium uppercase tracking-[0.24em] text-white/50">
                      {item}
                    </span>
                    <span className="text-white/25">-</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
