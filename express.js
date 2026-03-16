const express = require('express');
const app = express();
const PORT = 3000;

// Middleware для парсингу JSON
app.use(express.json());

// Зберігання задач у пам'яті
const tasks = [
  { id: 1, title: 'Вивчити Express.js' },
  { id: 2, title: 'Зробити практичну роботу' },
];

let nextId = tasks.length + 1;

// ─────────────────────────────────────────────
// GET /tasks — повернення списку задач
// ─────────────────────────────────────────────
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// ─────────────────────────────────────────────
// POST /tasks — додавання нової задачі
// ─────────────────────────────────────────────
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Поле "title" є обов\'язковим і не може бути порожнім.' });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// ─────────────────────────────────────────────
// GET /tasks/:id — перегляд задачі по id
// ─────────────────────────────────────────────
app.get('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: `Задачу з id=${id} не знайдено.` });
  }

  res.json(task);
});

// ─────────────────────────────────────────────
// PATCH /tasks/:id — оновлення задачі по id
// ─────────────────────────────────────────────
app.patch('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: `Задачу з id=${id} не знайдено.` });
  }

  const { title } = req.body;

  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ error: 'Поле "title" не може бути порожнім рядком.' });
    }
    tasks[taskIndex].title = title.trim();
  }

  res.json(tasks[taskIndex]);
});

// ─────────────────────────────────────────────
// DELETE /tasks/:id — видалення задачі по id
// ─────────────────────────────────────────────
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: `Задачу з id=${id} не знайдено.` });
  }

  const [deleted] = tasks.splice(taskIndex, 1);
  res.json({ message: `Задачу "${deleted.title}" успішно видалено.`, task: deleted });
});

// ─────────────────────────────────────────────
// Запуск сервера
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Сервер запущено: http://localhost:${PORT}`);
  console.log('');
  console.log('Доступні маршрути:');
  console.log(`  GET    http://localhost:${PORT}/tasks`);
  console.log(`  POST   http://localhost:${PORT}/tasks`);
  console.log(`  GET    http://localhost:${PORT}/tasks/:id`);
  console.log(`  PATCH  http://localhost:${PORT}/tasks/:id`);
  console.log(`  DELETE http://localhost:${PORT}/tasks/:id`);
});