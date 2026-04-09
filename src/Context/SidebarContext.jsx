import { createContext, useMemo, useState } from 'react'

const SidebarContext = createContext(null)

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const value = useMemo(
    () => ({
      isSidebarOpen,
      openSidebar: () => setIsSidebarOpen(true),
      closeSidebar: () => setIsSidebarOpen(false),
      toggleSidebar: () => setIsSidebarOpen((state) => !state),
    }),
    [isSidebarOpen],
  )

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}

export default SidebarContext
