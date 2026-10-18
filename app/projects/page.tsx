import { projects } from 'app/data/projects';

export const metadata = {
  title: 'Projects',
  description: 'Projects by Seif Eddine Slimene.',
};

export default function ProjectPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my projects</h1>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <article key={project.id} className="flex flex-col gap-3 py-10 first:pt-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
            />
            <div>
              <h2 className="text-xl font-medium tracking-tight">{project.title}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.category}
                {project.duration ? ` · ${project.duration}` : ''}
              </p>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">{project.summary}</p>
            {project.images.length > 1 && (
              <div className="grid grid-cols-2 gap-2">
                {project.images.slice(1).map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
                  />
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-3 text-sm">
              {project.githubLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 underline decoration-neutral-400 underline-offset-4 dark:text-neutral-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {index < projects.length - 1 && (
              <div className="mt-10 flex items-center gap-4" aria-hidden="true">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-sky-400 dark:via-neutral-700 dark:to-sky-500" />
                <span className="h-2 w-2 rotate-45 bg-gradient-to-br from-sky-400 to-emerald-400" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-neutral-300 to-emerald-400 dark:via-neutral-700 dark:to-emerald-500" />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
