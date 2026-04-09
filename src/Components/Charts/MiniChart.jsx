function MiniChart({ data = [] }) {
  const max = Math.max(...data, 1)

  return (
    <div className="flex h-16 items-end gap-1">
      {data.map((value, index) => (
        <span
          key={index}
          className="w-2 rounded-full bg-brand-500/80"
          style={{ height: `${(value / max) * 100}%` }}
        />
      ))}
    </div>
  )
}

export default MiniChart
