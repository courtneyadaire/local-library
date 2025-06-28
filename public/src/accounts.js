function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return [...accounts].sort((a, b) =>
    a.name.last.localeCompare(b.name.last)
  );
}

function getAccountFullNames(accounts) {
  return accounts.map((account) => `${account.name.first} ${account.name.last}`);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    return (
      total +
      book.borrows.filter((borrow) => borrow.id === account.id).length
    );
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter(
      (book) =>
        book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned)
    )
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

// Export functions
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
