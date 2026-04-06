import { useEffect, useState } from 'react'
import { fetchGenres, type Genre } from '../services/game-service'

function useGenres() {
  const [data, setData] = useState<Genre[]>([])

  useEffect(() => {
    let mounted = true

    const loadGenres = async () => {
      const genres = await fetchGenres()
      if (mounted) {
        setData(genres)
      }
    }

    void loadGenres()

    return () => {
      mounted = false
    }
  }, [])

  return { data }
}

export default useGenres
