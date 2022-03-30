const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav) {
    /*var books = [
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

    ]*/


    booksRouter.get('/', function (req, res) {
        Bookdata.find()
            .then(function (books) {
                res.render("books", {
                    nav,
                    title: 'Library',
                    books
                });
            });


    });


    booksRouter.get('/:id', function (req, res) {
        const id = req.params.id
        Bookdata.findOne({ _id: id})
            .then(function (book) {
                res.render('book', {
                    nav,
                    title: 'Library',
                    book
                });
            });
    });

    return booksRouter;
}
module.exports = router;
