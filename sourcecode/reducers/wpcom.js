import Immutable from 'immutable';
import {
  WPCOM_PREPARE_FAIL,
  WPCOM_PREPARE_REQUEST,
  WPCOM_PREPARE_SUCCESS,
} from '../actions/actions';


export default function wpcom(state = Immutable.fromJS({}), action) {
  switch (action.type) {
    case WPCOM_PREPARE_SUCCESS:
      return action.data;
    case WPCOM_PREPARE_REQUEST:
    case WPCOM_PREPARE_FAIL:
    default:
      return state;
  }
}
