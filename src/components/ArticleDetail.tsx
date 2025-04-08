import type { Article } from "../types/Article";

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

export function ArticleDetail({ article, onBack }: ArticleDetailProps) {
  return (
    <div className="article-detail" data-testid="article-detail">
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
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

      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      {article.media.length > 0 && article.media[0]["media-metadata"] && (
        <img
          src={
            article.media[0]["media-metadata"][2]?.url ||
            article.media[0]["media-metadata"][0].url
          }
          alt={article.title}
          className="w-full max-h-96 object-cover rounded-lg mb-6"
        />
      )}

      <div className="flex justify-between text-gray-500 mb-6">
        <span>{article.byline}</span>
        <span>{new Date(article.published_date).toLocaleDateString()}</span>
      </div>

      <p className="text-xl mb-6">{article.abstract}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Section</h2>
        <p>{article.section}</p>
      </div>

      {article.des_facet && article.des_facet.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Topics</h2>
          <div className="flex flex-wrap gap-2">
            {article.des_facet.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
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
        className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
      >
        Read Full Article
      </a>
    </div>
  );
}
