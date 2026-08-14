import Icon from "./Icon";
import { pricing } from "../data/pricing";
import { CTA_CONTACT } from "../data/site";

function PlanCard({ plan }) {
  const featured = plan.featured;
  return (
    <article
      className={`flex h-full flex-col rounded-[14px] p-5 transition-[transform,background-color] duration-200 ease-out ${
        featured
          ? "bg-black-950 ring-1 ring-cream/70"
          : "bg-white "
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] ${
            featured ? "bg-white text-black-950" : "bg-black-950 text-white"
          }`}
        >
          <Icon name={plan.icon} className="text-[16px]" />
        </span>
        {plan.badge && (
          <span
            className={`rounded-[4px] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] ${
              featured ? "bg-white text-black-950" : "bg-black-950 text-white"
            }`}
          >
            {plan.badge}
          </span>
        )}
      </div>

      <h3
        className={`mt-4 font-display text-[17px] font-semibold tracking-[-0.01em] ${
          featured ? "text-cream" : "text-black-950"
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-1.5 min-h-[44px] text-[13px] leading-relaxed ${
          featured ? "text-black-300" : "text-black-600"
        }`}
      >
        {plan.tagline}
      </p>

      <p className="mt-4 flex items-baseline gap-1.5">
        <span
          className={`text-[26px] font-semibold leading-tight tracking-[-0.01em] tabular-nums ${
            featured ? "text-cream" : "text-black-950"
          }`}
        >
          {plan.price}
        </span>
        <span
          className={`text-[12px] ${featured ? "text-black-400" : "text-black-600"}`}
        >
          / {plan.priceNote}
        </span>
      </p>

      <ul
        className={`mt-4 space-y-2 border-t pt-4 ${
          featured ? "border-white/20" : "border-black-950/10"
        }`}
      >
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Icon
              name="check"
              className={`mt-0.5 text-[15px] ${featured ? "text-cream" : "text-black-950"}`}
            />
            <span
              className={`text-[13px] leading-snug ${featured ? "text-black-300" : "text-black-600"}`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <a
          href="#contact"
          className={`btn w-full px-5 py-2.5 text-[11px] ${
            featured ? "btn-inverse" : "btn-primary"
          }`}
        >
          {plan.cta}
        </a>
      </div>
    </article>
  );
}

function CustomPanel({ plan }) {
  return (
    <article className="flex flex-col gap-8 border border-white/15 bg-black-900 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
      <div className="flex items-start gap-4 lg:max-w-md">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-white text-black-950">
          <Icon name={plan.icon} className="text-[16px]" />
        </span>
        <div>
          <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em] text-cream">
            {plan.name}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-black-300">
            {plan.tagline}
          </p>
        </div>
      </div>

      <ul className="flex max-w-md flex-wrap gap-2">
        {plan.includes.map((item) => (
          <li
            key={item}
            className="rounded-[4px] border border-white/15 px-3 py-1.5 text-[12px] leading-relaxed text-black-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex shrink-0 items-center gap-6">
        <div>
          <p className="font-display text-[24px] font-semibold leading-tight tracking-[-0.01em] tabular-nums text-cream">
            {plan.price}
          </p>
          <p className="text-[12px] text-black-400">{plan.priceNote}</p>
        </div>
        <a href="#contact" className="btn btn-inverse shrink-0">
          {plan.cta}
        </a>
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad scroll-mt-20 bg-black-950">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-[12px] font-medium uppercase tracking-[0.22em] text-white/50">
            Pricing
          </span>
          <h2 className="h2 mt-4 text-cream">
            Simple plans for every stage of growth.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-black-400">
            {pricing.intro}
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2 text-[12px] text-black-300">
            <li className="rounded-[4px] border border-white/15 px-3 py-1.5">
              One-time pricing
            </li>
            <li className="rounded-[4px] border border-white/15 px-3 py-1.5">
              No retainers
            </li>
            <li className="rounded-[4px] border border-white/15 px-3 py-1.5">
              Clear scope
            </li>
          </ul>
          <a href="#contact" className="btn btn-inverse mt-10">
            {CTA_CONTACT}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-2 lg:items-stretch">
          {pricing.plans
            .filter((plan) => !plan.custom)
            .map((plan) => (
              <div key={plan.id} className="h-full">
                <PlanCard plan={plan} />
              </div>
            ))}
        </div>

        <div className="mt-4">
          <CustomPanel plan={pricing.plans.find((plan) => plan.custom)} />
        </div>
      </div>
    </section>
  );
}
