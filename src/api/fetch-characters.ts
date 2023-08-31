import type { Character, Info, volumeInfo } from '@/types/common'

import { api } from '.'

// export interface CharactersQuery {
//   info: Info
//   results: Character[]
// }

export interface BooksQuery {
  kind: string
  totalItems: number
  items: {
    id: number
    volumeInfo: volumeInfo[]
  }
}

// export default async function fetchCharacters(page: number, name?: string) {
//   const { data } = await api.get<CharactersQuery>(
//     `/character?page=${page}${name ? `&name=${name}` : ''}`
//   )

//   return data
// }

export default async function fetchCharacters(q?: string) {
  const { data } = await api.get<BooksQuery>(`/volumes?q=search+terms`)

  return data
}
