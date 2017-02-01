/**
 * Created by rs on 15/01/17.
 */


import {Map} from 'immutable';

const sessions = (state = Map(), action) => {
	switch (action.type) {
		case 'REQ_GET_SESSIONS_SUCCESS':
			return state.set('rides', action.result.data);
		case 'REQ_ADD_SESSION_SUCCESS':
			console.log('add session success: ' + JSON.stringify(action.result));
			return state.set('addRideStatus', 'success');
		case "REQ_ADD_SESSION_FAILURE":
			return state.set('addRideStatus', 'failure');
		case 'REQ_GET_SESSIONS_FAILURE':
		case 'REQ_GET_SESSIONS':
		default:
			return state;
	}
};

export {sessions};