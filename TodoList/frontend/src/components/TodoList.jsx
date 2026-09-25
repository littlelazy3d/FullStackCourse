import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="mt-6 space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList