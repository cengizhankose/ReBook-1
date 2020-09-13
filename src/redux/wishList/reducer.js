import {
  ADD_FAVORI,
  ADD_FAVORI_SUCCESS,
  ADD_FAVORI_FAILD,
  GET_FAVORI,
  GET_FAVORI_SUCCESS,
  GET_FAVORI_FAILD,
} from './types';

const initialState = {
  favoriLoading: false,
  getFavoriLoading: false,
  favorites: [],
  isFavori: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORI:
      return {
        ...state,
        favoriLoading: true,
      };
    case ADD_FAVORI_SUCCESS:
      return {
        ...state,
        favoriLoading: false,
        isFavori: !state.isFavori,
      };
    case ADD_FAVORI_FAILD:
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
