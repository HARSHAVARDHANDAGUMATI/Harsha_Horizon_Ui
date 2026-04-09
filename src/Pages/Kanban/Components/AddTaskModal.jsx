import { useState } from 'react'
import Button from '../../../Components/UI/Button'
import Input from '../../../Components/UI/Input'
import Modal from '../../../Components/UI/Modal'

function AddTaskModal({ open, onClose, onAdd }) {
  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!title.trim()) {
      return
    }
    onAdd(title.trim())
    setTitle('')
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Add a new task">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Add task</Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddTaskModal
