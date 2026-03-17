function TodoItem({ task, onDelete }) {
  return (
    <li className="todo-item">
      <span className="title">{task.title}</span>
      <button onClick={() => onDelete(task.id)}>✕</button>
    </li>
  )
}

export default TodoItem