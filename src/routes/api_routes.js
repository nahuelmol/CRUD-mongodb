const { Author, Book } = require('../models/collections');
const express = require('express');
const router = express.Router();

//get methods for finding specific authors or books

router.get('author/:authorId', (req,res) => {
        Author.findById(req.params.Id).then((result) => {
            console.log(result);
            res.status(200).json({ success: true, message: 'Book added successfully', result });
        })
});

router.get('book/:bookId', (req,res) => {
        Book.findById(req.params.Id).then((result) => {
            console.log(result);
            res.status(200).json({ success: true, message: 'Book added successfully', result });
        })
});

router.get('/books/', async (req,res) => {

        try {
            books = await Book.find({}).exec()
            res.status(201).json({ success: true, message: 'Book added successfully', books });
        } catch (err) {
            console.error('Error adding book:', err);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }

});

router.get('/authors/', async (req,res) => {

        try {
            authors = await Author.find({}).exec()
            res.status(200).json({ success: true, message: 'Book added successfully', authors });
        } catch (err) {
            console.error('Error adding book:', err);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
});

//post methods 

router.post('/addbook', async (req, res) => {

    try {
        console.log("req.body -> ", req.body)
        const book = new Book(req.body);
        await book.save();
        res.status(200).json({ success: true, message: 'Book added successfully', book });
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
})

router.post('/addauthor', async (req, res) => {

    try {
        console.log("req.body -> ", req.body)
        const author = new Author(req.body);
        await author.save();
        res.status(201).json({ success: true, message: 'Author added successfully', author });
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
})

module.exports = router;
