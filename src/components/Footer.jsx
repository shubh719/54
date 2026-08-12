import Icon from "./Icon";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import { site, whatsappUrl, navLinks } from "../data/site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black-200 bg-white">
      <div className="container-site relative py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-black-600">
              Clean, mobile-first websites for small businesses. Honest
              pricing, no hidden costs.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${social.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black-200 text-black-950 transition-colors duration-200 hover:border-black-950"
                  >
                    <SocialIcon name={social.label.toLowerCase()} />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  aria-label={`Email ${site.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black-200 text-black-950 transition-colors duration-200 hover:border-black-950"
                >
                  <Icon name="mail" className="text-[20px]" />
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.16em] text-black-600">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex min-h-11 items-center text-[15px] text-black-800 transition-colors duration-200 hover:text-black-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.16em] text-black-600">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-1 text-[15px]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex min-h-11 items-center text-black-800 transition-colors duration-200 hover:text-black-950"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center text-black-800 transition-colors duration-200 hover:text-black-950"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex min-h-11 items-center text-black-600">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-black-600">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-black-600">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
