const Book = require('../models/Book');

/**
 * GET /books
 * Get list of all the books
 */
exports.getBooks = (req, res) => {
  Book.find({})
    .then((results) => {
      res.send(results);
    })
    .catch(err => {
      res.send(err);
    });
};
