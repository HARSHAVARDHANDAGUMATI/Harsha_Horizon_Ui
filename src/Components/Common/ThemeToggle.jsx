import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { useTheme } from '../../Hooks/useTheme'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const Icon = isDark ? RiSunFill : RiMoonFill

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-muted)] transition hover:text-brand-500"
      aria-label="Toggle theme"
    >
      <Icon className="h-5 w-5" />
    </button>
  )
}

export default ThemeToggle
