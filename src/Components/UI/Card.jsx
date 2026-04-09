import { cn } from '../../Utils/cn'

function Card({ className, children, as: Component = 'section' }) {
  return (
    <Component
      className={cn(
        'rounded-[24px] border border-[var(--border)] bg-[var(--surface)] shadow-horizon',
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default Card
