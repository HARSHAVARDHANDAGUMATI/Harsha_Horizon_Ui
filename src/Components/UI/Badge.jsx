import { cn } from '../../Utils/cn'

const badgeVariants = {
  success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  warning: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  danger: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
  neutral: 'bg-[var(--surface-muted)] text-[var(--text-muted)]',
}

function Badge({ className, variant = 'neutral', children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold',
        badgeVariants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
