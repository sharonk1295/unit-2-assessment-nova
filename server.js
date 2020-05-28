// ====== DEPENDENCIES ====== // 
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const show = console.log
const todosController = require('./controllers/todos.js');
const PORT = process.env.PORT || 3000;

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
app.listen(PORT, () => {
    show(`listening on port ${PORT}`);
})

