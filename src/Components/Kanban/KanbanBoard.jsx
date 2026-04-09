import KanbanColumn from './KanbanColumn'

function KanbanBoard({ columns, onAddToColumn }) {
  return (
    <div className="grid items-stretch gap-5 xl:grid-cols-3">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          title={column.title}
          tasks={column.tasks}
          onAdd={() => onAddToColumn(column.id)}
        />
      ))}
    </div>
  )
}

export default KanbanBoard
