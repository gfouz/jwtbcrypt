const mongoose = require('mongoose');
const users = require('./routes/users');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
 
mongoose.connect('mongodb://localhost/NodeCourse')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));    
 
app.use(express.json());
app.use('/users', users);
 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));