const config = require('./config');
const { scheduleTask } = require('./scheduler');

const createLogger = require('./logger');
const logger = createLogger();

const taskId = scheduleTask("logRunningMessage", config.settings.intervalDefault, () => {
  logger("running");
});