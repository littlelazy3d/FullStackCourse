import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) return

    onAdd(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What do you need to do?"
        className="flex-1 rounded-lg border px-4 py-2"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-5 py-2 text-white"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm