import { useState, useEffect } from "react";
import { fetchMostPopularArticles } from "../services/nytimesApi";
import type { Article } from "../types/Article";
import { ArticleItem } from "./ArticleItem";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";

interface ArticleListProps {
  timePeriod: string;
  onSelectArticle: (article: Article) => void;
}

export function ArticleList({ timePeriod, onSelectArticle }: ArticleListProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMostPopularArticles(timePeriod);
        setArticles(data);
      } catch (err) {
        setError("Failed to load articles. Please try again later.");
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [timePeriod]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="space-y-4" data-testid="article-list">
      {articles.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No articles found</p>
      ) : (
        articles.map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
            onClick={() => onSelectArticle(article)}
          />
        ))
      )}
    </div>
  );
}
