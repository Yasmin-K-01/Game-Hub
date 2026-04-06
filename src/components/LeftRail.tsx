import IconButton from './IconButton'

const railIcons = [
  {
    id: 'chat',
    label: 'Chats',
    glyph: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3C7.03 3 3 6.58 3 11c0 2.39 1.18 4.54 3.04 6.01L5 21l4.39-2.19c.84.13 1.71.19 2.61.19 4.97 0 9-3.58 9-8s-4.03-8-9-8Z" />
      </svg>
    ),
    active: true,
  },
  {
    id: 'status',
    label: 'Status',
    glyph: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8V2Zm1 1v6h6A9 9 0 0 0 13 3Z" />
      </svg>
    ),
  },
  {
    id: 'channels',
    label: 'Channels',
    glyph: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v2H4V5Zm0 6h16v2H4v-2Zm0 6h10v2H4v-2Z" />
      </svg>
    ),
  },
  {
    id: 'communities',
    label: 'Communities',
    glyph: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 11A2.5 2.5 0 1 0 7.5 6a2.5 2.5 0 0 0 0 5Zm9 0A2.5 2.5 0 1 0 16.5 6a2.5 2.5 0 0 0 0 5ZM12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 1h7v-1c0-1.76-1.79-3-3.5-3S4 17.24 4 19v1Zm9 0h7v-1c0-1.76-1.79-3-3.5-3S13 17.24 13 19v1Z" />
      </svg>
    ),
  },
]

function LeftRail() {
  return (
    <aside className="left-rail" aria-label="Primary navigation">
      <div className="left-rail__top">
        <div className="left-rail__avatar">V</div>
        {railIcons.map((item) => (
          <div
            key={item.id}
            className={`left-rail__item${item.active ? ' left-rail__item--active' : ''}`}
          >
            <IconButton label={item.label}>{item.glyph}</IconButton>
          </div>
        ))}
      </div>
      <div className="left-rail__bottom">
        <IconButton label="Settings">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m19.14 12.94.04-.94-.04-.94 2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.76 7.76 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.57.22-1.11.53-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 8.84a.5.5 0 0 0 .12.64l2.03 1.58-.04.94.04.94L2.82 14.52a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54c.57-.22 1.12-.54 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z" />
          </svg>
        </IconButton>
      </div>
    </aside>
  )
}

export default LeftRail
