import type { Genre } from '../services/game-service'

type GenreListProps = {
  genres: Genre[]
  selectedGenre: number | null
  onSelectGenre: (genreId: number | null) => void
}

const shortcuts = [
  { label: 'Wishlist', icon: 'WL' },
  { label: 'My library', icon: 'ML' },
  { label: 'People you follow', icon: 'PF' },
]

export const newReleases = [
  'Last 30 days',
  'This week',
  'Next week',
  'Release calendar',
]
export const topItems = [
  'Best of the year',
  'Popular in 2022',
  'All time top 250',
]

const getGenreBadge = (label: string) =>
  label
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

function GenreList({
  genres,
  selectedGenre,
  onSelectGenre,
}: GenreListProps) {
  return (
    <aside className="genre-list">
      <div className="genre-list__group">
        {shortcuts.map((item) => (
          <button
            key={item.label}
            className="genre-list__item genre-list__item--utility"
            type="button"
          >
            <span className="genre-list__icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div className="genre-list__group">
        <h2>New Releases</h2>
        {newReleases.map((item) => (
          <button key={item} className="genre-list__item" type="button">
            <span className="genre-list__icon">NR</span>
            {item}
          </button>
        ))}
      </div>

      <div className="genre-list__group">
        <h2>Top</h2>
        {topItems.map((item) => (
          <button key={item} className="genre-list__item" type="button">
            <span className="genre-list__icon">TP</span>
            {item}
          </button>
        ))}
      </div>

      <div className="genre-list__group">
        <h2>Genres</h2>
        <button
          className={`genre-list__item${selectedGenre === null ? ' genre-list__item--active' : ''}`}
          type="button"
          onClick={() => onSelectGenre(null)}
        >
          <span className="genre-list__icon">AG</span>
          All Genres
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`genre-list__item${
              selectedGenre === genre.id ? ' genre-list__item--active' : ''
            }`}
            type="button"
            onClick={() => onSelectGenre(genre.id)}
          >
            <span className="genre-list__icon">{getGenreBadge(genre.name)}</span>
            {genre.name}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default GenreList
