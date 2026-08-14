import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import {
  navLinks,
  CTA_CONTACT,
  site,
  whatsappUrl,
  hasConfiguredWhatsApp,
} from "../data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  // Scroll-spy: highlight the nav link of the section currently in the
  // middle band of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => link.href.slice(1))
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onDesktop = (event) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    desktopQuery.addEventListener("change", onDesktop);

    // Keep background content out of the tab order while the menu is open.
    const background = [
      document.getElementById("main"),
      document.querySelector("footer"),
    ].filter(Boolean);
    background.forEach((el) => el.setAttribute("inert", ""));
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      desktopQuery.removeEventListener("change", onDesktop);
      background.forEach((el) => el.removeAttribute("inert"));
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-black-200 bg-white">
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`text-[15px] font-medium underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-black-950 hover:decoration-black-950 ${
                      isActive ? "text-black-950 decoration-black-950" : "text-black-800"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn-primary btn-sm hidden sm:inline-flex">
            {CTA_CONTACT}
          </a>
          <button
            ref={triggerRef}
            type="button"
            className="btn btn-secondary btn-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name="menu" className="text-[20px]" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="overlay-in fixed inset-0 z-50 flex flex-col overflow-y-auto bg-black-950 lg:hidden"
        >
          <div className="container-site flex h-16 shrink-0 items-center justify-between gap-6">
            <Logo inverted />
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center border border-white/40 text-cream transition-colors duration-200 hover:border-white hover:text-white"
            >
              <Icon name="close" className="text-[20px]" />
            </button>
          </div>

          <nav aria-label="Mobile" className="container-site flex flex-1 flex-col justify-[safe_center]">
            <ul className="border-t border-white/10">
              {navLinks.map((link, index) => {
                return (
                  <li key={link.href} className="border-b border-white/10">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="mobile-menu-link hero-rise group flex items-baseline gap-6 py-5 md:py-6"
                      style={{ animationDelay: `${index * 45}ms` }}
                    >
                      <span className="font-display text-[13px] font-medium tracking-[0.2em] text-white/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[30px] font-semibold leading-none tracking-[-0.02em] text-cream transition-colors duration-200 group-hover:text-white md:text-[38px]">
                        {link.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="container-site shrink-0 pb-10">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-inverse w-full"
            >
              {CTA_CONTACT}
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
            <ul className="mt-6 space-y-1.5 text-[14px]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-black-300 transition-colors duration-200 hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                {hasConfiguredWhatsApp() ? (
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-300 transition-colors duration-200 hover:text-white"
                  >
                    WhatsApp us
                  </a>
                ) : (
                  <span className="text-black-400">WhatsApp coming soon</span>
                )}
              </li>
              <li className="text-black-400">{site.location}</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
