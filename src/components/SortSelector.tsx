const sortOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average rating' },
]

type SortSelectorProps = {
  value: string
  onSelectSortOrder: (value: string) => void
}

function SortSelector({ value, onSelectSortOrder }: SortSelectorProps) {
  return (
    <label className="filter-control">
      <span>Order by:</span>
      <select value={value} onChange={(event) => onSelectSortOrder(event.target.value)}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SortSelector
