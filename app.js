const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const swaggerOption = require('./config/swaggerConfig');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 載入 swagger
expressJSDocSwagger(app)(swaggerOption);

/**
 * 設定 router
 */
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((_, res) => res.status(404).json({
    success: false,
    message: 'page not found',
}));

module.exports = app;
