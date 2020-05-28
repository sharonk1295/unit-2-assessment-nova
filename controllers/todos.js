const express = require('express');
const todoController = express.Router();
// ====== IMPORT DATA ====== //
const todos = require('../models/todos.js');


// Index 
todoController.get('/', (req, res) => {
    // res.send('to do list')
    const props = {
        todos
    }
    res.render('Index', props)
})

// Create
todoController.post('/', (req,res) => {
    console.log(req.body)
    console.log(todos)
    todos.push(req.body)
    res.redirect('/');
})


// DESTROY
todoController.delete('/', (req, res) => {
    todos.splice(req.params.index, 1);
    res.redirect('/')
})


module.exports = todoController;