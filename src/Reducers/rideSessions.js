/**
 * Created by rs on 15/01/17.
 */


import {Map} from 'immutable';

const sessions = (state = Map(), action) => {
	switch (action.type) {
		case 'REQ_GET_SESSIONS_SUCCESS':
			return state.set('rides', action.result.data);
		case 'REQ_GET_SESSIONS_FAILURE':
		case 'REQ_GET_SESSIONS':
		default:
			return state;
	}
};

export {sessions};