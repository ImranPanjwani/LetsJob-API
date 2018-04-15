const Book = require('../models/Book');
const chalk = require('chalk');

module.exports = () => {
  const books = [
    {
      name: 'Don Quixote',
      authorName: 'Miguel de Cervantes',
      category: 'SELF-HELP',
      price: 250
    },
    {
      name: 'In Search of Lost Time',
      authorName: 'Marcel Proust',
      category: 'HORROR',
      price: 300
    },
    {
      name: 'Ulysses',
      authorName: 'James Joyce',
      category: 'THRILLER',
      price: 400
    },
    {
      name: 'The Odyssey',
      authorName: 'Homer',
      category: 'FICTION',
      price: 100
    },
    {
      name: 'War and Peace',
      authorName: 'Leo Tolstoy',
      category: 'FICTION',
      price: 600
    }
  ];
  Book.find({}).then(totalResults => {
    if (totalResults.length === 0) {
      Book.create(books, (err, results) => {
        if (err) {
          console.log(err);
          console.log('%s Error while seeding data.', chalk.red('\u2718'));
          return;
        }
        console.log(
          '%s Data seeding completed. Seeded %d books.',
          chalk.green('\u2713'),
          results.length
        );
      });
      return;  
    }
    console.log(
      '%s No seeding required. DB contains %d books.',
      chalk.green('\u2713'),
      totalResults.length
    );
  });
};
