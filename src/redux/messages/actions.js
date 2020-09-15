import React from 'react';
import {
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILD,
  ADD_MESSAGES_START,
  ADD_MESSAGES_SUCCESS,
  ADD_MESSAGES_FAILD,
  GET_ROOM_START,
  GET_ROOM_SUCCESS,
  GET_ROOM_FAILD,
  ADD_ROOM_FAILD,
  ADD_ROOM_START,
  ADD_ROOM_SUCCESS,
  GET_ALL_USER_START,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILD,
} from './types';
// yanlış yok bence şuan derleme hatasıdır evet
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/core';

// Sabit değişkenler
export const startRoom = (path, params) => {
  return (dispatch) => {
    dispatch({type: ADD_ROOM_START});
    firestore()
      .collection('Messages')
      .doc(path)
      .set(params)
      .then((data) => {
        // let messageId = data.id
        dispatch({type: ADD_ROOM_SUCCESS, payload: path});
      })
      .catch(() => {
        dispatch({type: ADD_ROOM_FAILD});
      });
  };
};

export const getRooms = (uid) => {
  return (dispatch) => {
    dispatch({type: GET_ROOM_START});
    firestore()
      .collection('Messages')
      .onSnapshot((room) => {
        let data = [];
        room.forEach((doc) => {
          if (doc.id.includes(uid)) {
            data.push(doc.data());
          }
        });
        dispatch({type: GET_ROOM_SUCCESS, payload: data});
      });
  };
};

export const getMessages = (path, uid) => {
  return (dispatch) => {
    dispatch({type: GET_MESSAGES_START});
    firestore()
      .collection('Messages')
      .doc(path)
      .collection('items')
      .orderBy('createdDate', 'desc')
      .onSnapshot((message) => {
        let data = [];
        message.forEach((doc) => {
          let currentId = doc.id;
        
          let msgObj = {...doc.data(), ['id']: currentId};
          data.push(msgObj);
        });
        dispatch({type: GET_MESSAGES_SUCCESS, payload: data});
      });
  };
};

export const addMessages = (path, params) => {
  return (dispatch) => {
    dispatch({type: ADD_MESSAGES_START});
    firestore()
      .collection('Messages')
      .doc(path)
      .collection('items')
      .add(params)
      .then((data) => {
        console.log('MEssage send!', data);

        dispatch({type: ADD_MESSAGES_SUCCESS});
      })
      .catch(() => {
        dispatch({type: ADD_MESSAGES_FAILD});
        console.log('Message not send!');
      });
  };
};
