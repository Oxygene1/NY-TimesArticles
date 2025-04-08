import { useState } from "react";
import { ArticleList } from "./components/ArticleList";
import { ArticleDetail } from "./components/ArticleDetail";
import type { Article } from "./types/Article";
import { TimePeriodSelector } from "./components/TimePeriodSelector";
import "./App.css";

function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [timePeriod, setTimePeriod] = useState<string>("1");

  const handleArticleSelect = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  const handleTimePeriodChange = (period: string) => {
    setTimePeriod(period);
    setSelectedArticle(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          NY Times Most Popular Articles
        </h1>
        {!selectedArticle && (
          <TimePeriodSelector
            selectedPeriod={timePeriod}
            onPeriodChange={handleTimePeriodChange}
          />
        )}
      </header>

      <main>
        {selectedArticle ? (
          <ArticleDetail article={selectedArticle} onBack={handleBackToList} />
        ) : (
          <ArticleList
            timePeriod={timePeriod}
            onSelectArticle={handleArticleSelect}
          />
        )}
      </main>
    </div>
  );
}

export default App;
