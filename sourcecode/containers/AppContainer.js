import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App/App';
import * as AppActions from '../actions/actions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
