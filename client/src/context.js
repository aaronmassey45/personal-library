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
  try {
    const res = await axios.get(`/api/books/${id}`);
    return dispatch({ type: 'SELECT_BOOK', payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const getBooks = async dispatch => {
  try {
    const res = await axios.get('/api/books');
    return dispatch({ type: 'GET_BOOKS', payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async (dispatch, comment, id) => {
  try {
    const res = await axios.post(`/api/books/${id}`, { comment });
    return dispatch({ type: 'SELECT_BOOK', payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export class Provider extends Component {
  state = {
    books: [],
    selectedBook: null,
    dispatch: action => this.setState(state => reducer(state, action)),
  };

  componentDidMount = () => {
    getBooks(this.state.dispatch);
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
