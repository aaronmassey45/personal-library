import React from 'react';

import AddNewBook from './AddNewBook';
import DeleteAllButton from './DeleteAllButton';
import Book from './Book';

const AllBooks = ({ books }) => (
  <div className="col s12 m6">
    <ul className="collection with-header">
      <li className="collection-header">
        <DeleteAllButton />
        <AddNewBook />
      </li>
      {Object.values(books).map(book => (
        <Book key={book._id} {...book} />
      ))}
    </ul>
  </div>
);

export default AllBooks;
