function PieChart({ items = [] }) {
  const total = items.reduce((sum, item) => sum + item.value, 0)
  let start = 0

  const segments = items.map((item) => {
    const size = (item.value / total) * 100
    const segment = `${item.color} ${start}% ${start + size}%`
    start += size
    return segment
  })

  return (
    <div className="flex items-center gap-5">
      <div
        className="h-40 w-40 rounded-full"
        style={{
          background: `conic-gradient(${segments.join(', ')})`,
        }}
      />
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-sm font-bold text-[var(--text)]">{item.label}</p>
              <p className="text-sm text-[var(--text-muted)]">{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PieChart
