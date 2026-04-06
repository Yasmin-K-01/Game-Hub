import type { Game } from '../services/game-service'

type GameCardViewProps = {
  game: Game
}

const fallbackPoster =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#2d2d2d"/>
          <stop offset="100%" stop-color="#111111"/>
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#bg)"/>
      <circle cx="110" cy="200" r="48" fill="rgba(255,255,255,0.2)"/>
      <polygon points="100,175 100,225 135,200" fill="white"/>
    </svg>
  `)

function GameCardView({ game }: GameCardViewProps) {
  return (
    <article className="game-card">
      <div className="game-card__media">
        <img
          src={game.background_image}
          alt={game.name}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackPoster
          }}
        />
        <button
          className="game-card__play"
          type="button"
          aria-label={`Play ${game.name} trailer`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 6.5v11l8.5-5.5L8 6.5Z" />
          </svg>
          <span>Watch trailer</span>
        </button>
      </div>

      <div className="game-card__body">
        <div className="game-card__meta">
          <div className="platform-badges">
            {game.parent_platforms.map(({ platform }) => (
              <span
                key={`${game.id}-${platform.id}`}
                className="platform-badges__item"
              >
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

export default GameCardView
