
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const gracefulShutdown = require('http-graceful-shutdown');
const puppeteerClient = require('./puppeteerClient');
const config = require('../config/config');
const api = require('../api/service');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.json');

const start = async (options) => {

    if (!options.port) {
      throw new Error('The server must be started with an available port');
    }

    await puppeteerClient.open();
    console.debug("Chrome Puppeteer was launched..");
  
    // init an express app, and add some middlewares
    const app = express();

    app.use(express.json());

    swaggerDocument.host = process.env.NODE_ENV === 'local' ? `${config.serverSettings.host}:${config.serverSettings.port}` : config.serverSettings.host;
    app.use('/pdf/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    
    app.use(helmet());
    app.use((err, req, res, next) => {
      res.status(500).send('Something went wrong!');
      throw new Error('Something went wrong!, err:' + err);
    });
    
    // add our APIs to the express app
    api(app, options);

    const server = http.createServer(app);

    server.listen(options.port, function () {
      console.info(`Server started on port ${options.port}.`);
    });

    gracefulShutdown(server, {
      onShutdown: () => {
          console.info('Server is shutting down...');
          puppeteerClient.close();
      }
    });

    return server;
}

module.exports = Object.assign({}, {start})