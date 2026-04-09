import Card from '../../../Components/UI/Card'

function HistorySection({ items }) {
  return (
    <Card className="p-5">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-[24px] font-bold text-[var(--text)]">
          History
        </h3>
        <button type="button" className="text-sm font-bold text-brand-500">
          See all
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <article key={item.id} className="flex items-center gap-3">
            <img
              src={item.image}
              alt={item.title}
              className="h-14 w-14 rounded-[16px] object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-[var(--text)]">
                {item.title}
              </p>
              <p className="text-xs text-[var(--text-soft)]">By {item.author}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[var(--text)]">{item.price}</p>
              <p className="text-xs text-[var(--text-soft)]">{item.time}</p>
            </div>
          </article>
        ))}
      </div>
    </Card>
  )
}

export default HistorySection
