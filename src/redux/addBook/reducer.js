import {
  ADD_BOOK,
  ADD_BOOK_FAILD,
  ADD_BOOK_SUCCESS,
  ADD_ONE_BOOK,
  GET_BOOK,
  GET_BOOK_FAILD,
  GET_BOOK_SUCCESS,
  GET_MY_BOOK,
  GET_POPULER_BOOK,
  GET_POPULER_BOOK_FAILD,
  GET_POPULER_BOOK_SUCCESS,
} from './types';

const initialState = {
  bookUploading: false,
  addedBook: null,
  books: [],
  bookDownloading: true,
  myBooks: [],
  popularBooks: [],
  popularBooksLoading: false,
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
    case GET_POPULER_BOOK:
      return {
        ...state,
        popularBooksLoading: true,
      };
    case GET_POPULER_BOOK_SUCCESS:
      return {
        ...state,
        popularBooksLoading: false,
        popularBooks: action.books,
      };
    case GET_POPULER_BOOK_FAILD:
      return {
        ...state,
        popularBooksLoading: false,
      };
    default:
      return state;
  }
};
