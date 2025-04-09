import { useState, useEffect } from "react";
import { fetchMostPopularArticles } from "../services/nytimesApi";
import type { Article } from "../types/Article";
import { ArticleItem } from "./ArticleItem";
import { ErrorMessage } from "./ErrorMessage";
import { Skeleton } from "./ui/skeleton";

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

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:gap-6" data-testid="article-list">
      {loading ? (
        // Loading skeleton
        <>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                <Skeleton className="w-full sm:w-48 h-48 sm:h-auto" />
                <div className="flex-1 p-4 sm:p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : articles.length === 0 ? (
        <div className="flex justify-center items-center min-h-[200px] bg-gray-50 rounded-xl">
          <p className="text-gray-500 text-center text-lg">No articles found</p>
        </div>
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
