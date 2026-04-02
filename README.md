# MySchedulerApp

Проект демонстрирует работу с Event Loop в Node.js: создание периодических задач с возможностью их автоматической остановки через заданный интервал.  

---

## Структура проекта

- `config.js` — Настройки приложения и тайминги
- `logger.js` — Логирование с appName
- `scheduler.js` — scheduleTask и stopTask
- `index.js` — Точка входа, запуск задач
- `package.json` — NPM проект и скрипты
- `README.md` — Документация

---

## Настройки

```js
settings: {
  intervalDefault: 10000, // интервал задачи в миллисекундах
  stopAfter: 50000        // время остановки задачи в миллисекундах
}
```

---

## Установка

```bash
git clone https://github.com/hikara33/internship-task.git
cd internship-task
npm install
```

---

## Запуск

```bash
npm start
```