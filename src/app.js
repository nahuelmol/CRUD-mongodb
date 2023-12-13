const express 	= require('express');
const path 		= require('path');
const morgan 	= require('morgan');

require('./db/conn.js')

const indexRoutes 	= require('./routes/index');
const apiRoutes   	= require('./routes/api_routes');
const bodyParser 	= require('body-parser');

const app = express();

const hostname 	= '192.168.0.101';


app.use('/static', express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/',     indexRoutes);
app.use('/api/', apiRoutes);


module.exports = app;

