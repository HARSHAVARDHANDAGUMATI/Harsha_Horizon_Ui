import { forwardRef } from 'react'
import { cn } from '../../Utils/cn'

const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text)] outline-none transition focus:border-brand-500',
        className,
      )}
      {...props}
    />
  )
})

export default Input
