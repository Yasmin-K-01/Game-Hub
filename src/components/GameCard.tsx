import type { Game } from '../services/game-service'

type GameCardProps = {
  game: Game
}

function GameCard({ game }: GameCardProps) {
  return (
    <article className="game-card">
      <div className="game-card__media">
        <img src={game.background_image} alt={game.name} />
        <button className="game-card__play" type="button" aria-label={`Play ${game.name} trailer`}>
          ▶
        </button>
      </div>

      <div className="game-card__body">
        <div className="game-card__meta">
          <div className="platform-badges">
            {game.parent_platforms.map(({ platform }) => (
              <span key={`${game.id}-${platform.id}`} className="platform-badges__item">
                {platform.shortName}
              </span>
            ))}
          </div>
          {game.metacritic ? (
            <span className="game-card__score">{game.metacritic}</span>
          ) : null}
        </div>

        <h3>{game.name}</h3>

        <div className="game-card__footer">
          <span className="game-card__added">+ {game.added.toLocaleString()}</span>
          <span className="game-card__rating">{game.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  )
}

export default GameCard
