import type { Article } from "../types/Article";

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

export function ArticleDetail({ article, onBack }: ArticleDetailProps) {
  return (
    <article className="max-w-4xl mx-auto" data-testid="article-detail">
      <button
        onClick={onBack}
        className="group mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to list
      </button>

      <h1 className="text-4xl font-bold mb-6 leading-tight">{article.title}</h1>

      {article.media.length > 0 && article.media[0]["media-metadata"] && (
        <div className="relative h-[400px] mb-8 rounded-2xl overflow-hidden">
          <img
            src={
              article.media[0]["media-metadata"][2]?.url ||
              article.media[0]["media-metadata"][0].url
            }
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-600 mb-8 space-y-2 sm:space-y-0">
        <span className="font-medium">{article.byline}</span>
        <time dateTime={article.published_date} className="text-sm">
          {new Date(article.published_date).toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      <p className="text-xl leading-relaxed mb-8 text-gray-800">
        {article.abstract}
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-2 text-gray-900">Section</h2>
          <p className="text-gray-700 capitalize">{article.section}</p>
        </div>

        {article.subsection && (
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-2 text-gray-900">
              Subsection
            </h2>
            <p className="text-gray-700 capitalize">{article.subsection}</p>
          </div>
        )}
      </div>

      {article.des_facet && article.des_facet.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Topics</h2>
          <div className="flex flex-wrap gap-2">
            {article.des_facet.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group"
      >
        Read Full Article
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </article>
  );
}
