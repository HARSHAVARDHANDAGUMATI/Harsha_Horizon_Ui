function buildPoints(data, min, max, paddingTop = 20, paddingBottom = 34) {
  const chartHeight = 214 - paddingTop - paddingBottom

  return data
    .map((value, index) => {
      const x = 32 + (index / Math.max(data.length - 1, 1)) * 384
      const y =
        paddingTop + chartHeight - ((value - min) / Math.max(max - min, 1)) * chartHeight
      return `${x},${y}`
    })
    .join(' ')
}

function LineChart({ data = [] }) {
  const primary = data
  const secondary = data.map((value, index) => Math.max(value - (index % 3 === 0 ? 18 : 24), 18))
  const max = Math.max(...primary, ...secondary, 1)
  const min = Math.min(...primary, ...secondary, 0)
  const months = ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB']
  const markerIndex = Math.min(2, Math.max(primary.length - 1, 0))
  const markerX = 32 + (markerIndex / Math.max(primary.length - 1, 1)) * 384
  const markerY =
    20 + (214 - 20 - 34) - ((primary[markerIndex] - min) / Math.max(max - min, 1)) * (214 - 20 - 34)

  return (
    <svg viewBox="0 0 440 214" className="h-full min-h-[180px] w-full">
      {[46, 82, 118, 154].map((y) => (
        <line
          key={y}
          x1="28"
          y1={y}
          x2="412"
          y2={y}
          stroke="#eef2ff"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
      ))}

      <polyline
        fill="none"
        stroke="#5ec4ff"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={buildPoints(secondary, min, max)}
      />
      <polyline
        fill="none"
        stroke="#4318ff"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={buildPoints(primary, min, max)}
      />

      <circle cx={markerX} cy={markerY} r="4.5" fill="#fff" stroke="#4318ff" strokeWidth="3" />
      <rect x={markerX - 22} y={markerY - 28} rx="8" ry="8" width="48" height="22" fill="#4318ff" />
      <text
        x={markerX + 2}
        y={markerY - 13}
        textAnchor="middle"
        fontSize="10"
        fill="#fff"
        fontWeight="700"
      >
        $108.00
      </text>

      {months.map((month, index) => (
        <text
          key={month}
          x={index === 0 ? 36 : 36 + index * 74}
          y="196"
          fontSize="10"
          fill="#a3aed0"
          fontWeight="500"
        >
          {month}
        </text>
      ))}
    </svg>
  )
}

export default LineChart
