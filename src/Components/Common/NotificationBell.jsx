import { useState } from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { notifications } from '../../Utils/constants'
import Card from '../UI/Card'

function NotificationBell() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-muted)] transition hover:text-brand-500"
        aria-label="Notifications"
      >
        <IoMdNotificationsOutline className="h-5 w-5" />
      </button>
      {open ? (
        <Card className="absolute right-0 top-14 z-50 w-80 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-display text-lg font-bold text-[var(--text)]">
              Notifications
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs font-bold text-brand-500"
            >
              Close
            </button>
          </div>
          <div className="space-y-3">
            {notifications.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl bg-[var(--surface-soft)] p-3"
              >
                <p className="font-bold text-[var(--text)]">{item.title}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {item.description}
                </p>
                <p className="mt-2 text-xs font-medium text-brand-500">
                  {item.time}
                </p>
              </article>
            ))}
          </div>
        </Card>
      ) : null}
    </div>
  )
}

export default NotificationBell
