import { AnimatePresence, motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { useSidebar } from '../../Hooks/useSidebar'
import Card from '../UI/Card'
import { SidebarContent } from './Sidebar'

function MobileSidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  return (
    <AnimatePresence>
      {isSidebarOpen ? (
        <motion.div
          className="fixed inset-0 z-[65] bg-slate-950/45 xl:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeSidebar}
        >
          <motion.div
            className="h-full max-w-[310px] p-4"
            initial={{ x: -32 }}
            animate={{ x: 0 }}
            exit={{ x: -32 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Card className="relative h-full overflow-hidden">
              <button
                type="button"
                onClick={closeSidebar}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-muted)]"
              >
                <HiX className="h-5 w-5" />
              </button>
              <SidebarContent />
            </Card>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileSidebar
