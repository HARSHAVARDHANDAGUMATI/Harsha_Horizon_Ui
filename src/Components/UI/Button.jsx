import { cn } from '../../Utils/cn'

const variants = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 focus-visible:outline-brand-500',
  secondary:
    'bg-[var(--surface-muted)] text-[var(--text)] hover:bg-[var(--brand-soft)] focus-visible:outline-brand-500',
  ghost:
    'bg-transparent text-[var(--text-muted)] hover:bg-[var(--surface-soft)] focus-visible:outline-brand-500',
  white:
    'bg-white text-brand-600 hover:bg-white/90 focus-visible:outline-white',
}

function Button({
  className,
  variant = 'primary',
  type = 'button',
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
