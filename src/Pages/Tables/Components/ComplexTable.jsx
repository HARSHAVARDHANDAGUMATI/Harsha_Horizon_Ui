import { MdMoreHoriz } from 'react-icons/md'
import Card from '../../../Components/UI/Card'

function statusTone(status) {
  if (status === 'Approved') return 'bg-[#01b574]'
  if (status === 'Disable') return 'bg-[#ee5d50]'
  return 'bg-[#ffb547]'
}

function ComplexTable({ rows }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="font-display text-[22px] font-bold text-[var(--text)]">
          Complex Table
        </h3>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-soft)] text-brand-500"
        >
          <MdMoreHoriz className="h-5 w-5" />
        </button>
      </div>
      <div className="px-5 pb-5">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-[var(--border)] text-left text-[10px] uppercase tracking-[0.12em] text-[var(--text-soft)]">
              <th className="pb-3 font-medium">Name</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Progress</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.name}-${index}`} className="text-sm">
                <td className="py-3 font-medium text-[var(--text)]">{row.name}</td>
                <td className="py-3">
                  <span className="inline-flex items-center gap-2 font-medium text-[var(--text)]">
                    <span className={`h-3 w-3 rounded-full ${statusTone(row.status)}`} />
                    {row.status}
                  </span>
                </td>
                <td className="py-3 font-medium text-[var(--text)]">{row.date}</td>
                <td className="py-3">
                  <div className="h-2 w-[84px] rounded-full bg-[var(--surface-soft)]">
                    <div
                      className="h-2 rounded-full bg-brand-500"
                      style={{ width: row.value }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default ComplexTable
