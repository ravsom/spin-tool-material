/**
 * Created by rs on 19/04/17.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import LoginComponent from '../Components/common/LoginComponent'
import {login, logout} from '../ActionCreators/loginActionCreator'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({login, logout, dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {}
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default LoginContainer;