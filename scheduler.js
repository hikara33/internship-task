const createLogger = require('./logger');
const logger = createLogger();

console.log("scheduler has been started");

const tasks = [];

function scheduleTask(name, interval, task) {
  logger(`Scheduling task: ${name} every ${interval}ms`);
  const id = setInterval(() => {
    logger(`Task "${name}" is running`);
    task();
  }, interval);
  tasks.push({ name, id });
  return id;
}

function stopInterval(id) {
  clearInterval(id);
  logger(`Stopped task with id: ${id}`);
}

module.exports = {
  scheduleTask,
  stopInterval
};