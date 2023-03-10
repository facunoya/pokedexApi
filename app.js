const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mainRoutes = require('./routes/mainRoutes');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(mainRoutes);

app.listen(3009, () => {
    console.log('Iniciando Pokedex 3009')
});