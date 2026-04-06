const { settings } = require('./config');
const { scheduleTask, stopTask } = require('./scheduler');

const createLogger = require('./logger');
const logger = createLogger();

const TASK_NAME = "logRunningMessage";

const taskId = scheduleTask(TASK_NAME, settings.intervalDefault, () => {
  logger("running");
});

setTimeout(() => {
  stopTask(TASK_NAME);
}, settings.stopAfter);