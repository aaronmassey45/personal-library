import React from 'react';
import AddNewBook from './AddNewBook';

const AllBooks = ({ values: { books, getBooks } }) => (
  <ul className="collection with-header">
    <li className="collection-header">
      <AddNewBook getBooks={getBooks} />
    </li>
    {books.map(book => (
      <li key={book._id} className="collection-item">
        {book.title}
      </li>
    ))}
  </ul>
);

export default AllBooks;
