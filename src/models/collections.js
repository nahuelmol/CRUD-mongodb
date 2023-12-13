const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const TaskSchema = new Schema({
    title:String,
    description:String,
    status:{
        type:Boolean,
        default:false
    }
});

const authors = new Schema({
    name:String,
    ape:String,
    status:{
        type:Boolean,
        default:false
    },
    portfolio:[{type:Schema.Types.ObjectId, ref:'Book collection'}]
    
});

const books = new Schema({
    title:String,
    year:String,
    status:{
        type:Boolean,
        default:false
    },
    randomProperty:String,
    myInvent:String
    
});

exports.Task = mongoose.model('Task',TaskSchema);
exports.Book = mongoose.model('Book collection',books);
exports.Author = mongoose.model('Author collection',authors);
