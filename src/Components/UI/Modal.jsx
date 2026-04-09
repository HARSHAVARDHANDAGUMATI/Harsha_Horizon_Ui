import { AnimatePresence, motion } from 'framer-motion'

function Modal({ open, onClose, title, children }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-xl rounded-[28px] bg-[var(--surface)] p-6 shadow-horizon"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            {title ? (
              <h3 className="mb-4 font-display text-2xl font-bold text-[var(--text)]">
                {title}
              </h3>
            ) : null}
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Modal
