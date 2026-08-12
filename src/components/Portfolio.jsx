import Icon from "./Icon";
import { projects } from "../data/projects";

function ProjectTile({ project, index }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[14px] border border-white/15 bg-black-900 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-white/30">
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ backgroundColor: project.accent }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} website`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col justify-between p-6 md:p-8">
            <span className="font-display text-[11px] font-medium uppercase tracking-[0.22em] text-black-950">
              Screenshot coming soon
            </span>
            <span className="font-display text-[88px] font-bold leading-[0.85] tracking-[-0.03em] text-black-950 md:text-[112px]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[4px] border border-white/15 px-2 py-0.5 text-xs text-black-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-medium tracking-[-0.01em] text-cream">
          {project.name}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-black-400">
          {project.result}
        </p>
        <div className="mt-auto pt-6">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-white underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-white"
            >
              View project
              <Icon name="arrow_outward" className="text-[18px]" />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-default items-center gap-1.5 text-[15px] font-medium text-black-500"
            >
              View project
              <Icon name="arrow_outward" className="text-[18px]" />
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
            Three recent builds, each put together around one business and one
            job: getting it found.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.name} className="h-full">
              <ProjectTile project={project} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
