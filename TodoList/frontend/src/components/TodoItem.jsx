function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span
          className={
            todo.completed
              ? 'text-gray-400 line-through'
              : 'text-gray-800'
          }
        >
          {todo.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem