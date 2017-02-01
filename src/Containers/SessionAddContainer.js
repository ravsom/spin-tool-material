/**
 * Created by rs on 08/01/17.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addSession, loadInitialAddSessionData} from '../ActionCreators/sessionsActionCreator';

import SessionAdd from '../Components/SessionAdd'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch, addSession, loadInitialAddSessionData}, dispatch);
};

const mapStateToProps = (state) => {
	return {
		riders: state.sessions.get("riders"),
		playlists: state.sessions.get("playlists"),
		rideAddStatus: state.sessions.get("addRideStatus")
	};
};

const SessionAddContainer = connect(mapStateToProps, mapDispatchToProps)(SessionAdd);
export default SessionAddContainer;