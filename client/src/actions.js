import axios from 'axios';

export const selectBook = async id => {
  try {
    const res = await axios.get(`/api/books/${id}`);
    return { type: 'SELECT_BOOK', payload: res.data };
  } catch (error) {
    console.log(error);
  }
};

export const getBooks = async () => {
  try {
    const res = await axios.get('/api/books');
    return { type: 'GET_BOOKS', payload: res.data };
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

export const deleteAllBooks = async dispatch => {
  try {
    await axios.delete('/api/books');
    return dispatch({ type: 'DELETE_ALL_BOOKS' });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (dispatch, id) => {
  try {
    await axios.delete(`/api/books/${id}`);
    return dispatch({ type: 'DELETE_BOOK' });
  } catch (error) {
    console.log(error);
  }
};
