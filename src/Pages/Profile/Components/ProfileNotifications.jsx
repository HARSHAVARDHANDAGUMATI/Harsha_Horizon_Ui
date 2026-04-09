import { useState } from 'react'
import { IoMdMore } from 'react-icons/io'
import Card from '../../../Components/UI/Card'

const defaultNotifications = [
  ['Item update notifications', true],
  ['Item comment notifications', false],
  ['Buyer review notifications', true],
  ['Rating reminders notifications', false],
  ['Meetups near you notifications', false],
  ['Company news notifications', true],
  ['New launches and projects', true],
  ['Monthly product changes', false],
  ['Subscribe to newsletter', false],
  ['Email me when someone follows me', true],
]

function ProfileNotifications() {
  const [items, setItems] = useState(
    defaultNotifications.map(([label, enabled]) => ({ label, enabled })),
  )

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-[28px] font-bold text-[var(--text)]">
          Notifications
        </h3>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-soft)]"
        >
          <IoMdMore className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {items.map((item, index) => (
          <label
            key={item.label}
            className="flex items-center gap-3 text-sm text-[var(--text)]"
          >
            <button
              type="button"
              onClick={() =>
                setItems((current) =>
                  current.map((entry, currentIndex) =>
                    currentIndex === index
                      ? { ...entry, enabled: !entry.enabled }
                      : entry,
                  ),
                )
              }
              className={`relative h-5 w-9 rounded-full transition ${
                item.enabled ? 'bg-brand-500' : 'bg-[var(--surface-soft)]'
              }`}
              aria-label={item.label}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
                  item.enabled ? 'left-4' : 'left-0.5'
                }`}
              />
            </button>
            <span>{item.label}</span>
          </label>
        ))}
      </div>
    </Card>
  )
}

export default ProfileNotifications
