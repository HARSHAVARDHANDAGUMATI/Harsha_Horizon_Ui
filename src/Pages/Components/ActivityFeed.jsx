import { MdMoreHoriz } from 'react-icons/md'
import Card from '../../Components/UI/Card'

function ActivityFeed({ items }) {
  return (
    <Card className="p-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-[#ccd3ea] text-brand-500 focus:ring-brand-500"
          />
          <h3 className="font-display text-[22px] font-bold text-[var(--text)]">
            Tasks
          </h3>
        </div>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-soft)] text-brand-500"
        >
          <MdMoreHoriz className="h-5 w-5" />
        </button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <label key={item.id ?? item.title ?? index} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked={index !== 3}
                className="h-4 w-4 rounded border-[#ccd3ea] text-brand-500 focus:ring-brand-500"
              />
              <span className="text-sm font-medium text-[var(--text)]">
                {item.title ?? item}
              </span>
            </div>
            <span className="text-[var(--text-soft)]">⋮</span>
          </label>
        ))}
      </div>
    </Card>
  )
}

export default ActivityFeed
