const config = require('./config');

function createLogger() {
  return function log(message) {
    const date = new Date().toISOString();
    console.log(`[${date}] [${config.appName}] ${message}`);
  };
}

module.exports = createLogger;