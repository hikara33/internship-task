const createLogger = require('./logger');
const logger = createLogger();

logger("scheduler has been started");

const tasks = new Map();

function scheduleTask(name, interval, task) {
  logger(`scheduling task: ${name} every ${interval}ms`);
  
  const id = setInterval(() => {
    try {
      task();
    } catch (err) {
      logger(`error in task "${name}": ${err.message}`);
    }
  }, interval);

  tasks.set(name, id);
  return id;
}

function stopTask(name) {
  const id = tasks.get(name);

  if (!id) {
    logger(`task "${name}" not found`);
    return;
  }

  clearInterval(id);
  tasks.delete(name);

  logger(`task "${name}" stopped`);
}

module.exports = {
  scheduleTask,
  stopTask
};