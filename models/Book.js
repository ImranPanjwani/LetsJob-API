const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true},
    authorName: {type:String, required: true},
    category: {type: String, enum: ['SELF-HELP', 'HORROR', 'THRILLER', 'FICTION']},
    available: {type: Boolean, default: true},
    price: {type: Number, required: true}
    }, 
    {timestamps: true}
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book; 
