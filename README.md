# NY Times Most Popular Articles

A React application that displays the NY Times Most Popular Articles using the NY Times API. This project demonstrates a master/detail view pattern, allowing users to browse a list of articles and view detailed information about each article.

## Features

- View most popular articles from the NY Times API
- Filter articles by time period (1, 7, or 30 days)
- Responsive design for mobile and desktop
- Detailed view for each article with additional information
- Error handling and loading states with Shadcn UI Skeleton
- Modern UI with Tailwind CSS and Shadcn UI components

## Tech Stack

- React 19 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Shadcn UI for components
- Vitest and React Testing Library for unit tests
- ESLint and Prettier for code quality

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- NY Times API Key (get one at https://developer.nytimes.com/get-started)

## Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/Oxygene1/NY-TimesArticles.git
\`\`\`

2. Install dependencies:

\`\`\`bash
yarn
\`\`\`

3. Create a `.env` file in the root directory and add your NY Times API key:

\`\`\`
VITE_NYTIMES_API_KEY=your_api_key_here
VITE_BASE_URL=https://api.nytimes.com/svc/mostpopular/v2
\`\`\`

## Running the Application

To start the development server:

\`\`\`bash
yarn dev
\`\`\`

The application will be available at http://localhost:5173

## Building for Production

To create a production build:

\`\`\`bash
yarn build
\`\`\`

To preview the production build locally:

\`\`\`bash
yarn preview
\`\`\`

## Testing

Run unit tests:

\`\`\`bash
yarn test
\`\`\`

Run unit tests in watch mode:

\`\`\`bash
yarn test:watch
\`\`\`

Run unit tests with UI:

\`\`\`bash
yarn test:ui
\`\`\`

Generate test coverage report:

\`\`\`bash
yarn test:coverage
\`\`\`

## Code Quality

Run ESLint:

\`\`\`bash
yarn lint
\`\`\`

## Project Structure

\`\`\`
nytimes-most-popular/
├── cypress/ # Cypress E2E tests
│ ├── e2e/ # Test specs
│ └── fixtures/ # Test data
├── public/ # Static assets
├── src/ # Source code
│ ├── components/ # React components
│ ├── services/ # API services
│ ├── types/ # TypeScript type definitions
│ ├── **tests**/ # Unit tests
│ ├── App.tsx # Main App component
│ └── main.tsx # Entry point
├── .env # Environment variables (not committed)
├── .eslintrc.json # ESLint configuration
├── cypress.config.ts # Cypress configuration
├── package.json # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
└── vite.config.ts # Vite configuration
\`\`\`

## Design Decisions

1. **Component Structure**: Used a container/presentational pattern to separate data fetching logic from UI rendering.
2. **State Management**: Used React's built-in useState and useEffect hooks for state management, as the application is relatively small and doesn't require a complex state management solution.
3. **Error Handling**: Implemented comprehensive error handling with user-friendly error messages.
4. **Testing Strategy**: Combined unit tests for component logic and E2E tests for critical user flows.
5. **Responsive Design**: Used Tailwind CSS to create a responsive layout that works well on all device sizes.

## Future Improvements

- Add search functionality
- Implement caching for API responses
- Add pagination for large result sets
- Implement dark mode
- Add more filter options (by section, author, etc.)
- Add accessibility improvements (keyboard navigation, screen reader support)

## License

MIT
\`\`\`

```html file="index.html"
&lt;!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NY Times Most Popular Articles</title>
    <meta
      name="description"
      content="Browse the most popular articles from The New York Times"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
