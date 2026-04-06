import type { Game } from '../services/game-service'
import GameCardView from './GameCardView'
import Skeleton from './Skeleton'

type GameGridProps = {
  games: Game[]
  loading: boolean
}

function GameGrid({ games, loading }: GameGridProps) {
  if (loading) {
    return (
      <div className="game-grid">
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    )
  }

  return (
      <div className="game-grid">
        {games.map((game) => (
          <GameCardView key={game.id} game={game} />
        ))}
      </div>
  )
}

export default GameGrid
