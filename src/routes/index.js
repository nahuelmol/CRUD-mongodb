const express = require('express');
const router = express.Router();

const { Task } = require('../models/collections');

//clicking on update then
router.post('/edit/:id' ,async (req,res) => {
    const {id} = req.params;
    await Task.update({_id:id},req.body);
    res.redirect('/');
})

//clicking on add
router.post('/add', async (req,res) => {
    const taski = new Task(req.body);
    await taski.save();
    res.redirect('/');
});

//get methods (CRuD)

router.get('/edit/:id' ,async (req,res) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('edit' , {
        task
    });
});

router.get('/delete/:id', async (req,res) => {
    const {id} = req.params;
    await Task.deleteOne({_id:id});
    res.redirect('/');
})

router.get('/turn/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

//main page
router.get('/', async (req,res) =>{
    const taskis = await Task.find();
    res.render('index', {
        tasks:taskis
    });
});



module.exports = router;



