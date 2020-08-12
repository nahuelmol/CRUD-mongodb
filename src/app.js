const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const hostname = '192.168.0.101';
const options = {
    useUnifiedTopology:true,
    useNewUrlParser:true
};


mongoose.connect('mongodb://localhost/crud-mongo',options)
.then(db => console.log("db conectada"))
.catch(err => console.log("hubo un error"+err));

const indexRoutes = require('./routes/index');

app.use('/static', express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/',indexRoutes);

app.listen(app.get('port'),hostname, ()=> {
    console.log(`Server on port: ${app.get('port')}`);
});

module.exports = app;