export interface MediaMetadata {
  url: string
  format: string
  height: number
  width: number
}

export interface Media {
  type: string
  subtype: string
  caption: string
  copyright: string
  "media-metadata": MediaMetadata[]
}

export interface Article {
  id: number
  url: string
  title: string
  abstract: string
  byline: string
  published_date: string
  updated: string
  section: string
  subsection: string
  nytdsection: string
  adx_keywords: string
  column: string | null
  des_facet: string[]
  org_facet: string[]
  per_facet: string[]
  geo_facet: string[]
  media: Media[]
  eta_id: number
}
