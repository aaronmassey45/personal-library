const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_BOOK':
      return {
        ...state,
        books: [...state.books, { ...action.payload, commentcount: 0 }],
      };
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
    case 'DELETE_ALL_BOOKS':
      return {
        ...state,
        books: [],
        selectedBook: null,
      };
    case 'DELETE_BOOK':
      return {
        ...state,
        books: [...state.books.filter(book => book._id !== action.payload)],
        selectedBook: null,
      };
    default:
      return state;
  }
};

export default reducer;
