const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_BOOK':
      return {
        ...state,
        books: {
          ...state.books,
          [action.payload._id]: { ...action.payload, commentcount: 0 },
        },
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
    case 'ADD_COMMENT':
      return {
        ...state,
        books: {
          ...state.books,
          [action.payload._id]: {
            ...state.books[action.payload._id],
            commentcount: action.payload.comments.length,
          },
        },
        selectedBook: action.payload,
      };
    case 'DELETE_ALL_BOOKS':
      return {
        ...state,
        books: {},
        selectedBook: null,
      };
    case 'DELETE_BOOK':
      const { [action.payload]: omittedProp, ...valuesToKeep } = state.books;

      return {
        ...state,
        books: { ...valuesToKeep },
        selectedBook: null,
      };
    default:
      return state;
  }
};

export default reducer;
