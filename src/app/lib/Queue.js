const Queue = require('bull');

const redisconfig = require('../../config/redis.js');
const RegistroImport = require('../jobs/RegistroImport.js');

const fila = new Queue(RegistroImport.key,redisconfig);

module.exports = {
fila
}
