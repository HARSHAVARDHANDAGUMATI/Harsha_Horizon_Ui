import { MdEdit } from 'react-icons/md'

function KanbanAvatarGroup({ avatars = [] }) {
  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar, index) => (
        <span
          key={`${avatar}-${index}`}
          className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[radial-gradient(circle_at_30%_30%,#ffccf1,transparent_30%),linear-gradient(135deg,#0c1d7f,#4567ff,#8d7dff)] text-[10px] font-bold text-white"
        >
          {avatar}
        </span>
      ))}
    </div>
  )
}

function KanbanCard({ task }) {
  return (
    <article
      className={`rounded-[20px] bg-[var(--surface)] p-4 shadow-soft ${
        task.tall ? 'min-h-[380px] flex flex-1 flex-col' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-[17px] font-bold leading-7 text-[var(--text)]">
          {task.title}
        </h4>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-soft)]"
        >
          <MdEdit className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
        {task.description}
      </p>

      {task.preview ? (
        <div
          className={`mt-4 overflow-hidden rounded-[18px] ${
            task.tall ? 'h-[150px] flex-1' : 'h-[180px]'
          }`}
        >
          <img 
            src={task.preview} 
            alt="Task cover" 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" 
          />
        </div>
      ) : null}

      <div className="mt-4 flex items-center justify-between gap-3">
        <KanbanAvatarGroup avatars={task.avatars} />
        <span
          className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${
            task.status === 'updates'
              ? 'bg-[#3965ff] text-white'
              : task.status === 'pending'
                ? 'bg-[#ffb547] text-white'
                : task.status === 'done'
                  ? 'bg-[#01b574] text-white'
                  : 'bg-[#ee5d50] text-white'
          }`}
        >
          {task.status}
        </span>
      </div>
    </article>
  )
}

export default KanbanCard
