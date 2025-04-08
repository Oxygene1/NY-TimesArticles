/// <reference types="vite/client" />
import "@testing-library/jest-dom";
declare global {
  namespace Vi {
    interface JestAssertion {
      toBeInTheDocument(): void;
      toHaveTextContent(text: string): void;
      toBeVisible(): void;
    }
  }
}
