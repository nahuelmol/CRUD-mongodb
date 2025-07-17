const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const TaskSchema = new Schema({
    title:String,
    description:String,
    status:{
        type:Boolean,
        default:false
    },
    author:String,
    creation_date:String,
    deadline:String
});

const AuthorSchema = new Schema({
    name:String,
    ape:String,
    age:Number,
    stars:Number,
    country:String,
    status:{
        type:Boolean,
        default:false
    },
    portfolio:[{type:Schema.Types.ObjectId, ref:'Book collection'}]
    
});

const BookSchema = new Schema({
    title:String,
    year:String,
    is_pdf:Boolean,
    is_physic:Boolean,
    gender:String,
    priece:Number,
    status:{
        type:Boolean,
        default:false
    },
    randomProperty:String,
    myInvent:String
    
});

exports.Task = mongoose.model('Task',TaskSchema);
exports.Book = mongoose.model('Book collection', BookSchema);
exports.Author = mongoose.model('Author collection', AuthorSchema);

