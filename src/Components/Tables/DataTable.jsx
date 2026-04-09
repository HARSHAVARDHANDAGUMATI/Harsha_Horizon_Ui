import Card from '../UI/Card'
import Pagination from './Pagination'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

function DataTable({ title, columns, rows }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="px-5 py-4">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">
          {title}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <TableHeader columns={columns} />
          <tbody>
            {rows.map((row) => (
              <TableRow key={row.name ?? row.id} row={row} columns={columns} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </Card>
  )
}

export default DataTable
