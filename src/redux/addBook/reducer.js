import {
  ADD_BOOK,
  ADD_BOOK_FAILD,
  ADD_BOOK_SUCCESS,
  ADD_ONE_BOOK,
} from './types';

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
      };
    case ADD_BOOK_FAILD:
      return {
        ...state,
        bookUploading: false,
      };
    case ADD_ONE_BOOK:
      return {
        ...state,
        addedBook: action.book,
        bookUploading: true,
      };
    default:
      return state;
  }
};
