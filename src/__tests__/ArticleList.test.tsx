import { render, screen, waitFor } from "@testing-library/react";
import { vi, describe, test, expect } from "vitest";
import { ArticleList } from "../components/ArticleList";
import { fetchMostPopularArticles } from "../services/nytimesApi";
vi.mock("../services/nytimesApi");

vi.mock("../components/ArticleItem", () => ({
  ArticleItem: ({
    article,
    onClick,
  }: {
    article: any;
    onClick: () => void;
  }) => (
    <div data-testid="mock-article-item" onClick={onClick}>
      {article.title}
    </div>
  ),
}));

vi.mock("../components/LoadingSpinner", () => ({
  LoadingSpinner: () => (
    <div data-testid="mock-loading-spinner">Loading...</div>
  ),
}));

vi.mock("../components/ErrorMessage", () => ({
  ErrorMessage: ({ message }: { message: string }) => (
    <div data-testid="mock-error-message">{message}</div>
  ),
}));

const mockArticles = [
  {
    id: 1,
    title: "Test Article 1",
    abstract: "This is test article 1",
    byline: "By Test Author",
    published_date: "2023-01-01",
    updated: "2023-01-01T12:00:00Z",
    url: "https://example.com/1",
    section: "Technology",
    subsection: "Tech News",
    nytdsection: "technology",
    adx_keywords: "Technology;Testing",
    column: null,
    media: [],
    des_facet: [],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    eta_id: 0,
  },
  {
    id: 2,
    title: "Test Article 2",
    abstract: "This is test article 2",
    byline: "By Another Author",
    published_date: "2023-01-02",
    updated: "2023-01-02T12:00:00Z",
    url: "https://example.com/2",
    section: "Politics",
    subsection: "Elections",
    nytdsection: "politics",
    adx_keywords: "Politics;Elections",
    column: null,
    media: [],
    des_facet: [],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    eta_id: 1,
  },
];

describe("ArticleList Component", () => {
  test("shows loading state initially", () => {
    vi.mocked(fetchMostPopularArticles).mockResolvedValue([]);

    render(<ArticleList timePeriod="1" onSelectArticle={() => {}} />);

    expect(screen.getByTestId("mock-loading-spinner")).toBeInTheDocument();
  });

  test("renders articles when loaded successfully", async () => {
    vi.mocked(fetchMostPopularArticles).mockResolvedValue(mockArticles);

    render(<ArticleList timePeriod="1" onSelectArticle={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText("Test Article 1")).toBeInTheDocument();
      expect(screen.getByText("Test Article 2")).toBeInTheDocument();
    });
  });

  test("shows error message when API call fails", async () => {
    vi.mocked(fetchMostPopularArticles).mockRejectedValue(
      new Error("API Error")
    );

    render(<ArticleList timePeriod="1" onSelectArticle={() => {}} />);

    await waitFor(() => {
      expect(screen.getByTestId("mock-error-message")).toBeInTheDocument();
    });
  });

  test("calls onSelectArticle when an article is clicked", async () => {
    vi.mocked(fetchMostPopularArticles).mockResolvedValue(mockArticles);

    const mockSelectFn = vi.fn();
    render(<ArticleList timePeriod="1" onSelectArticle={mockSelectFn} />);

    await waitFor(() => {
      screen.getAllByTestId("mock-article-item")[0].click();
      expect(mockSelectFn).toHaveBeenCalledWith(mockArticles[0]);
    });
  });
});
