import { useState } from 'react'
import TodoList from './components/TodoList'

const INITIAL_TASKS = [
  { id: 1, title: 'Налаштувати Vite + React' },
  { id: 2, title: 'Створити компонент TodoList' },
  { id: 3, title: 'Створити компонент TodoItem' },
]

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [input, setInput] = useState('')

  function addTask() {
    if (input.trim() === '') return
    const newTask = { id: Date.now(), title: input }
    setTasks([...tasks, newTask])
    setInput('')
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="app">
      <h1>📝 Список задач</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Нова задача..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={addTask}>Додати</button>
      </div>

      <TodoList tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App