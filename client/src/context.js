import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    books: [],
    dispatch: action => this.setState(state => reducer(state, action)),
  };

  componentDidMount = () => {
    axios
      .get('/api/books')
      .then(({ data }) => this.setState({ books: data }))
      .catch(err => console.log(err));
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
