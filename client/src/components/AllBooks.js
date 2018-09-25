import React from 'react';
import axios from 'axios';
import AddNewBook from './AddNewBook';

const AllBooks = ({ values: { books, dispatch } }) => {
  const selectBook = async id => {
    const res = await axios.get(`/api/books/${id}`);
    dispatch({ type: 'SELECT_BOOK', payload: res.data });
  };

  return (
    <div className="col s12 m6">
      <ul className="collection with-header">
        <li className="collection-header">
          <AddNewBook />
        </li>
        {books.map(book => (
          <li
            key={book._id}
            className="collection-item"
            onClick={() => selectBook(book._id)}
          >
            {book.title}
            <span className="right">{book.commentcount} comments</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBooks;
