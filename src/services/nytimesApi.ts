import type { Article } from "../types/Article"

const API_KEY = import.meta.env.VITE_NYTIMES_API_KEY || "sample-key"
const BASE_URL = import.meta.env.VITE_BASE_URL

export async function fetchMostPopularArticles(period = "1"): Promise<Article[]> {
  try {
    const response = await fetch(`${BASE_URL}/${period}.json?api-key=lrHCLGzScchGb8f8dpYrcT0Huf4ywC1q`)

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
