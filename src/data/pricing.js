export const pricing = {
  intro:
    "Pick what fits your business today, and step up to a bigger plan later if you need to.",
  plans: [
    {
      id: "starter",
      name: "Starter",
      icon: "rocket_launch",
      price: "₹4,999",
      priceNote: "one-time",
      tagline:
        "A clean, working website for a shop or small business getting online for the first time.",
      includes: [
        "Up to 5 pages (Home, About, Services, Gallery, Contact)",
        "Mobile responsive design",
        "WhatsApp chat button",
        "Google Maps + contact form",
        "Basic SEO setup",
        "SSL security included",
        "Social media links",
      ],
      cta: "Choose Starter",
      featured: false,
    },
    {
      id: "growth",
      name: "Growth",
      icon: "trending_up",
      price: "₹11,999",
      priceNote: "one-time",
      badge: "Most Picked",
      tagline:
        "Everything in Starter, built out so your business looks established and gets found.",
      includes: [
        "Up to 8 pages",
        "Everything in Starter",
        "Instagram feed + gallery page",
        "Testimonials & FAQ sections",
        "Basic blog setup (3 starter posts)",
        "Google Analytics + Search Console",
        "Advanced contact form",
      ],
      cta: "Choose Growth",
      featured: true,
    },
    {
      id: "custom",
      name: "Custom",
      icon: "build",
      price: "Custom",
      priceNote: "quoted after a call",
      tagline:
        "For bigger builds: e-commerce, bookings, dashboards, logins. Anything with a real backend.",
      includes: [
        "E-commerce with cart & payments",
        "Booking / appointment system",
        "Admin dashboard (edit content yourself)",
        "Database-backed features (Supabase)",
        "Multi-language support",
      ],
      cta: "Talk to us",
      featured: false,
      custom: true,
    },
  ],
};