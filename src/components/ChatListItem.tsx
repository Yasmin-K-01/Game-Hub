import type { ChatItem } from '../data/chats'

type ChatListItemProps = {
  chat: ChatItem
}

function ChatListItem({ chat }: ChatListItemProps) {
  return (
    <button
      type="button"
      className={`chat-item${chat.active ? ' chat-item--active' : ''}`}
    >
      <div
        className="chat-item__avatar"
        style={{ background: `linear-gradient(135deg, ${chat.color}, #1f2c34)` }}
        aria-hidden="true"
      >
        {chat.avatar ?? chat.name.slice(0, 2)}
      </div>

      <div className="chat-item__content">
        <div className="chat-item__top">
          <span className="chat-item__name">{chat.name}</span>
          <span className="chat-item__time">{chat.time}</span>
        </div>

        <div className="chat-item__bottom">
          <span className="chat-item__message">{chat.message}</span>
          <span className="chat-item__meta">
            {chat.pinned ? <span className="chat-item__pin">•</span> : null}
            {chat.muted ? <span className="chat-item__muted">Muted</span> : null}
            {chat.unread ? <span className="chat-item__badge">{chat.unread}</span> : null}
          </span>
        </div>
      </div>
    </button>
  )
}

export default ChatListItem
