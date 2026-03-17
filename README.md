# ✅ Todo App — React + Vite

Навчальний проект у рамках лабораторної роботи з React.

## 🚀 Запуск

```bash
npm install
npm run dev
```

## 📦 Структура проекту

```
src/
├── App.jsx              # Кореневий компонент, константа TASKS
├── main.jsx             # Точка входу
├── index.css            # Глобальні стилі
└── components/
    ├── TodoList.jsx     # Список задач (приймає tasks через props)
    └── TodoItem.jsx     # Окремий елемент (приймає task через props)
```

## 🧩 Ключові концепції

| Концепція | Де використовується |
|-----------|---------------------|
| React Props | `TodoList` отримує `tasks`, `TodoItem` отримує `task` |
| `Array.map()` | `TodoList.jsx` рендерить список через `.map()` |
| Компонентна композиція | `App → TodoList → TodoItem` |
| CSS-стилізування | `index.css` з CSS-змінними та анімаціями |

## 🛠 Технології

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)
