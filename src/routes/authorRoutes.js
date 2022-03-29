const express = require('express');
const authorRouter = express.Router();
function router(nav) {

    var authors = [

        {
            author: 'J K Rowling',
            img: "jk.jpg",
            id: 'J.K. Rowling is the British author who created the popular and critically acclaimed Harry Potter series (seven books published between 1997 and 2007), about a lonely orphan who discovers that he is actually a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry'



        },

        {
            author: 'Leo Tolstoy',
            img: "leo.jpg",
            id: 'Leo tolstoy born to an aristocratic Russian family in 1828, Tolstoys notable works include the novels War and Peace (1869) and Anna Karenina (1878), often cited as pinnacles of realist fiction.'

        },

        {
            author: 'APJ Abdul Kalam',
            img: "apj.jpg",
            id: 'Abdul Kalam, in full Avul Pakir Jainulabdeen Abdul Kalam, (born October 15, 1931, Rameswaram, India—died July 27, 2015, Shillong), Indian scientist and politician who played a leading role in the development of Indias missile and nuclear weapons programs. He was president of India from 2002 to 2007.'


        },

        {

            author: 'Chetan Bhagat',
            img: "chtn.jpg",
            id: 'Chetan Bhagat (born 22 April 1974) is an Indian author and columnist. He was included in Time magazines list of Worlds 100 Most Influential People in 2010. Bhagat graduated in mechanical engineering at IIT Delhi and completed a PGP at IIM Ahmedabad. '
        },

        {

            author: 'M T Vasudevan Nair',
            img: "mtvasu.jpg",
            id: 'Madath Thekkepaattu Vasudevan Nair (born 1933), popularly known as MT, is an Indian author, screenplay writer and film director. He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature.'

        }

    ]


    authorRouter.get('/', function (req, res) {
        res.render(
            "authors",
            {
                nav,

                title: 'Authors',
                authors
            }
        );
    });

    authorRouter.get('/:id', function (req, res) {
        const id = req.params.id
        res.render('author', {
            nav: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/signup', name: 'Signup' }, { link: '/login', name: 'Login' }],
            title: 'Authors',
            author: authors[id]
        });
    });
    return authorRouter;
}



module.exports = router;
