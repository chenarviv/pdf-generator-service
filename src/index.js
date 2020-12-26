
const server = require('./server/server');
const config = require('./config/config');
const serviceVersion = require('../package.json').version;

// starting the server
console.info(`--- Pdf Generator Service ${serviceVersion} ---`);

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err);
})

server.start({
        port: config.serverSettings.port,
      });


