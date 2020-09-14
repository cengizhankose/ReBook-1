import {
  ADD_BOOK,
  ADD_BOOK_FAILD,
  ADD_BOOK_SUCCESS,
  ADD_ONE_BOOK,
  GET_BOOK,
  GET_BOOK_FAILD,
  GET_BOOK_SUCCESS,
  GET_MY_BOOK,
} from './types';

const initialState = {
  bookUploading: false,
  addedBook: null,
  books: [],
  bookDownloading: true,
  myBooks: [],
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
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        books: action.payload,
        bookDownloading: false,
      };
    case GET_BOOK:
      return {
        ...state,
        bookDownloading: true,
      };
    case GET_BOOK_FAILD:
      return {
        ...state,
        bookDownloading: false,
      };
    case GET_MY_BOOK:
      let myBooks = state.books.filter(
        (book) => book.seller_id === action.userId,
      );
      return {
        ...state,
        myBooks,
      };
    default:
      return state;
  }
};
