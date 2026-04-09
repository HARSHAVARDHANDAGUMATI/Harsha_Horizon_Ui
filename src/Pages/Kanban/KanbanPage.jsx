import { useState } from 'react'
import KanbanBoard from '../../Components/Kanban/KanbanBoard'
import AddTaskModal from './Components/AddTaskModal'

const initialColumns = [
  {
    id: 'backlog',
    title: 'Backlog',
    tasks: [
      {
        id: 1,
        title: "Option to 'use local/server version' feature",
        description:
          'It usually displays this message when you close an unsaved page when you do it on purpose, and it is getting frustrated to see this every time.',
        avatars: ['A', 'H'],
        status: 'updates',
      },
      {
        id: 2,
        title: 'Add/modify your own CSS-Selectors',
        description:
          'Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.',
        avatars: ['H', 'A', 'R'],
        status: 'pending',
        preview: '/images/nfts/abstract_colors_1775709447310.png',
      },
      {
        id: 3,
        title: 'Shortcode for templates to display correctly',
        description:
          'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
        avatars: ['H'],
        status: 'errors',
      },
    ],
  },
  {
    id: 'progress',
    title: 'In progress',
    tasks: [
      {
        id: 4,
        title: "General ideas to improve 'Edit' workflow",
        description:
          'Currently, I have a few templates in the Local Library and when I want to add them I am always presented by default.',
        avatars: ['H', 'A', 'R'],
        status: 'pending',
      },
      {
        id: 5,
        title: 'Shortcode for templates to display correctly',
        description:
          'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
        avatars: ['H'],
        status: 'updates',
      },
      {
        id: 6,
        title: '[UX Design] - Set the default Library tab',
        description:
          'I want to be able to set the default Library tab especially when I already remember the last active tab.',
        avatars: ['H', 'A'],
        status: 'errors',
        preview: '/images/nfts/neon_drift_1775709533650.png',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: 7,
        title: 'Copy/Paste elements between pages',
        description:
          'We can only copy/paste elements (or group of elements) in the same page, which is quite limited.',
        avatars: ['H'],
        status: 'done',
      },
      {
        id: 8,
        title: 'Remove Extra DIV for each container added',
        description:
          "I still hope there won't have an extra div for each container you added. It should be something for better styling.",
        avatars: ['H', 'A', 'R'],
        status: 'done',
      },
      {
        id: 9,
        title: 'Add Figma files for the Library design blocks',
        description:
          'I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads.',
        avatars: ['H', 'A'],
        status: 'done',
        tall: true,
        preview:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80',
      },
    ],
  },
]

function KanbanPage() {
  const [columns, setColumns] = useState(initialColumns)
  const [open, setOpen] = useState(false)
  const [activeColumnId, setActiveColumnId] = useState('backlog')

  function handleOpenModal(columnId) {
    setActiveColumnId(columnId)
    setOpen(true)
  }

  function handleAddTask(title) {
    setColumns((currentColumns) =>
      currentColumns.map((column) =>
        column.id === activeColumnId
          ? {
              ...column,
              tasks: [
                {
                  id: Date.now(),
                  title,
                  description:
                    'Newly created task from the board. You can keep refining this card just like the other Kanban items.',
                  avatars: ['H'],
                  status: column.id === 'done' ? 'done' : 'updates',
                },
                ...column.tasks,
              ],
            }
          : column,
      ),
    )
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-medium text-[var(--text-muted)]">
          Pages / Kanban
        </p>
        <h2 className="font-display text-3xl font-bold text-[var(--text)]">
          Kanban
        </h2>
      </div>

      <KanbanBoard columns={columns} onAddToColumn={handleOpenModal} />

      <AddTaskModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={handleAddTask}
      />
    </div>
  )
}

export default KanbanPage
