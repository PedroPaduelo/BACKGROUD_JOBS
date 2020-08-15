const Queue = require('./app/lib/Queue.js');

const RegistroImport = require('./app/jobs/RegistroImport.js');

Queue.fila.process(RegistroImport.handle);