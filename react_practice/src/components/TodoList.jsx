import TodoItem from './TodoItem'

function TodoList({ tasks, onDelete }) {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TodoList