import type { Genre } from '../services/game-service'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
  genres: Genre[]
  selectedGenre: number | null
  activeItem: string
  onSelectItem: (item: string) => void
  onSelectGenre: (genreId: number | null) => void
  isDarkMode: boolean
  onToggleTheme: () => void
}

type SidebarIconName =
  | 'grid'
  | 'spark'
  | 'trophy'
  | 'fire'
  | 'clock'
  | 'genre'
  | 'moon'
  | 'sun'

const discoverItems = [
  { key: 'all-games', label: 'All Games', icon: 'grid' as const },
  { key: 'new-releases', label: 'New Releases', icon: 'spark' as const },
  { key: 'top-rated', label: 'Top Rated', icon: 'trophy' as const },
  { key: 'most-played', label: 'Most Played', icon: 'fire' as const },
  { key: 'coming-soon', label: 'Coming Soon', icon: 'clock' as const },
]

function SidebarIcon({ name }: { name: SidebarIconName }) {
  const paths: Record<SidebarIconName, string> = {
    grid: 'M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z',
    spark:
      'm12 2 2.4 5.2L20 9l-4.1 4 1 5.7L12 16l-4.9 2.7 1-5.7L4 9l5.6-1.8L12 2Z',
    trophy:
      'M7 4h10v2h2a1 1 0 0 1 1 1v1a5 5 0 0 1-5 5h-1.1A5 5 0 0 1 13 15.9V18h3v2H8v-2h3v-2.1A5 5 0 0 1 10.1 13H9a5 5 0 0 1-5-5V7a1 1 0 0 1 1-1h2V4Zm10 4V8h1a3 3 0 0 0 3-3h-1v3Zm-10 0V5H6a3 3 0 0 0 3 3h-2Z',
    fire:
      'M12.7 2.4c.8 2-.1 3.4-1 4.7-.7 1.1-1.3 2.1-.9 3.3.2.6.6 1.1 1.2 1.5-.1-1.7.7-2.8 1.5-3.8.9-1.2 1.9-2.4 1.7-4.4C17.8 5.8 20 8.7 20 12a8 8 0 1 1-16 0c0-2.8 1.5-5.1 3.6-7 .2 1.7.9 2.7 1.6 3.5.2-.9.8-1.8 1.4-2.7.8-1.2 1.7-2.4 2.1-3.4Z',
    clock:
      'M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm1 3h-2v6l4 2 .9-1.8-2.9-1.5V7Z',
    genre:
      'M5 6.5A2.5 2.5 0 0 1 7.5 4h7A2.5 2.5 0 0 1 17 6.5v11A2.5 2.5 0 0 1 14.5 20h-7A2.5 2.5 0 0 1 5 17.5v-11Zm3 1.5h6v2H8V8Zm0 4h6v2H8v-2Zm0 4h4v2H8v-2Z',
    moon: 'M14.8 3.6A7.5 7.5 0 1 0 20.4 15 6 6 0 1 1 14.8 3.6Z',
    sun:
      'M12 5.5A6.5 6.5 0 1 0 18.5 12 6.5 6.5 0 0 0 12 5.5Zm0-3.5h1v2h-2V2h1Zm0 18h1v2h-2v-2h1ZM2 11h2v2H2v-2Zm18 0h2v2h-2v-2ZM4.9 4.9l1.4-1.4 1.4 1.4-1.4 1.4-1.4-1.4Zm11.4 11.4 1.4-1.4 1.4 1.4-1.4 1.4-1.4-1.4Zm0-11.4 1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4ZM4.9 19.1l1.4-1.4 1.4 1.4-1.4 1.4-1.4-1.4Z',
  }

  return (
    <span className="sidebar__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d={paths[name]} />
      </svg>
    </span>
  )
}

function Sidebar({
  isOpen,
  onClose,
  genres,
  selectedGenre,
  activeItem,
  onSelectItem,
  onSelectGenre,
  isDarkMode,
  onToggleTheme,
}: SidebarProps) {
  return (
    <div className={`sidebar-layer${isOpen ? ' sidebar-layer--open' : ''}`}>
      <button
        className="sidebar-backdrop"
        type="button"
        aria-label="Close sidebar"
        onClick={onClose}
      />

      <aside
        className="sidebar"
        aria-hidden={!isOpen}
        aria-label="GameHub navigation"
      >
        <div className="sidebar__header">
          <div className="sidebar__brand">
            <div className="sidebar__brand-logo">GH</div>
            <div>
              <span className="sidebar__brand-name">GameHub</span>
              <span className="sidebar__brand-tag">Explore curated worlds</span>
            </div>
          </div>

          <button
            className="sidebar__close"
            type="button"
            aria-label="Close sidebar"
            onClick={onClose}
          >
            <span />
            <span />
          </button>
        </div>

        <div className="sidebar__body">
          <section className="sidebar__section">
            <div className="sidebar__section-label">Discover</div>
            <div className="sidebar__menu">
              {discoverItems.map((item) => (
                <button
                  key={item.key}
                  className={`sidebar__item${
                    activeItem === item.key ? ' sidebar__item--active' : ''
                  }`}
                  type="button"
                  onClick={() => {
                    onSelectItem(item.key)
                    onClose()
                  }}
                >
                  <SidebarIcon name={item.icon} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="sidebar__section">
            <div className="sidebar__section-label">Genres</div>
            <div className="sidebar__menu">
              <button
                className={`sidebar__item${
                  selectedGenre === null ? ' sidebar__item--active' : ''
                }`}
                type="button"
                onClick={() => {
                  onSelectGenre(null)
                  onSelectItem('all-genres')
                  onClose()
                }}
              >
                <SidebarIcon name="genre" />
                <span>All Genres</span>
              </button>

              {genres.map((genre) => (
                <button
                  key={genre.id}
                  className={`sidebar__item${
                    selectedGenre === genre.id ? ' sidebar__item--active' : ''
                  }`}
                  type="button"
                  onClick={() => {
                    onSelectGenre(genre.id)
                    onSelectItem(`genre-${genre.id}`)
                    onClose()
                  }}
                >
                  <SidebarIcon name="genre" />
                  <span>{genre.name}</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="sidebar__footer">
          <button
            className="sidebar__theme"
            type="button"
            onClick={onToggleTheme}
          >
            <SidebarIcon name={isDarkMode ? 'sun' : 'moon'} />
            <span>{isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
          </button>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
