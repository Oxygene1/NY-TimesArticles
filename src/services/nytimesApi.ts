import type { Article } from "../types/Article"

const API_KEY = import.meta.env.VITE_NYTIMES_API_KEY || "sample-key"
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed"

export async function fetchMostPopularArticles(period = "1"): Promise<Article[]> {
  try {
    const response = await fetch(`${BASE_URL}/${period}.json?api-key=${API_KEY}`)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Error fetching articles:", error)
    throw error
  }
}
