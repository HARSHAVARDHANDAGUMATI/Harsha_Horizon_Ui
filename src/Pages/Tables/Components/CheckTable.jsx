import { MdMoreHoriz } from 'react-icons/md'
import Card from '../../../Components/UI/Card'

function CheckTable({ rows }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="font-display text-[22px] font-bold text-[var(--text)]">
          Check Table
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
              <th className="pb-3 font-medium">Progress</th>
              <th className="pb-3 font-medium">Quantity</th>
              <th className="pb-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.name}-${index}`} className="text-sm">
                <td className="py-3 text-[var(--text)]">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      defaultChecked={index < 4}
                      className="h-4 w-4 rounded border-[#ccd3ea] text-brand-500 focus:ring-brand-500"
                    />
                    <span className="font-medium">{row.name}</span>
                  </label>
                </td>
                <td className="py-3 font-medium text-[var(--text)]">{row.progress}</td>
                <td className="py-3 font-medium text-[var(--text)]">{row.quantity}</td>
                <td className="py-3 font-medium text-[var(--text)]">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default CheckTable
