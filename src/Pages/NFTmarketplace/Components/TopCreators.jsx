import Card from '../../../Components/UI/Card'

function TopCreators({ creators }) {
  return (
    <Card className="p-5">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-[24px] font-bold text-[var(--text)]">
          Top Creators
        </h3>
        <button type="button" className="text-sm font-bold text-brand-500">
          See all
        </button>
      </div>

      <div className="mb-3 grid grid-cols-[1.75fr_0.8fr_1fr] gap-3 text-xs text-[var(--text-soft)]">
        <span>Name</span>
        <span>Artworks</span>
        <span>Rating</span>
      </div>

      <div className="space-y-4">
        {creators.map((creator) => (
          <article
            key={creator.id}
            className="grid grid-cols-[1.75fr_0.8fr_1fr] items-center gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd0ee,transparent_28%),linear-gradient(135deg,#3857ff,#7d6bff)] text-[10px] font-bold text-white">
                {creator.name[1]?.toUpperCase()}
              </span>
              <p className="truncate text-sm font-bold text-[var(--text)]">
                {creator.name}
              </p>
            </div>
            <p className="text-sm font-medium text-[var(--text-muted)]">
              {creator.artworks}
            </p>
            <div className="h-2 rounded-full bg-[var(--surface-soft)]">
              <div
                className="h-2 rounded-full bg-brand-500"
                style={{ width: `${creator.rating}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </Card>
  )
}

export default TopCreators
