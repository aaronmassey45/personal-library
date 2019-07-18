import React, { Component } from 'react';

import reducer from './reducer';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    books: [],
    selectedBook: null,
    dispatch: async action => {
      const actionToPass =
        Promise.resolve(action) === action ? await action : action;
      return this.setState(state => reducer(state, actionToPass));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
