const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

// mongoose will pluralize the model name as Books
module.exports = mongoose.model('Book',bookSchema);