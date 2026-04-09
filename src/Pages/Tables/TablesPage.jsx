import { MdMoreHoriz } from 'react-icons/md'
import Card from '../../Components/UI/Card'
import CheckTable from './Components/CheckTable'
import ComplexTable from './Components/ComplexTable'

const developmentRows = [
  { name: 'Marketplace', date: '12.Jan.2021', progress: '75.5%' },
  { name: 'Venus DB PRO', date: '21.Feb.2021', progress: '35.4%' },
  { name: 'Venus DS', date: '13.Mar.2021', progress: '25%' },
  { name: 'Venus 3D Asset', date: '24.Jan.2021', progress: '100%' },
  { name: 'Uranus', date: '21.Sep.2021', progress: '12.2%' },
  { name: 'Uranus', date: '21.Sep.2021', progress: '12.2%' },
  { name: 'Uranus', date: '21.Sep.2021', progress: '12.2%' },
  { name: 'Uranus', date: '21.Sep.2021', progress: '12.2%' },
  { name: 'Uranus', date: '21.Sep.2021', progress: '12.2%' },
  { name: 'Uranus', date: '21.Sep.2021', progress: '12.2%' },
]

const checkRows = [
  { name: 'Marketplace' },
  { name: 'Venus PRO' },
  { name: 'Uranus Kit' },
  { name: 'Venus DS' },
  { name: 'Venus 3D Asset' },
  { name: 'Venus 3D Asset' },
  { name: 'Venus 3D Asset' },
  { name: 'Venus 3D Asset' },
  { name: 'Venus 3D Asset' },
  { name: 'Venus 3D Asset' },
]

const fourColumnRows = [
  ['Marketplace', '17.5%', '2.458', '24.Jan.2021'],
  ['Venus PRO', '10.8%', '1.485', '12.Jun.2021'],
  ['Uranus Kit', '21.3%', '1.024', '5.Jan.2021'],
  ['Venus DS', '31.5%', '858', '7.Mar.2021'],
  ['Venus 3D Asset', '12.2%', '258', '17.Dec.2021'],
]

const complexRows = [
  { name: 'Marketplace', status: 'Approved', date: '24.Jan.2021' },
  { name: 'Venus Dashboard Builder', status: 'Disable', date: '30.Dec.2021' },
  { name: 'Venus Design System', status: 'Error', date: '20.May.2021' },
  { name: 'Uranus', status: 'Approved', date: '12.Jul.2021' },
]

function DevelopmentTable() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="font-display text-[28px] font-bold text-[var(--text)]">
          Development Table
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
            <tr className="border-b border-[var(--border)] text-left text-xs text-[var(--text-soft)]">
              <th className="pb-3 font-medium">Title</th>
              <th className="pb-3 font-medium">Title</th>
              <th className="pb-3 font-medium">Title</th>
              <th className="pb-3 font-medium">Title</th>
            </tr>
          </thead>
          <tbody>
            {developmentRows.map((row, index) => (
              <tr key={`${row.name}-${index}`} className="text-sm">
                <td className="py-3 font-medium text-[var(--text)]">{row.name}</td>
                <td className="py-3">
                  <div className="flex gap-2 text-[var(--text-soft)]">
                    <span className="h-3 w-3 rounded-full bg-[var(--surface-soft)]" />
                    <span className="h-3 w-3 rounded-full bg-[var(--surface-soft)]" />
                    <span className="h-3 w-3 rounded-full bg-[var(--surface-soft)]" />
                  </div>
                </td>
                <td className="py-3 font-medium text-[var(--text)]">{row.date}</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-xs font-medium text-[var(--text)]">
                      {row.progress}
                    </span>
                    <div className="h-2 w-[74px] rounded-full bg-[var(--surface-soft)]">
                      <div
                        className="h-2 rounded-full bg-brand-500"
                        style={{
                          width:
                            row.progress === '100%'
                              ? '100%'
                              : row.progress === '75.5%'
                                ? '75%'
                                : row.progress === '35.4%'
                                  ? '35%'
                                  : row.progress === '25%'
                                    ? '25%'
                                    : '12%',
                        }}
                      />
                    </div>
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

function FourColumnTable() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="font-display text-[28px] font-bold text-[var(--text)]">
          4-Column Table
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
            <tr className="border-b border-[var(--border)] text-left text-xs text-[var(--text-soft)]">
              <th className="pb-3 font-medium">Title</th>
              <th className="pb-3 font-medium">Title</th>
              <th className="pb-3 font-medium">Title</th>
              <th className="pb-3 font-medium">Title</th>
            </tr>
          </thead>
          <tbody>
            {fourColumnRows.map((row) => (
              <tr key={row[0]} className="text-sm">
                <td className="py-3 font-medium text-[var(--text)]">{row[0]}</td>
                <td className="py-3 font-medium text-[var(--text)]">{row[1]}</td>
                <td className="py-3 font-medium text-[var(--text)]">{row[2]}</td>
                <td className="py-3 font-medium text-[var(--text)]">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

function TablesPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-medium text-[var(--text-muted)]">
          Pages / Tables
        </p>
        <h2 className="font-display text-3xl font-bold text-[var(--text)]">
          Tables
        </h2>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <DevelopmentTable />
        <CheckTable rows={checkRows} />
        <FourColumnTable />
        <ComplexTable rows={complexRows} />
      </div>
    </div>
  )
}

export default TablesPage
