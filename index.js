const { settings } = require('./config');
const { scheduleTask, stopTask } = require('./scheduler');

const createLogger = require('./logger');
const logger = createLogger();

const taskId = scheduleTask("logRunningMessage", settings.intervalDefault, () => {
  logger("running");
});

setTimeout(() => {
  stopTask(taskId);
}, settings.stopAfter);