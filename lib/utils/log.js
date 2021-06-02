const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";


exports.logger = new Proxy(logger, {
    get: function(target, property, receiver) {
        if (property === 'info') {

        }
        if (property === 'error') {

        }
        if (property === 'warning') {

        }
        return target[property]
    }
})