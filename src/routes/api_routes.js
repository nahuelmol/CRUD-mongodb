const { Author, Book } = require('../models/collections');
const express = require('express');
const router = express.Router();

//get methods for finding specific authors or books

router.get('author/:authorId', (req,res) => {
        Author.findById(req.params.Id).then((result) => {
            message = 'Author found'
            response = {
                success:true,
                message:message
            }
            res.status(200).json(message);
        })
});

router.get('book/:bookId', (req,res) => {
        Book.findById(req.params.Id).then((result) => {
            response = {
                success: true,
                message:'Book found',
                result: result
            }
            res.status(200).json(response);
        })
});

router.get('book/:author/:genre', (req, res) => {
    //filters are applied following the order in the path, from left to right
    accum_results = []
    message = ''
    req.params.forEach(param => 
    Book.find(param).then(result => {
        if(Array.isArray(result)){
            if(result.size > 1){
                message = `${result.size} results`;
            }
        }
        result.forEach(each => {
            if (!accum_results.includes(each)){
                accum_results.push(result);
            }
        })
    })
    )
    response = {
        success: true,
        message,
        result:accums_results
    }
    res.status(200).json(response)
})

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
            response = {
                success:true,
                message:'Authors asked',
                authors
            }
            res.status(200).json(response);
        } catch (err) {
            response = {
                success:false,
                message:'Authors cannot be asked',
                error:'Internal Server Error'
            }
            res.status(500).json(response);
        }
});

//post methods 
router.post('/addbook', async (req, res) => {
    try {
        const BOOK = new Book(req.body);
        await BOOK.save();
        response = {
            success:true,
            message:`${BOOK.name} added`,
        }
        res.status(200).json(response);
    } catch (err) {
        response = {
            success:false,
            message:`Book cannot be added`,
            error:'Internal Server Error'
        }
        res.status(500).json(response);
    }
})

router.post('/addauthor', async (req, res) => {
    try {
        const AUTHOR = new Author(req.body);
        await AUTHOR.save();
        response = {
            success:true,
            message:`Author ${AUTHOR.name}`
        }
        res.status(201).json(response);
    } catch (err) {
        response = {
            success:false,
            message:`Author cannot be added`,
            error:'Internal Server Error'
        }
        res.status(500).json(response);
    }
})

module.exports = router;
