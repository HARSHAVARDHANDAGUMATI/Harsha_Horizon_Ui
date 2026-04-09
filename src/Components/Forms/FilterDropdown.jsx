function FilterDropdown({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="h-11 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm font-medium text-[var(--text)] outline-none"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default FilterDropdown
