import Icon from "./Icon";
import { pricing } from "../data/pricing";
import { CTA_CONTACT } from "../data/site";

function PlanCard({ plan }) {
  const featured = plan.featured;
  return (
    <article
      className={`flex h-full flex-col rounded-[14px] bg-cream p-5 text-black-950 transition-transform duration-200 ease-out ${
        featured ? "ring-1 ring-black-950/20 lg:-translate-y-2" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-black-950">
          <Icon name={plan.icon} className="text-[16px] text-white" />
        </span>
        {plan.badge && (
          <span className="rounded-full bg-black-950 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
            {plan.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-[17px] font-semibold tracking-[-0.01em] text-black-950">
        {plan.name}
      </h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-black-600">
        {plan.tagline}
      </p>

      <p className="mt-4 flex items-baseline gap-1.5">
        <span className="text-[26px] font-semibold leading-tight tracking-[-0.01em] tabular-nums text-black-950">
          {plan.price}
        </span>
        <span className="text-[12px] text-black-600">
          / {plan.priceNote}
        </span>
      </p>

      <ul className="mt-4 space-y-2 border-t border-black-950/10 pt-4">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Icon name="check" className="mt-0.5 text-[15px] text-black-950" />
            <span className="text-[13px] leading-snug text-black-600">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <a href="#contact" className="btn btn-primary mt-8 w-full px-5 py-2.5 text-[11px]">
        {plan.cta}
      </a>
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
            <li className="rounded-full border border-white/15 px-3 py-1.5">One-time pricing</li>
            <li className="rounded-full border border-white/15 px-3 py-1.5">No retainers</li>
            <li className="rounded-full border border-white/15 px-3 py-1.5">Clear scope</li>
          </ul>
          <a href="#contact" className="btn btn-inverse mt-10">
            {CTA_CONTACT}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <div key={plan.id} className="h-full">
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
