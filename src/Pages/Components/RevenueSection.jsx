import Card from '../../Components/UI/Card'
import LineChart from '../../Components/Charts/LineChart'
import BarChart from '../../Components/Charts/BarChart'
import PieChart from '../../Components/Charts/PieChart'

function ChartBadgeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="2" height="5" rx="1" fill="currentColor" />
      <rect x="6" y="3" width="2" height="9" rx="1" fill="currentColor" />
      <rect x="10" y="5" width="2" height="7" rx="1" fill="currentColor" />
    </svg>
  )
}

function RevenueSection({ revenueSeries, balanceSeries, trafficBreakdown }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.6fr_1fr]">
      <Card className="flex h-full flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--text-soft)]">
            This month
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-soft)] text-brand-500">
            <ChartBadgeIcon />
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-display text-4xl font-extrabold text-[var(--text)]">
              $37.5K
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="font-medium text-[var(--text-soft)]">Total Spent</span>
              <span className="font-bold text-emerald-500">+2.45%</span>
            </div>
            <p className="mt-3 text-sm font-bold text-[#01b574]">On track</p>
          </div>

          <div className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
            $108.00
          </div>
        </div>

        <div className="mt-1 flex-1">
          <LineChart data={revenueSeries} />
        </div>
      </Card>

      <Card className="flex h-full flex-col p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-[22px] font-bold text-[var(--text)]">
            Weekly Revenue
          </h3>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-soft)] text-brand-500">
            <ChartBadgeIcon />
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-soft)]">
              Revenue
            </p>
            <p className="mt-1 font-display text-[32px] font-extrabold leading-none text-[var(--text)]">
              $25.6K
            </p>
          </div>
          <div className="rounded-full bg-[var(--surface-soft)] px-3 py-2 text-xs font-bold text-emerald-500">
            +18.2%
          </div>
        </div>

        <div className="mt-2 flex-1">
          <BarChart data={balanceSeries} />
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-[var(--text-soft)]">Daily Traffic</p>
            <p className="mt-1 font-display text-4xl font-extrabold text-[var(--text)]">
              2.579
            </p>
            <p className="text-sm text-[var(--text-muted)]">Visitors</p>
          </div>
          <p className="text-xs font-bold text-emerald-500">+2.45%</p>
        </div>
        <div className="mt-6 flex h-32 items-end justify-between gap-3">
          {[8, 6, 11, 7, 9, 12, 4].map((item, index) => (
            <div key={index} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-3 rounded-full bg-brand-500"
                style={{ height: `${item * 6}px` }}
              />
              <span className="text-[10px] text-[var(--text-soft)]">
                {['00', '04', '08', '12', '14', '16', '18'][index]}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-display text-[22px] font-bold text-[var(--text)]">
              Your Pie Chart
            </p>
          </div>
          <p className="text-xs text-[var(--text-soft)]">Monthly</p>
        </div>
        <div className="mt-5">
          <PieChart items={trafficBreakdown} />
        </div>
      </Card>
    </div>
  )
}

export default RevenueSection
