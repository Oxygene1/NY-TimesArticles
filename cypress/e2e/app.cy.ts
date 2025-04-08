describe("NY Times Most Popular Articles App", () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit("/")
  })

  it("displays the app title", () => {
    cy.contains("NY Times Most Popular Articles").should("be.visible")
  })

  it("displays time period selector", () => {
    cy.contains("1 Day").should("be.visible")
    cy.contains("7 Days").should("be.visible")
    cy.contains("30 Days").should("be.visible")
  })

  it("shows loading state when fetching articles", () => {
    // Intercept API calls to control the response
    cy.intercept("GET", "**/viewed/1.json*", {
      delay: 1000,
      fixture: "articles.json",
    }).as("getArticles")

    // Reload to trigger the API call
    cy.reload()

    // Check if loading spinner appears
    cy.get('[data-testid="loading-spinner"]').should("be.visible")

    // Wait for the API call to complete
    cy.wait("@getArticles")

    // Loading spinner should disappear
    cy.get('[data-testid="loading-spinner"]').should("not.exist")
  })

  it("displays articles after loading", () => {
    // Intercept API calls with mock data
    cy.intercept("GET", "**/viewed/1.json*", { fixture: "articles.json" }).as("getArticles")

    cy.reload()
    cy.wait("@getArticles")

    // Check if articles are displayed
    cy.get('[data-testid="article-item"]').should("have.length.at.least", 1)
  })

  it("shows article details when an article is clicked", () => {
    // Intercept API calls with mock data
    cy.intercept("GET", "**/viewed/1.json*", { fixture: "articles.json" }).as("getArticles")

    cy.reload()
    cy.wait("@getArticles")

    // Click on the first article
    cy.get('[data-testid="article-item"]').first().click()

    // Check if article detail view is displayed
    cy.get('[data-testid="article-detail"]').should("be.visible")

    // Check if back button works
    cy.contains("Back to list").click()
    cy.get('[data-testid="article-list"]').should("be.visible")
  })

  it("changes time period when selector is clicked", () => {
    // Intercept API calls for different time periods
    cy.intercept("GET", "**/viewed/1.json*", { fixture: "articles-1day.json" }).as("get1DayArticles")
    cy.intercept("GET", "**/viewed/7.json*", { fixture: "articles-7days.json" }).as("get7DaysArticles")

    // Click on 7 Days button
    cy.get('[data-testid="period-7"]').click()

    // Wait for the API call to complete
    cy.wait("@get7DaysArticles")

    // Check if articles are displayed
    cy.get('[data-testid="article-item"]').should("have.length.at.least", 1)
  })

  it("shows error message when API call fails", () => {
    // Intercept API calls with error response
    cy.intercept("GET", "**/viewed/1.json*", {
      statusCode: 500,
      body: { error: "Server error" },
    }).as("getArticlesError")

    cy.reload()
    cy.wait("@getArticlesError")

    // Check if error message is displayed
    cy.get('[data-testid="error-message"]').should("be.visible")
  })
})
