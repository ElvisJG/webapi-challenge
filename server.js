const express = require('express');
const logger = require('morgan');

const actionRouter = require('./data/routes/actionRouter.js');
const projectRouter = require('./data/routes/projectRouter.js');

const server = express();
// Express.json is a method that returns a piece of middleware
const bodyParser = express.json();

// Routes
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

// Middleware
server.use(bodyParser);
server.use(logger('dev'));

server.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

module.exports = server;
