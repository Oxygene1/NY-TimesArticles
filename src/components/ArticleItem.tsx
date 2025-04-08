import type { Article } from "../types/Article";

interface ArticleItemProps {
  article: Article;
  onClick: () => void;
}

export function ArticleItem({ article, onClick }: ArticleItemProps) {
  return (
    <div
      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
      onClick={onClick}
      data-testid="article-item"
    >
      <div className="flex items-start gap-4">
        {article.media.length > 0 && article.media[0]["media-metadata"] && (
          <img
            src={
              article.media[0]["media-metadata"][0].url || "/placeholder.svg"
            }
            alt={article.title}
            className="w-20 h-20 object-cover rounded"
          />
        )}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600 mb-2">{article.abstract}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{article.byline}</span>
            <span>{new Date(article.published_date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
