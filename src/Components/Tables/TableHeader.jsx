function TableHeader({ columns }) {
  return (
    <thead>
      <tr className="border-b border-[var(--border)] text-left">
        {columns.map((column) => (
          <th
            key={column.key}
            className="px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--text-soft)]"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
