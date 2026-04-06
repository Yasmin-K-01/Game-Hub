import { useState } from 'react'
import GameGrid from '../components/GameGrid'
import Navbar from '../components/Navbar'
import PlatformSelector from '../components/PlatformSelector'
import Sidebar from '../components/Sidebar'
import SortSelector from '../components/SortSelector'
import useGames from '../hooks/useGames'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

type HomePageProps = {
  isDarkMode: boolean
  onToggleTheme: () => void
}

type GameQueryState = {
  searchText: string
  selectedGenre: number | null
  selectedPlatform: number | null
  sortOrder: string
}

function HomePage({ isDarkMode, onToggleTheme }: HomePageProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSidebarItem, setActiveSidebarItem] = useState('new-releases')
  const [gameQuery, setGameQuery] = useState<GameQueryState>({
    searchText: '',
    selectedGenre: 4,
    selectedPlatform: null,
    sortOrder: '-metacritic',
  })

  const { data: genres } = useGenres()
  const { data: platforms } = usePlatforms()
  const { data: games, loading, error } = useGames(gameQuery)

  const selectedGenreName =
    genres.find((genre) => genre.id === gameQuery.selectedGenre)?.name ?? 'All'

  return (
    <div className="page-shell">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        genres={genres}
        selectedGenre={gameQuery.selectedGenre}
        activeItem={activeSidebarItem}
        onSelectItem={setActiveSidebarItem}
        onSelectGenre={(selectedGenre) =>
          setGameQuery((current) => ({
            ...current,
            selectedGenre,
          }))
        }
        isDarkMode={isDarkMode}
        onToggleTheme={onToggleTheme}
      />

      <Navbar
        onOpenSidebar={() => setIsSidebarOpen(true)}
        searchText={gameQuery.searchText}
        onSearch={(searchText) =>
          setGameQuery((current) => ({
            ...current,
            searchText,
          }))
        }
        isDarkMode={isDarkMode}
        onToggleTheme={onToggleTheme}
      />

      <div className="layout">
        <section className="content">
          <div className="content__header">
            <div>
              <p className="eyebrow">Curated picks for every screen</p>
              <h1>Best {selectedGenreName} Games</h1>
              <p className="content__lede">
                Explore standout titles with a cleaner, app-like experience that
                feels smooth on mobile and spacious on desktop.
              </p>
              <div className="content__stats" aria-label="Highlights">
                <div className="content__stat">
                  <span className="content__stat-value">120+</span>
                  <span className="content__stat-label">fresh picks</span>
                </div>
                <div className="content__stat">
                  <span className="content__stat-value">4.8</span>
                  <span className="content__stat-label">player rating</span>
                </div>
                <div className="content__stat">
                  <span className="content__stat-value">Daily</span>
                  <span className="content__stat-label">new releases</span>
                </div>
              </div>
            </div>
            <button className="ghost-button" type="button">
              Explore collection
            </button>
          </div>

          <div className="filters-row">
            <SortSelector
              value={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery((current) => ({
                  ...current,
                  sortOrder,
                }))
              }
            />

            <label className="filter-control">
              <span>Release date</span>
              <select defaultValue="all">
                <option value="all">Release date</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </label>

            <PlatformSelector
              platforms={platforms}
              selectedPlatform={gameQuery.selectedPlatform}
              onSelectPlatform={(selectedPlatform) =>
                setGameQuery((current) => ({
                  ...current,
                  selectedPlatform,
                }))
              }
            />

            <div className="toggle-cluster">
              <span>Only my platforms</span>
              <button className="switch" type="button" aria-pressed="false">
                <span />
              </button>
            </div>

            <div className="display-options">
              <span>Display options:</span>
              <button type="button" className="display-options__grid">
                <span />
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>

          {error ? <div className="error-banner">{error}</div> : null}

          <GameGrid games={games} loading={loading} />
        </section>
      </div>
    </div>
  )
}

export default HomePage
