const express = require('express');
const app = express();

const questionsRouter = require('./lib/questions');

const port = process.env.port || 3000;

app.get('/hello', (req, res) => {
  res.json({'hello': 'world'});
});

app.use('/api', questionsRouter);

const server = app.listen(port, () => {
  console.log('Listening on http://localhost:%s', port);
});
module.exports = server;
