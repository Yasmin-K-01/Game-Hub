import type { ChatItem } from '../data/chats'
import ChatListItem from './ChatListItem'

type ChatListProps = {
  chats: ChatItem[]
}

function ChatList({ chats }: ChatListProps) {
  return (
    <div className="chat-list" aria-label="Chat list">
      {chats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </div>
  )
}

export default ChatList
