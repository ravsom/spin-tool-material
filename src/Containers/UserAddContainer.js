/**
 * Created by rs on 08/01/17.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import UserAdd from '../Components/UsersAdd'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {}
};

const UserAddContainer = connect(mapStateToProps, mapDispatchToProps)(UserAdd);
export default UserAddContainer;