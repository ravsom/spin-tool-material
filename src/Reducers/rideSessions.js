/**
 * Created by rs on 15/01/17.
 */


import {Map, List} from 'immutable';

const sessions = (state = Map(), action) => {
	switch (action.type) {
		case 'REQ_GET_SESSIONS_SUCCESS':
			console.log('get ride sessions success: ' + JSON.stringify(action.result.data));
			const rides = List(action.result.data);
			console.log('rides -> ' + JSON.stringify(rides));
			const sortedRides = rides.sortBy(ride => ride.RideDate);
			console.log('sortedrides -> ' + JSON.stringify(rides));
			return state.set('rides', sortedRides);
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