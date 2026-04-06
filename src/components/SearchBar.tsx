import { useId } from 'react'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  const searchId = useId()

  return (
    <div className="search-bar">
      <label className="search-bar__field" htmlFor={searchId}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0-2a8 8 0 1 0 4.9 14.32l4.39 4.38 1.41-1.41-4.38-4.39A8 8 0 0 0 10 2Z" />
        </svg>
        <input
          id={searchId}
          type="search"
          placeholder="Search or start a new chat"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  )
}

export default SearchBar
