import { useEffect, useState } from 'react'
import { fetchPlatforms, type Platform } from '../services/game-service'

function usePlatforms() {
  const [data, setData] = useState<Platform[]>([])

  useEffect(() => {
    let mounted = true

    const loadPlatforms = async () => {
      const platforms = await fetchPlatforms()
      if (mounted) {
        setData(platforms)
      }
    }

    void loadPlatforms()

    return () => {
      mounted = false
    }
  }, [])

  return { data }
}

export default usePlatforms
