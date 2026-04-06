import IconButton from './IconButton'

function SidebarHeader() {
  return (
    <header className="sidebar-header">
      <div>
        <h1 className="sidebar-header__title">Chats</h1>
      </div>
      <div className="sidebar-header__actions">
        <IconButton label="New chat">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
          </svg>
        </IconButton>
        <IconButton label="Menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>
        </IconButton>
      </div>
    </header>
  )
}

export default SidebarHeader
