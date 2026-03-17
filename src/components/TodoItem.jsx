const STATUS_LABEL = {
  done:        'Виконано',
  'in-progress': 'В роботі',
  pending:     'Очікує',
}

function TodoItem({ task }) {
  const { title, priority, category, status } = task
  const isDone = status === 'done'

  return (
    <li className={`todo-item ${isDone ? 'done' : ''}`}>
      <span className={`priority-dot ${priority}`} title={`Пріоритет: ${priority}`} />

      <div className="todo-content">
        <p className="todo-title">{title}</p>
        <div className="todo-meta">
          <span className="todo-category">{category}</span>
          <span>·</span>
          <span>{priority === 'high' ? 'Високий' : priority === 'medium' ? 'Середній' : 'Низький'} пріоритет</span>
        </div>
      </div>

      <span className={`todo-status ${status}`}>
        {STATUS_LABEL[status]}
      </span>
    </li>
  )
}

export default TodoItem
