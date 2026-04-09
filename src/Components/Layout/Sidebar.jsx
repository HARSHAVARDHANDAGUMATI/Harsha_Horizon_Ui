import { useContext } from 'react'
import { MdLogout } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'
import { protectedNavItems } from '../../Routes/routes.config'
import Card from '../UI/Card'
import { cn } from '../../Utils/cn'

function SidebarContent() {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)

  function handleLogout() {
    logout()
    navigate('/auth/sign-in', { replace: true })
  }

  return (
    <div className="flex h-full flex-col px-5 py-8">
      <div className="px-3">
        <p className="font-display text-[30px] font-extrabold uppercase tracking-tight text-[var(--text)]">
          Horizon <span className="font-medium">Free</span>
        </p>
      </div>
      <div className="my-8 h-px bg-[var(--border)]" />
      <nav className="space-y-2">
        {protectedNavItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'group flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-bold text-[var(--text-muted)] transition',
                  isActive && 'bg-[var(--surface-soft)] text-brand-500',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={cn(
                      'h-6 w-6 transition',
                      isActive ? 'text-brand-500' : 'text-[var(--text-soft)]',
                    )}
                  />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          )
        })}
      </nav>
      <button
        type="button"
        onClick={handleLogout}
        className="mt-4 flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-bold text-[var(--text-muted)] transition hover:bg-[var(--surface-soft)] hover:text-brand-500"
      >
        <MdLogout className="h-6 w-6 text-[var(--text-soft)]" />
        <span>Logout</span>
      </button>
      <Card className="mt-auto overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-cyan-500 p-5 text-white">
        <p className="font-display text-xl font-bold">Upgrade to PRO</p>
        <p className="mt-2 text-sm text-white/80">
          Unlock more polished screens, advanced widgets, and premium sections.
        </p>
      </Card>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="hidden h-[calc(100vh-2rem)] w-[290px] shrink-0 xl:block">
      <Card className="sticky top-4 h-full overflow-hidden">
        <SidebarContent />
      </Card>
    </aside>
  )
}

export { SidebarContent }
export default Sidebar
