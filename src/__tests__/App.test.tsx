import { render, screen } from "@testing-library/react"
import { vi } from "vitest"
import App from "../App"

// Mock the child components
vi.mock("../components/ArticleList", () => ({
  ArticleList: () => <div data-testid="mock-article-list">Article List Component</div>,
}))

vi.mock("../components/ArticleDetail", () => ({
  ArticleDetail: () => <div data-testid="mock-article-detail">Article Detail Component</div>,
}))

vi.mock("../components/TimePeriodSelector", () => ({
  TimePeriodSelector: () => <div data-testid="mock-time-selector">Time Period Selector</div>,
}))

describe("App Component", () => {
  test("renders the header with title", () => {
    render(<App />)
    expect(screen.getByText("NY Times Most Popular Articles")).toBeInTheDocument()
  })

  test("renders the ArticleList component by default", () => {
    render(<App />)
    expect(screen.getByTestId("mock-article-list")).toBeInTheDocument()
  })

  test("renders the TimePeriodSelector component", () => {
    render(<App />)
    expect(screen.getByTestId("mock-time-selector")).toBeInTheDocument()
  })
})
