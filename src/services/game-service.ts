import axios from 'axios'
import apiClient from './api-client'
import gtaImage from '../assets/games/gta.jpg'
import tombRaiderImage from '../assets/games/tomb-raider.jpg'
import witcherImage from '../assets/games/witcher.jpg'

export type Platform = {
  id: number
  name: string
  slug: string
  shortName: string
}

export type Genre = {
  id: number
  name: string
  slug: string
}

export type Game = {
  id: number
  name: string
  slug: string
  background_image: string
  rating: number
  metacritic: number | null
  added: number
  released: string
  parent_platforms: Array<{
    platform: Platform
  }>
  genres: Genre[]
}

export type GameQuery = {
  searchText: string
  selectedGenre: number | null
  selectedPlatform: number | null
  sortOrder: string
}

type RawgResponse<T> = {
  results: T[]
}

export const platforms: Platform[] = [
  { id: 4, name: 'PC', slug: 'pc', shortName: 'PC' },
  { id: 187, name: 'PlayStation', slug: 'playstation5', shortName: 'PS' },
  { id: 1, name: 'Xbox', slug: 'xbox-one', shortName: 'XB' },
  { id: 3, name: 'iOS', slug: 'ios', shortName: 'iOS' },
  { id: 21, name: 'Android', slug: 'android', shortName: 'AND' },
  { id: 5, name: 'Macintosh', slug: 'macos', shortName: 'MAC' },
  { id: 6, name: 'Linux', slug: 'linux', shortName: 'LNX' },
]

export const genres: Genre[] = [
  { id: 4, name: 'Action', slug: 'action' },
  { id: 51, name: 'Indie', slug: 'indie' },
  { id: 3, name: 'Adventure', slug: 'adventure' },
  { id: 5, name: 'RPG', slug: 'role-playing-games-rpg' },
  { id: 10, name: 'Strategy', slug: 'strategy' },
  { id: 2, name: 'Shooter', slug: 'shooter' },
  { id: 40, name: 'Casual', slug: 'casual' },
  { id: 14, name: 'Simulation', slug: 'simulation' },
  { id: 7, name: 'Puzzle', slug: 'puzzle' },
  { id: 11, name: 'Arcade', slug: 'arcade' },
  { id: 83, name: 'Platformer', slug: 'platformer' },
  { id: 1, name: 'Racing', slug: 'racing' },
  { id: 59, name: 'Massively Multiplayer', slug: 'massively-multiplayer' },
  { id: 15, name: 'Sports', slug: 'sports' },
  { id: 6, name: 'Fighting', slug: 'fighting' },
]

const byId = <T extends { id: number }>(items: T[], id: number) =>
  items.find((item) => item.id === id) ?? items[0]

