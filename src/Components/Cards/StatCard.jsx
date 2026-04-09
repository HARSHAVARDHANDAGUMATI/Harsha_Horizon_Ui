import { MdBarChart, MdDashboard, MdDescription, MdFlag, MdHomeRepairService, MdTaskAlt } from 'react-icons/md'
import Card from '../UI/Card'

const iconMap = {
  chart: MdBarChart,
  document: MdDescription,
  wallet: MdBarChart,
  flag: MdFlag,
  task: MdTaskAlt,
  home: MdDashboard,
  service: MdHomeRepairService,
}

function StatCard({ label, value, trend, accent }) {
  const Icon = iconMap[accent] ?? MdBarChart

  return (
    <Card className="flex items-center gap-4 p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-soft)] text-brand-500">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-xs font-medium text-[var(--text-muted)]">{label}</p>
        <div className="mt-1 flex items-end gap-2">
          <p className="font-display text-[26px] font-bold text-[var(--text)]">
            {value}
          </p>
          {trend ? (
            <span className="pb-1 text-xs font-bold text-emerald-500">{trend}</span>
          ) : null}
        </div>
      </div>
    </Card>
  )
}

export default StatCard
