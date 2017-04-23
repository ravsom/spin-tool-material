import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import RootUIComponent from '../Components/common/RootUIComponent'
import {login, logout} from '../ActionCreators/loginActionCreator'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({login, logout, dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {}
};
const RootUIContainer = connect(mapStateToProps, mapDispatchToProps)(RootUIComponent);
export default RootUIContainer;