/**
 * Created by rs on 08/01/17.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addSession, loadInitialAddSessionData} from '../ActionCreators/ridesActionCreator';

import RideAdd from '../Components/one/RideAdd'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch, addSession, loadInitialAddSessionData}, dispatch);
};

const mapStateToProps = (state) => {
	return {
		members: state.members.get("members")
	};
};

const RideAddContainer = connect(mapStateToProps, mapDispatchToProps)(RideAdd);
export default RideAddContainer;