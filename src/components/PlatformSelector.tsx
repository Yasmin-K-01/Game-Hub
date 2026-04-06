import type { Platform } from '../services/game-service'

type PlatformSelectorProps = {
  platforms: Platform[]
  selectedPlatform: number | null
  onSelectPlatform: (platformId: number | null) => void
}

function PlatformSelector({
  platforms,
  selectedPlatform,
  onSelectPlatform,
}: PlatformSelectorProps) {
  return (
    <label className="filter-control">
      <span>Platforms</span>
      <select
        value={selectedPlatform ?? ''}
        onChange={(event) =>
          onSelectPlatform(event.target.value ? Number(event.target.value) : null)
        }
      >
        <option value="">Platforms</option>
        {platforms.map((platform) => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export default PlatformSelector
