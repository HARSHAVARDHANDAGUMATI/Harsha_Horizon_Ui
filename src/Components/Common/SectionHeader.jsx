function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        {eyebrow ? (
          <p className="text-sm font-medium text-[var(--text-muted)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-2xl font-bold text-[var(--text)]">
          {title}
        </h2>
      </div>
      {action}
    </div>
  )
}

export default SectionHeader
