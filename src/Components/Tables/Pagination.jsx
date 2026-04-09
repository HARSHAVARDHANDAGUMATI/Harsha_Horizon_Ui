function Pagination({ page = 1, totalPages = 1 }) {
  return (
    <div className="flex items-center justify-end gap-2 px-4 py-3 text-sm text-[var(--text-muted)]">
      <span>
        Page {page} of {totalPages}
      </span>
    </div>
  )
}

export default Pagination
