const express = require('express');
const router = express.Router();

const Task = require('../models/tasks');

router.get('/', async (req,res) =>{
    const taskis = await Task.find();
    res.render('index', {
        tasks:taskis
    });
});

router.get('/turn/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/edit/:id' ,async (req,res) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('edit' , {
        task
    });
});

router.post('/edit/:id' ,async (req,res) => {
    const {id} = req.params;
    await Task.update({_id:id},req.body);
    res.redirect('/');
})

router.post('/add', async (req,res) => {
    const taski = new Task(req.body);
    await taski.save();
    res.redirect('/');
});

router.get('/delete/:id', async (req,res) => {
    const {id} = req.params;
    await Task.deleteOne({_id:id});
    res.redirect('/');
})

router.get('/edit/:id', async (req,res) => {
    const {id} = req.params;
    
})

module.exports = router;



