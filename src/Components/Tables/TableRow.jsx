import Badge from '../UI/Badge'

function TableRow({ row, columns }) {
  return (
    <tr className="border-b border-[var(--border)] last:border-none">
      {columns.map((column) => {
        const value = row[column.key]

        return (
          <td key={column.key} className="px-4 py-4 text-sm text-[var(--text-muted)]">
            {column.type === 'badge' ? (
              <Badge
                variant={
                  value === 'Approved'
                    ? 'success'
                    : value === 'Disable'
                      ? 'warning'
                      : value === 'Error'
                        ? 'danger'
                        : 'neutral'
                }
              >
                {value}
              </Badge>
            ) : (
              <span className="font-medium text-[var(--text)]">{value}</span>
            )}
          </td>
        )
      })}
    </tr>
  )
}

export default TableRow
