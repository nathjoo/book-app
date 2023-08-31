import type { EPISODE_PREFIX, BOOK_PREFIX } from '@/constants/episode'
import { Url } from 'url'

type CharacterEpisode = `${typeof EPISODE_PREFIX}${number}`
type Author = `${typeof BOOK_PREFIX}${string}`
type AllBooks = `${typeof BOOK_PREFIX}${number}`

export interface Character {
  id: number
  name: string
  status: string
  episode: CharacterEpisode[]
  image: string
}

export interface Info {
  count: number
  next: string | null
  pages: number
  prev: string | null
}

export interface Episode {
  id: number
  episode: string
}

export interface volumeInfo {
  title: string
  authors: Author[]
  publishedDate: string
  description: string
  imageLinks: {
    thumbnail: string
  }
  languange: string
}
