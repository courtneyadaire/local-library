function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned === false).length;
}

function getMostCommonGenres(books) {
  const genreMap = {};
  books.forEach((book) => {
    genreMap[book.genre] = (genreMap[book.genre] || 0) + 1;
  });
  return Object.entries(genreMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => ({
      name: book.title,
      count: book.borrows.length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  return authors
    .map((author) => {
      const totalBorrows = books
        .filter((book) => book.authorId === author.id)
        .reduce((acc, book) => acc + book.borrows.length, 0);
      return {
        name: `${author.name.first} ${author.name.last}`,
        count: totalBorrows,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
