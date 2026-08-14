import { useState } from "react";
import Icon from "./Icon";
import { faqs } from "../data/faqs";

function FaqItem({ item, index, open, onToggle }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <li className="border-b border-black-200">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span className="text-[17px] font-medium text-black-900">
            {item.question}
          </span>
          <Icon
            name={open ? "remove" : "add"}
            className="shrink-0 text-[22px] text-black-950"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[62ch] pb-6 text-[15px] leading-relaxed text-black-600">
            {item.answer}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section-pad scroll-mt-20">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <span className="section-label">FAQ</span>
              <h2 className="h2">Questions, answered.</h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-black-600">
                Everything clients usually ask before starting. Anything else:
                just message us.
              </p>
              <a href="#contact" className="btn btn-secondary mt-8">
                Ask us anything
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-black-200">
              {faqs.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  index={index}
                  open={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
