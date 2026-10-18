import Link from 'next/link';
import { articles } from 'app/data/articles';

export const metadata = {
  title: 'Blog',
  description:
    'Technical articles and tutorials by Seif Eddine Slimene on React, Next.js, and modern fullstack development.',
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const featured = articles.filter((article) => article.featured);
  const rest = articles.filter((article) => !article.featured);

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">read my blog</h1>
      <div className="flex flex-col gap-10">
        {featured.map((article) => (
          <article key={article.slug} className="flex flex-col gap-3">
            <Link href={`/blog/${article.slug}`}>
              <img
                src={encodeURI(article.image)}
                alt={article.title}
                className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
              />
            </Link>
            <Link
              href={`/blog/${article.slug}`}
              className="text-xl font-medium tracking-tight hover:underline"
            >
              {article.title}
            </Link>
            <p className="text-neutral-700 dark:text-neutral-300">{article.summary}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {article.readTime}
            </p>
          </article>
        ))}
      </div>
      <h2 className="font-medium text-xl mt-16 mb-6 tracking-tight">All Articles</h2>
      <div className="flex flex-col gap-6">
        {rest.map((article) => (
          <article key={article.slug} className="flex flex-col gap-3">
            <Link href={`/blog/${article.slug}`}>
              <img
                src={encodeURI(article.image)}
                alt={article.title}
                className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
              />
            </Link>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={`/blog/${article.slug}`}
                className="font-medium tracking-tight hover:underline"
              >
                {article.title}
              </Link>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(article.date)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
