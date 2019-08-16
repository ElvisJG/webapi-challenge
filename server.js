const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');

const actionRouter = require('./data/routes/actionRouter.js');
const projectRouter = require('./data/routes/projectRouter.js');

const server = express();
// Express.json is a method that returns a piece of middleware
const bodyParser = express.json();

// Middleware
server.use(bodyParser);
server.use(logger('dev'));
server.use(helmet());

// Routes
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>WEB API Sprint Challenge</h2>
    `);
});

module.exports = server;
