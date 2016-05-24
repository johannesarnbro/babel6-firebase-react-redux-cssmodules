import firebase from '../api/firebaseApp.js';
import Immutable from 'immutable';

export const POSTLIST_FETCH_SUCCESS = 'POSTLIST_FETCH_SUCCESS';
export const POSTLIST_FETCH_REQUEST = 'POSTLIST_FETCH_REQUEST';
export const POSTLIST_FETCH_FAIL = 'POSTLIST_FETCH_FAIL';

export function fetchPostListRequest() {
  return {
    type: POSTLIST_FETCH_REQUEST,
  };
}

export function fetchPostListSuccess(data) {
  return {
    type: POSTLIST_FETCH_SUCCESS,
    data,
  };
}

export function fetchPostListFail(error) {
  return {
    type: POSTLIST_FETCH_FAIL,
    error,
  };
}


export function subscribeToPostList() {
  return (dispatch) => {
    dispatch(fetchPostListRequest());
    firebase.database().ref('posts/').on('value', (snapshot) => {
      const data = Immutable.fromJS(snapshot.val());
      dispatch(fetchPostListSuccess(data));
    });
  };
}

export function unsubscribeToPostList() {
  return (dispatch) => {
    dispatch(fetchPostListRequest());
    firebase.database().ref('posts/').off();
  };
}

