import { useEffect, useState } from 'react'
import { SiStarbucks } from 'react-icons/si'
import Card from '../../Components/UI/Card'
import Spinner from '../../Components/UI/Spinner'
import OverviewSection from '../Components/OverviewSection'
import RevenueSection from '../Components/RevenueSection'
import CheckTable from '../Tables/Components/CheckTable'
import ComplexTable from '../Tables/Components/ComplexTable'
import ActivityFeed from '../Components/ActivityFeed'
import { dashboardService } from '../../Services/dashboardService'

function CalendarCard() {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  const numbers = [29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2 text-sm font-medium text-[var(--text)]">
          <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1">April</span>
          <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1">2021</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-[var(--text-soft)]">
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
        {numbers.map((day, index) => (
          <span
            key={`${day}-${index}`}
            className={`flex h-8 items-center justify-center rounded-full text-xs ${
              day === 27 || day === 30
                ? 'bg-brand-500 font-bold text-white'
                : 'text-[var(--text)]'
            }`}
          >
            {day}
          </span>
        ))}
      </div>
    </Card>
  )
}

function BottomCards({ team, lesson }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_1fr_1fr_0.9fr]">
      <Card className="p-5">
        <p className="text-xs text-[var(--text-soft)]">Business Design</p>
        <p className="mt-1 text-sm font-bold text-[var(--text)]">
          {lesson.title}
        </p>
        <h3 className="mt-6 font-display text-[28px] font-bold leading-tight text-[var(--text)]">
          What do you need to know to create better products?
        </h3>
        <div className="mt-6 flex items-center gap-4 text-xs text-[var(--text-muted)]">
          <span>{lesson.time}</span>
          <span>{lesson.format}</span>
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-display text-[22px] font-bold text-[var(--text)]">
            Team members
          </h3>
          <span className="text-brand-500">+</span>
        </div>
        <div className="space-y-4">
          {team.map((member) => (
            <div key={member.id} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd0ee,transparent_28%),linear-gradient(135deg,#3857ff,#7d6bff)] text-xs font-bold text-white">
                {member.name[0]}
              </span>
              <div className="flex-1">
                <p className="text-sm font-bold text-[var(--text)]">{member.name}</p>
                <p className="text-xs text-[var(--text-soft)]">{member.role}</p>
              </div>
              <span className="text-[var(--text-soft)]">⋮</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--surface-soft)] text-brand-500">
          <span className="text-3xl">◌</span>
        </div>
        <h3 className="font-display text-[28px] font-bold leading-tight text-[var(--text)]">
          Control card security in-app with a tap
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
          Discover our cards benefits, with one tap.
        </p>
        <button className="mt-8 h-11 w-full rounded-full bg-brand-500 text-sm font-bold text-white">
          Cards
        </button>
      </Card>

      <Card className="overflow-hidden p-3">
        <div className="flex h-40 items-center justify-center overflow-hidden rounded-[20px] bg-[#d3ede4]">
          <SiStarbucks className="h-20 w-20 text-[#00704A] drop-shadow-sm transition-transform duration-300 hover:scale-110" />
        </div>
        <div className="px-2 pb-2 pt-4">
          <h3 className="font-display text-[24px] font-bold text-[var(--text)]">
            Starbucks
          </h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">10% cashback & off</p>
        </div>
      </Card>
    </div>
  )
}

function DashboardPage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    dashboardService.getDashboardData().then(setData)
  }, [])

  if (!data) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-medium text-[var(--text-muted)]">
          Pages / Dashboard
        </p>
        <h2 className="font-display text-3xl font-bold text-[var(--text)]">
          Main Dashboard
        </h2>
      </div>

      <OverviewSection stats={data.stats} />
      <RevenueSection
        revenueSeries={data.revenueSeries}
        balanceSeries={data.balanceSeries}
        trafficBreakdown={data.trafficBreakdown}
      />

      <div className="grid gap-5 xl:grid-cols-[1.6fr_0.9fr_0.85fr]">
        <CheckTable rows={data.checkItems} />
        <ActivityFeed items={data.tasks.map((task, index) => ({ id: index, title: task }))} />
        <CalendarCard />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.55fr_0.85fr_0.85fr]">
        <ComplexTable rows={data.complexItems} />
        <ActivityFeed items={data.tasks.slice(0, 4).map((task, index) => ({ id: index, title: task }))} />
        <CalendarCard />
      </div>

      <BottomCards team={data.team} lesson={data.activity[0]} />
    </div>
  )
}

export default DashboardPage
