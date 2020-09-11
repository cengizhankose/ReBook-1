import {ADD_BOOK, ADD_BOOK_FAILD, ADD_BOOK_SUCCESS} from './types';

const initialState = {
  bookUploading: false,
  addedBook: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookUploading: true,
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        bookUploading: false,
        addedBook: action.book,
      };
    case ADD_BOOK_FAILD:
      return {
        ...state,
        bookUploading: false,
      };
    default:
      return state;
  }
};
