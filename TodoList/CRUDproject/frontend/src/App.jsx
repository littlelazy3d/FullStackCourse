import { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:3000/employees'

function App() {
  const [employees, setEmployees] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')

  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    const loadEmployees = async () => {
      const response = await axios.get(API_URL)
      setEmployees(response.data)
    }

    loadEmployees()
  }, [])

  const saveEmployee = async (e) => {
    e.preventDefault()

    const employee = {
      name,
      email,
      position,
    }

    if (editingId) {
      const response = await axios.patch(
        `${API_URL}/${editingId}`,
        employee,
      )

      setEmployees(
        employees.map((item) =>
          item.id === editingId
            ? response.data
            : item
        )
      )

      setEditingId(null)
    } else {
      const response = await axios.post(
        API_URL,
        employee,
      )

      setEmployees([
        ...employees,
        response.data,
      ])
    }

    setName('')
    setEmail('')
    setPosition('')
  }

  const editEmployee = (employee) => {
    setEditingId(employee.id)
    setName(employee.name)
    setEmail(employee.email)
    setPosition(employee.position)
  }

  const deleteEmployee = async (id) => {
    await axios.delete(`${API_URL}/${id}`)

    setEmployees(
      employees.filter(
        (employee) => employee.id !== id
      )
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-6 text-3xl font-bold">
          Employee Manager
        </h1>

        <form
          onSubmit={saveEmployee}
          className="mb-8 space-y-3 rounded-lg bg-white p-6 shadow"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full rounded border p-2"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded border p-2"
          />

          <input
            value={position}
            onChange={(e) =>
              setPosition(e.target.value)
            }
            placeholder="Position"
            className="w-full rounded border p-2"
          />

          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            {editingId ? 'Update' : 'Add Employee'}
          </button>
        </form>

        <div className="space-y-3">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
            >
              <div>
                <h2 className="font-bold">
                  {employee.name}
                </h2>

                <p className="text-gray-500">
                  {employee.email}
                </p>

                <p className="text-gray-500">
                  {employee.position}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    editEmployee(employee)
                  }
                  className="rounded bg-yellow-500 px-3 py-1 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteEmployee(employee.id)
                  }
                  className="rounded bg-red-500 px-3 py-1 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}

export default App