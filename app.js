const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const movieRouter = require('./routes/movie');
app.use('/', indexRouter);
app.use('/movie', movieRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// error handler
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(80);
