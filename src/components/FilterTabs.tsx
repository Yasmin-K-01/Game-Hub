type FilterTabsProps = {
  active: string
  onSelect: (tab: string) => void
}

const tabs = ['All', 'Unread', 'Favourites', 'Groups']

function FilterTabs({ active, onSelect }: FilterTabsProps) {
  return (
    <div className="filter-tabs" role="tablist" aria-label="Chat filters">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={active === tab}
          className={`filter-tabs__item${active === tab ? ' filter-tabs__item--active' : ''}`}
          onClick={() => onSelect(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
