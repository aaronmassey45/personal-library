import axios from 'axios';

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
