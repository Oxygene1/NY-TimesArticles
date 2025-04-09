import type { Article } from "../types/Article";

interface ArticleItemProps {
  article: Article;
  onClick: () => void;
}

export function ArticleItem({ article, onClick }: ArticleItemProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
      onClick={onClick}
      data-testid="article-item"
    >
      <div className="flex flex-col sm:flex-row">
        {article.media.length > 0 && article.media[0]["media-metadata"] && (
          <div className="w-full sm:w-48 h-48 sm:h-auto relative">
            <img
              src={
                article.media[0]["media-metadata"][0].url || "/placeholder.svg"
              }
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-2">
            {article.abstract}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
            <span className="font-medium">{article.byline}</span>
            <time dateTime={article.published_date}>
              {new Date(article.published_date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
