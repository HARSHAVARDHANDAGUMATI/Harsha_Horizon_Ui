function BarChart({ data = [] }) {
  const max = Math.max(...data, 1)
  const labels = ['17', '18', '19', '20', '21', '22', '23', '24', '25']

  return (
    <div className="flex h-full min-h-[180px] items-end justify-between gap-3 pt-1">
      {data.map((value, index) => {
        const height = (value / max) * 92 + 54
        const purpleHeight = height * 0.46
        const blueHeight = height * 0.31

        return (
          <div key={index} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
            <div className="relative flex h-[142px] items-end">
              <div className="w-3.5 rounded-full bg-[#eef4fb]" style={{ height }} />
              <div
                className="absolute bottom-0 w-3.5 rounded-full bg-[#7a63ff]"
                style={{ height: purpleHeight }}
              />
              <div
                className="absolute w-3.5 rounded-full bg-[#8ad7ff]"
                style={{ bottom: `${purpleHeight - 10}px`, height: blueHeight }}
              />
            </div>
            <span className="text-[10px] font-medium text-[var(--text-soft)]">
              {labels[index]}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default BarChart
