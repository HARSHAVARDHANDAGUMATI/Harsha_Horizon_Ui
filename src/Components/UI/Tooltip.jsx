function Tooltip({ text }) {
  return (
    <span className="rounded-full bg-[var(--surface-soft)] px-2 py-1 text-xs font-medium text-[var(--text-muted)]">
      {text}
    </span>
  )
}

export default Tooltip
