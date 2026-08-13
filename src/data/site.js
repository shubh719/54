// Site-wide configuration — edit this file, not the components.
// TODO: replace every placeholder below with real FiveFour details.

export const site = {
  name: "FiveFour",
  tagline: "Websites for growing businesses.",

  // TODO: set your real email address.
  email: "hello@fivefour.in",

  // TODO: set your real WhatsApp number in international format (country code, no +).
  // Used to build wa.me links in the footer, contact section and pricing notes.
  whatsappNumber: "91XXXXXXXXXX",
  whatsappMessage:
    "Hi FiveFour! I'd like to talk about a website for my business.",

  // TODO: replace with the real social profiles.
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],

  location: "India · working with clients nationwide",
};

export function whatsappUrl() {
  if (site.whatsappNumber.includes("X")) {
    return "";
  }
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
}

export function hasConfiguredWhatsApp() {
  return Boolean(whatsappUrl());
}

export function hasConfiguredSocials() {
  return site.socials.some((social) => !/instagram\.com\/?$|facebook\.com\/?$|linkedin\.com\/?$/.test(social.href));
}

// Contact form — pick: Formspree.
// Create a free form at https://formspree.io, then paste your endpoint here:
//   export const FORMSPREE_ENDPOINT = "https://formspree.io/f/abcdwxyz";
// While this is empty, the form runs in demo mode (no network call, shows success).
export const FORMSPREE_ENDPOINT = "";

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// One CTA label per intent (see Design.md typography discipline).
export const CTA_CONTACT = "Start a project";
