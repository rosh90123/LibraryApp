const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    title: String,
    author: String,
    genre: String,
    image: String

});

 var Bookdata =  mongoose.model('bookdata', BookSchema);


 module.exports = Bookdata;