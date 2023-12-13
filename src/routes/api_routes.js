const { Author, Book } = require('../models/collections');
const express = require('express');
const router = express.Router();

router.get('author/:authorId', (req,res) => {
        Author.findById(req.params.Id).then((result) => {
            console.log(result);
            res.status(200).send(result);
        })
});

router.get('book/:bookId', (req,res) => {
        Book.findById(req.params.Id).then((result) => {
            console.log(result);
            res.status(200).send(result);
        })
});

router.get('books/', (req,res) => {
        if (req.status == 200){
            const books = Book.find({}).exec()
            books && res.render('book-list',books)
        };
});

router.get('authors/', (req,res) => {
        if (req.status == 200){
            const authors =  Author.find({}).exec()
            authors && res.render('author-list',authors)
        };
});

module.exports = router;
