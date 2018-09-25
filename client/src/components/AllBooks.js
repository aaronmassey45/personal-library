import React from 'react';

const AllBooks = ({ books }) => (
  <ul className="collection with-header">
    <li className="collection-header">
      <h4>Your Books</h4>
    </li>
    {books.map(book => (
      <li key={book._id} className="collection-item">
        {book.title}
      </li>
    ))}
  </ul>
);

export default AllBooks;
