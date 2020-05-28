// ====== DEPENDENCIES ====== // 
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const show = console.log
const port = 3000;
const todosController = require('./controllers/todos.js');

// ====== IMPORT DATA ====== //
const todos = require('./models/todos.js');

// ====== MIDDLEWARE ====== //
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ====== CONTROLLERS ====== //
app.use('/', todosController);


// ====== LISTENER ====== //
app.listen(port, () => {
    show(`listening on port ${port}`);
})

