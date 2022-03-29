const express = require('express');
const booksRouter = express.Router();
function router(nav) {
    var books = [
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantasy',
            img: "harry.jpg"

        },
        {
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            genre: 'Novel',
            img: "war.jpg"

        },

        {
            title: 'Wings of Fire',
            author: 'APJ Abdul Kalam',
            genre: 'Autobiography',
            img: "wings.jpg"


        },
        {
            title: 'Five Point Someone',
            author: 'Chetan Bhagat',
            genre: 'Novel',
            img: "five.jpg"

        },

        {
            title: 'Naalukettu',
            author: 'M T Vasudevan Nair',
            genre: 'Novel',
            img: "nalu.jpg"

        }

    ]


    booksRouter.get('/', function (req, res) {
        res.render("books", {
            nav,
            title: 'Library',
            books
        });
    });
    booksRouter.get('/:id', function (req, res) {
        const id = req.params.id
        res.render('book', {
            nav,
            title: 'Library',
            book: books[id]
        });
    });
    return booksRouter;
}
module.exports = router;
