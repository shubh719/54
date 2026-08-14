import { projects } from "../data/projects";

/* Plain, content-only cards — solid dark background with a hairline
   border. No icons, illustrations, or decorative elements. Tag pills are
   static labels (non-interactive), so they keep their bordered/muted
   style on hover; only the card lifts and its border brightens. Title and
   tag zones reserve fixed heights (2 lines / 2 rows) so the description
   starts at the same vertical position on every card regardless of title
   length or tag count, and the CTA is pinned to the bottom via mt-auto. */
function ProjectTile({ project }) {
  return (
    <article className="flex h-full flex-col rounded-[14px] border border-white/15 bg-black-900 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-[5px] hover:border-white/30">
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="font-display text-[11px] font-medium uppercase tracking-[0.22em] text-black-300">
          {project.category}
        </p>
        <h3 className="mt-3 min-h-[55px] font-display text-[22px] font-semibold leading-tight tracking-[-0.01em] text-cream">
          {project.name}
        </h3>
        <ul className="mt-4 flex min-h-[60px] flex-wrap content-start gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[4px] border border-white/15 px-3 py-1 text-[12px] text-black-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[15px] leading-relaxed text-black-400">
          {project.description}
        </p>
        <div className="mt-auto pt-8">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-inverse-outline btn-sweep btn-sm"
            >
              <span>Visit Website</span>
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="btn btn-inverse-outline btn-sweep btn-sm cursor-not-allowed opacity-55"
            >
              <span>Link coming soon</span>
              <span aria-hidden="true">↗</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="section-pad scroll-mt-20 bg-black-950">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="section-label text-black-400">Our work</span>
          <h2 className="h2 text-cream">Selected work from the studio.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-black-400">
            A few builds, each one solving a real problem for the people who
            use it.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name} className="h-full">
              <ProjectTile project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}