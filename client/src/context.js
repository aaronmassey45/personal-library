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
    case 'SELECT_BOOK':
      return {
        ...state,
        selectedBook: action.payload,
      };
    default:
      return state;
  }
};

export const selectBook = async (dispatch, id) => {
  const res = await axios.get(`/api/books/${id}`);
  return dispatch({ type: 'SELECT_BOOK', payload: res.data });
};

export class Provider extends Component {
  state = {
    books: [],
    selectedBook: null,
    getBooks: () => {
      axios
        .get('/api/books')
        .then(({ data }) => this.setState({ books: data }))
        .catch(err => console.log(err));
    },
    dispatch: action => this.setState(state => reducer(state, action)),
  };

  componentDidMount = () => {
    this.state.getBooks();
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
