import {
  MdBarChart,
  MdDashboard,
  MdLock,
  MdOutlineShoppingCart,
  MdPerson,
  MdViewKanban,
} from 'react-icons/md'

export const navItems = [
  { label: 'Main Dashboard', path: '/dashboard', icon: MdDashboard },
  { label: 'NFT Marketplace', path: '/nft-marketplace', icon: MdOutlineShoppingCart },
  { label: 'Data Tables', path: '/tables', icon: MdBarChart },
  { label: 'Kanban', path: '/kanban', icon: MdViewKanban },
  { label: 'Profile', path: '/profile', icon: MdPerson },
  { label: 'Sign In', path: '/auth/sign-in', icon: MdLock },
]

export const notifications = [
  {
    id: 1,
    title: 'New Horizon UI release',
    description: 'An improved Tailwind React dashboard kit is ready to review.',
    time: '2 min ago',
  },
  {
    id: 2,
    title: 'Marketplace sale completed',
    description: 'A featured NFT item crossed its weekly revenue target.',
    time: '16 min ago',
  },
  {
    id: 3,
    title: 'Profile sync complete',
    description: 'Your portfolio and storage analytics are up to date.',
    time: '1 hour ago',
  },
]

export const quickFilters = ['This month', 'This week', 'Last 7 days']
export const creatorTabs = ['Art', 'Music', 'Collectibles', 'Sports']
