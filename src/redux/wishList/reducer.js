import {
  ADD_FAVORI,
  ADD_FAVORI_SUCCESS,
  ADD_FAVORI_FAILD,
  GET_FAVORI,
  GET_FAVORI_SUCCESS,
  GET_FAVORI_FAILD,
  REMOVE_FAVORI,
  REMOVE_FAVORI_SUCCESS,
  REMOVE_FAVORI_FAILD,
} from './types';

const initialState = {
  favoriLoading: false,
  getFavoriLoading: false,
  favorites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORI:
      return {
        ...state,
        favoriLoading: true,
      };
    case ADD_FAVORI_SUCCESS:
      let newList = [...state.favorites, action.payload];
      return {
        ...state,
        favoriLoading: false,
        favorites: newList,
      };
    case ADD_FAVORI_FAILD:
      return {
        ...state,
        favoriLoading: false,
      };

    case REMOVE_FAVORI:
      return {
        ...state,
        favoriLoading: true,
      };
    case REMOVE_FAVORI_SUCCESS:
      const removeList = state.favorites.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        favoriLoading: false,
        favorites: removeList,
      };
    case REMOVE_FAVORI_FAILD:
      return {
        ...state,
        favoriLoading: false,
      };

    case GET_FAVORI:
      return {
        ...state,
        getFavoriLoading: true,
      };
    case GET_FAVORI_SUCCESS:
      return {
        ...state,
        getFavoriLoading: false,
        favorites: action.payload,
      };
    case GET_FAVORI_FAILD:
      return {
        ...state,
        getFavoriLoading: false,
      };
    default:
      return state;
  }
};
