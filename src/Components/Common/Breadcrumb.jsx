import { Link, useLocation } from 'react-router-dom'
import { protectedNavItems } from '../../Routes/routes.config'

function Breadcrumb() {
  const location = useLocation()
  const currentPage = protectedNavItems.find(
    (route) => route.path === location.pathname,
  )

  return (
    <div>
      <p className="text-sm font-medium text-[var(--text-muted)]">
        Pages <span className="px-1">/</span>
        <Link to={location.pathname} className="capitalize">
          {currentPage?.label ?? 'Dashboard'}
        </Link>
      </p>
      <h1 className="font-display text-[32px] font-bold text-[var(--text)]">
        {currentPage?.label ?? 'Main Dashboard'}
      </h1>
    </div>
  )
}

export default Breadcrumb
