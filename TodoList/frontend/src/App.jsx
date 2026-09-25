import { useEffect, useState } from 'react'
import axios from 'axios'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const API_URL = 'http://localhost:3000/todos'

function App() {
  const [todos, setTodos] = useState([])

  // Get todos from backend
  useEffect(() => {
    const loadTodos = async () => {
      const response = await axios.get(API_URL)
      setTodos(response.data)
    }

    loadTodos()
  }, [])

  // Add todo
  const addTodo = async (title) => {
    const response = await axios.post(API_URL, {
      title: title,
    })

    setTodos([...todos, response.data])
  }

  // Toggle todo
  const toggleTodo = async (id) => {
    const response = await axios.patch(`${API_URL}/${id}`)

    setTodos(
      todos.map((todo) =>
        todo.id === id ? response.data : todo
      )
    )
  }

  // Delete todo
  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`)

    setTodos(
      todos.filter((todo) => todo.id !== id)
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-3xl font-bold">
          Todo List
        </h1>

        <TodoForm onAdd={addTodo} />

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  )
}

export default App