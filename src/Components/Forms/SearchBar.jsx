import { FiSearch } from 'react-icons/fi'

function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <label className="flex h-11 min-w-[220px] items-center gap-2 rounded-full bg-[var(--surface-soft)] px-4 text-[var(--text-muted)]">
      <FiSearch className="h-4 w-4" />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-soft)]"
      />
    </label>
  )
}

export default SearchBar
