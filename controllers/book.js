/**
 * GET /books
 * Get list of all the books
 */
exports.getBooks = (req, res) => {
    res.json([
        {name: 'First Book', author: 'First author'},
        {name: 'Second Book', author: 'Second author'},
        {name: 'Third Book', author: 'Third author'},
        {name: 'Fourth Book', author: 'Fourth author'},
        {name: 'Fifth Book', author: 'Fifth author'}
    ]);
}
