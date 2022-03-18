const express = require('express');
const app = express();
const booksRouter = require('./routes/bookRoutes');

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);

app.get('/', function (req, res) {
    res.render("index",
        {
            nav: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }],
            title: 'Library'
        });
});


app.listen(5000);
