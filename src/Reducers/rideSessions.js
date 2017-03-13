/**
 * Created by rs on 15/01/17.
 */


import {Map, List} from 'immutable';

const rides = (state = Map(), action) => {
	if(typeof state !== Map) {
		state = Map(state);
	}
	switch (action.type) {
		case 'REQ_GET_SESSIONS_SUCCESS':
			const rides = List(action.result.data.body);
			const sortedRides = rides.sortBy(ride => ride.rideDate);
			return state.set('rides', sortedRides);
		case 'REQ_ADD_SESSION_SUCCESS':
			return state.set('addRideStatus', 'success');
		case "REQ_ADD_SESSION_FAILURE":
			return state.set('addRideStatus', 'failure');
		case 'REQ_GET_SESSIONS_FAILURE':
		case 'REQ_GET_SESSIONS':
		default:
			return state;
	}
};

export {rides};