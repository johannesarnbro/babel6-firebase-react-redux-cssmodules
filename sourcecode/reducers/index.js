import { combineReducers } from 'redux';
import postList from './postList';
import wpcom from './wpcom';

const rootReducer = combineReducers({
  postList,
  wpcom,
});

export default rootReducer;
