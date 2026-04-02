const createLogger = require('./logger');
const logger = createLogger();

logger("scheduler has been started");

const tasks = [];

function scheduleTask(name, interval, task) {
  logger(`Scheduling task: ${name} every ${interval}ms`);
  
  const id = setInterval(() => {
    task();
  }, interval);

  tasks.push({ name, id });
  return id;
}

function stopTask(id) {
  clearInterval(id);
  logger(`Stopped task with id: ${id}`);
}

module.exports = {
  scheduleTask,
  stopTask
};