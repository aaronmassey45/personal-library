import axios from 'axios';

export const selectBook = async id => {
  try {
    const res = await axios.get(`/api/books/${id}`);
    return { type: 'SELECT_BOOK', payload: res.data };
  } catch (error) {
    console.log(error);
  }
};

export const addNewBook = async title => {
  const res = await axios.post('/api/books', { title });
  return { type: 'ADD_NEW_BOOK', payload: res.data };
};

export const getBooks = async () => {
  try {
    const res = await axios.get('/api/books');
    return { type: 'GET_BOOKS', payload: res.data };
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async (comment, id) => {
  try {
    const res = await axios.post(`/api/books/${id}`, { comment });
    return { type: 'SELECT_BOOK', payload: res.data };
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllBooks = async () => {
  try {
    await axios.delete('/api/books');
    return { type: 'DELETE_ALL_BOOKS' };
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async id => {
  try {
    await axios.delete(`/api/books/${id}`);
    return { type: 'DELETE_BOOK', payload: id };
  } catch (error) {
    console.log(error);
  }
};
