import TodoList from './components/TodoList'

const TASKS = [
  {
    id: 1,
    title: 'Налаштувати середовище розробки',
    priority: 'high',
    category: 'Setup',
    status: 'done',
  },
  {
    id: 2,
    title: 'Створити компоненти TodoList та TodoItem',
    priority: 'high',
    category: 'Dev',
    status: 'done',
  },
  {
    id: 3,
    title: 'Додати базове стилізування через CSS',
    priority: 'medium',
    category: 'Design',
    status: 'in-progress',
  },
  {
    id: 4,
    title: 'Передати дані через props',
    priority: 'medium',
    category: 'Dev',
    status: 'in-progress',
  },
  {
    id: 5,
    title: 'Відрендерити список через Array.map()',
    priority: 'medium',
    category: 'Dev',
    status: 'pending',
  },
  {
    id: 6,
    title: 'Підключити Vite як збірник',
    priority: 'low',
    category: 'Setup',
    status: 'pending',
  },
  {
    id: 7,
    title: 'Розмістити проект на GitHub',
    priority: 'low',
    category: 'Deploy',
    status: 'pending',
  },
]

function App() {
  const doneCount = TASKS.filter((t) => t.status === 'done').length

  return (
    <div className="app">
      <header className="app-header">
        <h1>// todo.list</h1>
        <p className="subtitle">React + Vite — навчальний проект</p>
      </header>

      <div className="stats-bar">
        <span>
          Всього: <strong>{TASKS.length}</strong>
        </span>
        <span>
          Виконано: <strong>{doneCount}</strong>
        </span>
        <span>
          Залишилось: <strong>{TASKS.length - doneCount}</strong>
        </span>
      </div>

      <TodoList tasks={TASKS} />

      <footer className="app-footer">
        <p>React Props · Array.map() · Component Composition</p>
      </footer>
    </div>
  )
}

export default App
