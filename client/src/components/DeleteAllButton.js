import React from 'react';
import mapDispatchToProps from '../HOC/mapDispatchToProps';

import { deleteAllBooks } from '../actions';

const DeleteAllButton = ({ dispatch }) => (
  <div className="col s12 mb-2">
    <button
      className="waves-effect waves-light btn-large red accent-4"
      onClick={() => dispatch(deleteAllBooks())}
    >
      <i className="material-icons right">warning</i>
      DELETE ALL BOOKS
    </button>
  </div>
);

export default mapDispatchToProps(DeleteAllButton);
