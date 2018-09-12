const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const articleRouter = require('./routes/article');

const app = express();
//Connect to db
mongoose.connect('mongodb://localhost/nodego', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/article', articleRouter);

app.use(function(err, req, res, next){
   res.status(422).send({error: err._message});
});

module.exports = app;