export const fallbackGames: Game[] = [
  {
    id: 1,
    name: 'Grand Theft Auto V',
    slug: 'grand-theft-auto-v',
    background_image: gtaImage,
    rating: 4.48,
    metacritic: 92,
    added: 18448,
    released: '2013-09-17',
    parent_platforms: [
      { platform: byId(platforms, 4) },
      { platform: byId(platforms, 187) },
      { platform: byId(platforms, 1) },
    ],
    genres: [byId(genres, 4), byId(genres, 3)],
  },
  {
    id: 2,
    name: 'The Witcher 3: Wild Hunt',
    slug: 'the-witcher-3-wild-hunt',
    background_image: witcherImage,
    rating: 4.67,
    metacritic: 92,
    added: 17422,
    released: '2015-05-18',
    parent_platforms: [
      { platform: byId(platforms, 4) },
      { platform: byId(platforms, 187) },
      { platform: byId(platforms, 1) },
    ],
    genres: [byId(genres, 4), byId(genres, 5)],
  },
  {
    id: 3,
    name: 'Tomb Raider (2013)',
    slug: 'tomb-raider-2013',
    background_image: tombRaiderImage,
    rating: 4.05,
    metacritic: 86,
    added: 14738,
    released: '2013-03-05',
    parent_platforms: [
      { platform: byId(platforms, 4) },
      { platform: byId(platforms, 187) },
      { platform: byId(platforms, 1) },
      { platform: byId(platforms, 5) },
    ],
    genres: [byId(genres, 4), byId(genres, 3)],
  },
  {
    id: 4,
    name: 'Call of Duty: Modern Warfare',
    slug: 'call-of-duty-modern-warfare',
    background_image: gtaImage,
    rating: 4.1,
    metacritic: 80,
    added: 13002,
    released: '2019-10-25',
    parent_platforms: [
      { platform: byId(platforms, 4) },
      { platform: byId(platforms, 187) },
      { platform: byId(platforms, 1) },
    ],
    genres: [byId(genres, 2), byId(genres, 4)],
  },
  {
    id: 5,
    name: 'Limbo',
    slug: 'limbo',
    background_image: witcherImage,
    rating: 4.15,
    metacritic: 88,
    added: 12008,
    released: '2011-08-02',
    parent_platforms: [
      { platform: byId(platforms, 4) },
      { platform: byId(platforms, 3) },
      { platform: byId(platforms, 21) },
    ],
    genres: [byId(genres, 7), byId(genres, 51)],
  },
  {
    id: 6,
    name: 'The Elder Scrolls V: Skyrim',
    slug: 'the-elder-scrolls-v-skyrim',
    background_image: tombRaiderImage,
    rating: 4.42,
    metacritic: 94,
    added: 16310,
    released: '2011-11-11',
    parent_platforms: [
      { platform: byId(platforms, 4) },
      { platform: byId(platforms, 187) },
      { platform: byId(platforms, 1) },
    ],
    genres: [byId(genres, 5), byId(genres, 4)],
  },
]

const sorters: Record<string, (games: Game[]) => Game[]> = {
  '': (games) => games,
  relevance: (games) => games,
  '-added': (games) => [...games].sort((a, b) => b.added - a.added),
  name: (games) => [...games].sort((a, b) => a.name.localeCompare(b.name)),
  '-released': (games) =>
    [...games].sort(
      (a, b) => new Date(b.released).getTime() - new Date(a.released).getTime(),
    ),
  '-metacritic': (games) =>
    [...games].sort((a, b) => (b.metacritic ?? 0) - (a.metacritic ?? 0)),
  '-rating': (games) => [...games].sort((a, b) => b.rating - a.rating),
}

const filterFallbackGames = (query: GameQuery) => {
  const search = query.searchText.trim().toLowerCase()

  const filtered = fallbackGames.filter((game) => {
    const matchesSearch =
      !search || game.name.toLowerCase().includes(search) || game.slug.includes(search)
    const matchesGenre =
      !query.selectedGenre ||
      game.genres.some((genre) => genre.id === query.selectedGenre)
    const matchesPlatform =
      !query.selectedPlatform ||
      game.parent_platforms.some(
        ({ platform }) => platform.id === query.selectedPlatform,
      )

    return matchesSearch && matchesGenre && matchesPlatform
  })

  return (sorters[query.sortOrder] ?? sorters.relevance)(filtered)
}

export const fetchGenres = async () => genres

export const fetchPlatforms = async () => platforms

export const fetchGames = async (
  query: GameQuery,
  signal?: AbortSignal,
): Promise<Game[]> => {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY

  if (!apiKey) {
    return filterFallbackGames(query)
  }

  try {
    const response = await apiClient.get<RawgResponse<Game>>('/games', {
      signal,
      params: {
        key: apiKey,
        search: query.searchText || undefined,
        genres: query.selectedGenre || undefined,
        parent_platforms: query.selectedPlatform || undefined,
        ordering: query.sortOrder === 'relevance' ? undefined : query.sortOrder,
        page_size: 12,
      },
    })

    return response.data.results
  } catch (error) {
    if (axios.isCancel(error) || signal?.aborted) {
      throw error
    }

    return filterFallbackGames(query)
  }
}
