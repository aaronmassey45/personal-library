import React from 'react';
import mapDispatchToProps from '../HOC/mapDispatchToProps';
import { selectBook } from '../actions';

const Book = ({ _id, title, commentcount, dispatch }) => {
  return (
    <li className="collection-item" onClick={() => dispatch(selectBook(_id))}>
      {title}
      <span className="right">{commentcount} comments</span>
    </li>
  );
};

export default mapDispatchToProps(Book);
