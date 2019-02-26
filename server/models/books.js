// Name Ishratben R. Vahora
// Student Id 300986257
// Author Ishrat Vahora
// Application Midterm exam
let mongoose = require('mongoose');

// create a model class
let booksSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', booksSchema);
