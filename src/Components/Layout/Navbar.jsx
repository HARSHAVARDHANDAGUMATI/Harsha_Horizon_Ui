import { useContext, useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'
import { useSidebar } from '../../Hooks/useSidebar'
import Breadcrumb from '../Common/Breadcrumb'
import NotificationBell from '../Common/NotificationBell'
import ThemeToggle from '../Common/ThemeToggle'
import SearchBar from '../Forms/SearchBar'
import Avatar from '../UI/Avatar'
import Card from '../UI/Card'

function Navbar() {
  const { openSidebar } = useSidebar()
  const { user } = useContext(AuthContext)
  const [query, setQuery] = useState('')

  return (
    <Card className="glass-panel relative z-20 border-white/40 px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openSidebar}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-muted)] xl:hidden"
            aria-label="Open navigation"
          >
            <FiAlignJustify className="h-5 w-5" />
          </button>
          <Breadcrumb />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <SearchBar
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <NotificationBell />
          <ThemeToggle />
          <Link
            to="/profile"
            className="hidden items-center gap-3 rounded-full bg-[var(--surface-soft)] px-3 py-2 transition hover:bg-[var(--border)] md:flex"
          >
            <Avatar name={user?.name ?? 'Harsha'} size="sm" />
            <div>
              <p className="text-sm font-bold text-[var(--text)]">
                {user?.name ?? 'Harsha'}
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                {user?.role ?? 'Product Designer'}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default Navbar
