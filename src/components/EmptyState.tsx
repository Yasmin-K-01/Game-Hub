function EmptyState() {
  return (
    <section className="empty-state" aria-label="Welcome panel">
      <div className="empty-state__card">
        <div className="empty-state__logo">
          <div className="empty-state__bubble" />
        </div>
        <h2>WhatsApp Web</h2>
        <p>
          Send and receive messages without keeping your phone online.
        </p>
        <span className="empty-state__footnote">
          Select a chat to start messaging.
        </span>
      </div>
    </section>
  )
}

export default EmptyState
