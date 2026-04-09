import { MdAdd } from 'react-icons/md'
import KanbanCard from './KanbanCard'

function KanbanColumn({ title, tasks, onAdd }) {
  return (
    <section className="flex h-full flex-col rounded-[24px] bg-[#f8fafe] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-[26px] font-bold text-[var(--text)]">
          {title}
        </h3>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex h-9 w-14 items-center justify-center rounded-xl bg-[var(--surface)] text-brand-500 shadow-soft"
          aria-label={`Add card to ${title}`}
        >
          <MdAdd className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => (
          <KanbanCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default KanbanColumn
