import { render, screen, fireEvent } from "@testing-library/react"
import { ArticleDetail } from "../components/ArticleDetail"
import { describe, test, expect, vi } from "vitest"

const mockArticle = {
  id: 1,
  title: "Test Article",
  abstract: "This is a test article abstract",
  byline: "By Test Author",
  published_date: "2023-01-01",
  url: "https://example.com",
  section: "Technology",
  media: [],
  des_facet: ["Topic 1", "Topic 2"],
  org_facet: [],
  per_facet: [],
  geo_facet: [],
}

describe("ArticleDetail Component", () => {
  test("renders article title and abstract", () => {
    render(<ArticleDetail article={mockArticle} onBack={() => {}} />)

    expect(screen.getByText("Test Article")).toBeInTheDocument()
    expect(screen.getByText("This is a test article abstract")).toBeInTheDocument()
  })

  test("renders back button", () => {
    render(<ArticleDetail article={mockArticle} onBack={() => {}} />)

    expect(screen.getByText("Back to list")).toBeInTheDocument()
  })

  test("calls onBack when back button is clicked", () => {
    const mockBackFn = vi.fn()
    render(<ArticleDetail article={mockArticle} onBack={mockBackFn} />)

    fireEvent.click(screen.getByText("Back to list"))
    expect(mockBackFn).toHaveBeenCalled()
  })

  test("renders article metadata", () => {
    render(<ArticleDetail article={mockArticle} onBack={() => {}} />)

    expect(screen.getByText("By Test Author")).toBeInTheDocument()
    expect(screen.getByText("Technology")).toBeInTheDocument()
  })

  test("renders topics when available", () => {
    render(<ArticleDetail article={mockArticle} onBack={() => {}} />)

    expect(screen.getByText("Topics")).toBeInTheDocument()
    expect(screen.getByText("Topic 1")).toBeInTheDocument()
    expect(screen.getByText("Topic 2")).toBeInTheDocument()
  })

  test("renders read full article link", () => {
    render(<ArticleDetail article={mockArticle} onBack={() => {}} />)
    const link = screen.getByText("Read Full Article")
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "https://example.com")
  })
})
