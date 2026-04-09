import { MdBarChart, MdDashboard, MdLock, MdOutlineShoppingCart, MdPerson, MdViewKanban } from 'react-icons/md'
import DashboardPage from '../Pages/DashBoard/DashboardPage'
import NFTMarketplacePage from '../Pages/NFTmarketplace/NFTMarketplacePage'
import TablesPage from '../Pages/Tables/TablesPage'
import KanbanPage from '../Pages/Kanban/KanbanPage'
import ProfilePage from '../Pages/Profile/ProfilePage'
import SignInPage from '../Pages/Auth/SignInPage'
import SignUpPage from '../Pages/Auth/SignUpPage'
import ForgotPasswordPage from '../Pages/Auth/ForgotPasswordPage'

export const appRoutes = [
  { path: '/dashboard', label: 'Main Dashboard', icon: MdDashboard, component: DashboardPage, protected: true },
  { path: '/nft-marketplace', label: 'NFT Marketplace', icon: MdOutlineShoppingCart, component: NFTMarketplacePage, protected: true },
  { path: '/tables', label: 'Data Tables', icon: MdBarChart, component: TablesPage, protected: true },
  { path: '/kanban', label: 'Kanban', icon: MdViewKanban, component: KanbanPage, protected: true },
  { path: '/profile', label: 'Profile', icon: MdPerson, component: ProfilePage, protected: true },
  { path: '/auth/sign-in', label: 'Sign In', icon: MdLock, component: SignInPage, protected: false },
  { path: '/auth/sign-up', label: 'Sign Up', icon: MdLock, component: SignUpPage, protected: false },
  { path: '/auth/forgot-password', label: 'Forgot Password', component: ForgotPasswordPage, protected: false },
]

export const protectedNavItems = appRoutes.filter((route) => route.protected)
