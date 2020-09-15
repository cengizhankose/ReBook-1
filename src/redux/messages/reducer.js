import {
  GET_ROOM_START,
  GET_ROOM_SUCCESS,
  GET_ROOM_FAILD,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILD,
  ADD_MESSAGES_START,
  ADD_MESSAGES_SUCCESS,
  ADD_MESSAGES_FAILD,
  ADD_ROOM_FAILD,
  ADD_ROOM_START,
  ADD_ROOM_SUCCESS,
  GET_ALL_USER_START,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILD,
} from './types';

const initialState = {
  allMessages: [],
  chatRooms: [],
  chatRoomsDownloading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOM_START:
      return {
        ...state,
        chatRoomsDownloading: true,
      };
    case GET_ROOM_SUCCESS:
      return {
        ...state,
        chatRoomsDownloading: false,
        chatRooms: action.payload,
      };
    case GET_ROOM_FAILD:
      return {
        ...state,
        chatRoomsDownloading: false,
      };
    case ADD_ROOM_SUCCESS:
      return {
        ...state,
        chatRoomsDownloading: false,
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        allMessages: action.payload,
      };
    default:
      return state;
  }
};
