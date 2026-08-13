// Portfolio — one object per project card.
// The card component reads only: name, category, tags, description, url.
// Leave `url` empty ("") until a public link exists — the CTA then stays disabled.

export const projects = [
  {
    name: "Society Meter App",
    category: "Internal Society Management",
    tags: ["Water Metering", "Approval Workflow", "Maintenance"],
    description:
      "A digital workflow for society committees to record water-meter readings and approve them in one place — no door-to-door rounds, no paper logs.",
    url: "https://society-meter-app.vercel.app/",
  },
  {
    name: "Gurukul Tuition Classes",
    category: "Education & Tuition",
    tags: ["Class Details", "Admissions", "Online Presence"],
    description:
      "A focused website that puts Gurukul's classes and admission details in one place, so parents find the right class and get in touch.",
    url: "https://gurukul-classes-8kg7p7ck0-shubhpatelal-gmailcoms-projects.vercel.app/",
  },
  {
    name: "Your Next Project",
    category: "Demo",
    tags: ["Custom Build"],
    description:
      "A clean slot for your next project — swap in the details and a live link and this card is ready.",
    url: "",
  },
];
