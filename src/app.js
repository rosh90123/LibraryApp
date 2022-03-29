const express = require('express');
const app = express();
const nav = [
    {
        link: '/books', name: 'Books'
    },
    {

        link: '/authors', name: 'Authors'
    },
    {
        link: '/signup', name: 'Signup'
    },
    {
        link: '/login', name: 'Login'
    },
    {
        link: '/admin', name: 'AddbOOK'
    }
];

const booksRouter = require('./routes/bookRoutes')(nav)

const authorsRouter = require('./routes/authorRoutes')(nav)
const loginRouter = require('./routes/loginRoutes')(nav)
const signupRouter = require('./routes/signupRoutes')(nav)
const adminRouter = require('./routes/adminRoutes')(nav)

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/admin', adminRouter);

app.get('/', function (req, res) {

    res.render("index",
        {
            nav,
            title: 'Library'
        });
});

app.listen(5000);
