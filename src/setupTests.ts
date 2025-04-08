import "@testing-library/jest-dom"
import { vi, afterEach } from "vitest"

// Mock fetch globally
global.fetch = vi.fn()

// Mock environment variables
import.meta.env.VITE_NYTIMES_API_KEY = "test-api-key"

// Clean up mocks after each test
afterEach(() => {
  vi.restoreAllMocks()
})
