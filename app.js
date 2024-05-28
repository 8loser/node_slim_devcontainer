const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((_, res) => res.status(404).json({
    success: false,
    message: 'page not found',
}));

module.exports = app;
