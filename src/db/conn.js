const mongoose = require('mongoose');

const options 	= {
    useUnifiedTopology:true,
    useNewUrlParser:true
};

mongoose.connect('mongodb://localhost/crud-mongo',options)
	.then(db => console.log(`db conectada -> ${db}`))
	.catch(err => console.log(`se presento el siguiente error -> ${err}`));

