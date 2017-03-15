/**
 * Created by rs on 15/01/17.
 */


import {Map, List} from 'immutable';

const rides = (state = Map(), action) => {
	switch (action.type) {
		case 'REQ_GET_SESSIONS_SUCCESS':
			const rides = List(action.result.data.body);
			return state.set('rides', rides.sortBy(ride => ride.rideDate));
		case 'REQ_ADD_SESSION_SUCCESS':
			if (!action.result.data.body) return state;
			const rL = state.get('rides').push(action.result.data.body);
			return state.set('rides', rL.sortBy(ride => ride.rideDate));
		case "REQ_ADD_SESSION_FAILURE":
			return state.set('addRideStatus', 'failure');
		case 'REQ_GET_SESSIONS_FAILURE':
		case 'REQ_GET_SESSIONS':
		default:
			return state;
	}
};

export {rides};