import axios from 'axios'
import { useEffect, useState } from 'react'
import { fetchGames, type Game, type GameQuery } from '../services/game-service'

type UseGamesResult = {
  data: Game[]
  loading: boolean
  error: string
}

function useGames(query: GameQuery): UseGamesResult {
  const [data, setData] = useState<Game[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const loadGames = async () => {
      setLoading(true)
      setError('')

      try {
        const games = await fetchGames(query, controller.signal)
        setData(games)
      } catch (error) {
        if (axios.isCancel(error) || controller.signal.aborted) {
          return
        }

        setError('Unable to load games right now.')
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    void loadGames()

    return () => {
      controller.abort()
    }
  }, [query])

  return { data, loading, error }
}

export default useGames
