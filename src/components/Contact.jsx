import { useState } from "react";
import Icon from "./Icon";
import SocialIcon from "./SocialIcon";
import { site, whatsappUrl, FORMSPREE_ENDPOINT } from "../data/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            message: values.message.trim(),
            _subject: `New enquiry from ${values.name.trim()} (fivefour site)`,
          }),
        });
        if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      } else {
        // Demo mode: no Formspree endpoint configured yet (see src/data/site.js).
        await new Promise((resolve) => setTimeout(resolve, 700));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad scroll-mt-20 bg-black-950">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="h2 text-cream">Tell us about your project.</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-black-400">
            A few lines about your business and what you need. We'll get back
            to you with honest advice: no pressure, no jargon.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 text-[15px] font-medium text-cream transition-colors duration-200 hover:text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-200 group-hover:border-white/60">
                  <Icon name="mail" className="text-[20px] text-cream" />
                </span>
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[15px] font-medium text-cream transition-colors duration-200 hover:text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-200 group-hover:border-white/60">
                  <SocialIcon name="whatsapp" className="h-5 w-5 text-cream" />
                </span>
                WhatsApp us
              </a>
            </li>
            <li className="flex items-center gap-3 text-[15px] text-black-300">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25">
                <Icon name="location_on" className="text-[20px] text-cream" />
              </span>
              {site.location}
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[14px] border border-white/15 bg-black-900 p-6 md:p-10">
            {status === "success" ? (
              <div className="flex gap-4 rounded-[10px] bg-white p-6 md:p-8" role="status">
                <Icon name="check_circle" className="mt-0.5 text-[28px] text-black-950" />
                <div>
                  <p className="text-lg font-medium text-black-900">Message sent.</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-black-600">
                    We'll get back to you shortly. Need a faster answer?{" "}
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-black-950 underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-black-950"
                    >
                      Message us on WhatsApp
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary mt-6"
                    onClick={() => {
                      setValues({ name: "", email: "", message: "" });
                      setStatus("idle");
                    }}
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="label text-black-300">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.name}
                      onChange={handleChange}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className="input-dark"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="contact-name-error" role="alert" className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-white">
                        <Icon name="error" className="text-[16px]" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="label text-black-300">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className="input-dark"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p id="contact-email-error" role="alert" className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-white">
                        <Icon name="error" className="text-[16px]" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="label text-black-300">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={values.message}
                      onChange={handleChange}
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className="input-dark resize-y"
                      placeholder="What does your business need?"
                    />
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-white">
                        <Icon name="error" className="text-[16px]" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {status === "error" && (
                  <p role="alert" className="mt-6 flex items-start gap-2 rounded-[6px] border border-white/30 bg-black-950 p-4 text-[14px] leading-relaxed text-black-200">
                    <Icon name="error" className="mt-0.5 text-[18px] text-white" />
                    <span>
                      Something went wrong sending your message. Please try
                      again, or{" "}
                      <a
                        href={whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white underline decoration-2 underline-offset-4 hover:decoration-white"
                      >
                        message us on WhatsApp
                      </a>
                      .
                    </span>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-inverse mt-8 w-full disabled:cursor-not-allowed disabled:bg-black-400 sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
