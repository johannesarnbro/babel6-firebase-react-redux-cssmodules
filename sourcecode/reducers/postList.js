import Immutable from 'immutable';
import {
  POSTLIST_FETCH_FAIL,
  POSTLIST_FETCH_REQUEST,
  POSTLIST_FETCH_SUCCESS,
} from '../actions/actions';


export default function postList(state = Immutable.fromJS([]), action) {
  switch (action.type) {
    case POSTLIST_FETCH_SUCCESS:
      return action.data;
    case POSTLIST_FETCH_REQUEST:
    case POSTLIST_FETCH_FAIL:
    default:
      return state;
  }
}
