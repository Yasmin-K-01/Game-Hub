import SearchInput from './SearchInput'

type NavbarProps = {
  onOpenSidebar: () => void
  searchText: string
  onSearch: (value: string) => void
  isDarkMode: boolean
  onToggleTheme: () => void
}

function Navbar({
  onOpenSidebar,
  searchText,
  onSearch,
  isDarkMode,
  onToggleTheme,
}: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button
          className="navbar__menu-button"
          type="button"
          aria-label="Open sidebar"
          onClick={onOpenSidebar}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="brand">
          <div className="brand__logo">GH</div>
          <div>
            <span className="brand__name">GameHub</span>
            <span className="brand__tag">Discover your next obsession</span>
          </div>
        </div>

        <SearchInput value={searchText} onSearch={onSearch} />

        <button className="theme-toggle" type="button" onClick={onToggleTheme}>
          {isDarkMode ? 'Dark mode' : 'Light mode'}
        </button>
      </div>
    </header>
  )
}

export default Navbar
