const { Author, Book } = require('../models/index');

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

module.exports = router;
