export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: 'POLITICS' | 'CULTURE' | 'SPORTS' | 'TECH'
  author: string
  publishDate: string
  readTime: string
  views: number
  imageUrl: string
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  emoji: string
  color: string
  articleCount: number
}

export interface TimelineDate {
  id: string
  date: string
  label: string
  active: boolean
}
