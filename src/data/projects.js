// Portfolio — one object per project card.
// The card component reads: name, category, tags, description, url.
// Leave `url` empty ("") until a public link exists — the CTA then stays
// disabled (the third card is the "empty slot" demo).

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
    name: "Video Editor Portfolio",
    category: "Creative Work",
    tags: ["Cinematic Editing", "Motion Design"],
    description:
      "Portfolio site for a video editor, built to showcase cinematic edits and reels with a clean, visual-first layout.",
    url: "https://sg-bice.vercel.app/",
  },
];
