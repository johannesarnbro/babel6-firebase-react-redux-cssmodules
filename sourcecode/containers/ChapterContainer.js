import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chapter from '../components/Chapter/Chapter';
import * as AppActions from '../actions/actions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
