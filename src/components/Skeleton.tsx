function Skeleton() {
  return (
    <div className="game-card game-card--skeleton" aria-hidden="true">
      <div className="skeleton skeleton--image" />
      <div className="game-card__body">
        <div className="skeleton skeleton--meta" />
        <div className="skeleton skeleton--title" />
        <div className="skeleton skeleton--title skeleton--title-short" />
        <div className="skeleton skeleton--footer" />
      </div>
    </div>
  )
}

export default Skeleton
