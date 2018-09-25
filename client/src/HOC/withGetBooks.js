import React, { Component } from 'react';

import { Consumer } from '../context';

const withGetBooks = WrappededComponent => {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {({ getBooks }) => (
            <WrappededComponent getBooks={getBooks} {...this.props} />
          )}
        </Consumer>
      );
    }
  };
};

export default withGetBooks;
